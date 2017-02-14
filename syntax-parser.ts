import {readFileSync, writeFileSync} from 'fs';
import * as glob from 'glob';
import * as ts from 'typescript';


export interface Parameter {
  kind: number;
  name: string;
  initializer?: any;
  children?: Array<Parameter>
}


export function parse(sourceFile: ts.SourceFile): Object|undefined {
  for (let statement of sourceFile.statements) {
    let result = parseNode(statement);
    if (result) {
      return result;
    }
  }
}

export function parseNode(node: ts.Node): Object|undefined {
  switch (node.kind) {
    case ts.SyntaxKind.ClassDeclaration:
      return parseClassMembers(<ts.ClassDeclaration>node);
  }
}


export function parseClassMembers(node: ts.ClassDeclaration): Object {
  for (let member of node.members) {
    let result = {className: node.name.text, parameters: parseClassMember(member)};
    if (result.parameters) {
      return result;
    }
  }
}

export function parseClassMember(node: ts.Node): Object|undefined {
  switch (node.kind) {
    case ts.SyntaxKind.MethodDeclaration:
      return parseMethod(<ts.MethodDeclaration>node);
  }
  return;
}

export function parseMethod(method: ts.MethodDeclaration): Array<Parameter>|undefined {
  let result: Array<Parameter>;
  if ((<ts.Identifier>method.name).text === 'transform') {
    result = parseParameters(method.parameters);
  }
  return result;
}

export function parseParameters(parameters: ts.NodeArray<ts.ParameterDeclaration>):
    Array<Parameter> {
  let result: Array<Parameter> = [];
  parameters.forEach((parameter) => {
    result.push(parseParameter(parameter));
  });
  return result;
}

export function parseParameter(parameter: ts.ParameterDeclaration): Parameter {
  let result: Parameter;
  if (parameter.type) {
    result = parseType(parameter.name, parameter.initializer, parameter.type);
  } else {
    parameter;
  }
  return result;
}

export function parseType(name: ts.BindingName, initializer: any, type: ts.TypeNode): Parameter {
  let result: Parameter = {name: (<ts.Identifier>name).text, kind: undefined};
  if (initializer) {
    result.initializer = initializer.text;
  }
  switch (type.kind) {
    case ts.SyntaxKind.TypeLiteral:
      result.kind = type.kind;
      result.children = parseTypeLiteral(<ts.TypeLiteralNode>type);
      break;
    default:
      result.kind = type.kind;
      break;
  }
  return result;
}

export function parseTypeLiteral(typeLiteral: ts.TypeLiteralNode): Array<Parameter> {
  return parseTypeLiteralMembers(typeLiteral.members);
}

export function parseTypeLiteralMembers(types: ts.NodeArray<ts.TypeElement>): Array<Parameter> {
  let result: Array<Parameter> = [];
  types.forEach((type: any) => {
    type.parameters.forEach((param) => {
      result.push(parseTypeLiteralMember(param));
    });
  });
  return result;
}

export function parseTypeLiteralMember(type: any): Parameter {
  let result: Parameter = {name: undefined, kind: undefined};
  result.name = type.name.text;
  result.kind = type.kind;
  if (type.parameters) {
    result.children = parseParameters(type.parameters);
  }
  return result;
}



// get all ng-pipes *.pipe.ts files
glob('./node_modules/ng-pipes/src/**/*.pipe.ts', {}, (error: Error, filePaths) => {
  let result = {};

  if (error) {
    console.log(error.message);
  } else {
    filePaths.forEach(filePath => {
      console.log(filePath);
      let sourceFile = ts.createSourceFile(
          filePath, readFileSync(filePath).toString(), ts.ScriptTarget.ES5, true);

      let parseResult: any = parse(sourceFile);
      let filePaths = filePath.split('/');

      result[parseResult.className] = parseResult;
      result[parseResult.className].fileName = filePaths[filePaths.length - 1];
      result[parseResult.className].moduleName = filePaths[filePaths.length - 2];
    });
  }

  let json = JSON.stringify(result);
  writeFileSync('syntax.json', json, 'utf8');
});

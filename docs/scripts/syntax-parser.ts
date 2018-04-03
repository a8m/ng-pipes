import {readFileSync, writeFileSync} from 'fs';
import * as glob from 'glob';
import * as ts from 'typescript';
import { SyntaxPipe, SyntaxParameter, SyntaxDocument, SyntaxFunction} from './syntax-types';

export function parse(sourceFile: ts.SourceFile): SyntaxPipe|undefined {
  for (const statement of sourceFile.statements) {
    const result = parseNode(statement);
    if (result) {
      return result;
    }
  }
}

export function parseNode(node: ts.Node): SyntaxPipe|undefined {
  switch (node.kind) {
    case ts.SyntaxKind.ClassDeclaration:
      return parseClassMembers(<ts.ClassDeclaration>node);
  }
}


export function parseClassMembers(node: ts.ClassDeclaration): SyntaxPipe|undefined {
  for (const member of node.members) {
    const transform = parseClassMember(member);
    const result = {className: node.name.text, parameters: transform.parameters, returns: transform.returns};
    if (result.parameters) {
      return result;
    }
  }
}

export function parseClassMember(node: ts.Node): SyntaxFunction {
  switch (node.kind) {
    case ts.SyntaxKind.MethodDeclaration:
      return parseMethod(<ts.MethodDeclaration>node);
  }
  return {parameters: [], returns: 0};
}

export function parseMethod(method: ts.MethodDeclaration): SyntaxFunction {
  const result: SyntaxFunction = { parameters: [] , returns: 0};
  if ((<ts.Identifier>method.name).text === 'transform') {
    result.parameters = parseParameters(method.parameters);
    result.returns = method.type.kind;
  }
  return result;
}

export function parseParameters(parameters: ts.NodeArray<ts.ParameterDeclaration>):
    Array<SyntaxParameter> {
  const result: Array<SyntaxParameter> = [];
  parameters.forEach((parameter) => {
    result.push(parseParameter(parameter));
  });
  return result;
}

export function parseParameter(parameter: ts.ParameterDeclaration): SyntaxParameter {
  let result: SyntaxParameter;
  if (parameter.type) {
    result = parseType(parameter.name, parameter.initializer, parameter.type);
  } else {
    result = undefined;
  }
  return result;
}

export function parseType(name: ts.BindingName, initializer: any, type: ts.TypeNode): SyntaxParameter {
  const result: SyntaxParameter = {name: (<ts.Identifier>name).text, kind: undefined};
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

export function parseTypeLiteral(typeLiteral: ts.TypeLiteralNode): Array<SyntaxParameter> {
  return parseTypeLiteralMembers(typeLiteral.members);
}

export function parseTypeLiteralMembers(types: ts.NodeArray<ts.TypeElement>): Array<SyntaxParameter> {
  const result: Array<SyntaxParameter> = [];
  types.forEach((type: any) => {
    type.parameters.forEach((param) => {
      result.push(parseTypeLiteralMember(param));
    });
  });
  return result;
}

export function parseTypeLiteralMember(type: any): SyntaxParameter {
  const result: SyntaxParameter = {name: undefined, kind: undefined};
  result.name = type.name.text;
  result.kind = type.kind;
  if (type.parameters) {
    result.children = parseParameters(type.parameters);
  }
  return result;
}



// get all ng-pipes *.pipe.ts files
glob('../src/**/*.pipe.ts', {}, (error: Error, filePaths) => {
  const document: SyntaxDocument = { version: '', pipes: {}};

  if (error) {
    console.log(error.message);
  } else {
    const pkg = readFileSync('./node_modules/ng-pipes/package.json');
    try {
      document.version = JSON.parse(pkg.toString()).version;
    } catch {
      document.version = 'undefined';
    }

    filePaths.forEach(filePath => {
      console.log(filePath);
      const sourceFile = ts.createSourceFile(
          filePath, readFileSync(filePath).toString(), ts.ScriptTarget.ES5, true);

      const parseResult: SyntaxPipe = parse(sourceFile);
      const filePathArray = filePath.split('/');

      document.pipes[parseResult.className] = parseResult;
      document.pipes[parseResult.className].fileName = filePathArray[filePathArray.length - 1];
      document.pipes[parseResult.className].moduleName = filePathArray[filePathArray.length - 2];
    });
  }

  const json = JSON.stringify(document);
  writeFileSync('syntax.json', json, 'utf8');
});

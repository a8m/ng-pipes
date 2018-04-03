import {readFileSync, writeFileSync} from 'fs';
import * as glob from 'glob';
import * as ts from 'typescript';
import { JasmineSyntaxDocument, JasmineSyntaxPipe } from './syntax-types';

// filePaths.forEach(filePath => {
//   console.log(filePath);
//   const sourceFile = ts.createSourceFile(
//     filePath, readFileSync(filePath).toString(), ts.ScriptTarget.ES5, true);

//   console.log(filePath);
//   const filePathArray = filePath.split('/');
//   const parseResults: JasmineSyntaxPipe[] = parse(sourceFile);

//   for (const parseResult of parseResults) {
//     if (document.pipes.hasOwnProperty(parseResult.className)) {
//       parseResult.instances = parseResult.instances.concat(document.pipes[parseResult.className].instances);
//     }
//     document.pipes[parseResult.className] = parseResult;
//     document.pipes[parseResult.className].fileName = filePathArray[filePathArray.length - 1];
//     document.pipes[parseResult.className].moduleName = filePathArray[filePathArray.length - 2];
//   }
// });

function parse(sourceFile: ts.SourceFile): JasmineSyntaxPipe[] | undefined {
  const pipes: JasmineSyntaxPipe[] = [];
  for (const statement of sourceFile.statements) {
    const pipe = parseJasminSyntaxPipe(statement);
    if (pipe) {
      pipes.push(pipe);
    }
  }
  return pipes;
}

function parseJasminSyntaxPipe(statement: ts.Statement): JasmineSyntaxPipe {
  const instances = <Array<string>>parseStatement(statement, 'describe');
  if (instances) {
    return {className: parseDescribe(statement), instances: instances};
  }
}

function parseDescribe(node: ts.Statement): string | undefined {
  if (node.kind !== ts.SyntaxKind.ExpressionStatement) {
    return;
  }

  const exp = <ts.ExpressionStatement>node;
  if (!exp.expression || exp.expression.kind !== ts.SyntaxKind.CallExpression) {
    return;
  }

  const callExp = <ts.CallExpression>exp.expression;
  const text = (<ts.Identifier>callExp.expression).text;
  if (text === 'describe' && callExp.arguments[0]) {
    switch (callExp.arguments[0].kind) {
      case ts.SyntaxKind.StringLiteral:
        return (<ts.StringLiteral>callExp.arguments[0]).text;
    }
  }
}

function parseStatement(node: ts.Statement, name: string): Array<string> | ts.CallExpression {
  switch (node.kind) {
    case ts.SyntaxKind.ExpressionStatement:
      return parseExpression(<ts.ExpressionStatement>node, name);
  }
}

function parseExpression(exp: ts.ExpressionStatement, name: string): Array<string> | ts.CallExpression {
  if (exp.expression) {
    switch (exp.expression.kind) {
      case ts.SyntaxKind.CallExpression:
        return parseCallExpression(<ts.CallExpression>exp.expression, name);
    }
  }
}

function parseCallExpression(exp: ts.CallExpression, name: string): Array<string> | ts.CallExpression {
  const text = (<ts.Identifier>exp.expression).text;
  if (exp.expression && text === name && exp.arguments) {
    if (exp.arguments[1]) {
      switch (exp.arguments[1].kind) {
        case ts.SyntaxKind.ArrowFunction:
          return parseArrowFunction(<ts.ArrowFunction>exp.arguments[1]);
      }
    }
  } else {
    return parseExpressions(exp.expression, name);
  }
}

function parseExpressions(identOrExp: ts.Identifier | ts.CallExpression | ts.LeftHandSideExpression, name: string):
  ts.CallExpression {
  if ((<ts.Identifier>identOrExp).text === name) {
    return <ts.CallExpression>(<ts.Identifier>identOrExp).parent;
  }
  if ((<ts.CallExpression>identOrExp).expression) {
    return parseExpressions((<ts.CallExpression>identOrExp).expression, name);
  }
}

function parseArrowFunction(func: ts.ArrowFunction): Array<string> {
  if (func.body) {
    switch (func.body.kind) {
      case ts.SyntaxKind.Block:
        return parseBlock(<ts.Block>func.body);
    }
  }
}

function parseBlock(block: ts.Block): Array<string> {
  let instances = [];
  for (const statement of block.statements) {
    const it = parseStatement(statement, 'it');
    if (it) {
      instances = instances.concat(it);
    } else {
      const expect = parseStatement(statement, 'expect');
      if (expect) {
        instances.push(parseExpect(<ts.CallExpression>expect));
      }
    }
  }

  return instances;
}

function parseExpect(expect: ts.CallExpression) {
  const args = [];
  if (expect.arguments && expect.arguments[0] && expect.arguments[0].kind === ts.SyntaxKind.CallExpression) {
    const callExp = <ts.CallExpression>expect.arguments[0];
    for (const argument of callExp.arguments) {
      // const text = argument.getText();
      // try {
      //   args.push(JSON.parse(text));
      // } catch {
      args.push(argument.getText());
      // }
    }
  }
  return args;
}



// get all ng-pipes *.pipe.spec.ts files
glob('../test/**/*.pipe.spec.ts', {}, (error: Error, filePaths) => {

  if (error) {
    console.log(error.message);
  } else {
    // const program = ts.createProgram(filePaths, {});
    // const checker = program.getTypeChecker();

    const document: JasmineSyntaxDocument = { version: '', pipes: {} };

    const pkg = readFileSync('../package.json');
    try {
      document.version = JSON.parse(pkg.toString()).version;
    } catch {
      document.version = 'undefined';
    }

    filePaths.forEach(filePath => {
      console.log(filePath);
      const sourceFile = ts.createSourceFile(
        filePath, readFileSync(filePath).toString(), ts.ScriptTarget.ES5, true);

      // for (const sourceFile of program.getSourceFiles()) {
      //   if (!sourceFile.isDeclarationFile && sourceFile.fileName.indexOf('.pipe.spec.ts') >= 0) {
      console.log(sourceFile.fileName);
      const filePathArray = sourceFile.fileName.split('/');

      const parseResults: JasmineSyntaxPipe[] = parse(sourceFile);

      for (const parseResult of parseResults) {
        if (document.pipes.hasOwnProperty(parseResult.className)) {
          parseResult.instances = parseResult.instances.concat(document.pipes[parseResult.className].instances);
        }
        document.pipes[parseResult.className] = parseResult;
        document.pipes[parseResult.className].fileName = filePathArray[filePathArray.length - 1];
        document.pipes[parseResult.className].moduleName = filePathArray[filePathArray.length - 2];
      }
    //   }
    // }
    });

    const json = JSON.stringify(document);
    writeFileSync('jasmine-syntax.json', json, 'utf8');
  }
});

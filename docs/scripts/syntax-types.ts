import {SyntaxKind} from 'typescript';

export interface SyntaxParameter {
  kind: SyntaxKind;
  name: string;
  initializer?: any;
  children?: Array<SyntaxParameter>;
}

export interface SyntaxPipe {
  className: string;
  parameters: SyntaxParameter[];
  fileName?: string;
  moduleName?: string;
  returns: SyntaxKind;
}

export interface SyntaxFunction {
  parameters: Array<SyntaxParameter>;
  returns: SyntaxKind;
}

export interface SyntaxPipes {
  [className: string]: SyntaxPipe;
}

export interface SyntaxDocument {
  version: string;
  pipes: SyntaxPipes;
}


export interface JasmineSyntaxPipe {
  className: string;
  instances: string[];
  fileName?: string;
  moduleName?: string;
}

export interface JasmineSyntaxPipes {
  [className: string]: JasmineSyntaxPipe;
}

export interface JasmineSyntaxDocument {
  version: string;
  pipes: JasmineSyntaxPipes;
}

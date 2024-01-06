import * as React from 'react';

interface IIf<T> {
  children?: React.ReactNode;
  elseNode?: React.ReactNode;
  test: T;
}

export const If = <T,>({ children, elseNode, test }: IIf<T>) => {
  return React.isValidElement(children) && test
    ? (children as React.ReactElement)
    : React.isValidElement(elseNode)
    ? (elseNode as React.ReactElement)
    : null;
};

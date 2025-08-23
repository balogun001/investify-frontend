import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function Title({ className, ...rest }: TitleProps) {
  return (
    <h2 className={classNames(className, 'text-3xl font-bold')} {...rest} />
  );
}

export function BodyText({ className, ...rest }: TitleProps) {
  return (
    <p className={classNames(className, 'text-base font-normal')} {...rest} />
  );
}

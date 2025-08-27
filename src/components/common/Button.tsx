/* eslint-disable react/button-has-type */

'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import Link, { LinkProps } from 'next/link';

const buttonStyle = cva(
  'rounded-full gap-2 flex justify-center items-center w-max transition-all duration-150  text-sm  disabled:opacity-70',
  {
    defaultVariants: {
      block: false,
      kinds: 'primary',
      rounded: false,
      size: 'md',
    },
    variants: {
      block: { true: '!w-full' },
      kinds: {
        normal: 'bg-white text-black hover:opacity-70',
        primary: 'bg-green-300 text-black hover:bg-opacity-80 shadow-sm',
        secondary: 'bg-gray-700 text-green-300 hover:opacity-70',
      },
      rounded: {
        true: '!rounded-full',
      },
      size: {
        lg: 'px-12 py-4',
        md: 'px-8 py-2',
        sm: 'px-4 py-2',
      },
    },
  }
);

type Props = VariantProps<typeof buttonStyle> & {
  isLoading?: boolean;
  className?: string;
  children: ReactNode;
  ref?: any;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Props & {
    href?: never;
  };

type ButtonLinkProps = LinkProps &
  Props & {
    href: string;
    download?: boolean;
  };

export function Button(props: ButtonProps): JSX.Element;
export function Button(props: ButtonLinkProps): JSX.Element;
export function Button({
  href,
  className,
  children,
  size,
  kinds,
  block,
  isLoading,
  rounded,
  ref,
  ...props
}: ButtonProps | ButtonLinkProps) {
  const inner = children;

  const style = classNames(
    buttonStyle({ block, kinds, rounded, size }),
    className
  );
  if (href) {
    return (
      <Link passHref {...(props as LinkProps)} className={style} href={href}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      className={style}
      ref={ref}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {isLoading ? (
        <div className="h-4 w-4 animate-spin my-1 rounded-full border-2 border-t-white" />
      ) : (
        children
      )}
    </button>
  );
}

import classNames from 'classnames';
import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <div className={classNames('w-full rounded-2xl p-4', className)}>
      {children}
    </div>
  );
}

export default Card;

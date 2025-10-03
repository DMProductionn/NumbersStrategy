import { PropsWithChildren } from 'react';

export const Container: React.FC<PropsWithChildren<{className?: string}>> = ({ children, className }) => {
  return <div className={`max-w-[1240px] w-full mx-auto px-[40px] max-sm:px-[15px] ${className}`}>{children}</div>;
};

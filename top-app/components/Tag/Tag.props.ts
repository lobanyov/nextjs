import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 'S' | 'M';
  color: 'gray' | 'green' | 'ghost' | 'red' | 'primary';
  href?: string;
}
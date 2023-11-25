import { FC, MouseEventHandler, ReactNode } from 'react'
import cn from 'classnames'
import styles from './index.module.css'

export type ButtonProps = {
  tag: 'button' | 'a';
  children: ReactNode;
  className?: string;
  type?: HTMLButtonElement['type'];
  href?: string;
  target?: HTMLAnchorElement['target'];
  rel?: HTMLAnchorElement['rel'];
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ className, tag, type, href, target, rel, children, onClick }) => {
  if (tag === 'a') {
    return <a className={cn(styles.button, className)}  href={href} target={target} rel={rel} onClick={onClick}>{children}</a>
  }

  return <button className={cn(styles.button, className)} type={type} onClick={onClick}>{children}</button>
}

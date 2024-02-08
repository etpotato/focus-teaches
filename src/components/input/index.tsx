import { FC, InputHTMLAttributes, Ref, forwardRef } from "react"
import cn from 'classnames'
import styles from './index.module.css'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}

const InputComponent = ({ label, className, ...props}: InputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <label className={styles.wrap}>
      <span className={styles.label}>
        {label}
        {props.required ? (
          <span className={styles.asterisk}>*</span>
        ) : null}
      </span>
      <input className={cn(styles.input, className)} ref={ref} {...props} />
    </label>
  )
}

export const Input = forwardRef(InputComponent)

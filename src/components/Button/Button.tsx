import { ButtonHTMLAttributes } from 'react';
import * as classes from './Button.module.scss';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button data-testid="test-button-id" className={classes.button} {...props} />
);

export default Button;

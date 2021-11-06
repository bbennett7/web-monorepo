import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
}) => {
  return (
    <button type="button" disabled={disabled}>{label}</button>
  )
};

export default Button;
import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;

}

const Textarea: React.FC<ITextareaProps> = ({label, name, ...rest}) => {
  return (
    <div className="text-area-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
}

export default Textarea;
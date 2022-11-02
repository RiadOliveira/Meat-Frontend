import { Container } from './styles';
import { HTMLAttributes, useState } from 'react';

// const [text, setText] = useState('');

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  type?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, type }) => {
  return (
    <Container>
      <input
        type={type}
        // value={text}
        // onChange={({ target: { value } }) => setText(value)}
      />
      <label>{label}</label>
    </Container>
  );
};

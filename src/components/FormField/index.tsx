import { Container } from './styles';
import { HTMLAttributes, useState } from 'react';

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  type?: string;
  // textAlreadyExists?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, type }) => {
  const [text, setText] = useState('');

  return (
    <Container labelOnTop={type === 'date' || text.length > 0}>
      <input
        type={type}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
      <label>{label}</label>
    </Container>
  );
};

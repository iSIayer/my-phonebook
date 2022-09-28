import { Label, InputIn, InputContainer } from './Input.styled';

const Input = ({
  title,
  type,
  name,
  value,
  placeholder,
  pattern,
  onChange,
}) => {
  return (
    <InputContainer>
      <Label>{title}</Label>
      <InputIn
        type={type}
        name={name}
        key={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
    </InputContainer>
  );
};

export default Input;

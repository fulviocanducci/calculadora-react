import { InputContainer } from "./styles";

const Input = ({ value }: { value?: string | undefined }) => {
  return (
    <InputContainer>
      <input value={value} readOnly />
    </InputContainer>
  );
};
export default Input;

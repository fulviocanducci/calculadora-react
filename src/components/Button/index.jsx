import { ButtonContainer } from "./styles";

import { IButton } from "./@types";

const Button = ({ label, onClick }: IButton) => {
  return (
    <ButtonContainer type="button" onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};

export default Button;

import styled from 'styled-components';

const Btn = styled.button`
  max-width: 150px;
  min-width: 150px;
  font-size: 16px;
  padding: 7px 10px;
  cursor: pointer;
`;
const Button = (props) => {
  return <Btn>{props.btnText}</Btn>;
};

export default Button;

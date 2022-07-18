import styled from 'styled-components';

const Title = styled.h1`
  font-size: 24px;
  width: 100%;
  text-align: center;
  padding-top: 20px;
`;

const PageTitle = (props) => {
  return <Title>{props.title}</Title>;
};

export default PageTitle;

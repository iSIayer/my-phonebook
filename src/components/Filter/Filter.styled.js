import styled from 'styled-components';
import Container from 'components/Container';

export const SearchContainer = styled(Container)`
  margin: 20px 0;
  padding: 10px 0;
  border-radius: 7px;
  width: 450px;
  color: #000;
  background-color: rgba(244, 244, 246, 0.4);
  box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.39);
  @media screen and (max-width: 479px) {
    max-width: 300px;
  }
`;

export const SearchTitle = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  text-align: center;
  margin-top: 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  opacity: 0.4;
`;

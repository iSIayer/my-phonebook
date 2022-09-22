import styled from 'styled-components';

export const Input = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
  padding-left: 20px;
  font-family: inherit;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: inset 0.3rem 0.2rem 0.5rem;
  background: none;
  color: ${props => props.theme.colors.accent};
  ::placeholder {
    color: ${props => props.theme.colors.green};
  }

  :focus {
    outline: none;
    box-shadow: 0.3rem 0.3rem 0.6rem,
      -0.2rem -0.2rem 0.5rem ${props => props.theme.colors.white};
  }
`;

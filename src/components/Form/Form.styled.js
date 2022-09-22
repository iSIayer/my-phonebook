import styled from 'styled-components';
import { Form, Field } from 'formik';
import { RiContactsBookFill } from 'react-icons/ri';

export const ContactForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContactLabel = styled.label`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 16rem;
  margin-bottom: 25px;
  color: ${props => props.theme.colors.green};
`;

export const ContactField = styled(Field)`
  min-width: 300px;
  padding-left: 20px;
  height: 40px;
  font-family: inherit;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7;
  background: none;
  :focus {
    outline: none;
    box-shadow: 0.3rem 0.3rem 0.6rem ${props => props.theme.colors.shade},
      -0.2rem -0.2rem 0.5rem ${props => props.theme.colors.blue};
  }
`;

export const ErrorText = styled.p`
  font-weight: ${props => props.theme.fontWeight.light};
  font-size: 13px;
  color: red;
`;

export const Button = styled.button`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  border: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.green};
  cursor: pointer;
  transition: all 0.7s ease;
  color: ${props => props.theme.colors.shade};

  &:hover {
    background-color: ${props => props.theme.colors.blue};
    color: inherit;
  }
  &:active {
    box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb,
      inset -0.2rem -0.2rem 1rem #8abdff;
  }
`;

export const ButtonIcon = styled(RiContactsBookFill)`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

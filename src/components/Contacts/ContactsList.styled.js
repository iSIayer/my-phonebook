import styled from 'styled-components';
import { MdDeleteSweep } from 'react-icons/md';

export const ContactsListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.primary};
  font-size: 15px;
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const ContactsListButton = styled.button`
  padding: 4px;
  border: none;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: red;
  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.blue};
  }
  &:active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7;
  }
`;

export const ContactsListIcon = styled(MdDeleteSweep)`
  margin-right: 7px;
  width: 20px;
  height: 20px;
`;

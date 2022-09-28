import styled from 'styled-components';

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;
  font-size: 20px;
`;

export const AttentionText = styled.span`
  color: red;
  display: inline-block;
  margin-top: 10px;
  font-size: 22px;
`;

export const ContactListButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  padding: 5px 7px;
  background-color: transparent;
  color: red;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;

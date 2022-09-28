import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextTyped = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 40px;
  text-align: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  color: #000;
  background-color: #fefedf;
  border-color: #fefedf;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    color: #fff;
    background-color: rgb(65, 94, 94);
    border-color: #565e64;
  }
  &:focus {
    color: #fff;
    background-color: rgb(65, 94, 94);
    border-color: #565e64;
    box-shadow: 0 0 0 0.25rem rgb(130 138 145 / 50%);
  }
  &:active {
    color: #fff;
    background-color: rgb(65, 94, 94);
    border-color: #51585e;
  }
`;

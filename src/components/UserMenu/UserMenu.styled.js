import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 991px) {
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const AvatarImg = styled.img`
  margin-right: 6px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-weight: 700;
  color: #fff;
  margin-right: 12px;
`;

export const BtnLogOut = styled.button`
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

  &:hover {
    background-color: #212529;
    color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
  }
`;

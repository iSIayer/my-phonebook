import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selector';
import {
  UserContainer,
  AvatarImg,
  UserName,
  BtnLogOut,
} from './UserMenu.styled';
import defaultAvatar from 'components/img/avatar.png';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <UserContainer>
      <AvatarImg width="32" src={defaultAvatar} alt="" />
      <UserName style={{ color: 'rgb(186, 186, 183)' }}>{userName}</UserName>
      <BtnLogOut
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
      >
        Вийти
      </BtnLogOut>
    </UserContainer>
  );
};

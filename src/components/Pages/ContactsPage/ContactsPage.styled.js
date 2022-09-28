import styled from 'styled-components';
import contactBg from 'components/img/contactBackground.jpg';

export const MainContainer = styled.div`
  background: linear-gradient(
      335deg,
      rgba(9, 5, 47, 0.2) 0%,
      rgba(49, 29, 94, 0.2) 100%
    ),
    url(${contactBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  overflow-y: scroll;
  max-height: calc(100vh - 56px - 62px);
`;

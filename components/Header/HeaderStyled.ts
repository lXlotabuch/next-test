import styled from 'styled-components';

export const HeaderStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid grey;
  & a {
    color: grey;
    text-decoration: none;
  }
`;

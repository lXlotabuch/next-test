import styled from 'styled-components';

export const PostLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  margin-bottom: 20px;
  padding: 15px;
  width: 100%;
  box-shadow: 0px 14px 13px 5px rgba(34, 60, 80, 0.2);
  transition: box-shadow 0.3s linear;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 14px 13px 13px rgba(34, 60, 80, 0.2);
  }
`;

export const PostStyled = styled.div`
  width: 100%;
  position: relative;
`;

export const Title = styled.p`
  color: black;
  font-size: 22px;
  margin: 5px 0;
`;

export const Content = styled.p`
  color: grey;
  font-size: 15px;
  text-align: center;
`;

export const BtnPlace = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`;

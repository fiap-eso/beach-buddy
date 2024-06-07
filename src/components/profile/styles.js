import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  padding: 0.8rem;

  border-radius: 16px;
  border: 1px solid #cdcdcd;

  cursor: pointer;

  position: relative;
`;

export const MenuIcon = styled.img``;

export const ProfileIcon = styled.img``;

export const ActiveMenu = styled.div`
  position: absolute;
  top: 3.2rem;
  right: 0;

  display: flex;
  flex-direction: column;

  background: #fbf9ff;

  border-radius: 8px;
  border: 1px solid #cdcdcd;
`;

export const ActiveMenuItem = styled.span`
  padding: 1.2rem 3.2rem;

  color: #111;
  font-size: 1.2rem;
  font-weight: 400;

  text-align: center;

  &:first-child {
    border-bottom: 1px solid #cdcdcd;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem 5.6rem;
`;

export const Logo = styled.img``;

export const Nav = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const Link = styled.span`
  color: #111;
  font-size: 1.2rem;
  font-weight: ${({ active }) => (active ? '600' : '400')};

  cursor: pointer;
`;

export const Side = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Text = styled.span`
  color: #111;
  font-size: 0.8rem;
  font-weight: 400;
`;

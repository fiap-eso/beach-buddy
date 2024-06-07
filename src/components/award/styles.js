import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const Image = styled.img`
  width: 100%;

  border-radius: 8px;
  object-fit: cover;
`;

export const Text = styled.span`
  color: #111;
  font-size: 2.4rem;
  font-weight: 400;
  text-align: center;
`;

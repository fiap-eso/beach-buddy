import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Image = styled.img`
  width: 5.6rem;

  border-radius: 50%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const Name = styled.span`
  color: #111;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const City = styled.span`
  color: #111;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Text = styled.span`
  color: #111;
  font-size: 1.6rem;
  font-weight: 400;
`;

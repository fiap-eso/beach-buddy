import styled from 'styled-components';

export const Logo = styled.img`
  width: 17.2rem;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const Title = styled.span`
  width: 60%;

  color: #111;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

export const Text = styled.span`
  color: #111;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
`;

export const Link = styled.span`
  color: #388893;
  font-size: 0.8rem;
  font-weight: 400;
  text-decoration-line: underline;
  text-align: center;
`;

export const Button = styled.button`
  height: 3.2rem;

  border-radius: 8px;
  border: 1px solid #2b747d;
  background: #388893;

  color: #fbf9ff;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  position: absolute;
  bottom: 2.4rem;
`;

export const Step = styled.div`
  width: 6rem;
  height: 0.8rem;

  background-color: ${({ active }) => (active ? '#388893' : '#818485')};
  border-radius: 4px;
`;

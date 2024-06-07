import styled from 'styled-components';

export const Logo = styled.img`
  width: 17.2rem;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Title = styled.span`
  color: #111;
  font-size: 2rem;
  font-weight: 600;
`;

export const Text = styled.span`
  color: #111;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const Form = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.label`
  color: #111;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const Input = styled.input`
  height: 3.2rem;

  border-radius: 8px;
  border: 1px solid #818485;
  background: #fbf9ff;

  padding: 0.8rem 1.2rem;
  color: #585f62;
  font-size: 12px;
  font-weight: 400;
`;

export const Link = styled.span`
  color: #388893;
  font-size: 0.8rem;
  font-weight: 400;
  text-decoration-line: underline;
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

export const BottomText = styled.span`
  width: 100%;

  color: #111;
  font-size: 0.8rem;
  font-weight: 400;
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

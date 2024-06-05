import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Aside = styled.div`
  padding: 0 6.4rem;
  height: 100vh;
  min-width: 48rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;

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

export const Divider = styled.div`
  width: 100%;

  color: #818485;
  font-size: 0.8rem;
  font-weight: 400;

  position: relative;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  &::before,
  &::after {
    content: '';

    width: 100%;
    height: 1px;

    opacity: 0.35;
    background: #cdcdcd;
  }
`;

export const SocialIcon = styled.img``;

export const SocialButton = styled.button`
  height: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  border-radius: 8px;
  border: 1px solid #cdcdcd;
  background: #fbf9ff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  color: #111;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const BottomText = styled.span`
  width: 100%;

  color: #111;
  font-size: 0.8rem;
  font-weight: 400;
`;

export const Image = styled.img`
  width: 100%;
  max-height: calc(100vh - (2 * 2.4rem));

  margin: 2.4rem 0;

  border-radius: 1.6rem 0px 0px 1.6rem;
  object-fit: cover;
`;

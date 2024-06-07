import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 40rem;

  padding: 3.2rem;
  background-size: cover;
  background-position: center;

  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Title = styled.span`
  color: #fbf9ff;
  font-size: 4.8rem;
  font-weight: 700;
`;

export const Text = styled.span`
  color: #fbf9ff;
  font-size: 3.2rem;
  font-weight: 700;
`;

export const Date = styled.span`
  color: #fbf9ff;
  font-size: 4rem;
  font-weight: 700;
`;

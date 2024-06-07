import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  padding: 0.4rem 6.4rem 0.4rem 2.4rem;

  border-right: 1px solid #cdcdcd;
  border-left: 1px solid #cdcdcd;
`;

export const Title = styled.span`
  color: #111;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Rate = styled.span`
  color: #111;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const Image = styled.img`
  height: 4rem;
  margin-top: 1.6rem;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Image = styled.div`
  width: 28rem;
  height: 26rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  padding: 0.8rem;
  background-size: cover;
  border-radius: 8px;

  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Headline = styled.span`
  color: #111;
  font-size: 0.8rem;
  font-weight: 400;

  border-radius: 8px;
  background: #fbf9ff;
  padding: 0.4rem 1.2rem;
`;

export const FavIcon = styled.img`
  width: 2rem;

  border-radius: 8px;
  background: #fbf9ff;
  padding: 0.4rem 0.4rem;
`;

export const CircleList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const Circle = styled.div`
  width: 0.8rem;
  height: 0.8rem;

  border-radius: 50%;
  background: ${({ active }) => (active ? '#fbf9ff' : '#CDCDCD')};

  cursor: pointer;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: #111;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const Location = styled.span`
  color: #111;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const Subtitle = styled.span`
  color: #111;
  font-size: 1rem;
  font-weight: 700;
`;

export const Rating = styled.span`
  color: #111;
  font-size: 1.6rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const Star = styled.img``;

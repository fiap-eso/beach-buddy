import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4rem 5.6rem;

  display: flex;
  flex-direction: column;
  gap: 5.6rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const Title = styled.span`
  color: #111;
  font-size: 3.2rem;
  font-weight: 700;
`;

export const HeadLink = styled.span`
  color: #111;
  font-size: 1.6rem;
  font-weight: 400;
  text-decoration-line: underline;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  cursor: pointer;
`;

export const HeadLinkIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Date = styled.span`
  color: #388893;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 9.6rem;
  font-weight: 700;
  text-align: center;
`;

export const AwardsList = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`;

export const ImageList = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const DescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const Description = styled.span`
  max-width: 64rem;

  color: #111;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
`;

export const DescriptionTitle = styled.span`
  max-width: 64rem;

  color: #388893;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
`;

export const Link = styled.span`
  color: #111;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  text-decoration: underline;

  cursor: pointer;
`;

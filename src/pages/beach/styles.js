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

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.6rem;

  z-index: 2;
`;

export const BigImage = styled.img`
  width: 100%;

  grid-column: 1 / 3;
  grid-row: 1 / 3;
  aspect-ratio: 1 / 1;

  border-radius: 8px;
`;

export const SmallImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;

  border-radius: 8px;
`;

export const MediumImage = styled.img`
  width: 100%;

  grid-column: 3 / 5;
  grid-row: 3 / 4;

  border-radius: 8px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  grid-column: 1 / 3;
  grid-row: 3 / 4;
`;

export const Description = styled.span`
  max-width: 64rem;

  color: #111;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
`;

export const DescriptionTitle = styled.span`
  max-width: 64rem;

  color: #388893;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr 8rem;
  grid-template-rows: 1fr 8rem;

  margin-top: -8.8rem;
  z-index: 1;
`;

export const LeftLine = styled.div`
  width: 100%;
  height: 100%;

  opacity: 0.4;
  background: linear-gradient(180deg, rgba(81, 173, 186, 0) 0%, #388893 20%);

  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

export const RightLine = styled.div`
  opacity: 0.4;
  background: linear-gradient(180deg, #388893 80%, rgba(81, 173, 186, 0) 100%);

  grid-column: 3 / 4;
  grid-row: 1 / 2;
`;

export const BottomLine = styled.div`
  opacity: 0.4;
  background: linear-gradient(90deg, #388893 65%, rgba(81, 173, 186, 0) 90%);

  grid-column: 1 / 4;
  grid-row: 2 / 3;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.6rem;

  padding: 8rem;

  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

export const Star1 = styled.img``;

export const Star2 = styled.img``;

export const Rating = styled.span`
  color: #388893;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 9.6rem;
  font-weight: 700;
`;

export const RatingDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

export const RatingTitle = styled.span`
  max-width: 32rem;

  color: #111;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
`;

export const RatingDescription = styled.span`
  max-width: 32rem;

  color: #111;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;

export const RatingList = styled.div`
  display: flex;

  border-right: 1px solid #cdcdcd;
  border-left: 1px solid #cdcdcd;
`;

export const CommentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8rem;
`;

export const PartnersWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const PartnersTitle = styled.span`
  color: #388893;
  text-align: center;
  font-size: 4.8rem;
  font-weight: 700;
`;

export const PartnersList = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5.6rem;
`;

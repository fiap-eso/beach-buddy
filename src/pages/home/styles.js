import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
`;

export const BeachList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

export const PitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6.4rem;

  background-color: #388893;

  padding: 6.4rem 0;
`;

export const PitchText = styled.span`
  color: #fbf9ff;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const PitchIcon = styled.img`
  cursor: pointer;
`;

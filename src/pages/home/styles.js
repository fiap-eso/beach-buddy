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

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchInputWrapper = styled.div`
  width: 40vw;
  position: relative;

  padding: 1.2rem 2.4rem;

  border-radius: 24px;
  border: 1px solid #cdcdcd;
  background: #fbf9ff;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  cursor: text;
`;

export const Label = styled.span`
  color: #111;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const Input = styled.input`
  border: none;

  background: #fbf9ff;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 3.2rem;
  height: 3.2rem;

  border-radius: 50%;

  position: absolute;
  right: 0.8rem;
  top: calc(50% - 1.6rem);
  background-color: #388893;

  border: none;
`;

export const Icon = styled.img``;

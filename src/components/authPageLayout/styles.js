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

export const Image = styled.img`
  width: 100%;
  max-height: calc(100vh - (2 * 2.4rem));

  margin: 2.4rem 0;

  border-radius: 1.6rem 0px 0px 1.6rem;
  object-fit: cover;
`;

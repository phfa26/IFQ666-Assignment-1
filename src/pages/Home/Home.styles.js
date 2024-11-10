import styled from 'styled-components';

const heroPadding = '1em';

export const StyledHero = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryContainer};
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${heroPadding};
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const StyledProfileImage = styled.img`
  height: 100%;
  max-width: calc(100% - ${heroPadding});
  border-radius: 10px;
  object-fit: cover;
`;

export const StyledTitleWrapper = styled.div`
  margin: 3em 0;
`;

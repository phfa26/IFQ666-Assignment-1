import { Box, Card, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledGridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 1.5rem;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledRepoTitle = styled(Typography)`
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`;
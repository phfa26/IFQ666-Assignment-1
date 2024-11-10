import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledHobbyImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin: 1em;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const StyledTextSection = styled(Box)`
  padding: 1em;
  max-width: 500px;  /* Constrain text width for readability */
`;
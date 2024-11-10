import { Card, CardContent, ListItemText, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.onBackground};
`;

export const StyledCardContent = styled(CardContent)`
  padding: 1.5rem;
`;

export const HeaderTypography = styled(Typography)`
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const SubheaderTypography = styled(Typography)`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ContactTypography = styled(Typography)`
  color: ${(props) => props.theme.colors.onSurface};
  margin-bottom: 1.5rem;
`;

export const SummaryParagraph = styled(Typography)`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.onBackground};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${(props) => props.theme.colors.secondaryContainer};
  margin: 1.5rem 0;
`;

export const SectionCard = styled(Card)`
  margin-bottom: 2rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.onSurface};
`;

export const SectionTitle = styled(Typography)`
  font-weight: 600;
  color: ${(props) => props.theme.colors.onPrimaryContainer};
  margin-bottom: 1rem;
`;

export const SectionListItemText = styled(ListItemText)`
  & .MuiListItemText-primary {
    font-weight: 500;
    color: ${(props) => props.theme.colors.onBackground};
  }
  & .MuiListItemText-secondary {
    color: ${(props) => props.theme.colors.onSurface};
  }
`;

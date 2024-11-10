import { Box, Button, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';
import { MobileBreakPointInPx } from '../../styles/shared';

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled(Typography)`
  font-family: 'monospace';
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: inherit;
  text-decoration: none;
  display: none;

  @media (min-width: ${MobileBreakPointInPx}px) {
    display: flex;
  }
`;

export const StyledMobileMenuIcon = styled(IconButton)`
  display: flex;
  color: white !important;

  @media (min-width: ${MobileBreakPointInPx}px) {
    display: none;
  }
`;

export const StyledButton = styled(Button)`
  color: white !important;
`;

export const StyledMenu = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${MobileBreakPointInPx}px) {
    display: none;
  }
`;

export const StyledNavBox = styled(Box)`
  flex-grow: 1;
  display: none;

  @media (min-width: ${MobileBreakPointInPx}px) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledIconButton = styled(IconButton)`
  color: white !important;
`;

export const StyledMenuItemTypography = styled(Typography)`
  text-align: center;
`;

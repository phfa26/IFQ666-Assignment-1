import MenuIcon from '@mui/icons-material/Menu';
import NightsStay from '@mui/icons-material/NightsStay';
import WbSunny from '@mui/icons-material/WbSunny';
import { AppBar, Box, MenuItem, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledButton,
  StyledIconButton,
  StyledMenu,
  StyledMenuItemTypography,
  StyledMobileMenuIcon,
  StyledNavBox,
  StyledTitle,
  StyledToolbar
} from './Navbar.styles';

const pages = ['Home', 'About', 'Resume', 'Portfolio'];

const Navbar = ({ isDarkMode, handleThemeChange }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="static">
      <StyledToolbar>
        {/* Left: Title (visible on larger screens) */}
        <Tooltip title="Go home">
          <StyledTitle variant="h6" component={Link} to={`/`}>
            Paulo's Portfolio
          </StyledTitle>
        </Tooltip>

        {/* Center: Page Navigation (visible on larger screens) */}
        <StyledNavBox>
          {pages.map((page) => (
            <StyledButton key={page} component={Link} to={`/${page.toLowerCase()}`}>
              {page}
            </StyledButton>
          ))}
        </StyledNavBox>

        {/* Mobile Menu Icon (visible on smaller screens) */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <StyledMobileMenuIcon onClick={handleOpenNavMenu} aria-label="menu">
            <MenuIcon />
          </StyledMobileMenuIcon>
          <StyledMenu
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <StyledMenuItemTypography component={Link} to={`/${page.toLowerCase()}`} color="inherit">
                  {page}
                </StyledMenuItemTypography>
              </MenuItem>
            ))}
          </StyledMenu>
        </Box>

        {/* Right: Theme Toggle */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Toggle theme">
            <StyledIconButton onClick={handleThemeChange}>
              {isDarkMode ? <NightsStay /> : <WbSunny />}
            </StyledIconButton>
          </Tooltip>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;

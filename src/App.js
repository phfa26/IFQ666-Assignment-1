import { Box, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';
import { muiDarkTheme, muiLightTheme } from './styles/themes/mui';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const muiTheme = isDarkMode ? muiDarkTheme : muiLightTheme;

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Router>
          {/* Navbar and main content will stack naturally */}
          <Box>
            <Navbar isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
            <Box component="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
};


export default App;
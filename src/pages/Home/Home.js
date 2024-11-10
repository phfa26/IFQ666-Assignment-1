import { Box, Typography } from '@mui/material';
import React from 'react';
import profileImage from '../../assets/profile-image.png';
import Page from '../../components/Page/Page';
import { StyledHero, StyledProfileImage, StyledTitleWrapper } from './Home.styles';

const Home = () => {
  return (
    <Page title='Home' pagename='home'>
      <StyledHero>
        <StyledProfileImage src={profileImage} alt="Profile" />
      </StyledHero>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <StyledTitleWrapper>
          <Typography variant="h2" gutterBottom>
            Welcome to My Portfolio
          </Typography>
        </StyledTitleWrapper>
        <Typography variant="body1" paragraph>
          Hello, my name is Paulo Amaral, and this is my portfolio site for the IFQ666 Web and Mobile App Development course. This is Assignment 1: Web programming assignment.
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </Typography>
        <Typography variant="body1" paragraph>
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Typography>
      </Box>
    </Page>
  );
}

export default Home;

import { Box, Typography } from '@mui/material';
import React from 'react';
import profileImage from '../../assets/profile-image.png';
import Page from '../../components/Page/Page';
import { StyledHero, StyledProfileImage, StyledTitleWrapper } from './Home.styles';

const Home = () => {

  const Paragraph = ({ children }) => (
  <Typography variant="body1" sx={{ marginBottom: 2 }}>
    {children}
  </Typography>
  );
  
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
        <Paragraph>
          Hello, my name is Paulo Amaral, and welcome to my portfolio site created for the IFQ666 Web and Mobile App Development course. This project, Assignment 1: Web Programming, showcases my skills in web development, mobile app design, and my journey through this course as I build practical, real-world applications.
        </Paragraph>
        
        <Paragraph>
          I’m a passionate software developer with a strong focus on creating seamless, user-centered digital experiences. I enjoy working with modern web technologies, including React, JavaScript, and responsive design techniques that ensure every interface feels intuitive and polished, regardless of the platform.
        </Paragraph>
        
        <Paragraph>
          Through my work, I aim to bring together creativity and technical skill, building applications that not only solve problems but also deliver value and enhance the user experience. I’m continuously driven to learn, innovate, and refine my craft, making each project an opportunity for growth and new insights.
        </Paragraph>
        
        <Paragraph>
          Thank you for visiting, and I hope this portfolio provides a clear view of my skills, dedication, and the projects I’ve brought to life.
        </Paragraph>
      </Box>
    </Page>
  );
}

export default Home;

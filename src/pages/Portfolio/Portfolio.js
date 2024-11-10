import { Box, Button, CardActions, CardContent, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Page from '../../components/Page/Page';
import { StyledCard, StyledGridContainer, StyledRepoTitle } from './Portfolio.styles';

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  fetch('https://api.github.com/users/phfa26/repos')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setRepos(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching repos:', error);
      setError('Failed to load repositories');
      setLoading(false);
    });
}, []);


  if (loading) {
    return (
      <Page title="Loading my Repos" showTitle={true} pageName="portfolio">
        <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
          <CircularProgress />
        </Box>
      </Page>
    );
  }

  if (error) {
    return (
      <Page title="Oops..." showTitle={true} pageName="portfolio">
        <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
          <Typography color="error">{'Something went wrong... :('}</Typography>
        </Box>
      </Page>
    );
  }

  return (
    <Page title="Check out my repos" showTitle={true} pageName="portfolio">
      <StyledGridContainer>
        {repos && repos.map((repo) => (
          <StyledCard key={repo.id}>
            <CardContent>
              <StyledRepoTitle variant="h6">{repo.name}</StyledRepoTitle>
              <Typography variant="body2" color="textSecondary">
                {repo.description || 'No description available'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Repo
              </Button>
            </CardActions>
          </StyledCard>
        ))}
      </StyledGridContainer>
    </Page>
  );
};

export default Portfolio;

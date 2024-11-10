import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledPageContainer } from './Page.styles';

const Page = ({ title, showTitle = false, pagename, children }) => {
  return (
    <StyledPageContainer id={`${pagename}-page`}>
      {showTitle && title && (
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      )}
      <Box>
        {children}
      </Box>
    </StyledPageContainer>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  pagename: PropTypes.string,
  showTitle: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Page;

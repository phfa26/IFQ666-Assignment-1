import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledHobbyImage, StyledTextSection } from './ImageTextSection.styles';

const ImageTextSection = ({ imageSrc, imageAlt, imagePosition = 'left', children }) => {
  const flexDirection = imagePosition === 'center'
    ? 'column'
    : imagePosition === 'left'
    ? 'row'
    : 'row-reverse';

  return (
    <Box
      display="flex"
      alignItems="center"
      mb={4}
      flexDirection={{ xs: 'column', md: flexDirection }}
      textAlign={imagePosition === 'center' ? 'center' : 'left'}
    >
      <StyledHobbyImage src={imageSrc} alt={imageAlt} />
      <StyledTextSection>
        <Typography variant="body1" component="div">
          {children}
        </Typography>
      </StyledTextSection>
    </Box>
  );
};

ImageTextSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imagePosition: PropTypes.oneOf(['left', 'right', 'center']),
  children: PropTypes.node.isRequired,
};

export default ImageTextSection;

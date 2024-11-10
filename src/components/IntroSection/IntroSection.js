import { CardContent } from '@mui/material';
import React from 'react';
import { ContactTypography, Divider, HeaderTypography, StyledCard, SubheaderTypography, SummaryParagraph } from '../shared/shared.styles';

const IntroSection = ({ intro }) => {
  return (
    <StyledCard variant="outlined">
      <CardContent>
        <HeaderTypography variant="h4">{intro.name}</HeaderTypography>
        <SubheaderTypography variant="subtitle1">{intro.title}</SubheaderTypography>
        <ContactTypography variant="body2">
          {intro.website} | {intro.github} | {intro.linkedin} | {intro.email} | {intro.phone}
        </ContactTypography>
        <Divider />
        {intro.summary.map((paragraph, index) => (
          <SummaryParagraph key={index} variant="body1">
            {paragraph}
          </SummaryParagraph>
        ))}
      </CardContent>
    </StyledCard>
  );
};

export default IntroSection;

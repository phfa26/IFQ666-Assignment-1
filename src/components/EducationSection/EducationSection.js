import { List, ListItem } from '@mui/material';
import React from 'react';
import { SectionCard, SectionListItemText, SectionTitle, StyledCardContent } from '../shared/shared.styles';

const EducationSection = ({ education }) => {
  return (
    <SectionCard>
      <StyledCardContent>
        <SectionTitle variant="h6" gutterBottom>Qualifications</SectionTitle>
        <List disablePadding>
          {education.map((edu, index) => (
            <ListItem key={index} alignItems="flex-start">
              <SectionListItemText
                primary={`${edu.degree} - ${edu.institution}`}
                secondary={`${edu.startDate} - ${edu.endDate} | ${edu.description}`}
              />
            </ListItem>
          ))}
        </List>
      </StyledCardContent>
    </SectionCard>
  );
};

export default EducationSection;

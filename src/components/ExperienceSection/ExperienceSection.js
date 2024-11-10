import { List, ListItem } from '@mui/material';
import React from 'react';
import { SectionCard, SectionListItemText, SectionTitle, StyledCardContent } from '../shared/shared.styles';

const ExperienceSection = ({ experiences }) => {
  return (
    <SectionCard>
      <StyledCardContent>
        <SectionTitle variant="h6" gutterBottom>Career History</SectionTitle>
        <List disablePadding>
          {experiences.map((experience, index) => (
            <ListItem key={index} alignItems="flex-start">
              <SectionListItemText
                primary={`${experience.jobTitle} - ${experience.company}`}
                secondary={`${experience.startDate} - ${experience.endDate} | ${experience.description}`}
              />
            </ListItem>
          ))}
        </List>
      </StyledCardContent>
    </SectionCard>
  );
};

export default ExperienceSection;

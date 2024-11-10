import { List, ListItem } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { SectionCard, SectionListItemText, SectionTitle, StyledCardContent } from '../shared/shared.styles';

const ListSection = ({ title, items, columns = 1 }) => {
  return (
    <SectionCard>
      <StyledCardContent>
        <SectionTitle variant="h6" gutterBottom>{title}</SectionTitle>
        <List disablePadding sx={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 2 }}>
          {items.map((item, index) => (
            <ListItem key={index} disablePadding>
              <SectionListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </StyledCardContent>
    </SectionCard>
  );
};

ListSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  columns: PropTypes.number,
};

export default ListSection;

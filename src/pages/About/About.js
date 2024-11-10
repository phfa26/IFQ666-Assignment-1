import { Typography } from '@mui/material';
import React from 'react';
import { default as codingImage, default as dogImage, default as hikingImage } from '../../assets/profile-image.png';
import ImageTextSection from '../../components/ImageTextSection/ImageTextSection';
import Page from '../../components/Page/Page';

const sections = [
  {
    imageSrc: hikingImage,
    imageAlt: 'Hiking',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.',
    ],
    position: 'left',
  },
  {
    imageSrc: dogImage,
    imageAlt: 'Playing with my dog',
    text: [
      'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.',
      'In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    ],
    position: 'right',
  },
  {
    imageSrc: codingImage,
    imageAlt: 'Coding',
    text: [
      'Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.',
    ],
    position: 'center',
  },
];

const About = () => {
  return (
    <Page showTitle title='About Me' pagename='about'>      
      {sections.map((section, index) => (
        <ImageTextSection
          key={index}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          imagePosition={section.position}
        >
          {section.text.map((paragraph, idx) => (
            <Typography key={idx} variant="body1" paragraph>
              {paragraph}
            </Typography>
          ))}
        </ImageTextSection>
      ))}
    </Page>
  );
};

export default About;

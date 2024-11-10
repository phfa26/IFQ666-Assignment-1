import { Typography } from '@mui/material';
import React from 'react';
import codingImage from '../../assets/coding.jpg';
import dogImage from '../../assets/dog.jpg';
import hikingImage from '../../assets/hiking.jpg';

import ImageTextSection from '../../components/ImageTextSection/ImageTextSection';
import Page from '../../components/Page/Page';

const sections = [
  {
    imageSrc: hikingImage,
    imageAlt: 'Hiking',
    text: [
      'Hiking allows me to disconnect from technology and reconnect with nature. I love the tranquility and focus that comes from exploring new trails and reaching challenging peaks.',
      'The physical endurance needed for long hikes mirrors the persistence I apply to problem-solving in my work. Just like climbing a mountain, coding requires taking one step at a time to reach the summit.',
    ],
    position: 'left',
  },
  {
    imageSrc: dogImage,
    imageAlt: 'Playing with my dog',
    text: [
      'Spending time with my dog reminds me to appreciate life’s simple joys. Whether we’re going for a walk or playing fetch, I’m always recharged and inspired afterward.',
      'Having a pet has taught me patience and empathy, which are qualities I strive to bring into my work. Just like caring for a dog, nurturing a project to completion requires dedication and understanding.',
      'My dog is also a great reminder of the importance of taking breaks. In a fast-paced industry, regular breaks help maintain productivity and keep my mind sharp.',
    ],
    position: 'right',
  },
  {
    imageSrc: codingImage,
    imageAlt: 'Coding',
    text: [
      'Coding is my creative outlet and my way of making a tangible impact. I enjoy transforming complex problems into elegant solutions through code.',
      'The challenges of programming inspire me to keep learning and experimenting. I believe in writing clean, efficient code that not only works but also anticipates future requirements.',
      'For me, coding is more than a job; it’s a passion. I love that every line of code is an opportunity to make something meaningful and useful for others.',
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

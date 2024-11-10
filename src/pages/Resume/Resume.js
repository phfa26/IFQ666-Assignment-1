import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import resumeData from '../../assets/resumeData.json';
import EducationSection from '../../components/EducationSection/EducationSection';
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection';
import IntroSection from '../../components/IntroSection/IntroSection';
import ListSection from '../../components/ListSection/ListSection';
import Page from '../../components/Page/Page';

const Resume = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

  const columns = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;

  return (
    <Page title={'My Resume'} pagename='resume'>
      <IntroSection intro={resumeData.intro} />
      <ExperienceSection experiences={resumeData.experiences} />
      <ListSection title="Skills" items={resumeData.skills} columns={columns} /> 
      <EducationSection education={resumeData.education} />
      <ListSection title="Certifications" items={resumeData.certifications} />
      <ListSection title="Personal Skills" items={resumeData.personalSkills} />
    </Page>
  );
};

export default Resume;

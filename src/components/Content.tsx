import { Box } from '@mui/material';
import { AdditionalCourses } from './AdditionalCourses';
import { CourseInfo } from './CourseInfo';
import { Courses } from './Courses';

interface Props {
  a?: any;
}

export const Content: React.FC<Props> = () => {
  return (
    <Box sx={{ px: { xs: '16px', md: '32px' } }}>
      <CourseInfo />
      <Courses />
      <AdditionalCourses />
    </Box>
  );
};

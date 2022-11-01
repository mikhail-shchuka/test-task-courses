import { Box } from '@mui/material';
import { AdditionalCourses } from './AdditionalCourses';
import { CourseInfo } from './CourseInfo';
import { Courses } from './Courses';

interface Props {
  data: any;
}

export const Content: React.FC<Props> = ({ data }) => {
  return (
    <Box sx={{ px: { xs: '16px', md: '32px' } }}>
      <CourseInfo courseDetails={data.details} />
      <Courses courses={data.courses} />
      <AdditionalCourses additionalCourses={data.relatedContent} />
    </Box>
  );
};

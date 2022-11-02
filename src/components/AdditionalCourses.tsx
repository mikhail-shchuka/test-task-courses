import { Box, styled, Typography } from '@mui/material';
import { AdditionalCoursesItem } from './AdditionalCoursesItem';
import { Container } from './Courses';

const ContainerAdditional = styled(Container)(({ theme }) => ({
  gap: '16px 0',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
    gap: '32px 0',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}));

interface Props {
  additionalCourses: any;
}

export const AdditionalCourses: React.FC<Props> = ({ additionalCourses }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '20px' },
          fontWeight: 500,
          borderBottom: '1px solid rgb(202 213 225)',
          pb: '7px',
        }}
      >
        Other Helpful Courses
      </Typography>
      <ContainerAdditional>
        {additionalCourses.map((course: any) => (
          <AdditionalCoursesItem key={course.id} course={course} />
        ))}
      </ContainerAdditional>
    </Box>
  );
};

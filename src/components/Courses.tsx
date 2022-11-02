import { Box, BoxProps, styled, Typography } from '@mui/material';
import { CoursesItem } from './CoursesItem';

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'grid',
  gap: '16px',
  marginTop: '-1px',
  marginLeft: '-16px',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
    gap: '16px 32px',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
}));

interface Props {
  courses: any;
}

export const Courses: React.FC<Props> = ({ courses }) => {
  const number = courses.length;

  return (
    <Box sx={{ mb: '48px' }}>
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '20px' },
          fontWeight: 500,
          borderBottom: '1px solid rgb(202 213 225)',
          pb: '7px',
        }}
      >
        Courses ({number})
      </Typography>
      <Container>
        {courses.map((course: any, index: number) => (
          <CoursesItem key={course.id} course={course} index={index} />
        ))}
      </Container>
    </Box>
  );
};

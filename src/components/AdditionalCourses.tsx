import { Box, styled, Typography } from '@mui/material';
import { AdditionalCoursesItem } from './AdditionalCoursesItem';
import { Container } from './Courses';

const ContainerAdditional = styled(Container)(({theme}) => ({
  gap: '16px 0',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
    gap: '32px 0',
  },
}))

interface Props {
  a?: any;
}

export const AdditionalCourses: React.FC<Props> = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: 500,
          borderBottom: '1px solid rgb(202 213 225)',
          pb: '7px',
        }}
      >
        Other Helpful Courses
      </Typography>
      <ContainerAdditional>
        <AdditionalCoursesItem />
        <AdditionalCoursesItem />
        <AdditionalCoursesItem />
        <AdditionalCoursesItem />
      </ContainerAdditional>
    </Box>
  );
};
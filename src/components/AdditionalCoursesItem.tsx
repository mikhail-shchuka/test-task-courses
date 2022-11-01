import {
  Box,
  Button,
  ButtonProps,
  Stack,
  StackProps,
  styled,
  Typography,
  TypographyProps,
} from '@mui/material';

import logo from '../images/ic_apsignature_hindi.png';

const Container = styled(Stack)<StackProps>({
  flexDirection: 'row',
  flexGrow: 1,
  position: 'relative',
  cursor: 'pointer',
  padding: '16px 16px 16px',
  '&:hover': {
    backgroundColor: 'rgb(241 245 249)',
    '&::after': {
      display: 'none',
    },
  },
  '&::after': {
    display: 'block',
    content: '""',
    position: 'absolute',
    width: 'calc(100% - 16px)',
    left: '16px',
    bottom: 0,
    borderBottom: '0.5px solid  rgb(202 213 225)',
  },
});


const Title = styled(Typography)<TypographyProps>({
  fontSize: '18px',
  height: '28px',
  fontFamily: 'Eczar',
  color: 'rgb(30 41 59)',
  lineHeight: '28px',
  fontWeight: 500,
  marginBottom: '3px',
});

const SubTitle = styled(Typography)<TypographyProps>({
  fontSize: '14px',
  lineHeight: '21px',
  color: 'rgb(71 85 105)',
  marginBottom: '4px',
});

const CourseNumber = styled(Typography)<TypographyProps>({
  fontSize: '14px',
  lineHeight: '20px',
  color: 'rgb(71 85 105)',
  marginBottom: '4px',
});

const CoursesType = styled(Typography)<TypographyProps>({
  p: '1px 6px',
  fontSize: '12px',
  color: 'rgb(51, 65, 85)',
  backgroundColor: 'rgb(199 230 248)',
  width: 'max-content',
  borderRadius: '4px',
});

interface Props {
  courses?: any;
}

export const AdditionalCoursesItem: React.FC<Props> = ({ courses }) => {
  return (
    <Container>
      <Box sx={{ width: 1 / 3,  mt: '8px' }}>
        <Box sx={{ aspectRatio: '16 / 9', position: 'relative', height: 'max-content', mb: '5px' }}>
          <Box sx={{ height: 1, border: '1px solid #fff', top: '-8px', position: 'absolute', right: '8px', left: '8px', zIndex: 1 }}>
            <img
              width='100%'
              height='100%'
              style={{ borderRadius: '4px' }}
              src='https://cimg.acharyaprashant.org/images/img-3c2f4551-5465-43be-a34e-7d598beab8c3/10/image.jpg'
            />
          </Box>
          <Box sx={{ height: 1, border: '1px solid #fff', top: '-4px', position: 'absolute', right: '4px', left: '4px', zIndex: 1 }}>
            <img
              width='100%'
              height='100%'
              style={{ borderRadius: '4px' }}
              src='https://cimg.acharyaprashant.org/images/img-3c2f4551-5465-43be-a34e-7d598beab8c3/10/image.jpg'
            />
          </Box>
          <Box sx={{ width: 1, height: 1, borderTop: '1px solid #fff', position: 'relative', zIndex: 2 }}>
            <img
              width='100%'
              height='100%'
              style={{ borderRadius: '4px' }}
              src='https://cimg.acharyaprashant.org/images/img-3c2f4551-5465-43be-a34e-7d598beab8c3/10/image.jpg'
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              height: 1 / 3,
              bottom: 0,
              width: 1,
              borderRadius: '4px',

              backgroundImage: 'linear-gradient(to top, #000, rgb(0 0 0 / 0))',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: '4px',
                right: '4px',
                height: { xs: 31, sm: 26 },
              }}
            >
              <img height='100%' src={logo} />
            </Box>
          </Box>
        </Box>
        <CoursesType>
          Series
        </CoursesType>
      </Box>

      <Box sx={{ml: '16px'}}>
        <Title>
        Kabir Saheb
        </Title>
        <SubTitle>
        Based on Selected Verses of Kabir Saheb
        </SubTitle>
        <CourseNumber>
        4 Courses
        </CourseNumber>
      </Box>
    </Container>
  );
};
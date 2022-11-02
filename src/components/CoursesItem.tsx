import {
  Box,
  Button,
  ButtonProps,
  Divider,
  Stack,
  StackProps,
  styled,
  Typography,
} from '@mui/material';
import { TypographyProps } from '@mui/system';

const Container = styled(Stack)<StackProps>(({ theme }) => ({
  flexGrow: 1,
  position: 'relative',
  cursor: 'pointer',
  padding: '16px 16px 0',
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
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      borderRadius: '8px',
      boxShadow:
        '0 0 #000, 0 0 #0000, 0 0 #000, 0 0 #0000, 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)',
    },
  },
}));

const CourseNumber = styled(Typography)<TypographyProps>({
  height: 24,
  width: 33,
  textAlign: 'start',
  fontFamily: 'Eczar',
  position: 'relative',
  alignSelf: 'flex-start',
  borderRadius: '4px',
  backgroundColor: 'rgb(148 163 184)',
  padding: '0 8px',
  marginBottom: '20px',
  fontSize: '12px',
  lineHeight: '24px',
  fontWeight: 500,
  color: '#fff',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    borderTop: '12px solid transparent',
    borderRight: '5px solid white',
    borderBottom: '12px solid transparent',
  },
});

const Title = styled(Typography)<TypographyProps>({
  fontSize: '18px',
  height: '24px',
  fontFamily: 'Eczar',
  color: 'rgb(30 41 59)',
  lineHeight: '24px',
  fontWeight: 500,
  marginBottom: '3px',
});

const SubTitle = styled(Typography)<TypographyProps>({
  fontSize: '14px',
  lineHeight: '21px',
  color: 'rgb(71 85 105)',
  marginBottom: '4px',
});

const Info = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '12px',
  lineHeight: '16px',
  color: 'rgb(71 85 105)',
  marginBottom: '4px',
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
    marginBottom: '6px',
  },
}));

const Language = styled(Typography)<TypographyProps>({
  padding: '1px 6px',
  fontSize: '12px',
  color: 'rgb(51, 65, 85)',
  backgroundColor: 'rgb(199 230 248)',
  width: 'max-content',
  borderRadius: '4px',
});

const ButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: '12px',
  textTransform: 'uppercase',
  height: '30px',
  color: theme.palette.primary.light,
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

interface Props {
  course: any;
  index: number;
}

export const CoursesItem: React.FC<Props> = ({ course, index }) => {
  const hours = Math.floor(course.courseHours);
  const minutes = Math.round((course.courseHours - Math.floor(course.courseHours)) * 60);
  const language = course.language[0].toUpperCase() + course.language.slice(1);
  return (
    <Container>
      <CourseNumber>कोर्स {index + 1}</CourseNumber>
      <Box sx={{ mb: '8px' }}>
        <Title>{course.title}</Title>
        <SubTitle>{course.subtitle}</SubTitle>
        <Info>
          {hours > 0 ? (hours > 1 ? `${hours} hours` : `${hours} hour`) : ''} {minutes}{' '}
          {minutes > 1 ? 'minutes' : 'minute'}
        </Info>
        <Info sx={{ mb: '8px' }}>Contribution: ₹{course.amount}</Info>
        <Language>{language}</Language>
      </Box>
      <Stack direction='row' alignItems='center' sx={{ pb: '16px' }}>
        <ButtonStyled sx={{ ml: '-8px' }}>Add to cart</ButtonStyled>
        <Divider orientation='vertical' sx={{ height: 14, mx: '4px' }} />
        <ButtonStyled>Enrol</ButtonStyled>
      </Stack>
    </Container>
  );
};

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

interface Props {
  course?: any;
}

const Container = styled(Stack)<StackProps>({
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
});

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

const Info = styled(Typography)<TypographyProps>({
  fontSize: '12px',
  lineHeight: '16px',
  color: 'rgb(71 85 105)',
  marginBottom: '4px',
});

const Language = styled(Typography)<TypographyProps>({
  p: '1px 6px',
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
}));

export const CoursesItem: React.FC<Props> = ({ course }) => {
  return (
    <Container>
      <CourseNumber>कोर्स 1</CourseNumber>
      <Box sx={{ mb: '8px' }}>
        <Title>संत समागम परम सुख</Title>
        <SubTitle>संतों के मुख्य दोहे पर आधारित</SubTitle>
        <Info>2 hours 30 minutes</Info>
        <Info sx={{ mb: '8px' }}>Contribution: ₹250</Info>
        <Language>Hindi</Language>
      </Box>
      <Stack direction='row' alignItems='center' sx={{ pb: '16px' }}>
        <ButtonStyled sx={{ ml: '-8px' }}>Add to cart</ButtonStyled>
        <Divider orientation='vertical' sx={{ height: 14 }} />
        <ButtonStyled>Enrol</ButtonStyled>
      </Stack>
    </Container>
  );
};

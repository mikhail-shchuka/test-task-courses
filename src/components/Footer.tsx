import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  LinkProps,
  Stack,
  StackProps,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { TypographyProps } from '@mui/system';
import logo from '../images/ic_aplogo.png';
import appStore from '../images/ic_appstore.png';
import googlePlay from '../images/ic_googleplay.png';
import {
  DownloadIcon,
  FaceBookIconLogo,
  InstagramIcon,
  PhoneIconFill,
  TwitterIconLogo,
  WhatsAppIconLogo,
  WikiIcon,
  YouTubeIcon,
} from './CustomIcons';

const Container = styled(Stack)<StackProps>(({ theme }) => ({
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },

  gap: '16px',
  [theme.breakpoints.up('md')]: {
    gap: '60px',
  },
  [theme.breakpoints.up(1035)]: {
    gap: '64px',
  },
}));

const Title = styled(Typography)<TypographyProps>({
  fontSize: '16px',
  fontWeight: 600,
  color: 'rgb(241, 245, 249)',
  marginBottom: '13px',
  lineHeight: '24px',
  textTransform: 'uppercase',
});

const Item = styled(Link)<LinkProps>({
  fontSize: '16px',
  fontFamily: 'Inter',
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'block',
  color: 'rgb(203, 213, 225)',
  marginBottom: '10px',
  lineHeight: '24px',
  '&:hover': {
    color: 'rgb(210 65 21)',
  },
});

const SocialButton = styled(Link)<LinkProps>({
  padding: 0,
  '& .MuiSvgIcon-root': {
    fill: 'rgb(203, 213, 225)',
    '&:hover': {
      fill: 'rgb(210 65 21)',
    },
  },
});

export const Footer: React.FC = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      sx={{
        p: { xs: '32px 32px 28px', sm: '40px 16px 28px' },
        backgroundColor: 'rgb(15 23 42)',
      }}
    >
      <Container>
        <Box>
          <Title>LIVE EVENTS</Title>
          <Item href='https://acharyaprashant.org/en/camps'>Vedant Mahotsav</Item>
          <Item href='https://acharyaprashant.org/en/online-courses/gita'>Gita Course</Item>
          <Item href='https://acharyaprashant.org/en/online-courses/upanishad'>
            Institutional Sessions
          </Item>
        </Box>
        <Box>
          <Title>WISDOM CONTENT</Title>
          <Item href='https://acharyaprashant.org/en/courses'>Wisdom Courses</Item>
          <Item href='https://acharyaprashant.org/en/books'>His Books</Item>
          <Item href='https://acharyaprashant.org/en/circle'>AP Circle</Item>
        </Box>
        <Box>
          <Title>MORE</Title>
          <Item href='https://acharyaprashant.org/en/ap-intro'>About Acharya Prashant</Item>
          <Item href='https://acharyaprashant.org/en/vedant'>Ghar Ghar Upanishad</Item>
          <Item href='https://acharyaprashant.org/en/media'>Media and Public Interaction</Item>
          <Item href='https://acharyaprashant.org/en/invite'>Talks with Acharya Prashant</Item>
        </Box>
        <Box>
          <Title>SOCIAL MEDIA</Title>
          <Item sx={{ cursor: 'auto', '&:hover': { color: 'rgb(203, 213, 225)' } }}>
            For English
          </Item>
          <Stack direction='row' spacing='8px' sx={{ mb: '24px' }}>
            <SocialButton href='https://www.youtube.com/c/AcharyaPrashant' target='_blank'>
              <YouTubeIcon viewBox='0 0 21 15' sx={{ width: 21, height: 15 }} />
            </SocialButton>
            <SocialButton href='https://twitter.com/Prashant_Advait' target='_blank'>
              <TwitterIconLogo viewBox='0 0 20 15' sx={{ width: 20, height: 15 }} />
            </SocialButton>
            <SocialButton href='https://www.facebook.com/AdvaitAcharyaPrashant' target='_blank'>
              <FaceBookIconLogo viewBox='0 0 8 15' sx={{ width: 8, height: 15 }} />
            </SocialButton>
            <SocialButton href='https://www.instagram.com/acharya_prashant_paf/' target='_blank'>
              <InstagramIcon viewBox='0 0 15 15' sx={{ width: 15, height: 15 }} />
            </SocialButton>
            <SocialButton href='https://en.wikipedia.org/wiki/Acharya_Prashant' target='_blank'>
              <WikiIcon viewBox='0 0 20 15' sx={{ width: 20, height: 15 }} />
            </SocialButton>
          </Stack>
          <Item sx={{ cursor: 'auto', '&:hover': { color: 'rgb(203, 213, 225)' } }}>For Hindi</Item>
          <Stack direction='row' spacing='8px' sx={{ mb: '24px' }}>
            <SocialButton href='https://www.youtube.com/c/ShriPrashant' target='_blank'>
              <YouTubeIcon viewBox='0 0 21 15' sx={{ width: 21, height: 15 }} />
            </SocialButton>
            <SocialButton href='https://www.instagram.com/acharya_prashant_ap/' target='_blank'>
              <TwitterIconLogo viewBox='0 0 20 15' sx={{ width: 20, height: 15 }} />
            </SocialButton>
            <SocialButton href='https://www.facebook.com/Acharya.Prashant.Advait' target='_blank'>
              <FaceBookIconLogo viewBox='0 0 8 15' sx={{ width: 8, height: 15 }} />
            </SocialButton>
            <SocialButton href='https://www.facebook.com/Acharya.Prashant.Advait' target='_blank'>
              <InstagramIcon viewBox='0 0 15 15' sx={{ width: 15, height: 15 }} />
            </SocialButton>
          </Stack>
        </Box>
        <Box>
          <Title>DOWNLOAD APP</Title>
          <Stack direction='row' alignItems='center' sx={{ mb: '20px' }}>
            <Avatar src={logo} alt='Acharya Prashant' sx={{ width: 24, height: 24, mr: '8px' }} />
            <Box>
              <Typography sx={{ color: 'rgb(241, 245, 249)' }}>Acharya Prashant</Typography>
            </Box>
          </Stack>
          <Item target='_blank'>
            <img
              width='114px'
              height='32px'
              src={googlePlay}
              alt='Google Play'
              style={{ border: '1.5px solid #fff', borderRadius: '6px' }}
            />
          </Item>
          <Item target='_blank'>
            <img
              width='114px'
              height='32px'
              src={appStore}
              alt='App Store'
              style={{ border: '1.5px solid #fff', borderRadius: '6px' }}
            />
          </Item>
        </Box>
        <Box>
          <Title>CONTACT US</Title>
          <Stack direction='row' alignItems='center' spacing='8px' sx={{ mb: '12px' }}>
            <MailOutlineIcon sx={{ color: 'rgb(203, 213, 225)' }} />
            <Item sx={{ mb: 0 }}>support@advait.org.in</Item>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='8px' sx={{ mb: '12px' }}>
            <WhatsAppIconLogo viewBox='0 0 18 19' sx={{ height: 18, width: 19 }} />
            <Item sx={{ mb: 0 }}>+91 9650585100</Item>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='8px' sx={{ mb: '12px' }}>
            <PhoneIconFill
              viewBox='0 0 17 16'
              sx={{ height: 16, width: 17, fill: 'rgb(203, 213, 225)' }}
            />
            <Item sx={{ mb: 0 }}>+91 9650585100</Item>
          </Stack>
          <Button
            sx={{
              height: '32px',
              lineHeight: '32px',
              border: '1px solid #fff',
              borderRadius: '4px',
              color: 'rgb(203, 213, 225)',
              '&:hover': {
                color: 'primary.main',
                borderColor: 'primary.main  ',
              },
            }}
          >
            Fill Form to Connect
          </Button>
        </Box>
      </Container>
      <Divider
        sx={{ width: 2 / 3, background: 'rgb(148 163 184)', m: '62px 0 24px', mx: 'auto' }}
      />
      <Stack direction='row' justifyContent='center'>
        <Typography
          sx={{ color: 'rgb(203, 213, 225)', fontSize: '14px', lineHeight: '20px', pr: '80px' }}
        >
          Copyright © 2022 PrashantAdvait Foundation
        </Typography>
        <Stack direction='row' sx={{ mb: '56px' }}>
          <Item sx={{ fontSize: '14px', mb: 0, lineHeight: '20px' }}>Terms & Conditions </Item>
          <Divider sx={{ color: 'rgb(203, 213, 225)', fontSize: '14px', lineHeight: '20px', p: 0 }}>
            |
          </Divider>
          <Item sx={{ fontSize: '14px', mb: 0, lineHeight: '20px' }}>Privacy Policy</Item>
        </Stack>
      </Stack>
      {!desktop && (
        <Stack
          direction='row'
          justifyContent='space-between'
          sx={{
            position: 'fixed',
            zIndex: 5,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgb(255, 237, 213)',
            height: 40,
            p: '10px 16px',
          }}
        >
          <Typography sx={{ height: 40, lineHeight: '40px' }}>Open in App</Typography>
          <Button
            href='https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks'
            startIcon={
              <DownloadIcon
                viewBox='0 0 16 16'
                sx={{ backgroundColor: 'primary.light', height: 16, width: 16 }}
              />
            }
            sx={{ backgroundColor: 'primary.light', p: '10px 32px', borderRadius: '24px' }}
          >
            <Typography sx={{ color: '#fff', fontWeight: 500, fontSize: '14px' }}>
              Download App
            </Typography>
          </Button>
        </Stack>
      )}
    </Box>
  );
};

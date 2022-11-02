import {
  Box,
  IconButton,
  IconButtonProps,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import logo from '../images/ic_apsignature_hindi.png';
import { FaceBookIcon, LinkedInIcon, TwitterIcon, WhatsAppIcon } from './CustomIcons';

const IconButtonStyled = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    '&:hover': {
      fill: theme.palette.primary.light,
    },
  },
}));

interface Props {
  courseDetails: any;
}

export const CourseInfo: React.FC<Props> = ({ courseDetails }) => {
  const [view, setView] = useState(false);
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));
  const image =
    courseDetails.thumbnail.domain +
    '/' +
    courseDetails.thumbnail.basePath +
    '/' +
    courseDetails.thumbnail.qualities[1] +
    '/' +
    courseDetails.thumbnail.key;

  return (
    <Stack sx={{ flexDirection: { xs: 'column', sm: 'row' }, mb: '42px' }}>
      <Box sx={{ width: { xs: '100%', sm: '40%' } }}>
        <Box sx={{ aspectRatio: '16 / 9', position: 'relative', height: 'max-content' }}>
          <Box sx={{ width: 1, height: 1 }}>
            <img width='100%' height='100%' style={{ borderRadius: '4px' }} src={image} />
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
                height: { xs: 38, sm: 52 },
              }}
            >
              <img height='100%' src={logo} />
            </Box>
          </Box>
        </Box>
        {tablet && (
          <Box sx={{ pt: '16px' }}>
            <Typography
              sx={{ fontSize: '14px', fontWeight: 500, lineHeight: '23px', height: '23px' }}
            >
              Share this series:
            </Typography>
            <Stack direction='row' sx={{ mt: '-4px' }}>
              <IconButtonStyled sx={{ mr: '3px' }}>
                <WhatsAppIcon
                  viewBox='0 0 31 31'
                  sx={{ width: 28, height: 28, color: 'rgb(71, 85, 105)', ml: '-6.5px' }}
                />
              </IconButtonStyled>
              <IconButtonStyled sx={{ mr: '3.5px' }}>
                <TwitterIcon
                  viewBox='0 0 31 31'
                  sx={{ width: 28, height: 28, color: 'rgb(71, 85, 105)' }}
                />
              </IconButtonStyled>
              <IconButtonStyled sx={{ mr: '4px' }}>
                <FaceBookIcon
                  viewBox='0 0 31 31'
                  sx={{ width: 28, height: 28, color: 'rgb(71, 85, 105)' }}
                />
              </IconButtonStyled>
              <IconButtonStyled>
                <LinkedInIcon
                  viewBox='0 0 31 31'
                  sx={{ width: 28, height: 28, color: 'rgb(71, 85, 105)' }}
                />
              </IconButtonStyled>
            </Stack>
          </Box>
        )}
      </Box>
      <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
        <Box sx={{ px: { xs: 0, sm: '16px' }, pt: { xs: '16px', sm: 0 } }}>
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '20px' },
              color: 'text.primary',
              fontWeight: 500,
              fontFamily: 'Eczar',
              lineHeight: '35px',
            }}
          >
            {courseDetails.subtitle}
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              color: 'text.secondary',
              fontFamily: 'Eczar',
              lineHeight: '26px',
              textAlign: 'justify',
            }}
          >
            {!tablet ? (
              <>
                {view
                  ? courseDetails.description
                  : courseDetails.description.split(' ').slice(0, 33).join(' ') + '...'}{' '}
                <Typography
                  onClick={() => setView((view) => !view)}
                  component='span'
                  sx={{
                    color: 'primary.light',
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {view ? 'कम दिखाएं' : 'और पढ़ें'}
                </Typography>
              </>
            ) : (
              courseDetails.description
            )}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

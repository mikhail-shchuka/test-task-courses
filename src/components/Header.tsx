import {
  AppBar,
  AppBarProps,
  Avatar,
  Box,
  Button,
  ButtonProps,
  IconButton,
  Link,
  LinkProps,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';
import { useState } from 'react';
import logo from '../images/ic_aplogo.png';
import courses from '../images/ic_courses.png';
import { Breadcrumb } from './Breadcrumb';
import { LeftArrow, PhoneIcon, SearchIcon } from './CustomIcons';
import DrawerRight from './DrawerRight';
import { LangToggle } from './LangToggle';
import { SearchField } from './SearchField';
import { SearchFieldTablet } from './SearchFieldTablet';

const NavAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  boxShadow: 'none',
  '& .MuiToolbar-root': {
    minHeight: '44px',
    padding: '0 0 0 16px',
    [theme.breakpoints.up('md')]: {
      padding: '0 32px',
    },
  },
}));

const SearchAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  backgroundColor: '#fff',
  height: 48,
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)',
  '& .MuiToolbar-root': {
    minHeight: '48px',
    height: 48,
    padding: '0 16px',
    [theme.breakpoints.up('md')]: {
      padding: '0 32px',
    },
  },
}));

const startAnimation = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}

`;

const NavLink = styled(Link)<LinkProps>({
  display: 'inline-block',
  lineHeight: '44px',
  color: '#fff',
  fontWeight: 500,
  fontSize: '14px',
  opacity: 0.9,
  padding: '0 16px',
  height: 44,
  textTransform: 'none',
  textDecoration: 'none',
  '&:hover': {
    opacity: 1,
  },
});

const ButtonStyled = styled(Button)<ButtonProps>({
  lineHeight: '22px',
  border: '1px solid rgb(229 231 235)',
  padding: '4px 6px',
  marginRight: '20px',
  height: '22px',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '12px',
  fontWeight: 'normal',
  minWidth: 'min-content',
});

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('sm'));
  const [hasTabletSearch, setHasTabletSearch] = useState(false);
  const [hasTabletAnimation, setHasTabletAnimation] = useState(false);

  const handleCloseTabletSearch = () => {
    setHasTabletSearch(false);
    setHasTabletAnimation(true);
  };

  return (
    <>
      <NavAppBar position='relative'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Avatar src={logo} alt='Acharya Prashant' sx={{ width: 32, height: 32, mr: '8px' }} />
          {tablet && (
            <Box sx={{ flexGrow: 1 }}>
              <NavLink href='https://acharyaprashant.org/en/home' variant='button'>
                Home
              </NavLink>
              <NavLink
                href='https://acharyaprashant.org/en/courses'
                variant='button'
                sx={{ backgroundColor: 'primary.light' }}
              >
                Video Courses
              </NavLink>
              <NavLink href='https://acharyaprashant.org/en/books' variant='button'>
                His Books
              </NavLink>
              <NavLink href='https://acharyaprashant.org/en/contribute' variant='button'>
                Donate
              </NavLink>
            </Box>
          )}
          <Stack direction='row' alignItems='center'>
            <LangToggle />
            <IconButton
              sx={{
                p: '4px',
                mr: { xs: '20px', sm: '4px', md: '8px' },
              }}
            >
              <PhoneIcon viewBox='0 0 16 16' sx={{ width: 16, color: '#fff' }} />
            </IconButton>
            {!tablet && <ButtonStyled>Donate</ButtonStyled>}
            {/* <IconButton
              sx={{
                p: '4px',
                mr: '12px',
              }}
            >
              <MenuIcon viewBox='0 0 14 12' sx={{ height: 18, width: 16, color: '#fff' }} />
              {desktop && (
                <Typography
                  sx={{ fontSize: '12px', lineHeight: '24px', color: '#fff', marginLeft: '8px' }}
                >
                  Menu
                </Typography>
              )}
            </IconButton> */}
            <DrawerRight />
          </Stack>
        </Toolbar>
      </NavAppBar>
      <SearchAppBar
        position='sticky'
        sx={{
          height: 48,
          backgroundColor: '#fff',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {hasTabletSearch ? (
            <SearchFieldTablet onClose={handleCloseTabletSearch} />
          ) : (
            <>
              <Stack
                sx={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexGrow: 1,
                  animation: hasTabletAnimation ? `${startAnimation} 0.5s ease-out` : '',
                }}
              >
                <img src={courses} height='24px' alt='courses' />
                {tablet && <SearchField />}
              </Stack>
              {!tablet && !hasTabletSearch && (
                <IconButton sx={{ pr: 0 }} onClick={() => setHasTabletSearch(true)}>
                  <SearchIcon
                    viewBox='0 0 17 16'
                    sx={{ height: '16px', width: '17px', color: '#000' }}
                  />
                </IconButton>
              )}
              <Button
                sx={{
                  lineHeight: { xs: 1.8, md: 2 },
                  backgroundColor: 'primary.light',
                  color: '#fff',
                  fontWeight: 400,
                  ml: '16px',
                  p: '0 9px',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                  },
                }}
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </SearchAppBar>
      {tablet ? (
        <>
          <Breadcrumb point={title} />
          <Typography
            sx={{
              p: { xs: '8px 0 9px', sm: '16px 16px 13px', md: '16px 32px 14px' },
              fontSize: { sm: '20px', md: '24px' },
              fontFamily: 'Eczar',
              fontWeight: 600,
              lineHeight: '38px',
              height: '36px',
            }}
          >
            {title}
          </Typography>
        </>
      ) : (
        <Stack direction='row' alignItems='center' sx={{ p: '8px 16px' }}>
          <IconButton
            href='https://acharyaprashant.org/en/courses'
            sx={{
              p: '16px',
              ml: '-16px',
            }}
          >
            <LeftArrow
              viewBox='0 0 15 13'
              sx={{
                height: 13,
                width: 15,
                color: 'primary.light',
                cursor: 'pointer',
                '&:hover': {
                  color: 'rgb(251 146 60)',
                },
              }}
            />
          </IconButton>
          <Typography
            sx={{
              fontFamily: 'Eczar',
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '28px',
            }}
          >
            संतवाणी
          </Typography>
        </Stack>
      )}
    </>
  );
};

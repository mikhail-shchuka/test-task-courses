import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List, { ListProps } from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

import { Button, IconButton, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { AvatarIcon, CrossIcon, MenuIcon } from './CustomIcons';

const DrawerStyled = styled(Drawer)<DrawerProps>({
  '& .MuiDrawer-paper': {
    backgroundColor: '#fff',
    width: '296px',
  },
});

const ListStyled = styled(List)<ListProps>({
  '&.MuiList-padding': {
    padding: 0,
    margin: '4px 0',
    marginBottom: '19px',
  },
  '& .MuiButtonBase-root': {
    padding: '8px 12px',
  },
  '& .MuiTypography-root': {
    fontSize: '14px',
    lineHeight: '21px',
    color: 'rgb(71, 85, 105)',
    fontWeight: 500,
  },
  '& .MuiListItemText-root': {
    margin: 0,
  },
});

export default function DrawerRight() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const desktop = useMediaQuery(theme.breakpoints.up('md'));

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <Box
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ p: '28px 12px' }}
    >
      <Box sx={{ borderBottom: '1px solid rgb(209 213 219)', pb: '10px', ml: '12px' }}>
        <Button
          sx={{
            color: 'primary.light',
            '&:hover': { color: 'primary.main' },
            fontWeight: 600,
            pt: '4px',
            pl: '4px',
          }}
          startIcon={
            <AvatarIcon
              viewBox='0 0 36 36'
              sx={{
                width: 36,
                height: 36,
                p: 0,
                mr: '4px',
                color: 'primary.light',
                '&:hover': { color: 'primary.main' },
              }}
            />
          }
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '36px',
              color: 'rgb(71, 85, 105)',
            }}
          >
            Login
          </Typography>
        </Button>
      </Box>
      <ListStyled>
        {['Video Courses', 'His Books', 'AP Circle', 'Contact Us', 'Donate'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </ListStyled>
      <Box sx={{ pl: '12px' }}>
        <Divider />
      </Box>
      <Typography
        sx={{
          fontSize: '12px',
          textTransform: 'uppercase',
          fontWeight: 700,
          p: '0 12px',
          mt: '12px',
          color: 'rgb(71, 85, 105)',
        }}
      >
        More
      </Typography>
      <ListStyled sx={{ '&.MuiList-padding': { mb: '10px' } }}>
        {[
          'Prashant Advait Foundation',
          'Vedant Mahotsav',
          'Gita Course',
          'Talks with Acharya Prashant',
          'Ghar Ghar Upanishad',
          'About Acharya Prashant',
          'Media and Public Interaction',
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </ListStyled>
      <Box sx={{ pl: '12px' }}>
        <Divider />
      </Box>
      <Typography
        sx={{
          fontSize: '12px',
          textTransform: 'uppercase',
          fontWeight: 700,
          p: '0 12px',
          mt: '12px',
          color: 'rgb(71, 85, 105)',
        }}
      >
        Explore categories
      </Typography>
      <ListStyled sx={{ '&.MuiList-padding': { mb: '4px' } }}>
        {[
          'Vedant - Upanishads',
          'Vedant - Bhagavad Gita',
          'Other Scriptures',
          'Saints and Masters',
          'Other streams',
          'Life Questions',
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </ListStyled>
      <Box sx={{ pl: '12px' }}>
        <Divider />
      </Box>
      <ListStyled>
        {['Technical Support'].map((text) => (
          <ListItem key={text} disablePadding sx={{ mb: '-32px' }}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </ListStyled>
    </Box>
  );

  return (
    <div>
      <IconButton
        sx={{
          p: '4px',
          mr: '12px',
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon viewBox='0 0 14 12' sx={{ height: 18, width: 16, color: '#fff' }} />
        {desktop && (
          <Typography
            sx={{ fontSize: '12px', lineHeight: '24px', color: '#fff', marginLeft: '8px' }}
          >
            Menu
          </Typography>
        )}
      </IconButton>
      <Box
        onClick={() => setIsOpen(false)}
        sx={{
          background: 'rgb(51, 65, 85, 0.6)',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1101,
          display: isOpen ? 'inline-block' : 'none',
        }}
      >
        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{
            position: 'fixed',
            right: '304px',
            top: '8px',
            width: 32,
            height: 32,
            borderRadius: '50%',
            opacity: 0.9,
            backgroundColor: '#fff',
            '&:hover': { backgroundColor: '#fff', opacity: 1 },
          }}
        >
          <CrossIcon
            viewBox='0 0 13 13'
            sx={{
              width: 13,
              height: 13,
              color: 'rgb(51, 65, 85)',
              '&:hover': { color: 'primary.light' },
            }}
          />
        </IconButton>
      </Box>
      <DrawerStyled variant='persistent' anchor='right' open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </DrawerStyled>
    </div>
  );
}

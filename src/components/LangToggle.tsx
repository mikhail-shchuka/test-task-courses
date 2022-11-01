import { Box, Button, Menu, MenuItem, MenuProps } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { useState } from 'react';
import { EnIcon, HiIcon, MarkIcon } from './CustomIcons';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '8px',
    marginTop: theme.spacing(1),
    color: 'rgb(15 23 42)',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)',
    '& .MuiMenu-list': {
      padding: '6px 0',
    },
    '& .MuiMenuItem-root': {
      padding: '8px 20px',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      '&:hover': {
        backgroundColor: 'rgb(241 245 249)',
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export const LangToggle: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [value, setValue] = useState('en');

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ p: '4px', mr: { xs: '20px', sm: '8px', md: '12px' } }}>
      <Button
        variant='contained'
        disableElevation
        onClick={handleClick}
        endIcon={<MarkIcon sx={{ width: 9, height: 6 }} viewBox='0 0 9 6' />}
        sx={{
          p: 0,
          opacity: 0.9,
          minWidth: 'min-content',
          '.MuiButton-endIcon': { ml: '4px' },
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: 1,
          },
        }}
      >
        {value === 'en' ? (
          <EnIcon sx={{ height: 17, width: 22 }} viewBox='0 0 22 17' />
        ) : (
          <HiIcon sx={{ height: 17, width: 22 }} viewBox='0 0 22 17' />
        )}
      </Button>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            setValue('en');
            handleClose();
          }}
          disableRipple
          sx={{ color: value === 'en' ? 'primary.light' : 'inherit' }}
        >
          ENGLISH
        </MenuItem>
        <MenuItem
          onClick={() => {
            setValue('hi');
            handleClose();
          }}
          disableRipple
          sx={{ fontFamily: 'Eczar', color: value === 'hi' ? 'primary.light' : 'inherit' }}
        >
          हिन्दी
        </MenuItem>
      </StyledMenu>
    </Box>
  );
};

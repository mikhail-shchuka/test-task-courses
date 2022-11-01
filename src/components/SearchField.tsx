import {
  Box,
  Button,
  ButtonProps,
  Divider,
  FormControl,
  FormControlProps,
  IconButton,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
  styled,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { CrossIconGradient, MarkIcon, SearchIcon } from './CustomIcons';
import { FilterDialog } from './FilterDialog';

const ButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  borderColor: 'rgb(226 232 239)',
  color: theme.palette.text.secondary,
  fontWeight: 500,
  minWidth: 'max-content',
  fontSize: '0.75rem',
  lineHeight: '36px',
  height: '38px',
  borderRadius: 0,
  borderTopLeftRadius: '0.25rem',
  borderBottomLeftRadius: '0.25rem',
  padding: '0 16px 0 8px',
  borderRight: 'none',
  '&:hover': {
    background: 'inherit',
    borderColor: 'rgb(226 232 239)',
    borderRight: 'none',
  },
  '& .MuiButton-endIcon': {
    marginLeft: '12px',
  },
}));

const InputStyled = styled(OutlinedInput)<OutlinedInputProps>({
  '& .MuiOutlinedInput-input': {
    fontSize: '16px',
    fontFamily: 'system-ui',
    padding: '8px 0 8px 12px',
    height: '38px',
    boxSizing: 'border-box',
    caretColor: '#ea580c',
    '&::placeholder': {
      opacity: 0.8,
    },
  },
});

const FormControlStyled = styled(FormControl)<FormControlProps>({
  '& .MuiOutlinedInput-root': {
    paddingRight: 0,

    '& fieldset': {
      borderColor: 'rgb(226 232 239)',
      borderLeft: 'none',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
    '&:hover fieldset': {
      borderColor: 'rgb(226 232 239)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(226 232 239)',
      borderWidth: '1px',
    },
  },
});

export const SearchField: React.FC = () => {
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('All');
  const [hasModal, setHasModal] = useState(false);

  const [tags, setTags] = useState(null);

  useEffect(() => {
    fetch('https://api.acharyaprashant.org/v2/legacy/courses/tags')
      .then((res) => res.json())
      .then((data) => setTags(data));
  }, []);

  return (
    <Box
      display='flex'
      sx={{
        ml: '24px',
        maxWidth: 576,
        flexGrow: 1,
        boxShadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / .05)',
      }}
    >
      <ButtonStyled
        variant='outlined'
        endIcon={<MarkIcon sx={{ width: 9, height: 6 }} viewBox='0 0 9 6' />}
        onClick={() => {
          setHasModal(true);
        }}
        sx={{ position: 'relative' }}
      >
        {filter}
      </ButtonStyled>
      {tags && (
        <FilterDialog
          tags={tags}
          onClose={(value) => {
            setFilter(value);
            setHasModal(false);
          }}
          open={hasModal}
          selectedValue='All'
        />
      )}
      <Divider orientation='vertical' flexItem />
      <FormControlStyled sx={{ height: 38, flexGrow: 1 }} variant='outlined'>
        <InputStyled
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder=' Search for courses'
          endAdornment={
            <>
              {value && (
                <InputAdornment position='end'>
                  <IconButton onClick={() => setValue('')}>
                    <CrossIconGradient
                      viewBox='-10 0 135 110'
                      sx={{ height: '12px', width: '12px' }}
                    />
                  </IconButton>
                </InputAdornment>
              )}
              <InputAdornment position='end'>
                <IconButton
                  sx={{
                    p: '10px 8px',
                    mr: '1px',
                    backgroundColor: 'rgb(254 215 170)',
                    borderRadius: 0,
                    borderTopRightRadius: '0.25rem',
                    borderBottomRightRadius: '0.25rem',
                    '&:hover': {
                      backgroundColor: 'rgb(254 215 170)',
                    },
                  }}
                >
                  <SearchIcon
                    viewBox='0 0 17 16'
                    sx={{ height: '16px', width: '17px', color: 'rgb(51, 65, 85)' }}
                  />
                </IconButton>
              </InputAdornment>
            </>
          }
        />
      </FormControlStyled>
    </Box>
  );
};

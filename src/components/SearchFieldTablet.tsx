import {
  Box,
  FormControl,
  FormControlProps,
  IconButton,
  InputAdornment,
  keyframes,
  OutlinedInput,
  OutlinedInputProps,
  styled,
} from '@mui/material';
import { useState } from 'react';
import { CrossIcon, LeftArrow } from './CustomIcons';

const startAnimation = keyframes`
  0% {
    transform: translateX(50%);
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity 1;
  }
`;

const InputStyled = styled(OutlinedInput)<OutlinedInputProps>({
  padding: 0,
  '& .MuiOutlinedInput-input': {
    fontSize: '16px',
    fontFamily: 'system-ui',
    height: '40px',
    lineHeight: '24px',
    boxSizing: 'border-box',
    caretColor: '#ea580c',
    '&::placeholder': {
      opacity: 0.8,
    },
  },
});

const FormControlStyled = styled(FormControl)<FormControlProps>({
  animation: `${startAnimation} 0.3s;`,
  padding: '8px 0 11px 0',
  '& .MuiInputAdornment-root': {
    margin: 0,
  },
  '& .MuiInputBase-input ': {
    padding: '8px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
});

interface Props {
  onClose: () => void;
}

export const SearchFieldTablet: React.FC<Props> = ({ onClose }) => {
  const [value, setValue] = useState('');
  const [isExit, setIsExit] = useState(false);

  const handlerClose = () => {
    setIsExit(true);

    setTimeout(onClose, 300);
  };

  return (
    <Box sx={{ flexGrow: 1, transition: ' opacity 0.3s', opacity: isExit ? 0 : 1 }}>
      <FormControlStyled sx={{ height: 38, width: 1 }} variant='outlined'>
        <InputStyled
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder=' Search for courses'
          sx={{ flexGrow: 1 }}
          startAdornment={
            <InputAdornment position='start'>
              <IconButton
                onClick={handlerClose}
                sx={{
                  p: '0',
                  width: 15,
                }}
              >
                <LeftArrow
                  viewBox='0 0 13 13'
                  sx={{ height: '13px', width: '15px', color: '#000' }}
                />
              </IconButton>
            </InputAdornment>
          }
          endAdornment={
            value && (
              <InputAdornment position='end'>
                <IconButton onClick={() => setValue('')} sx={{ mr: '-8px' }}>
                  <CrossIcon
                    viewBox='0 0 13 13'
                    sx={{ height: '13px', width: '13px', color: '#000' }}
                  />
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControlStyled>
    </Box>
  );
};

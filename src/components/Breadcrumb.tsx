import {
  Box,
  Breadcrumbs,
  BreadcrumbsProps,
  Link,
  LinkProps,
  styled,
  Typography,
} from '@mui/material';
import { SeparatorIcon } from './CustomIcons';

interface Props {
  a?: any;
}

const BreadcrumbsStyled = styled(Breadcrumbs)<BreadcrumbsProps>({
  fontSize: '14px',
  '& .MuiBreadcrumbs-li': {
    height: '20px',
  },
});

const LinkStyled = styled(Link)<LinkProps>(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '20px',
  color: 'rgb(71 85 105)',
  '&:hover': {
    color: theme.palette.primary.light,
  },
}));

export const Breadcrumb: React.FC<Props> = () => {
  return (
    <Box sx={{ p: '17px 0 0',px: {xs: '16px', md: '32px'} }}>
      <BreadcrumbsStyled separator={<SeparatorIcon viewBox='0 0 7 11' sx={{ width: 7, height: 12 }} />}>
        <LinkStyled underline='none' color='inherit' href='https://acharyaprashant.org/en/courses'>
          Home
        </LinkStyled>
        <Typography component='span' sx={{fontSize: '14px', fontFamily: 'Eczar', lineHeight: '20px', height: 20, fontWeight: 500}}> संतवाणी</Typography>
      </BreadcrumbsStyled>
    </Box>
  );
};

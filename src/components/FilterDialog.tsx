import {
  Dialog,
  DialogProps,
  List,
  ListItem,
  ListItemText,
  ListProps,
  Stack,
  styled,
} from '@mui/material';
import { SeparatorIcon } from './CustomIcons';

const DialogStyled = styled(Dialog)<DialogProps>(({ theme }) => ({
  background: 'rgba(51, 65, 85, 0.3)',
  '& .MuiDialog-paper': {
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)',
    borderRadius: '8px',
  },
  '& .MuiDialog-container': { justifyContent: 'flex-start', alignItems: 'flex-start' },
  '& .MuiPaper-root': {
    margin: '100px 0 0 100px',
    width: '198px',
    height: '401px',
    paddingTop: '16px',
  },
  '& .MuiListItem-root': {
    padding: '2px 16px',
    '&:hover': {
      backgroundColor: 'rgb(241 245 249)',
      color: theme.palette.primary.light,
      '& .MuiTypography-root': {
        color: theme.palette.primary.light,
      },
    },
  },
  '& .MuiTypography-root': {
    fontSize: '14px',
    lineHeight: '20px',
    color: 'rgb(71, 85, 105)',
  },
}));

const ListStyled = styled(List)<ListProps>({
  padding: '16px 0px',
  boxSizing: 'border-box',
  minWidth: '150px',
  backgroundColor: '#fff',
  height: '417px',
  overflowY: 'auto',
  borderRadius: '8px',
  borderLeft: '1px solid rgb(202, 213, 225)',
  '& .MuiTypography-root': {
    color: 'rgb(71, 85, 105) !important',
    '&:hover': {
      color: 'inherit !important',
    },
  },
});

export interface FilterDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  tags: any;
}

export function FilterDialog(props: FilterDialogProps) {
  const { onClose, selectedValue, open, tags } = props;

  const parentTags = tags[0];
  const childrenTags = tags[1];

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <DialogStyled onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        <ListItem
          button
          onClick={() => handleListItemClick('All')}
          sx={{ position: 'relative' }}
          className='label1'
        >
          <ListItemText primary={'All'} />
          <Stack
            sx={{
              display: 'none',
              '.label1:hover &': { display: 'flex' },
              position: 'fixed',
              left: '298px',
              top: '100px',
            }}
          ></Stack>
        </ListItem>
        {parentTags.map((parentTag: any) => (
          <ListItem
            button
            onClick={() => handleListItemClick(parentTag.name.english)}
            key={parentTag.tagId}
            className='label1'
          >
            <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
              <ListItemText primary={parentTag.name.english} />
              {parentTag.hasChildren && (
                <SeparatorIcon viewBox='0 0 7 11' sx={{ height: 11, width: 7, ml: '10px' }} />
              )}
            </Stack>
            <Stack
              sx={{
                display: 'none',
                '.label1:hover &': { display: 'flex' },
                position: 'fixed',
                left: '298px',
                top: '100px',
              }}
            >
              {parentTag.hasChildren && (
                <ListStyled>
                  {childrenTags
                    .filter((childrenTag: any) => childrenTag.parent === parentTag.tagId)
                    .map((tag: any) => (
                      <ListItem
                        button
                        onClick={() => handleListItemClick(tag.name.english)}
                        key={tag.tagId}
                        sx={{ position: 'relative' }}
                        className='label1'
                      >
                        <ListItemText primary={tag.name.english} />
                      </ListItem>
                    ))}
                </ListStyled>
              )}
            </Stack>
          </ListItem>
        ))}
      </List>
    </DialogStyled>
  );
}

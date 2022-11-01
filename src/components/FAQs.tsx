import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { TypographyProps } from '@mui/system';
import { useState } from 'react';

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  fontSize: '18px',
  lineHeight: '28px',
  marginBottom: '4px',
}));

const SubTitle = styled(Typography)<TypographyProps>({
  color: '#000',
  fontSize: '16px',
  lineHeight: '24px',
});

interface Props {
  a?: any;
}

export const FAQs: React.FC<Props> = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Stack
      direction='row'
      sx={{
        backgroundImage: 'linear-gradient(to bottom, #f8fafc, rgb(248 250 252 / 0))',
        py: '64px',
        px: { xs: '16px', md: '80px' },
      }}
    >
      <Box sx={{ width: 1 / 3 }}>
        <Title>FAQs</Title>
        <SubTitle>
          Can`t find the answer you`re looking for? Reach out to our{' '}
          <Link
            underline='none'
            color='primary.light'
            href='https://acharyaprashant.org/technical-support'
          >
            support
          </Link>{' '}
          team
        </SubTitle>
      </Box>
      <Box sx={{ width: 2 / 3, pl: '96px' }}>
         <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{
            background: 'none',
            boxShadow: 'none',
            borderBottom: expanded === 'panel1' ? 'none' : '1px solid rgb(202 213 225)',
            '&.MuiAccordion-root': {
              borderRadius: 0,
              margin: 0,
              '&::before': {
                display: 'none'
              }
            },
            
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: '(148, 163, 184)' }} />}
            sx={{
              p: 0,
              '&.MuiButtonBase-root': {
                minHeight: '24px',
              },
              '& .Mui-expanded': {
                m: 0,
              },
              '& .MuiAccordionSummary-content': {
                margin: '16px 0'
              }
            }}
          >
            <Typography sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '16px' }}>
              कोई भी कोर्स आचार्य प्रशांत के यूट्यूब वीडियो से कैसे अलग है?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: '0 32px 16px 0' }}>
            <Typography>
              कोर्स के सभी वीडियो-सत्र सिर्फ़ इस प्लेटफार्म पर उपलब्ध हैं। (कुछ वीडियो के कुछ हिस्से
              किन्हीं सोशल मीडिया प्लेटफॉर्म पर उपलब्ध हो सकते हैं। हालाँकि, इनकी संरचना, परीक्षण और
              प्रक्रियाओं के साथ पूरा पाठ्यक्रम इस प्लेटफॉर्म के अलावा कहीं और उपलब्ध नहीं है।)
            </Typography>
          </AccordionDetails>
        </Accordion>
         <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          sx={{
            background: 'none',
            boxShadow: 'none',
            borderBottom: expanded === 'panel2' ? 'none' : '1px solid rgb(202 213 225)',
            '&.MuiAccordion-root': {
              borderRadius: 0,
              margin: 0,
              '&::before': {
                display: 'none'
              }
            },
            
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ fill: '(148, 163, 184)' }} />}
            sx={{
              p: 0,
              '&.MuiButtonBase-root': {
                minHeight: '24px',
              },
              '& .Mui-expanded': {
                m: 0,
              },
              '& .MuiAccordionSummary-content': {
                margin: '16px 0'
              }
            }}
          >
            <Typography sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '16px' }}>
              कोई भी कोर्स आचार्य प्रशांत के यूट्यूब वीडियो से कैसे अलग है?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: '0 32px 16px 0' }}>
            <Typography>
              कोर्स के सभी वीडियो-सत्र सिर्फ़ इस प्लेटफार्म पर उपलब्ध हैं। (कुछ वीडियो के कुछ हिस्से
              किन्हीं सोशल मीडिया प्लेटफॉर्म पर उपलब्ध हो सकते हैं। हालाँकि, इनकी संरचना, परीक्षण और
              प्रक्रियाओं के साथ पूरा पाठ्यक्रम इस प्लेटफॉर्म के अलावा कहीं और उपलब्ध नहीं है।)
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
};

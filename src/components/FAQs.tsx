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
import { useEffect, useState } from 'react';

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

export const FAQs: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [faqs, setFaqs] = useState<any>(null);

  useEffect(() => {
    fetch('https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi')
      .then((res) => res.json())
      .then((faqs) => setFaqs(faqs));
  }, []);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    faqs && (
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
          {faqs.map((faq: any, index: number) => (
            <Accordion
              key={faq.question}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                background: 'none',
                boxShadow: 'none',
                borderBottom: expanded === `panel${index}` ? 'none' : '1px solid rgb(202 213 225)',
                '&.MuiAccordion-root': {
                  borderRadius: 0,
                  margin: 0,
                  '&::before': {
                    display: 'none',
                  },
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
                    margin: '16px 0',
                  },
                }}
              >
                <Typography sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '16px' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: '0 32px 16px 0' }}>
                <Typography>{faq.answer.slice(3, faq.answer.length - 4)}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Stack>
    )
  );
};

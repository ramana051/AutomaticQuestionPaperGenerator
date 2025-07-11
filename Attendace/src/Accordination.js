import React from 'react';
import { Accordion, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyAccordion = () => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography>Accordion Title</Typography>
      </AccordionSummary>
    </Accordion>
  );
};

export default MyAccordion;

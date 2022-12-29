import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionItem({classes, name, children, open}){
  return (
    <Accordion className={classes} defaultExpanded={open}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {name}
      </AccordionSummary>
      <AccordionDetails className={`${classes} details`}>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}
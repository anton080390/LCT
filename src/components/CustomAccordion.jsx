import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CustomAccordion({ items, multiple, backgroundColor }) {
  const [expanded, setExpanded] = useState(multiple ? [] : null);

  const handleChange = (panel) => (event, expandedItem) => {
    if (multiple) {
      setExpanded((prevExpanded) =>
        expandedItem
          ? [...prevExpanded, panel]
          : prevExpanded.filter((item) => item !== panel)
      );
    } else {
      setExpanded(expandedItem ? panel : null);
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <Accordion
          key={index}
          expanded={
            multiple
              ? expanded.includes(`panel${index}`)
              : expanded === `panel${index}`
          }
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ backgroundColor: backgroundColor || "#F3F3F3" }}
          >
            <Typography sx={{ fontSize: "1.125rem" }}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default CustomAccordion;

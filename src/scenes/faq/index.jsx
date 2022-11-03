import {
  Box,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page." />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maiores laborum adipisci odit culpa eaque enim temporibus
            repellendus vitae sunt quia, cum exercitationem, nesciunt
            dignissimos laudantium vero corporis vel deserunt!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An More Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maiores laborum adipisci odit culpa eaque enim temporibus
            repellendus vitae sunt quia, cum exercitationem, nesciunt
            dignissimos laudantium vero corporis vel deserunt!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An More Super Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maiores laborum adipisci odit culpa eaque enim temporibus
            repellendus vitae sunt quia, cum exercitationem, nesciunt
            dignissimos laudantium vero corporis vel deserunt!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An More Super Duper Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maiores laborum adipisci odit culpa eaque enim temporibus
            repellendus vitae sunt quia, cum exercitationem, nesciunt
            dignissimos laudantium vero corporis vel deserunt!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Extremely More Super Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maiores laborum adipisci odit culpa eaque enim temporibus
            repellendus vitae sunt quia, cum exercitationem, nesciunt
            dignissimos laudantium vero corporis vel deserunt!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Final Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maiores laborum adipisci odit culpa eaque enim temporibus
            repellendus vitae sunt quia, cum exercitationem, nesciunt
            dignissimos laudantium vero corporis vel deserunt!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;

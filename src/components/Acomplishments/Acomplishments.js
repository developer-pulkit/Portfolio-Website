import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {platform:'',text: "" },
  {platform:'',text: "" },
  {platform:'',text: "" }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle></SectionTitle>
    <Boxes>
      {data.map((card, index) => (
         <Box key={index}>
         <BoxNum>{card.platform}</BoxNum>
         <BoxText>{card.text}</BoxText>
       </Box>
      )
      )}
    </Boxes>
  </Section>
);

export default Acomplishments;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome <br/>
        To My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I Enjoy Creating Products That Tell A Story, Delight Users And Build Brand Awareness. 
      </SectionText>
      <SectionTitle main center>
        Career Objective
      </SectionTitle>
      <SectionText>
      Looking to obtain the position of Software Developer in tech environment to utilize well honed skills in computer science and extensive experience in developing customized software based on varying client demands. Seamlessly manages workloads and meets challenging deadlines and quality benchmarks. Strong understanding of common web technologies, languagues and frameworks.
      </SectionText>
      {/* <Button onClick={()=>window.location='https://google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;
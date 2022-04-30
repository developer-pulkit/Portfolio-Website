import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck} from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";

const Header = () => (
  <container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white",marginTop:"19px"  }}>
          <DiCssdeck size="3rem" />
          <span>Portfolio</span>
        </a>
      </Link>
    </Div1> 
    <Div2>
      <li style={{margin:"10px"}}>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li style={{margin:"10px"}}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li style={{margin:"10px"}}>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/297pulkitmehta">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/dev-pulkit-mehta">
        <AiFillLinkedin size="3rem" />s
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/?hl=en">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </container>
);

export default Header;

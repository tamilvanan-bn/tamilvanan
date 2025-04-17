import React from "react";
import logo from "../assets/my-logo.png";
import { FaCode, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-0"
            width={150}
            height={150}
            alt="logo"
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/tamilvanan-in"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/tamilvanan-b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.discordapp.com/users/1326166844452634755"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord profile"
          title="Discord"
        >
          <FaDiscord />
        </a>
        <a
          href="https://leetcode.com/u/tamilvanan-b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode profile"
          title="LeetCode"
        >
          <FaCode />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

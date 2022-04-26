import React from "react";
import { navMenu } from "src/data/nav-menu";
import Container from "./Container";
import Link from "next/link";
import SocialLinks from "./social-links";
import { me } from "src/data/me";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800">
      <Container className="text-center flex flex-col gap-8">
        <h3 className="text-3xl font-bold">Rohid</h3>
        <ul className="gap-6 flex items-center justify-center flex-wrap">
          {navMenu.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <SocialLinks className="text-xl items-center justify-center flex-wrap" />
        <p className="text-gray-600 dark:text-gray-300">
          © 2022 {me.doamin}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

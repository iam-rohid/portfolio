import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaPatreon, FaTwitter } from "react-icons/fa";

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <ul className={classNames("flex gap-6", className)}>
      <li>
        <Link href="https://github.com/rohidisdev">
          <a
            target="_blank"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          >
            <FaGithub />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/rohidisdev">
          <a
            target="_blank"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          >
            <FaTwitter />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://instagram.com/rohidisdev">
          <a
            target="_blank"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          >
            <FaInstagram />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.patreon.com/rohid">
          <a
            target="_blank"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          >
            <FaPatreon />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;

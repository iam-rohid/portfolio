import { useEffect, useState } from "react";
import { useColorScheme } from "src/contexts/color-scheme";
import { MdLightMode, MdDarkMode, MdMenu, MdClose } from "react-icons/md";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Container from "src/components/Container";

export const menu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Snippets",
    href: "/snippets",
  },
  {
    label: "Tags",
    href: "/tags",
  },
];

export const NavigationBar = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", showSidebar);
  }, [showSidebar]);

  return (
    <>
      <header className="w-full bg-white dark:bg-gray-900 sticky top-0">
        <nav className="">
          <Container className="flex items-center gap-6 h-14">
            <div className="flex-1 md:hidden">
              <button
                className={`flex items-center justify-center text-2xl`}
                onClick={() => setShowSidebar(!showSidebar)}
              >
                {showSidebar ? <MdClose /> : <MdMenu />}
              </button>
            </div>
            <ul className="flex-1 gap-6 hidden md:flex">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex gap-6">
              <li>
                <Link href="/">
                  <a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 text-xl">
                    <FaGithub />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 text-xl">
                    <FaInstagram />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 text-xl">
                    <FaTwitter />
                  </a>
                </Link>
              </li>
            </ul>

            <button
              className="w-14 h-8 rounded-full bg-gray-100 dark:bg-gray-800 relative group"
              onClick={() => toggleColorScheme()}
            >
              <MdLightMode className="absolute left-2 top-2 opacity-30" />
              <MdDarkMode className="absolute right-2 top-2 opacity-30" />
              <div
                className={`transition-[left] duration-300 w-6 h-6 absolute top-1 ${
                  colorScheme === "light" ? "left-1" : "left-7"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-gray-800 dark:bg-white rounded-full flex items-center justify-center transition-[background-color] duration-300`}
                ></div>
                <div
                  className={`w-full h-full inset-0 z-10 flex items-center justify-center absolute text-gray-50 dark:text-gray-800 transition-transform duration-500 ease-in-out ${
                    colorScheme === "light" ? "-rotate-180" : ""
                  }`}
                >
                  {colorScheme === "light" ? <MdLightMode /> : <MdDarkMode />}
                </div>
              </div>
            </button>
          </Container>
        </nav>
      </header>
      <div
        className={`fixed left-0 right-0 bottom-0 top-14 z-40 md:hidden ${
          showSidebar ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 w-full h-full bg-black z-40 transition-[background-color] duration-300  ${
            showSidebar ? "bg-opacity-50" : "bg-opacity-0"
          }`}
          onClick={() => setShowSidebar(false)}
        />
        <aside
          className={`max-w-[80%] w-80 bg-white dark:bg-gray-900 transition-[left] duration-300 ease-in-out absolute top-0 bottom-0 z-50 overflow-y-auto ${
            showSidebar ? "left-0" : "-left-80"
          }`}
        >
          <nav>
            <ul className="py-4">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <a
                      onClick={() => setShowSidebar(false)}
                      className="py-4 px-6 w-full block hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default NavigationBar;

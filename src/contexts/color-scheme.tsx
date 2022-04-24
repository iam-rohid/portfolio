import Head from "next/head";
import type { ReactNode } from "react";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

export type ColorScheme = "light" | "dark";

export type ColorSchemeContextType = {
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
  toggleColorScheme: () => void;
};

const ColorSchemeContext = createContext<ColorSchemeContextType | null>(null);

export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme | null>(null);
  const toggleColorScheme = () => {
    if (colorScheme === "light") {
      setColorScheme("dark");
    } else if (colorScheme === "dark") {
      setColorScheme("light");
    }
  };

  useEffect(() => {
    console.log(colorScheme);
    if (colorScheme !== null) {
      document.documentElement.classList.toggle("dark", colorScheme === "dark");
      localStorage.setItem("theme", colorScheme);
    }
  }, [colorScheme]);

  useEffect(() => {
    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const lsTheme = localStorage.getItem("theme") as ColorScheme;
    console.log({ lsTheme });
    setColorScheme(lsTheme || (isSystemDark ? "dark" : "light"));
  }, []);

  if (!colorScheme) {
    return null;
  }

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme,
        setColorScheme,
        toggleColorScheme,
      }}
    >
      <Head>
        <meta
          name="theme-color"
          content={colorScheme === "dark" ? "#18181B" : "#fff"}
        />
      </Head>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorSchemeProvider;

export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext);
  if (context === null) {
    throw new Error("useColorScheme must be used within a ColorSchemeProvider");
  }
  return context;
};

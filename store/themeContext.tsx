
import { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
  isLightTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function ThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isLightTheme, setIsLightTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isLightTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isLightTheme", `true`);
      document!.querySelector("body")!.classList.add("dark");
      setIsLightTheme(true);
    } else {
      const isLightTheme: boolean = JSON.parse(
        localStorage.getItem("isLightTheme")!
      );
      isLightTheme && document!.querySelector("body")!.classList.add("dark");
      setIsLightTheme(() => {
        return isLightTheme;
      });
    }
  }

  function toggleThemeHandler(): void {
    const isLightTheme: boolean = JSON.parse(
      localStorage.getItem("isLightTheme")!
    );
    setIsLightTheme(!isLightTheme);
    toggleLightClassToBody();
    setValueToLocalStorage();
    {console.log(isLightTheme)}
  }

  function toggleLightClassToBody(): void {
    document!.querySelector("body")!.classList.toggle("dark");
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isLightTheme", `${!isLightTheme}`);
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme: true, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
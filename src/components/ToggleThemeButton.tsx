import {
  useMantineColorScheme,
  Button,
  Group,
  ActionIcon,
} from "@mantine/core";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

export default function ToggleThemeButton() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  //   const [theme, setTheme] = useState("light");
  const dark = useRef<boolean>(false);
  const toggleTheme = () => {
    // setDark((prev) => !prev);
    if (dark.current === true) {
      dark.current = false;
      setColorScheme("light");
    } else if (dark.current === false) {
      dark.current = true;
      setColorScheme("dark");
    }
  };
  useEffect(() => {
    // toggleTheme();
    dark.current === false;
    toggleTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ActionIcon
      variant="outline"
      color={dark.current ? "yellow" : "blue"}
      onClick={() => toggleTheme()}
      title="Toggle color scheme"
    >
      {dark.current ? (
        // <MoonIcon style={{ width: 18, height: 18 }} />
        <SunIcon style={{ width: 18, height: 18 }} />
      ) : (
        // <SunIcon style={{ width: 18, height: 18 }} />
        <MoonIcon style={{ width: 18, height: 18 }} />
      )}
    </ActionIcon>
    // <Group>
    //   <Button onClick={() => setColorScheme("light")}>Light</Button>
    //   <Button onClick={() => setColorScheme("dark")}>Dark</Button>
    //   <Button onClick={() => setColorScheme("auto")}>Auto</Button>
    //   <Button onClick={clearColorScheme}>Clear</Button>
    // </Group>
  );
}

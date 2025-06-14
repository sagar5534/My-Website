import React from "react";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Toggle } from "@radix-ui/react-toggle";
import { MoonIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Toggle
      pressed={isDark}
      onPressedChange={handleToggle}
      className="relative flex h-8 w-8 cursor-default items-center justify-center rounded-lg"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="absolute"
          >
            <MoonIcon
              className={
                "h-5 w-5 cursor-pointer text-secondary transition-colors hover:text-primary"
              }
            />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="absolute"
          >
            <SunIcon
              className={
                "h-5 w-5 cursor-pointer text-secondary transition-colors hover:text-primary"
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Toggle>
  );
}

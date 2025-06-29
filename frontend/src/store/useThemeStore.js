import {create} from "zustand";

export const useThemeStore = create((set) =>({
    theme: localStorage.getItem("chat-theme") || "coffee",
    setTheme: (theme) =>{
        localStorage.setItem("chat-theme", theme);
        set({theme});
    },
    toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("chat-theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme); // 👈 applies new theme
      return { theme: newTheme };
    });
  },
}));
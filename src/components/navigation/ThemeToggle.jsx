import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "@hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-xl rounded-full transition-colors hover:bg-button/10 cursor-pointer"
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {theme === 'dark' 
        ? <FaSun />
        : <FaMoon />
      }
    </button>
  );
}

export default ThemeToggle;
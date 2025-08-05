// 📦 Компонент переключения темы с иконками
 // Используем Material Icons для иконок
import {DarkMode, LightMode as Sun} from '@mui/icons-material';



const ThemeSwitcher = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button onClick={toggleTheme} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
            {prefersDarkMode ? <Sun /> : <DarkMode />}
        </button>
    );
};

export default ThemeSwitcher;

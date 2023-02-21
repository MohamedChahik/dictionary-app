import { FC, useState } from "react";

import { ThemeContext } from "./config/contexts/theme-context";
import { AppRouter } from "./config/router/AppRouter";
import { Header } from "./utils/ui/Header";

const App: FC = () => {
	// Detecting the default theme
	const isBrowserDefaulDark = () =>
		window.matchMedia("(prefers-color-scheme: dark)").matches;

	const getDefaultTheme = (): string => {
		const localStorageTheme = localStorage.getItem("default-theme");
		const browserDefault = isBrowserDefaulDark() ? "light" : "dark";
		return localStorageTheme || browserDefault;
	};

	const [theme, setTheme] = useState(getDefaultTheme());

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={`theme-${theme}`}>
				<Header>
					<AppRouter />
				</Header>
			</div>
		</ThemeContext.Provider>
	);
};

export default App;

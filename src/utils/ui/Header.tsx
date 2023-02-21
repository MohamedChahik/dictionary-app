import { FC, PropsWithChildren, useContext } from "react";
import { ThemeContext } from "../../config/contexts/theme-context";
import "./header.scss";

export const Header: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleThemeChange = () => {
		const isCurrentDark = theme === "light";
		setTheme(isCurrentDark ? "dark" : "light");
		localStorage.setItem("default-theme", isCurrentDark ? "dark" : "light");
	};

	return (
		<div className="header">
			<div className="mb-2">
				<nav className="header-content  py-2 md:py-4">
					<div className="container px-4 mx-auto md:flex md:items-center">
						<div className="flex justify-between items-center">
							<img
								className="w-18 h-16 cursor-pointer"
								src={"./logo.png"}
								alt={"Logo"}
							/>
						</div>
						<div
							className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
							id="navbar-collapse"
						>
							<select name="fonts" className="mr-5 bg-transparent">
								<option value="Serif">Serif</option>
								<option value="bodoni">Bodoni</option>
							</select>

							<div className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-transparent hover:text-indigo-700 transition-colors duration-300">
								<label className="relative inline-flex items-center cursor-pointer">
									<input
										type="checkbox"
										value=""
										className="sr-only peer"
										onChange={handleThemeChange}
										checked={theme === "dark"}
									/>
									<div className="w-11 h-6 bg-transparent hover:bg-transparent peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
										<button
											type="button"
											className={`toggle-btn__input-label`}
											onClick={handleThemeChange}
										></button>
									</div>
								</label>
							</div>
							<div className="hover:text-white">
								<img
									className="w-18 h-10"
									src={"./halfmoon.png"}
									alt={"Logo"}
								/>
							</div>
						</div>
					</div>
				</nav>
			</div>
			{children}
		</div>
	);
};

// import { FC, PropsWithChildren, useContext } from "react";
// import { ThemeContext } from "../../config/contexts/theme-context";
// import "./header.scss";

// export const Header: FC<PropsWithChildren<unknown>> = ({ children }) => {
// 	const { theme, setTheme } = useContext(ThemeContext);

// 	const handleThemeChange = () => {
// 		const isCurrentDark = theme === "light";
// 		setTheme(isCurrentDark ? "dark" : "light");
// 		localStorage.setItem("default-theme", isCurrentDark ? "dark" : "dark");
// 	};

// 	return (
// 		<header className="header">
// 			<div className="header-content">
// 				<a href="/" className="logo-section">
// 					<span>Light/Dark mode app</span>
// 				</a>
// 				<div className="toggle-btn-section">
// 					<div className={`toggle-checkbox m-vertical-auto`}>
// 						<input
// 							className="toggle-btn__input"
// 							type="checkbox"
// 							name="checkbox"
// 							onChange={handleThemeChange}
// 							checked={theme === "dark"}
// 						/>
// 						<button
// 							type="button"
// 							className={`toggle-btn__input-label`}
// 							onClick={handleThemeChange}
// 						></button>
// 					</div>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };

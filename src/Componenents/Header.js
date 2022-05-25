/** @format */

import React from "react";
import DarkModeToggle from "./Funyionality/DarkMode";
import ScrollToTop from "./Funyionality/ScrollToTop";
import Logo from "./Header/Logo";
import SearchBox from "./Header/SearchBox";
function Header() {
	return (
		<div className='sticky top-0 z-30'>
			<div className='rounded-xl py-4 px-4 flex flex-col  space-y-4 sm:space-y-0 sm:flex-row justify-between items-center bg-blue-800 dark:bg-[#6B7787]'>
				<Logo text='Notepad App' />
				<SearchBox />
				<DarkModeToggle />
			</div>
			<ScrollToTop />
		</div>
	);
}

export default Header;

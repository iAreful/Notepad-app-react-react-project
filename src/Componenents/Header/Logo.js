/** @format */

import React from "react";

function Logo(props) {
	return (
		<div className='text-3xl font-bold  text-white dark:text-[#ffc845]'>
			<h1>{props.text}</h1>
		</div>
	);
}

export default Logo;

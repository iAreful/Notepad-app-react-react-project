/** @format */

import React from "react";

function SearchBox({ handleSearchNote }) {
	return (
		<div>
			<input
				className='w-[15rem] sm:w-48 xl:w-96 p-2 rounded-xl'
				type='text'
				placeholder='find your notes...'
				onChange={(event) => handleSearchNote(event.target.value)}
			/>
		</div>
	);
}

export default SearchBox;

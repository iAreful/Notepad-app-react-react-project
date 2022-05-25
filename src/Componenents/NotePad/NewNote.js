/** @format */

import React from "react";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
function NewNote({ handleAddNoteText }) {
	const [addText, setAddText] = useState([]);

	const handleChange = (event) => {
		if (chracterLimit - event.target.value.length >= 0) {
			setAddText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (addText.trim().length > 0) {
			handleAddNoteText(addText);
			setAddText("");
		}
	};

	const chracterLimit = 200;

	return (
		<div
			id=''
			className='border-0 bg-green-400  rounded-xl p-4 w-[16rem] my-4 mx-2'>
			<textarea
				className='block h-48 bg-green-400 outline-0 focus:outline-none w-[14rem] resize-none overflow-auto overflow-x-hidden p-4 text-justify tracking-wider rounded-xl mb-2 text-violet-600 font-medium placeholder-black '
				name='fdf'
				id=''
				cols='8'
				rows='10'
				placeholder='Add new Note...'
				value={addText}
				onChange={handleChange}></textarea>

			<div className='border-t-2 border-sky-600 pt-4 flex flex-row justify-between items-center'>
				<span className='text-black font-medium'>
					{chracterLimit - addText.length} Remaining
				</span>
				<button onClick={handleSaveClick}>
					<FaSave className='text-2xl' />
				</button>
			</div>
		</div>
	);
}

export default NewNote;

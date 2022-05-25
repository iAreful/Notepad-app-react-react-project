/** @format */

import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
function Note({ id, data, date, handleDeleteNote }) {
	// var today = new Date();
	// var dd = String(today.getDate()).padStart(2, "0");
	// var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	// var yyyy = today.getFullYear();
	// today = mm + "/" + dd + "/" + yyyy;

	return (
		<div
			id=''
			className='border-0 bg-yellow-200  rounded-xl p-4 w-[16rem] my-4 mx-2'>
			<span className='whitespace-pre-wrap block h-48 w-[15rem] overflow-auto overflow-x-hidden pr-4 text-justify tracking-wider'>
				{data}
			</span>
			<div className='border-t-2 border-sky-600 pt-4 flex flex-row justify-between items-center'>
				<code>date: {date} </code>
				<RiDeleteBin2Fill
					onClick={() => handleDeleteNote(id)}
					className='cursor-pointer text-2xl'
				/>
			</div>
		</div>
	);
}

export default Note;

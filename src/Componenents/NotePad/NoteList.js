/** @format */

import React from "react";
import NewNote from "./NewNote";
import Note from "./Note";
function NoteList({ NoteData, handleAddNoteText, handleDeleteNote }) {
	return (
		<div className=''>
			<h2 className='text-center sm:text-left px-4 text-2xl py-1 mt-8 font-bold text-slate-50 dark:text-[#ffc845] '>
				Your Notes
			</h2>
			<div className='flex flex-row flex-wrap justify-center items-center'>
				{NoteData.map((note, i) => (
					<Note
						key={note.id}
						id={note.id}
						data={note.NoteText}
						date={note.NotePublishDate}
						handleDeleteNote={handleDeleteNote}
					/>
				))}

				<NewNote handleAddNoteText={handleAddNoteText} />
			</div>
		</div>
	);
}

export default NoteList;

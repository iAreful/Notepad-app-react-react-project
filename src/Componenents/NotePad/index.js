/** @format */

import React from "react";
import { useState } from "react";
// import NewNote from "./NewNote";
import Logo from "../Header/Logo";
import DarkModeToggle from "../Funyionality/DarkMode";
import NoteList from "./NoteList";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import SearchBox from "../Header/SearchBox";
function NotepadArea() {
	const [notes, setNotes] = useState([
		{
			id: 1,
			NoteText: "A Sample Note 1",
			NotePublishDate: "14/05/2060",
		},
		{
			id: 2,
			NoteText: "A Sample Note 2",
			NotePublishDate: "14/05/2060",
		},
		{
			id: 3,
			NoteText: "A Sample Note 3",
			NotePublishDate: "14/05/2061",
		},
		{
			id: 4,
			NoteText: "A Sample Note 4",
			NotePublishDate: "14/05/2062",
		},
		{
			id: 5,
			NoteText: "A Sample Note 5",
			NotePublishDate: "14/05/2063",
		},
		{
			id: 6,
			NoteText: "A Sample Note 6",
			NotePublishDate: "14/05/2064",
		},
	]);

	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		const saveNotes = JSON.parse(localStorage.getItem("notepad-app"));

		if (saveNotes) {
			setNotes(saveNotes);
		}
	}, []);
	useEffect(() => {
		localStorage.setItem("notepad-app", JSON.stringify(notes));
	}, [notes]);
	const addNewNote = (NoteText) => {
		// console.log(NoteText);
		const currentDate = new Date();
		const getNewNote = {
			id: nanoid(),
			NoteText: NoteText,
			NotePublishDate: currentDate.toLocaleDateString(),
		};
		const newNoteAdd = [...notes, getNewNote];
		setNotes(newNoteAdd);
	};

	const deleteNote = (id) => {
		const getFilterNote = notes.filter((note) => note.id !== id);
		setNotes(getFilterNote);
	};
	return (
		<div className='dark:bg-[#1a5969] bg-blue-800 rounded-xl'>
			<div className=' sticky top-0 z-30 rounded-tl-xl rounded-tr-xl dark:bg-[#1a5969] bg-blue-800 border-b-2 border-white dark:border-[#ffc845] shadow-2xl drop-shadow-2xl'>
				<div className='rounded-xl py-4 px-4 flex flex-col  space-y-4 sm:space-y-0 sm:flex-row justify-between items-center  '>
					<Logo text='Notepad App' />
					<SearchBox handleSearchNote={setSearchText} />
					<DarkModeToggle />
				</div>
			</div>
			<div className=''>
				<NoteList
					NoteData={notes.filter((note) =>
						note.NoteText.toLowerCase().includes(searchText)
					)}
					handleAddNoteText={addNewNote}
					handleDeleteNote={deleteNote}
				/>
				{/* <NewNote /> */}
			</div>
		</div>
	);
}

export default NotepadArea;

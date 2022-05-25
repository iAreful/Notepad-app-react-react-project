/** @format */

import React from "react";
// import Header from "../Header";
import NotepadArea from "../NotePad";
import Footer from "../Footer/Footer";
function HomePage() {
	return (
		<div className='w-11/12 mx-auto p-4 '>
			{/* <Header /> */}
			<NotepadArea />
			<Footer />
		</div>
	);
}

export default HomePage;

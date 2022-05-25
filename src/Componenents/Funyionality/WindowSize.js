/** @format */

import React from "react";
import useWindowSize from "./useWindowSize";

function WindowSize() {
	const size = useWindowSize();
	// function PXtorem(){
	const CurrentWidth = [size.width];
	const CurrentHeight = [size.height];

	//device sizez
	const SmallDeviceDetect = 640;
	const MediumDeviceDetect = 768;
	const LargeDeviceDetect = 1024;
	const ExtraLargeDeviceDetect = 1280;
	const DubleExtraLargeDeviceDetect = 1537;
	const ThreeExtraLargeDeviceDetect = 1921;
	const Four_K_DeviceDetect = 3840;

	var x = CurrentWidth;
	var deviceDetect =
		x < SmallDeviceDetect
			? "Small (sm) device Detect"
			: x < MediumDeviceDetect
			? "Medium (md) device Detect"
			: x < LargeDeviceDetect
			? "Large (lg) device Detect"
			: x < ExtraLargeDeviceDetect
			? "Extra Large (xl) device Detect"
			: x < DubleExtraLargeDeviceDetect
			? "Dubble Extra Large (2xl) device Detect"
			: x < ThreeExtraLargeDeviceDetect
			? "1920p Display (3xl) device Detect"
			: x < Four_K_DeviceDetect
			? "3840p Display (4K) device Detect"
			: "Undefined Device Detect!";
	function FindDeviceSizes() {
		let xsa = deviceDetect;
		// console.log(deviceDetect);
		return xsa;
	}
	function ResponsiveCSSGen() {
		// const dse = CurrentWidth;
		return (
			<div className=''>
				{/* current media quieruies size is . {dse}tada <br />  */}
				@media only screen and (max-width: {CurrentWidth}px) &#123;
				<br />
				&#160;&#160;&#160;.Selector &#123;
				<br />
				&#160;&#160;&#160;
				<br />
				&#160;&#160;&#160;&#125;
				<br /> &#125;
			</div>
		);
	}

	function PxTRemfW() {
		var x = 16,
			rem = (1 / x) * CurrentWidth + " Rem";
		return rem;
	}
	function PxTRemfH() {
		var x = 16,
			rem = (1 / x) * CurrentHeight + " Rem";
		return rem;
	}
	return (
		<div className=' bg-[#ffc845] p-4 rounded-xl my-4'>
			<div className='bg-[#003b49] p-4 rounded-xl my-4'>
				<h2 className='text-3xl font-bold text-center mb-2 text-[#ffc845]'>
					Dimension Pixel{" "}
				</h2>
				<div className='bg-[#1a5969]  p-4 rounded-xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center'>
					<p className=' text-center text-2xl font-bold text-[#ffc845]'>
						Width: {CurrentWidth} PX
					</p>
					<p className=' text-center text-2xl font-bold text-[#ffc845]'>
						Hight: {CurrentHeight} PX
					</p>
				</div>
			</div>
			<div className='bg-[#003b49] p-4 rounded-xl my-4'>
				<h2 className='text-3xl font-bold text-center mb-2 text-[#ffc845]'>
					Dimension REM{" "}
				</h2>
				<div className='bg-[#1a5969]  p-4 rounded-xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between items-center'>
					<p className='text-center text-2xl font-bold text-[#ffc845]'>
						Width: {PxTRemfW()}
					</p>
					<p className='text-center text-2xl font-bold text-[#ffc845]'>
						Hight: {PxTRemfH()}
					</p>
				</div>
			</div>
			<div className='bg-[#003b49] p-4 rounded-xl my-4'>
				<h2 className='text-3xl font-bold text-center mb-2 text-[#ffc845]'>
					Device Detect{" "}
				</h2>
				<div className='bg-[#0e4653] py-4 rounded-xl  flex flex-col sm:flex-col space-y-2 sm:space-y-0 justify-between items-center'>
					<p className='text-2xl font-bold text-center   text-[#ffc845]'>
						{FindDeviceSizes()}
					</p>
				</div>
			</div>
			<div className='bg-[#003b49] p-4 rounded-xl my-4'>
				<h2 className='text-3xl font-bold text-center mb-2 text-[#ffc845]'>
					Device Detect{" "}
				</h2>
				<div className='bg-[#1a5969] py-4 my-4 rounded-xl text-blue-900 flex flex-col sm:flex-col space-y-2 sm:space-y-0 justify-between items-center'>
					<p className='text-[#ffc845] text-xl italic'>{ResponsiveCSSGen()}</p>
				</div>
			</div>

			{/* <p>{PxTRemfW()}width rem</p> */}
			{/* <p>{PxTRemfH()}Height rem</p> */}
			{/* <p>{FindDeviceSizes()}</p> */}
			{/* <p>{ResponsiveCSSGen()}</p> */}

			{/* <p className='text-xl text-black'>
				W={[size.width]}px /{" "}
				<span className='text-violet-400'>{size.height}px</span>{" "}
			</p> */}
		</div>
	);
}
export default WindowSize;

// add Cl  px to rem calclute option

// # I wwant all responsive options

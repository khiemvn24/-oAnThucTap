/** @format */
import React from 'react';
import Body from './Body';
import Menu from './Menu';

export default function Content() {
	return (
		<div className='w-full flex flex-col justify-start items-center'>
			<div
				className=' 2xl:w-[1300px]  xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-full px-2 sm:px-0
>>>>>>> origin/main
			2xl:pt-[70px] xl:pt-[70px] lg:pt-[50px] md:pt-[30px] pt-[25px] 
			'>
				<Menu />
				<div className='w-full h-[40px] sm:h-[60px] md:h-[80px] mt-[15px] sm:mb-[10px] md:mb-[25px]'>
					<a target={'_blank'} href='https://cellphones.com.vn/apple'>
						<img
							src={require(`./Images/banner4.png`)}
							alt=''
							className='w-full h-full'
						/>
					</a>
				</div>
				<Body />
			</div>
		</div>
	);
}
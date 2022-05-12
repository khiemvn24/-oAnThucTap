import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAccount } from '../../Features/AcountSlice';

export default function LoginAdmin() {
    const [password,setPassword] = useState('');
    const [email, setEmail] = useState('');
    const onChangEmail=(e) =>{
        setEmail(e.target.value);
      }
    const onChangPassword=(e) =>{
        setPassword(e.target.value);
    }
    const listAccount = useSelector(state => state.listAccount)
    console.log(listAccount,'dfghjk');
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllAccount())
      }, []);
      const Navigate = useNavigate()
    const handleSubmit = () => {
        const dataNew = listAccount?.listAccount.find(item=>item.Email === email)
        
        // console.log(id);
        if(email==''||password==''){
          alert('Khong duoc de trong Email, Password')
        }else{
          if(!!dataNew){
				if(dataNew.Password === password )
				{
					if(dataNew.role !== 'Khach Hang'){
						alert('Login Admin thành công');
						localStorage.setItem('Admin',JSON.stringify(dataNew))
						Navigate('/Admin')
					}else{
						alert('Tài khoản của bạn không đủ quyền hạn')
					}
					
				}else{
					alert('Email,Password khong dung')
				  }
            }
        else{
            alert('Email,Password khong dung')
          }
        }
      }
     
	
	
	
	return (
		<div className='w-full mx-auto h-full mt-[50px] md:mb-[100px] mb-[0px] lg:mb-[0px] sm:mb-[0px]'>
			<section className='w-full h-full gradient-form bg-[#fff9ef] md:h-screen'>
				<div className='container py-12 px-6 h-full'>
					<div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
						<div className='xl:w-10/12'>
							<div className='block bg-white shadow-lg rounded-lg'>
								<div className='lg:flex lg:flex-wrap g-0'>
									<div className='lg:w-6/12 px-4 md:px-0'>
										<div className='md:p-12 md:mx-6'>
											<div className='text-center'>
												<img
													className='mx-auto w-48'
													src={require('../FooterAndHeader/Images/logo.png')}
													alt='logo'
												/>
												<h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
													Welcom to VNKFood
												</h4>
											</div>
											<p className='mb-4'>
												Please login to your account
											</p>
											<div >
												<div className='mb-4 '>
													<input
														type='email'
														className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                             border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
														placeholder='Email Address'
													
														required
                                                        onChange={onChangEmail}
														value={email}
													/>
												</div>
												<div className='mb-4 '>
													<input
														className='w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                           border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
														type='password'
														placeholder='Password'
														
                                                        onChange={onChangPassword}
														required
														value={password}
													/>
												</div>
												<button
													type='submit'
													className='bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block px-6 py-2.5 text-[#ffffff]  text-[23px]
                            font-medium text-xs leading-tight uppercase rounded shadow-md 
                            hover:bg-[#ff5050] hover:text-[#080808] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
													value='Login'
                                                    onClick={handleSubmit}
												>
													<p>Login</p>
												</button>
											</div>
										</div>
									</div>
									<div
										className='lg:w-6/12 flex flex-col justify-between items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none  
                  bg-gradient-to-r from-[#ee7724] to-[#b44593]'>
										<div className='text-white px-4 py-6 md:p-12 md:mx-6'>
											<h4 className='text-xl font-semibold mb-6'>
												We are more than just a company
											</h4>
											<p className='w-full flex flex-col justify-between items-center'>
												<img
													src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
													className='md:w-[30%] lg:w-full w-full'
													alt='Sampleimage'
												/>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
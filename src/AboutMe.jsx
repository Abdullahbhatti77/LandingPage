
export default function AboutMe() {
  return (
    <>
        <div className='py-20 bg-slate-200 lg:px-16 px-8'>

            <div className='lg:flex'>

                {/* Left Section */}
                <div className='lg:w-1/2'>
                    <p className='flex justify-center lg:text-lg text-sm' data-aos="slide-down" data-aos-duration="400">- SHORT STORY</p>
                    <h1 className='flex justify-center lg:text-6xl mt-3 text-4xl' data-aos="slide-right" data-aos-duration="400">About<span className='font-bold'>Me</span></h1>
                    <h1 className='flex justify-center text-center mt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, error assumenda! Totam quod blanditiis saepe.</h1>

                    <div className='md:flex mt-8 justify-between px-10'>
                        <div className=''>
                            <p className='font-bold'>Full Name</p>
                            <p className='mt-2'>M.Abdullah</p>
                            <p className='font-bold mt-5'>Degree</p>
                            <p className='mt-2'>Bachelors</p>
                            <p className='font-bold mt-5'>Phone</p>
                            <p className='mt-2'>03061564024</p>
                        </div>
                        <div className=''>
                            <p className='font-bold'>Date of Birth</p>
                            <p className='mt-2'>24 April, 2000</p>
                            <p className='font-bold mt-5'>Location</p>
                            <p className='mt-2'>Johar Town, Lahore</p>
                            <p className='font-bold mt-5'>Email</p>
                            <p className='mt-2'>abdullah.dev160@gmail.com</p>
                        </div>
                    </div>
                    <div className='lg:pl-10 lg:flex lg:justify-start flex justify-center'>
                        <button className='outline outline-black text-balck hover:outline-none hover:text-white hover:bg-[#EE9F2A] transition duration-500 ease-in-out px-12 py-3 mt-10' data-aos="slide-up" data-aos-duration="400">DOWNLOAD CV</button>
                    </div>
                </div>

                {/* Right section */}
                <div className='lg:w-1/2 p-2 flex items-center justify-center lg:mt-0 mt-10'>
                    <img src='./aboutme.jpg' className='w-full lg:w-[400px] lg:h-[400px]' data-aos="slide-left" data-aos-duration="400"></img>
                </div>

            </div>

            {/* <Cards /> */}

        </div>
    </>
  )
}

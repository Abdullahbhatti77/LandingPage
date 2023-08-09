import {BiLogoFacebookCircle} from 'react-icons/bi'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

export default function Hero() {
    return (
        <>
            <div className='lg:flex lg:px-16 px-8 py-24'>

                <div className='lg:w-3/5'>
                    <div data-aos="slide-left" data-aos-offset="200" data-aos-duration="600" className=''>
                        <p className='text-6xl lg:text-[88px] text-black font-bold leading-none'>Oscar</p>
                        <p className='text-6xl lg:text-[88px] text-[#EE9F2A] font-bold leading-1'>Simplixie.</p>
                    </div>
                    <div className='lg:mt-10 mt-5 flex space-x-5' data-aos="slide-up" data-aos-duration="600" data-aos-offset="200">
                        <BiLogoFacebookCircle className='w-8 h-8 outline outline-white text-blue-600' />
                        <AiFillTwitterCircle className='w-8 h-8 outline outline-white text-blue-600' />
                        <AiFillGoogleCircle className='w-8 h-8 outline outline-white text-red-500' />
                        <AiFillGithub className='w-8 h-8 outline outline-white text-black' />
                    </div>
                </div>

                <div className='lg:w-2/5' data-aos="slide-down" data-aos-offset="200" data-aos-duration="600">
                    <p className='text-lg lg:mt-0 mt-20'>- Introduction</p>
                    <p className='text-3xl mt-2'>I am a professional freelancer</p>
                    <p className='py-8'>I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user.</p>
                    <div className='lg:flex lg:justify-start flex justify-center'>
                        <button className='transition duration-500 ease-in-out outline outline-[#EE9F2A] w-48 py-3 px-6 hover:bg-[#EE9F2A] hover:outline-none hover:text-white'>READ MORE</button>
                    </div>
                </div>


            </div>
        </>
    )
}

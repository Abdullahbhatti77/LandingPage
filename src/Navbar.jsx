export default function Navbar() {
    return (
        <>
        <div className="bg-slate-200">
            <nav className='flex lg:justify-between lg:items-center lg:py-5 sticky top-0  z-10 lg:px-16 px-8'>
                <div className='flex items-center'>
                    <img src='./logo.jpg' className='w-10 h-10'></img>
                </div>
                <div className='flex lg:space-x-20 space-x-5'>
                    <p className="hover:bg-[#EE9F2A] hover:text-white cursor-pointer p-2 rounded-md">About Me</p>
                    <p className="hover:bg-[#EE9F2A] hover:text-white cursor-pointer p-2 rounded-md">My Work</p>
                    <p className="hover:bg-[#EE9F2A] hover:text-white cursor-pointer p-2 rounded-md">My Resume</p>
                    <p className="hover:bg-[#EE9F2A] hover:text-white cursor-pointer p-2 rounded-md">Contact</p>
                </div>
            </nav>
        </div>
        </>
    )
}

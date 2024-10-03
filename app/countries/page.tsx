import Link from 'next/link';

const page = () => {
  return (
    <div className=' h-screen w-full flex flex-col justify-center items-center gap-20'>
        <h1 className="text-6xl text-800 font-semibold">Countries</h1>
        <ul className='text-4xl gap-10 list-disc'>
            <li className='hover:text-teal-800 hover:font-bold'>
                <Link href={'countries/pakistan'}>Pakistan</Link>
            </li>
            <li className='hover:text-teal-800 hover:font-bold'>
                <Link href={'countries/india'}>India</Link>
            </li>
            <li className='hover:text-teal-800 hover:font-bold'>
                <Link href={'countries/canada'}>Canada</Link>
            </li>
            <li className='hover:text-teal-800 hover:font-bold'>
                <Link href={'countries/germany'}>Germany</Link>
            </li>
        </ul>
    </div>
  )
}

export default page
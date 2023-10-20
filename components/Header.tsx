import Image from 'next/image';
import Link from 'next/link';
import Github from './GitHub';

export default function Header() {
  return (
    <header className="flex justify-center items-center w-full border-b-1 pt-12 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3 items-center">
        <Image
          alt="Magic Write"
          src="/magic-write.svg"
          className="sm:w-8 sm:h-8 w-8 h-8"
          width={32}
          height={32}
        />
        <h1 className="text-2xl font-bold ml-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-950 to-gray-500">
          Magicwrite
        </h1>
      </Link>
      {/* <a
        href="https://github.com/iamsahebgiri/magic-write"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold space-x-2 leading-6 text-gray-600 whitespace-no-wrap bg-white border-2 border-gray-200 rounded-full hover:bg-gray-50 focus:outline-none focus:shadow-none"
      >
        <Github />
        <p>Github</p>
      </a> */}
    </header>
  );
}

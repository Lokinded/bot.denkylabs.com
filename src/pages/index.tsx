import Image from 'next/future/image';
import Link from 'next/link';
import logo from '../assets/denky_logo_566x566.png';

export default function IndexRoute() {
  return (
    <main className="w-full max-w-full max-h-full h-full flex-col">
      <div className="flex top-0 border-b-4 border-purple-600 justify-center px-5">
        <div className="flex flex-row items-center w-full space-x-6">
          <div className="rounded-lg overflow-hidden">
            <Image className="h-[50px] w-[50px]" src={logo} />
          </div>
          <div className="flex flex-row space-x-5">
            <Link href="/support" passHref>
              <a className="text-blurple font-semibold">Support</a>
            </Link>

            <Link href="/vote" passHref>
              <a className="text-blurple font-semibold">Vote</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-end justify-center flex-col">
          <a href="/add" className="bg-[1D1E28] border-2 border-purple-600 px-6 py-2 rounded-lg font-semibold text-white hover:bg-purple-600 transition-all duration-300">
            Add
          </a>
        </div>
      </div>
    </main>
  );
}

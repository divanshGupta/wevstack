import Button from "../Buttons/Button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-2 border-b-dim-gray border-opacity-30">
      <nav className="px-6 sm:px-10 md:px-10 pt-1 pb-2 xl:pb-4 2xl:pb-6 border-opacity-20 mt-2 xl:mt-6 2xl:mt-8  flex items-center justify-between text-accent">
        <Link aria-label='Back To Home' href='/'>
          <h1 className='font-extrabold hidden md:block md:text-h2'>WEVSTACK</h1>
          <h1 className='text-4xl md:hidden block font-extrabold'>W<span className='font-light'>S.</span></h1>
        </Link>

        {/* <div>
          <input type="input" />
        </div> */}

        <div className="flex items-center gap-x-8">
          <Link className="font-medium hidden sm:block relative overflow-hidden group h-fit text-base xl:text-h6 2xl:text-h5" href="/about">
            <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">About</span>
            <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline">About</span>
          </Link>
          <Button target="_blank" href="https://docs.google.com/forms/d/1s2IQUaTPSWInkaBgIhEJrrUfvRpQvDCcQoBShi1Yo7U/edit">Add Resource</Button>
        </div>
      </nav>
    </header>
  );
}

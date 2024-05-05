import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import logo from "../../../public/big-wevstack.svg";

export default function Footer() {
  const links = [
    {
      id: 1,
      href: "/about",
      label: "About",
    },
    {
      id: 2,
      href: "https://docs.google.com/forms/d/1s2IQUaTPSWInkaBgIhEJrrUfvRpQvDCcQoBShi1Yo7U/edit",
      label: "Add a resource",
    },
    {
      id: 3,
      href: "",
      label: "Submit feedback",
    },
    {
      id: 4,
      href: "https://github.com/divanshGupta/wevstack",
      label: "Contribute on Github",
    },
  ];

  return (
    <footer className=" px-6 md:px-8 mt-32 mb-16 sm:mb-0">
      <div className="border-b border-b-dim-gray flex items-center justify-center p-6">
        <Image src={logo} alt="WEVSTACK" className=""/>
      </div>
      <div className="flex flex-col gap-y-12 gap-x-2 md:flex-row items-start justify-between pt-6 pb-10 text-text">
        <div className="gap-y-4 b-8 flex flex-col text-base xl:text-h6 2xl:text-h5">
          
          <div className="flex w-80 gap-x-1 xl:w-96 ">
            <span className="w-fit flex-nowrap whitespace-nowrap">
              Designed by{" "}
            </span>
            <Link
              className="font-bold relative overflow-y-hidden w-full group"
              target="_blank"
              href="https://www.linkedin.com/in/divyansh-raj-gupta/"
            >
              <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                Divyansh
              </span>
              <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline flex-nowrap whitespace-nowrap">
                Divyansh :)
              </span>
            </Link>
          </div>

        </div>
        <ul className=" grid-cols-1 md:grid-cols-2 grid gap-x-8 gap-y-3">
          {links.map((link) => (
            <li
              key={link.id}
              className="flex w-fit group text-base xl:text-h7 2xl:text-h6"
            >
              {link.id === 2 || link.id === 4 ? (
                <Link
                  className="group"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              ) : (
                <Link className="group" href={link.href}>
                  {link.label}
                </Link>
              )}
              <span className="relative overflow-hidden h-fit w-fit">
                <GoArrowUpRight className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
                <GoArrowUpRight className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
              </span>
            </li>
          ))}
        </ul>
      </div>

      
    </footer>
  );
}

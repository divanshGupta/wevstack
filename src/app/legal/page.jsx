import profile from "../../../public/profile.jpg";
import Image from "next/image";
import Clipboard from "../libs/Clipboard";

export default function About() {
  return (
    <div className="my-20 flex-col flex lg:grid lg:grid-cols-12">
      <div className="text-display col-span-4">
        <h1 className="mb-8 lg:pl-8">
          Legal <span className="text-light-gray">Info</span>
        </h1>
      </div>
      <div className=" col-start-6 col-span-5 max-w-xl lg:max-w-none text-h5 md:text-h4 leading-[130%] text-light-gray font-medium space-y-7">
        <p className="space-y-8 flex flex-col">

          <span>
            All trademarks, logos, brand and company names are the property of
            their respective owners.
          </span>

        </p>
        <div className="flex items-center gap-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              className=" scale-150"
              placeholder="blur"
              src={profile}
              alt="profile photo of Divyansh Gupta"
            />
          </div>
          <div className="text-primary text-base xl:text-h6 2xl:text-h5 font-medium flex flex-col">
            <p className=" leading-tight">Divyansh Gupta</p>
            <Clipboard />
          </div>
        </div>
      </div>
    </div>
  );
}

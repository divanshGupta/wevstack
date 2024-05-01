import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function ResourceCard({ resource }) {
  const { title, category, thumbnail, tags, slug } = resource.fields;

  // Extract tag names from the tags reference field
  const tagNames = tags.map((tag) => tag.fields.tags);
  tagNames.sort()


  return (
    <Link href={`/resources/${slug}`} className="bg-dark-charcoal border-4 border-outline rounded-xl border-opacity-15  overflow-hidden w-full hover:border-opacity-50 transition-colors duration-150 ease-in group">
      <div className=" bg-super-dark-gray flex relative items-center justify-center pb-[50%] pt-[50%] rounded-b-2xl">
        <div className="absolute w-2/3 rounded-3xl overflow-hidden transition-all shadow-shine group-hover:shadow-bright bg-transparent bg-opacity-0 ">
          <img className="h-full w-full" src={thumbnail} alt={title}></img>
        </div>
      </div>
      
      <div className=" bg-dark-charcoal p-6 flex flex-col @[30rem]:flex-row @[30rem]:items-center justify-between items-start gap-y-4">
        <div>
          <h2 className="font-semibold text-h6 xl:text-h5">{title}</h2>
          <div className="tags">
            {tagNames.map((tag, index) => (
              <span className="pr-3 text-xs xl:text-sm 2xl:text-base text-light-gray" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center px-3 py-1 bg-primary rounded-full text-super-dark-gray font-semibold text-xs xl:text-sm 2xl:text-base">
          <span>{category.fields.categories}</span>
        </div>
      </div>
    </Link>
  );
}

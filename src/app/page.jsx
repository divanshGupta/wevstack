import { getContent } from "./utils/getContent";
import Menu from "@/Components/Category/Menu";
import MobileMenu from "@/Components/Category/MobileMenu";
import ResourceContainer from "@/Components/Resource/ResourceContainer";
import Trending from "@/Components/Trending/Trending";

export default async function Home({ searchParams }) {
  const { category } = searchParams;
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "20";
  const { items: categories } = await getContent({
    content_type: "wevstack",
    order: ["fields.title"],
    include: 2,
  });

  return (
    <main className="bg-[222831]">
      <section className="px-6 md:px-12 mx-auto flex flex-col items-center space-y-5 mt-10 mb-24">
          {/* <div className=" rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]">
            <div className="flex bg-slate-200 h-full w-full items-center justify-center bg-[#1e1e1e] back rounded-md p-2">
              <h1 className="text-xs text-white">Updated Weekly</h1>
            </div>
          </div> */}
          <h1 className="leading-snug text-display max-w-[20ch] text-center text-[EEEEEE]">
          Resources You Need {" "}
            For Your
            <span className=" text-light-gray"> Development And Design Project.
          </span>
        </h1>
        <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
          Navigate the web development landscape effortlessly with our curated collection of web dev resources.
        </p>
      </section>
      <section className="px-6 md:px-12">
        <MobileMenu categories={categories} />
        <Menu categories={categories} />
          <ResourceContainer
            category={category}
            page={page}
            per_page={per_page}
          />
          {/* <Trending/> */}
      </section>
    </main>
  );
}

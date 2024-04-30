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
    <main>
      <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-32">
        <h1 className=" text-display max-w-[20ch] text-center text-accent">
          Assorted resources{" "}
          <span className=" text-light-gray">
            for frontend developers and web designers.
          </span>
        </h1>
        <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
          Explore curated and handpicked goodies that enhance your workflow and
          cultivate your growth as a developer and designer.
        </p>
      </section>
      <section>
        <MobileMenu categories={categories} />
        <Menu categories={categories} />
          <ResourceContainer
            category={category}
            page={page}
            per_page={per_page}
          />
          <Trending/>
      </section>
    </main>
  );
}

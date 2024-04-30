// Library
import { getContent } from "@/app/utils/getContent";
import ResourceCard from "./ResourceCard";
import Pagination from "../Pagination/Pagination";


export default async function ResourceContainer({ category, page, per_page }) {
  const {items: resources, total} = await getContent({
    content_type: "wevstack",
    skip: Number(page - 1) * Number(per_page),
    limit: Number(per_page),
    order: ["fields.title"],
    "fields.category.sys.contentType.sys.id": "resourcesPage",
    "fields.category.fields.categories": category === "all" ? null : category,
  });

  
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {resources.map((resource) => {
          return <ResourceCard key={resource.sys.id} resource={resource}/>
        })}
      </div>
      <Pagination
        hasNextPage={resources.length === Number(per_page)}
        hasPrevPage={Number(page) > 1}
        total={total}
      />
    </>
  );
}

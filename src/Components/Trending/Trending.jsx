import { getContent } from "@/app/utils/getContent"

export default async function Trending() {
    const { items: contents } = await getContent({
        content_type: "wevstack",
    })
  return (
    <div>
      {contents.map((content)=>{
        return <div key={content.sys.id}>{content.fields.status}</div>
      })}
    </div>
  )
}

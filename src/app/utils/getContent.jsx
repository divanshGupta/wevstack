import { createClient } from "contentful";
import conf from "../conf/conf";

//statically generate resources from contentful

export async function getContent ({content_type, ...rest}) {
    const client = createClient({
        space: conf.spaceId,
        accessToken: conf.accessToken,
    });
    const { items, total } = await client.getEntries({
        content_type,
        ...rest
    });
    return { items, total };
}
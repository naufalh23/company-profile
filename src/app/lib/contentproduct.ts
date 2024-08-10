const base_url = process.env.CONTENTFUL_BASE_URL
const space_id = process.env.CONTENTFUL_SPACE_ID
const token = process.env.CONTENTFUL_ACCESS_TOKEN
import resolveResponse from 'contentful-resolve-response'

export const getBlogs = async () => {
    const res = await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=product`, { next: {  revalidate: 10 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items
}

// export const getTestimoni = async () => {
//     const res = await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=product&include=10`, { next: {  revalidate: 100 } })
//     const data = await res.json()

//     const response = {
//         items: data.items,
//         includes: data.includes
//     };
      
//     const items = resolveResponse(response)

//     return items
// }

export const getBlogSlug = async (slug: string) => {
    const res = await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=product&fields.slug=${slug}`, { next: {  revalidate: 3600 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items[0]
}


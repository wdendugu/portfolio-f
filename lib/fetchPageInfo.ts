import { PageInfo } from "@/typings";

export const  fetchPageInfo   = async () => {
    const res = await fetch ('https://portfolio-f-b5sw.vercel.app//api/getPageInfo')

    process

    const data = await res.json()

    const pageInfo: PageInfo = data.pageInfo
    
    //console.log(pageInfo)

    return pageInfo

}
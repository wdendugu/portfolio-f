import { Social } from "@/typings";

export const fetchSocials = async () => {
    const res = await fetch ('https://portfolio-f-b5sw.vercel.app/api/getSocials')

    const data = await res.json()

    const socials: Social[] = data.socials
    
    //console.log(socials)

    return socials

}
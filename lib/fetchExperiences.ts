import { Experience } from "@/typings";

export const fetchExperiences = async () => {
    const res = await fetch ('https://portfolio-f-drab.vercel.app/api/getExperiences')

    const data = await res.json()

    const experiences: Experience[] = data.experiences
    
    //console.log(experiences)

    return experiences

}
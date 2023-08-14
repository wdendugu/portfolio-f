import { Experience } from "@/typings";

export const fetchExperiences = async () => {
    const res = await fetch ('https://portfolio-f-b5sw.vercel.app/api/getExperiences')

    const data = await res.json()

    const rawExperiences: Experience[] = data.experiences
    
    const experiences = rawExperiences.sort((a, b) => Date.parse(b.dateStarted) - Date.parse(a.dateStarted));
        
    return experiences

}
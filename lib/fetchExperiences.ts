import { Experience } from "@/typings";

export const fetchExperiences = async () => {
    const res = await fetch ('https://portfolio-f-drab.vercel.app/api/getExperiences')

    const data = await res.json()

    const rawExperiences: Experience[] = data.experiences
    
    const experiences = rawExperiences.sort((a, b) => {
        const dateA = new Date(a.dateStarted) as any as number;
        const dateB = new Date(b.dateStarted) as any as number;
        return dateB - dateA;
      });
    
    return experiences

}
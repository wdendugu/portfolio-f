import { Skill } from "@/typings";

export const fetchSkills = async () => {
    const res = await fetch ('https://portfolio-f-b5sw.vercel.app/api/getSkills')

    const data = await res.json()

    const skills: Skill[] = data.skills
    
    //console.log(skills)

    return skills

}
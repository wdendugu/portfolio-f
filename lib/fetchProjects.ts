import { Project } from "@/typings";

export const fetchProjects = async () => {
    const res = await fetch ('https://portfolio-f-drab.vercel.app/api/getProjects')

    const data = await res.json()

    const projects: Project[] = data.projects
    
    //console.log(projects)

    return projects

}
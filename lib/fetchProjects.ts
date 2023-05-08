import { Project } from "@/typings";

export const fetchProjects = async () => {
    const res = await fetch ('https://portfolio-f-drab.vercel.app/api/getProjects')

    const data = await res.json()

    const rawprojects: Project[] = data.projects
    
    const projects = rawprojects.sort((b, a) => {
        const dateA = new Date(a._createdAt) as any as number;
        const dateB = new Date(b._createdAt) as any as number;
        return dateB - dateA;
      });

    return projects

}
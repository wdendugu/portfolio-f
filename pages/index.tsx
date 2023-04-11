import Head from 'next/head'
// import Header from "../components/Header"
// import Hero from '../components/Hero'
// import About from '@/components/About'
// import ExperienceC from '@/components/ExperienceC'
// import Skills from '@/components/Skills'
// import Projects from '@/components/Projects'
// import Contact from '@/components/Contact'
import { GetServerSideProps, GetStaticProps} from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'
import { ThemeContextProvider } from '../store/themeContext'  

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


export default function Home({pageInfo, experiences, skills, projects, socials}: Props) {
  return (
    <ThemeContextProvider>
      <div className='bg-[rgb(36,36,36)] dark:bg-[#FDE9D7] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F8AB0A]/80 dark:scrollbar-thumb-[#333333]/80'>
        <Head>
          <title>Felito Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <Header socials={socials}/>

        <section id='hero' className='snap-center'>
          <Hero pageInfo={pageInfo}/>
        </section>

        <section id='about' className='snap-center'>
          <About pageInfo={pageInfo}/>
        </section>

        <section id='experience' className='snap-center'>
          <ExperienceC experiences={experiences}/>
        </section>

        <section id='skills' className='snap-center'>
          <Skills skills={skills}/>
        </section>

        <section id='projects' className='snap-center'>
          <Projects projects={projects}/>
        </section>

        <section id='contact' className='snap-start'>
          <Contact />
        </section> */}

      </div>
    </ThemeContextProvider>
  )
}
// Cambiar a SSR //
// export const getStaticProps :  GetStaticProps <Props>= async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials
//     },
//     revalidate: 10,
//   }

// }

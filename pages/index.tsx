import Courses from '../components/courses/Courses'
import Header from '../components/header/Header'
import Hero from '../components/Hero'
import Projects from '../components/projects/Projects'

export default function Home() {
  return (
    <>
        <main className="flex flex-col w-11/12 mx-auto max-w-[1200px] grow shrink-0 basis-auto">
          <Hero />
          <div className="mb-8">
            <h2 className="text-4xl font-medium text-white">
              Projects
            </h2>
          </div>
          <Projects />
          <div className="mb-8">
            <h2 className="text-4xl font-medium text-white">
              Courses
            </h2>
          </div>
          <Courses />
        </main>
    </>
  )
}

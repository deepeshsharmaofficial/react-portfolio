import { FaGithub, FaVideo } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"

const Project = ({projects}) => {
  return (
    <section className="sm:px-16 px-4 sm:pt-24 py-12 flex justify-center bg-gray-100" id="projects">
        <div className="max-w-screen-xl">
            <h2 className="text-2xl md:text-3xl text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-x-10 gap-y-10">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 bg-white border border-gray-200 shadow rounded-lg">
                        <div className="rounded-lg overflow-hidden relative group">
                            <img
                                src={project.image} 
                                alt={project.name}
                                width={1000}
                                height={1000}
                                className="border border-slate-100 rounded-lg"
                            />

                        </div>
                        <div className="my-2 flex flex-col gap-3 content-between">
                            <h3 className="text-lg md:text-xl font-bold">{project.name}</h3>
                            <p className="text-sm text-gray-900"> <span className="font-medium">Tech Stack:</span> {project.techstack}</p>
                            <div>
                                <div className="flex">
                                    {
                                        project.links.visit && 
                                        <a href={project.links.visit} className="hover:scale-110 bg-white text-gray-700 transition-all p-2"><BiLinkExternal size={20} /></a>
                                    }
                                    {
                                        project.links.code && 
                                        <a href={project.links.code} className="hover:scale-110 bg-white text-gray-700 transition-all p-2"><FaGithub size={20} /></a>                                        
                                    }
                                    {
                                    project.links.video && 
                                        <a href={project.links.video} className="hover:scale-110 bg-white text-gray-700 transition-all p-2"><FaVideo size={20} /></a>                                        
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
               
            </div>
        </div>
    </section>
  )
}

export default Project;
import ExperienceCard from "../component/ExperienceCard";

const Experience = ({experiences}) => {
  return (
    <section className="sm:px-16 px-4 sm:pt-24 py-12 flex justify-center" id="experience">
        <div className="max-w-screen-xl w-full">
            <h2 className="text-2xl md:text-3xl text-center">Experience</h2>
            <div className="relative mt-20">
                <div className="absolute left-4 md:left-1/2 border-[1px] border-blue-400 border-opacity-50 h-full "></div>
                {
                    experiences.map((e) => (
                        <ExperienceCard key={e.id} item={e}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Experience;
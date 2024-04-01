import React from 'react'

const Skills = ({skills}) => {
    return (
        <section className="sm:px-16 px-4 sm:pt-24 py-12 flex justify-center bg-gray-100/50" id="skills">
            <div className="max-w-screen-xl">
                <h2 className="text-2xl md:text-3xl text-center">Tech Stack</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-12 gap-y-8 px-12 mt-20">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col justify-center items-center gap-2">
                            <div className="h-20 w-20 md:h-28 md:w-28 rounded-full dark:bg-gray-100 flex justify-center items-center">
                                <img width={100} height={100} className="h-12 w-12 md:h-16 md:w-16 object-contain" src={skill.image} alt={skill.name} />
                            </div>
                            <p>
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;
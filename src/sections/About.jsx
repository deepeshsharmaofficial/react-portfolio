import React from 'react'
import Button from '../component/Button';

const About = ({about}) => {
    return (
    <section className="sm:px-16 px-4 sm:pt-24 py-12 flex justify-center" id="about-us">
        <div className="max-w-screen-lg">
            <h2 className="text-2xl md:text-3xl text-center">About Me</h2>
            <div className="w-full flex flex-col md:flex-row justify-center gap-10 mt-20">
                <div className="flex-1 w-full">
                    <img 
                        src={about.aboutImage}
                        alt={about.name}
                        className="rounded-2xl grayscale hover:grayscale-0 hover:-translate-y-3 transition-all duration-300"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-3">
                    <p className="text-2xl font-semibold">{about.name}</p>
                    <p className="text-sm text-blue-800 rounded bg-blue-50 py-1 px-2 w-fit">{about.title}</p>
                    <p className="text-sm md:text-base my-2 text-gray-600">{about.about}</p>
                    <Button text={"Resume"} link={about.resume}/>
                </div>
            </div>
        </div>        
    </section>
    )
}

export default About;
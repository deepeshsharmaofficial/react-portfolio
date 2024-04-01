import React from 'react'
import Button from '../component/Button';
import * as Fa from 'react-icons/fa';
import { heroBackground } from '../assets/images';

const Hero = ({hero, socialMedia}) => {
  return (
    <section className="relative sm:px-16 px-4 pt-24 pb-12 flex justify-center min-h-screen" id="home">
        <div className="absolute -z-10 min-h-screen h-full w-full">
          <img src={heroBackground} alt="Hero Background" />
        </div>

        <div className="max-w-screen-lg w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            <div className="flex-1 flex flex-col gap-6 md:gap-8 text-center md:text-left">
              <div className="flex gap-2 justify-center md:justify-start">
                <img src={hero.icon} alt="icon" width={30} height={30} />
                <span className="text-lg">
                  Hi
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">{hero.name}</h2>
              <p className="text-lg md:text-2xl">{hero.profile}</p>

              <div className="flex flex-row gap-2 justify-center md:justify-start">
                  {
                      socialMedia.map((social) => (
                          <div key={social.id} className="p-3 rounded-full text-lg text-white bg-blue-600 transition-colors">
                              <a href={social.link} target="_blank">
                                  {React.createElement(Fa[`${social.icon}`])}
                              </a>
                          </div>
                      ))
                  }
              </div>

              <div className="mx-auto md:mx-0 mt-3">
                <Button text={"About Me"} link={"#about-us"}/>
              </div>
            
            </div>
            <div className="flex-2 mx-auto">
              <div className="w-56 md:w-96 h-56 md:h-96">
                <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                    alt=""
                    className="rounded-full"
                />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;
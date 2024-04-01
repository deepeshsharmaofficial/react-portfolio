import React from 'react'
import { socialMedia } from '../constants';
import * as Fa from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <section className="m:px-16 px-4 lg:py-6 py-4 flex justify-center items-end bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-screen-xl flex flex-col md:flex-row justify-between w-full items-center">
            <div className="text-white pb-4 md:pb-0">Made with<span className="animate-pulse"> ❤️ </span>by Deepesh Sharma</div>
            <div className="flex flex-row gap-2">
                {
                    socialMedia.map((social) => (
                        <div key={social.id} className="p-3 rounded-full text-lg text-gray-700 bg-gray-100 transition-colors">
                            <a href={social.link} target="_blank">
                                {React.createElement(Fa[`${social.icon}`])}
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer;
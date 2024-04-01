const Education = ({educations}) => {
  return (
    <section className="sm:px-16 px-4 sm:pt-24 py-12 flex justify-center" id="education">
        <div className="max-w-screen-xl w-full lg:w-[70%] xl:w-[60%]">
            <h2 className="text-2xl md:text-3xl text-center">Education</h2>
            <div className="mt-20">
                {
                    educations.map((e) => (
                      <div key={e.id} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 mb-5">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={e.image} alt={e.institute} />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                          <h3 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900">{e.degree}</h3>
                          <p className="mb-3 text-base font-normal text-gray-700">{e.institute}</p>
                          <h4 className="text-sm">{e.duration}</h4>
                        </div>
                      </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Education;
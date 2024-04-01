import { MdSchool } from "react-icons/md";

const ExperienceCard = ({item}) => {
  return (
    <>
    <div className={`flex justify-between mb-4 items-center flex-row-reverse ${item.id % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className="w-full md:w-5/12 bg-gray-100 px-6 py-6 ml-3 md:ml-0 rounded-lg border border-gray-200 shadow">
            <h3 className="text-lg font-bold mb-2">{item.company || item.institute}</h3>
            <p className="text-sm font-medium text-gray-900">{item.position || item.degree} | {item.duration}</p>
            <ul className="text-sm text-gray-800 list-disc ml-4 mt-4">
                {item?.desc?.map((d, index) => (
                    <li key={index}>
                        {d}
                    </li>
                ))}
            </ul>
        </div>
        <span className="bg-blue-200 text-blue-600 text-xl z-10 rounded-full ring-4 md:ring-8 ring-white p-2 md:p-3"><MdSchool /></span>
        <div className="w-0 md:w-5/12"></div>
    </div>
    </>
  )
}

export default ExperienceCard;
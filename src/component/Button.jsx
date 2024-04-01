const Button = ({text, link}) => {
  return (
    <>
      <a className="text-sm md:text-base bg-blue-600 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow" targe="_blank" href={link}>{text}</a>
    </>
  )
}

export default Button;
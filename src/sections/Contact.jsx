const Contact = () => {

    return (
        <section className="px-4 sm:px-16 sm:py-24 py-12 flex justify-center bg-gray-100/50" id="contact-us">
            <div className="max-w-screen-xl w-full">
                <h2 className="text-center text-2xl md:text-3xl">Contact Me</h2>
                <form className="flex flex-col gap-4 w-full md:w-[80%] lg:w-1/2 m-auto mt-20">
                    <input placeholder="Name*" required type="text" name="name" id="" className="border-none outline-none form-input bg-gray-200 placeholder-gray-500 rounded-md py-3 px-4" />
                    <input placeholder="Email*" required type="email" name="email" id="" className="border-none outline-none form-input bg-gray-200 placeholder-gray-500 rounded-md py-3 px-4"/>
                    <textarea placeholder="Message*" required name="message" id="" cols="30" rows="10" className="border-none outline-none form-textarea bg-gray-200 placeholder-gray-500 rounded-md py-3 px-4" />
                    <button type="submit" className="self-center text-sm md:text-base bg-blue-600 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
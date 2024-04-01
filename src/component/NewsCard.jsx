const NewsCard = ({item}) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
    
        // Padding with leading zeros if necessary
        const formattedDay = day < 10 ? '0' + day : day;
        const formattedMonth = month < 10 ? '0' + month : month;
    
        return formattedDay + '-' + formattedMonth + '-' + year;
    }
    
    const formattedDate = formatDate(item.updated_at);

    return (
        <div
            className="relative overflow-hidden rounded-lg bg-center bg-cover bg-no-repeat shadow-lg h-[300px]"
            data-te-ripple-init
            data-te-ripple-color="light"
        >
            <img
            src={item.image_url ? item.image_url : "https://mdbcdn.b-cdn.net/img/new/standard/nature/044.jpg"}
            className="w-full h-full align-middle transition duration-300 ease-linear"
            />
            
            <a href={item.url} target="_blank">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-end justify-start">
                    <div className="m-6 text-white">
                        <h5 className="mb-3 text-base">
                        {item.title}
                        </h5>
                        <p>
                        <small>
                            Published <u>{formattedDate}</u>
                        </small>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
            </a>

        </div>
    )
}

export default NewsCard;
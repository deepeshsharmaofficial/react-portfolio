import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../component/Loader";
import NewsCard from "../component/NewsCard";

const News = () => {
  const [items, setItems] = useState([]);
  console.log("items: ", items);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const getData = async () => {
      setLoad(true);
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/everything?q=coding&apiKey=${
            import.meta.env.VITE_REACT_APP_NEWSAPI
          }&pageSize=10&page=1`
        );

        setItems(res.data.articles);
      } catch (error) {
        console.log("Error: ", error);
      }
      setLoad(false);
    };
    getData();
  }, []);

  const fetchMoreData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=coding&apiKey=${
          import.meta.env.VITE_REACT_APP_NEWSAPI
        }&pageSize=10&page=${index}`
      );
      
      setItems((prevItems) => [...prevItems, ...res.data.articles]);

    //   res.data.articles.length > 0 ? setHasMore(true) : setHasMore(false);
        // Disable loader if all available items have been loaded
        if (items.length == res.data.totalResults) {
            setHasMore(false);
        }
  
        console.log('res.data.articles.length: ', res.data.articles.length);
    
    } catch (error) {
        setHasMore(false);
        console.log("Error: ", error);
    }
    setLoading(false);
    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    
    <div className="min-h-screen">

      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        // hasMore={items.length !== totalResults}
        loader={ loading && <Loader />}
      >
       
        <section className="sm:px-16 px-8 sm:py-5 py-5 flex justify-center">

          <div className="max-w-[1440px]">

              <h2 className="pt-24 pb-12 text-center text-2xl md:text-3xl">
                Latest articles
              </h2>
              
              {load ? <Loader /> : "" }

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {items && items.map((item, index) => (
                    <NewsCard item={item} key={index}/>
                ))}
              </div>
            </div>

        </section>
       
      </InfiniteScroll>
    </div>
  );
};

export default News;

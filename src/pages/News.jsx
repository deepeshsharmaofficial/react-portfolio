// https://github.com/TheSpaceDevs/Tutorials/
import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../component/Loader";
import NewsCard from "../component/NewsCard";

const News = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(11);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const getData = async () => {
      setLoad(true);
      try {
        const res = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=1");
        setItems(res.data.results);
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
        const res = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=${index}`);
      setItems((prevItems) => [...prevItems, ...res.data.results]);
         if (items.length == res.data.count) {
            setHasMore(false);
        }
  
    
    } catch (error) {
        setHasMore(false);
        console.log("Error: ", error);
    }
    setLoading(false);
    setIndex((prevIndex) => prevIndex + 10);
  };

  return (
    
    <div className="min-h-screen">

      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
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

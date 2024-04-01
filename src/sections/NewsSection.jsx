import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../component/Loader";
import NewsCard from "../component/NewsCard";
import Button from "../component/Button";

const NewsSection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/?limit=3&offset=1");
        setItems(res.data.results);
      } catch (error) {
        console.log("Error: ", error);
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section
          className="sm:px-16 px-4 sm:pt-24 py-12 flex justify-center"
          id="news"
        >
          <div className="max-w-screen-xl">

            <h2 className="mb-12 text-center text-2xl md:text-3xl">Latest articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items &&
                items.map((item, index) => (
                  <NewsCard item={item} key={index} />
                ))}
            </div>

            <div className="flex items-center justify-center pt-8">
              <Button text={"View All"} link={"/news"} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NewsSection;
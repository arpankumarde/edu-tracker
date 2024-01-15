import { useEffect, useState } from "react";
import { Loader, BlogPost, SearchBar, SortButton } from "../components";
import { server } from "../api";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    server
      .get("/blogposts")
      .then((res) => {
        setBlogs(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setIsLoading(false);
      });
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortBlogs = () => {
    const sortedBlogs = [...filteredBlogs].sort(
      (a, b) => new Date(b.date_published) - new Date(a.date_published)
    );
    setBlogs(sortedBlogs);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 p-4 md:p-6 bg-[#fefefe]">
      <div className="lg:w-96">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortButton sortBlogs={sortBlogs} />
      </div>
      <div className="flex-1">
        {isLoading ? (
          <Loader />
        ) : (
          filteredBlogs.map((blog) => <BlogPost key={blog.id} blog={blog} />)
        )}
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { server } from "../api";
import { Loader } from "../components";

const EachBlog = () => {
  const { blogid } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState({
    id: 0,
    title: "",
    content: "",
    date_published: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    server
      .get(`/blogposts/${blogid}`)
      .then((res) => {
        setBlog(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        setIsLoading(false);
        if (err.response.status === 404) navigate("/not-found");
      });
  }, [blogid, navigate]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-8 bg-[#fefefe]">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-2">
              {blog.title}
            </h2>
            <p className="mb-2 lg:text-xl">By: {blog.author}</p>
            <p className="mb-2 lg:text-xl">
              Published on: {new Date(blog.date_published).toDateString()}
            </p>
          </div>
          <hr className="my-4" />
          <div className="text-xl lg:w-1/2">
            <p>{blog.content}</p>
          </div>
          <hr className="mt-4 mb-8" />
          <Link
            to="/"
            className="bg-gray-800 text-white px-4 py-2 rounded-md transition-all shadow-md hover:shadow-xl"
          >
            Back to All Blogs
          </Link>
        </div>
      )}
    </>
  );
};

export default EachBlog;

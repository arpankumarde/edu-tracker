import { Link } from "react-router-dom";

const BlogPost = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog.id}`}
      className="mb-4 last:mb-0 border p-4 rounded-md lg:flex block hover:bg-gray-100 active:bg-gray-200"
    >
      <div className="mb-4 lg:mb-0 lg:w-1/2 lg:pr-4">
        <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        <p className="mb-2">By: {blog.author}</p>
        <p className="mb-2">
          Published on: {new Date(blog.date_published).toDateString()}
        </p>
      </div>
      <div className="lg:w-1/2 lg:pl-4">
        <p className="line-clamp-4 text-ellipsis">{blog.content}</p>
      </div>
    </Link>
  );
};

export default BlogPost;

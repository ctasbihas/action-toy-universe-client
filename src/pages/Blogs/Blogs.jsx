import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useTitle("Blogs");
    
    useEffect(() => {
        fetch('https://action-toy-universe-server.onrender.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Question and Answers</h2>
            <div className="max-w-3xl mx-auto bg-white rounded p-6 shadow">
                {blogs.map((blog) =>
                    <div key={blog._id}>
                        <h2 className="text-2xl font-bold mb-4">{blog.question}</h2>
                        <p className="text-gray-700 mb-6">
                            {blog.answer}
                        </p>
                    </div>)}
            </div>
        </div>
    );
};

export default Blogs;
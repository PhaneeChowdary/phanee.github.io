import React from "react";
import Link from "next/link";
import { blogs } from "../utils/blogs";

interface Blog {
    id: number;
    name: string;
    description: string;
    link: string;
    date_created: string;
    date_modified: string;
    tags?: string[];
}

const BlogPreview = () => {
    // Sort blogs by date_created in descending order and take first 2
    const latestBlogs = [...blogs]
        .sort((a, b) => 
            new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
        )
        .slice(0, 2);

    return (
        <section id="blogs" className="my-10">
            <h2 className="text-xl font-semibold mb-4">Latest Blogs</h2>
            <div className="space-y-4">
                {latestBlogs.map((blog) => (
                    <Link href={blog.link}>
                        <div
                            key={blog.id}
                            className="border p-4 my-4 rounded-lg transform transition-transform duration-300 hover:-translate-y-1 col-auto"
                        >
                         <h3 className="text-xl">{blog.name}</h3>
                            <p className="text-gray-600">{blog.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
    
            <div className="mt-4">
                <Link href="/blogs">
                    <button className="hover:underline">Read more</button>
                </Link>
            </div>
        </section>
    );
};

export default BlogPreview;
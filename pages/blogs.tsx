import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogs } from "../utils/blogs";

const BlogsPage = () => {
    return (
        <Layout>
            <Head>
                <title>Blogs</title>
            </Head>
            <Header />
            <section id="blogs" className="my-10">
                <div className="space-y-4">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="border p-4 rounded-lg transform transition-transform duration-300 hover:-translate-y-1"
                        >
                            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="block hover:no-underline">
                                <h3 className="text-xl">{blog.name}</h3>
                                <p className="text-gray-600">{blog.description}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </Layout>
    );
};

export default BlogsPage;
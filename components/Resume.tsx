import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";

const ResumePage = () => {
    // Helper function to handle basePath for GitHub Pages
    const getDocPath = (path: string) => {
        return path;
    };

    return (
        <Layout>
            <section id="resume" className="my-10">
                <Head>
                    <title>Resume</title>
                </Head>
                <div className="w-full h-screen">
                    <embed
                        src={getDocPath("/PhaneendraBabu.pdf")}
                        type="application/pdf"
                        width="100%"
                        height="100%"
                    />
                </div>
            </section>
        </Layout>
    );
};

export default ResumePage;
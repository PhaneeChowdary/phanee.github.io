import React from "react";
import Experience from "./Experience";
import BlogPreview from "./BlogPreview";
import Achievements from "./Achievements";
import Head from "next/head";

const About = () => {
    return (
        <section id="about" className="my-10">
            <Head>
                <title>Phaneendra Babu Gunturu</title>
            </Head>
            <p className="text-lg text-gray-600">
                I'm a Computer Science Master's student at Indiana University -
                Purdue University Indianapolis (IUPUI), passionate about Deep Learning, Web
                Development, and Coding. With a knack for creating intuitive websites, exploring data's hidden
                stories, and writing elegant code, I'm on a mission to blend
                technology with creativity. Let's connect and collaborate to
                make difference in the digital world!
            </p>
            <Experience />
            <BlogPreview />
            <Achievements />
        </section>
    );
};

export default About;

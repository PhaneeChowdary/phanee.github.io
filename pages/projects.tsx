import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const ProjectsPage = () => {
    return (
        <Layout>
            <Header />
            <Projects />
            <Footer />
        </Layout>
    );
};

export default ProjectsPage;

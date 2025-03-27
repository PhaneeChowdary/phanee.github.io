import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <Layout>
            <Header />
            <About />
            <Footer />
        </Layout>
    );
};

export default Home;

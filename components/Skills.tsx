import React from "react";
import Head from "next/head";

const Skills = () => {
    const skills = [
        {
            category: "Languages",
            items: [
                "Python",
                "R",
                "C++",
                "Java",
                "MySQL",
                "MongoDB",
                "Bash",
                "HTML",
                "CSS",
            ],
        },
        {
            category: "Tools",
            items: [
                "Pandas",
                "NumPy",
                "Excel",
                "Seaborn",
                "Plotly",
                "Tableau",
                "AWS",
                "Git",
                "Postman",
            ],
        },
        {
            category: "Frameworks",
            items: [
                "Django",
                "Flask",
                "Bootstrap",
                "React",
                "OpenCV",
                "SciKit-Learn",
                "TensorFlow",
                "Keras",
                "PyTorch",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Seaborn",
            ],
        },
        {
            category: "Advanced Technologies",
            items: [
                "Machine Learning",
                "Deep Learning",
                "Natural Language Processing",
                "LLMs", "Transformers",
                "Computer Vision",
                "Fine-tuning",
            ],
        },
    ];

    return (
        <section id="skills" className="my-10">
            <Head>
                <title>Skills</title>
            </Head>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {skills.map((skillSet, index) => (
                    <div key={index} className="border p-4 rounded-lg bg-white">
                        <h3 className="text-2xl font-semibold mb-4">
                            {skillSet.category}
                        </h3>
                        <div className="flex flex-wrap space-x-2">
                            {skillSet.items.map((item, i) => (
                                <span
                                    key={i}
                                    className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mb-2"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

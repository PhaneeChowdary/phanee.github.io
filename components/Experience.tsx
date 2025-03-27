import React from "react";

const Experience = () => {
    const experiences = [
        {
            title: "Deep Learning Researcher",
            company: "UbiEi Lab, Indiana University",
            period: "Nov 2024",
            present: true,
        },
        {
            title: "Mathematics tutor",
            company: "Indiana University",
            period: "Jan 2024 - Jan 2025",
        },
        {
            title: "Machine Learning Intern",
            company: "Verzeo",
            period: "Jan 2021 - Dec 2022",
        },
    ];

    return (
        <section id="experience" className="my-10">
            <h2 className="text-xl mb-4 font-semibold">Experience</h2>
            <div className="relative border-gray-500">
                <div className="border-l absolute h-full"></div>
                {experiences.map((experience, index) => (
                    <div key={index} className="ml-6 mb-8 relative">
                        <div className="w-2 h-2 bg-gray-500 rounded-full absolute -left-7"></div>
                        <div>
                            <h3 className="text-xl">
                                {experience.title}{" "}
                                {experience.present && (
                                    <span className="text-gray-500  text-xs uppercase px-1 rounded-full border border-gray-600">
                                        Present
                                    </span>
                                )}
                            </h3>
                            <p className="text-gray-600">
                                {experience.company} ({experience.period} )
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

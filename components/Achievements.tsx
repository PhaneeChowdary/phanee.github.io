import React from "react";
import {
    faAward,
    faCertificate,
    faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Achievements = () => {
    const achievements = [
        {
            title: "Google Kickstart Round G 2022",
            organization: "Google",
            description: "Global Rank 4696",
            icon: faAward,
        },
        {
            title: "TCS CodeVita Season 10",
            organization: "TCS",
            description: "Global Rank 1770",
            icon: faTrophy,
        },
        {
            title: "Certified Outstanding Intern in Machine Learning",
            organization: "Verzeo",
            description: "",
            icon: faCertificate,
        },
    ];

    return (
        <section id="achievements" className="my-10">
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="space-y-3">
                {achievements.map((achievement, index) => (
                    <div key={index} className="border p-4 rounded-lg">
                        <h3 className="text-xl">
                            {achievement.title}, {achievement.organization}
                        </h3>
                        {achievement.description && (
                            <p className="text-gray-600">
                                {achievement.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;

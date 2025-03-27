import React, { useState } from "react";
import Head from "next/head";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<{ email?: string; message?: string }>(
        {}
    );
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: { email?: string; message?: string } = {};
        if (!email) {
            newErrors.email = "Email is required";
        }
        if (!message) {
            newErrors.message = "Message is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If no errors, submit the form
        fetch("https://formspree.io/f/xqazbzon", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        }).then((response) => {
            if (response.ok) {
                setIsSubmitted(true);
                setShowMessage(true);
                setName("");
                setEmail("");
                setMessage("");
            }
        });
    };

    return (
        <section id="contact" className="my-10">
            <Head>
                <title>Contact</title>
            </Head>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Phanee"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="_replyto"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                        placeholder="phanee@gmail.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                        placeholder="Your message here..."
                        style={{ height: "120px" }}
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded-lg"
                >
                    Send
                </button>
            </form>
            {isSubmitted && showMessage && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded relative">
                    <span>Thank you! Your message has been sent.</span>
                    <button
                        className="absolute top-0 right-0 mt-2 mr-2 text-green-700"
                        onClick={() => setShowMessage(false)}
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    );
};

export default Contact;

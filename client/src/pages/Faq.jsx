import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What is NoteSphere?",
      answer:
        "NoteSphere is an online platform where users can upload and access educational notes shared by administrators.",
    },
    {
      question: "Who can upload notes on NoteSphere?",
      answer:
        "Only authorized administrators can upload notes, ensuring the quality and relevance of shared content.",
    },
    {
      question: "How can I download notes?",
      answer:
        "Users can browse available notes and download them with a single click, provided they have an active internet connection.",
    },
    {
      question: "Do I need to create an account to access notes?",
      answer:
        "Yes, users need to sign up or log in to access, search, and download notes securely.",
    },
    {
      question: "Is NoteSphere free to use?",
      answer:
        "Yes, NoteSphere is a free platform that allows students and educators to share and access educational resources.",
    },
    {
      question: "How are notes categorized?",
      answer:
        "Notes are organized based on categories and tags, making it easier for users to find relevant content quickly.",
    },
    {
      question: "Can I request a specific note to be uploaded?",
      answer:
        "Yes, users can request administrators to upload specific notes by submitting a request through the platform.",
    },
    {
      question: "Is my personal data secure on NoteSphere?",
      answer:
        "Yes, NoteSphere implements authentication and security measures to protect user data and uploaded content.",
    },
    {
      question: "Can I access NoteSphere on my mobile device?",
      answer:
        "Yes, NoteSphere is designed to be fully responsive and accessible on mobile devices and tablets.",
    },
  ];

  return (
    <div className="grid place-content-center lg:h-heightWithoutNavbar">
      <div className="mx-auto max-w-[1550px] px-5 py-8 text-center">
        {/* Centered Heading */}
        <h1 className="mb-6 text-3xl font-black">Frequently Asked Questions</h1>

        {/* Centered Grid */}
        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((item, i) => (
            <div key={i} className="w-full max-w-md">
              <h1 className="mb-2 text-lg font-medium sm:text-xl">
                {item.question}
              </h1>
              <p className="border-b pb-2 text-sm text-gray-700 sm:text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

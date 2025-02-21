import React from "react";

const About = () => {
  return (
    <div className="flex h-auto flex-col items-center justify-center lg:h-heightWithoutNavbar lg:flex-row">
      {/* About Image */}
      <div className="flex h-full w-full items-center justify-center py-4">
        <img
          src="./about_vector.svg"
          alt="About Us Image"
          className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[600px] "
        />
      </div>
      {/* About content */}
      <div className="flex h-full w-full items-center justify-center px-4">
        <div className="w-full max-w-[700px]">
          <div className="">
            <h1 className="relative w-fit text-2xl font-bold before:absolute before:top-[90%] before:h-[3px] before:w-[60%] before:bg-[#2563eb] lg:text-4xl lg:before:top-full">
              About Us
            </h1>
            <p className="mt-1 text-[15px] lg:mt-3">
              NoteSphere is a dynamic platform designed to simplify the sharing
              and access of educational resources. We empower students and
              educators with a secure, user-friendly system for uploading,
              organizing, and downloading notes effortlessly, enhancing
              collaborative learning.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="relative w-fit text-2xl  font-bold before:absolute before:top-[90%] before:h-[3px] before:w-[60%] before:bg-[#2563eb] lg:text-4xl lg:before:top-full">
              Who We Are:
            </h1>
            <p className="mt-1 text-[15px] lg:mt-3">
              We are a passionate team committed to transforming digital
              education. Our goal is to provide an intuitive, scalable, and
              structured platform that streamlines note-sharing, ensures
              accessibility, and fosters a community where students and
              educators can exchange knowledge efficiently.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="relative w-fit text-2xl  font-bold before:absolute before:top-[90%] before:h-[3px] before:w-[60%] before:bg-[#2563eb] lg:text-4xl lg:before:top-full">
              Our Mission:
            </h1>
            <p className="mt-1 text-[15px] lg:mt-3">
              Our mission is to revolutionize the way educational resources are
              shared by offering a seamless, well-organized platform. We aim to
              improve learning accessibility, promote collaboration, and
              eliminate the hassle of searching for important study materials in
              scattered sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

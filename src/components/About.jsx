import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hey there! My name is Dwaraka . I am 24 years old and I currently live
          in Hyderabad, Telangana. I'm a BTech graduate in Mechanical
          Engineering from Vignan University, Guntur, completed in the year
          2021.
        </p>

        <br />

        <p className="text-xl">
          I've been learning Frontend Development with HTML, CSS, JavaScript,
          React.js, Tailwind CSS, and Redux . I'm more passionate about Frontend
          Development with React.js and its related technologies. I am always
          looking to learn new technologies also . As of now, I do have a pretty
          decent hands-on experience with React and its ecosystem, and I'm
          getting ready to work.
        </p>
      </div>
    </div>
  );
};

export default About;

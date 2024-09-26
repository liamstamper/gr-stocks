import React from "react";

const AboutPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="max-w-[1025px] w-full flex flex-row justify-center items-center mt-2 mx-auto space-x-5"></div>
      <div className="flex flex-row items-center">
        <div className="font-[poppins-regular] font-medium text-5xl uppercase tracking-wide justify-center text-center flex-grow">
          Gr Stocks.
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-row justify-center items-center mx-auto text-[11px] text-gray-600 space-x-4">
        <a href="#about" className="hover:underline">
          About
        </a>
        <span className="text-gray-400">|</span>
        <a href="#build-process" className="hover:underline">
          Build Process
        </a>
        <span className="text-gray-400">|</span>
        <a href="#updates" className="hover:underline">
          Updates
        </a>
        <span className="text-gray-400">|</span>
        <a href="#more" className="hover:underline">
          More
        </a>
      </div>
      <div className="border border-gray-400 mt-3"></div>

      {/* Live Updates Banner */}
      <div className="w-full h-[35px] mt-[20px] bg-cyan-900 flex justify-center items-center">
        <span className="text-xl font-extrabold text-white">
          LIVE UPDATES | IN-PROGRESS
        </span>
      </div>

      {/* Main Content */}
      <div className="max-w-[800px] w-full flex flex-col mt-4 mx-auto">
        {/* About Section */}
        <div id="about">
          <div className="text-2xl text-left font-bold mx-auto pt-5">
            About This Project - What is it, Why did I build it, and Some
            Details About the Process
          </div>
          <div className="mt-5">
            Gr Stocks is a development project aimed at creating a comprehensive
            Google Finance clone. The application closely mirrors the core
            functionality of Google Finance, offering a user-friendly interface
            to view and track stocks along with features to upload your
            portfolio and track it's value. Its my hope that this app can
            demonstrates the integration of stock data visualizations, live
            updates, and dynamic stock comparisons using modern web technologies
            such as React and Chart.js.
          </div>
        </div>

        {/* Build Process Section */}
        <div id="build-process" className="pt-8">
          <div className="text-2xl text-left font-bold mx-auto pt-5">
            Build Process
          </div>
          <div className="mt-5">
            The Gr Stocks project was built using React for the frontend and
            various other libraries for specific functionalities. Here's a brief
            overview of the tech stack and the steps taken during development:
            <ul className="list-disc pl-5 mt-3 font-medium">
              <li>
                React: The main frontend library used for building the dynamic
                UI and state management.
              </li>
              <li>Tailwind CSS: For rapid UI styling and responsive design.</li>
              <li>
                Chart.js: Used for rendering stock data visualizations in the
                form of interactive charts.
              </li>
              <li>Firebase: for hosting and real-time data storage.</li>
            </ul>
            <p className="mt-5">
              The build process followed agile principles, with regular
              iterations focusing on feature development.
            </p>
            <p className="mt-3">
              Each component, like the stock charts, was built with scalability
              in mind to allow for potential future features such as user
              portfolios, advanced stock comparisons, and personalized stock
              recommendations.
            </p>
          </div>
        </div>

        {/* Updates Section */}
        <div id="updates" className="pt-8">
          <div className="text-2xl text-left font-bold mx-auto pt-5">
            Updates
          </div>
          <div className="mt-5">
            <p>
              The Gr Stocks project is actively being developed with regular
              updates. The focus of the upcoming releases includes:
            </p>
            <ul className="list-disc pl-5 mt-3 font-medium">
              <li>
                Introducing user accounts to allow tracking of portfolios.
              </li>
              <li>Expanding the comparison tool to support more metrics.</li>
              <li>
                Improving mobile responsiveness and performance optimizations.
              </li>
            </ul>
          </div>
        </div>

        {/* More Section */}
        <div id="more" className="py-8">
          <div className="text-2xl text-left font-bold mx-auto pt-5">More</div>
          <div className="mt-5">
            <p>
              Beyond stock tracking, Gr Stocks has the potential to incorporate
              financial news aggregation and personalized stock alerts.
            </p>
            <p className="mt-3">
              In the future, this project could expand to integrate
              cryptocurrency tracking, offering users a comprehensive finance
              platform for all their needs.
            </p>
            <p className="mt-3">
              Feel free to reach out for collaboration opportunities,
              suggestions, or feedback on the Gr Stocks project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

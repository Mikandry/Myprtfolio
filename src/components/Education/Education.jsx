import React from 'react';
import { FaLaravel, FaPhp, FaReact, FaBook } from 'react-icons/fa';

function Education() {
  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Education Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-600 inline-block">
            Education
          </h1>
          <ul className="mt-4 space-y-3 text-lg text-gray-700">
            <li className="flex flex-col space-y-1">
              <strong className="text-xl text-blue-600">University Degree:</strong>
              <span className="text-gray-600">IS-INFO, 2018 - Track: Programming</span>
            </li>
            <li className="flex flex-col space-y-1">
              <strong className="text-xl text-blue-600">Licence:</strong>
              <span className="text-gray-600">IS-IESI, 2014 - Track: Programming and Computer Science</span>
            </li>
            <li className="flex flex-col space-y-1">
              <strong className="text-xl text-blue-600">IS-IESI, 2011:</strong>
              <span className="text-gray-600">Studied Telecommunications</span>
            </li>
          </ul>
        </div>

        {/* Languages Section */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-600 inline-block">
            Languages & Skills
          </h1>
          <ul className="mt-4 space-y-6 text-lg text-gray-700">
            {/* Laravel */}
            <li className="flex items-center gap-4">
              <FaLaravel className="text-3xl text-blue-600" />
              <div>
                <h2 className="text-2xl text-blue-600 font-medium">1. Laravel 11 (Junior)</h2>
                <p className="text-gray-600">
                  Laravel is my preferred PHP framework, used for building scalable web applications with elegant syntax.
                </p>
              </div>
            </li>
            {/* PHP */}
            <li className="flex items-center gap-4">
              <FaPhp className="text-3xl text-blue-600" />
              <div>
                <h2 className="text-2xl text-blue-600 font-medium">2. PHP (80%)</h2>
                <p className="text-gray-600">
                  PHP is a server-side scripting language I use extensively for back-end development. I'm highly proficient with it, especially for web applications.
                </p>
                <div className="w-full bg-gray-200 rounded-full mt-2 h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </li>
            {/* React.js */}
            <li className="flex items-center gap-4">
              <FaReact className="text-3xl text-blue-600" />
              <div>
                <h2 className="text-2xl text-blue-600 font-medium">3. React.js (50%)</h2>
                <p className="text-gray-600">
                  React.js is a JavaScript library I use for building dynamic UIs. Although I'm still learning, I have experience building simple apps.
                </p>
                <div className="w-full bg-gray-200 rounded-full mt-2 h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Education;

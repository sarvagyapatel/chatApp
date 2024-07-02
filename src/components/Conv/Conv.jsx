// import React from "react";

function Conv() {
  return (
    <div className="h-screen max-w-full bg-cyan-800 flex flex-col rounded-r-2xl">
      <div className="width-full bg-cyan-900 rounded-tr-2xl">
        <div className="flex flex-row">
          <div className="p-4">
            <li className="list-none text-white text-4xl font-semibold">
              User3
            </li>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row justify-start p-6"><li className="list-none text-white text-2xl p-1 rounded-lg bg-cyan-950 border-cyan-950 border-2">request</li></div>
        <div className="flex flex-row justify-end p-6"><li className="list-none text-white text-2xl p-1 rounded-lg bg-cyan-950 border-cyan-950 border-2">response</li></div>
        <div className="flex flex-row justify-start p-6"><li className="list-none text-white text-2xl p-1 rounded-lg bg-cyan-950 border-cyan-950 border-2">request</li></div>
        <div className="flex flex-row justify-end p-6"><li className="list-none text-white text-2xl p-1 rounded-lg bg-cyan-950 border-cyan-950 border-2">response</li></div>
        <div className="flex flex-row justify-start p-6"><li className="list-none text-white text-2xl p-1 rounded-lg bg-cyan-950 border-cyan-950 border-2">request</li></div>
      </div>
    </div>
  );
}

export default Conv;

import React from "react";

const HeaderContent = () => {
  return (
    <div className="flex flex-col space-y-20">
      <h1 className="text-7xl font-bold text-center px-[10%]">
        Accédez <span className="highlight ">facilement</span> à tous les
        services <span>gouvernementaux</span>{" "}
        <span className="text-[#072BF2]">malagasy</span>
      </h1>
      <div className="flex  justify-around items-center px-[31%]">
        <button className="bg-white text-black border-none px-6 py-3 rounded-full hover:scale-x-105 hover:border-primary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-300">
          Comment ça marche ?
        </button>

        <button className="bg-[#5541D9] text-white border-none px-6 py-3 rounded-full hover:bg-[#3B2AA6] hover:scale-x-105 focus:outline-none focus:ring-2 focus:ring-[#5541D9] transition duration-300">
          Accédez à vos services
        </button>
      </div>
    </div>
  );
};

export default HeaderContent;

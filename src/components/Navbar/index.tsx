import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="text-white py-4 pt-[180px]">
      <div>
        <div className="flex flex-col gap-4 mb-4 ">
          <div className="flex items-center gap-1.5">
            <FaArrowLeftLong size={28} />
            <h1 className="[line-height:44px] [font-size:36px] font-semibold ">
              FIG ARTISTIC GYMNASTICS WORLD CUP
            </h1>
          </div>
          <div className="flex gap-2 text-sm [letter-spacing:-2.2%] [line-height:28px] [font-size-20px] text-gray-400">
            <span>Doha, Qatar</span>
            <span>|</span>
            <span>12/03/2023 - 13/02/2023</span>
          </div>
        </div>

        <div className="relative mt-20 border-b leading-[28px] text-[20px] border-[#1A1635] text-[#E8E8EB] text-sm">
          <div className="flex justify-between">
            <div className="relative px-12 flex gap-1 pb-2 items-center group">
              <span className=" h-2 w-2 rounded-full bg-[#FB0000]" />
              <Link to="/" className="cursor-pointer">
                Live
              </Link>
              <span className="absolute  bottom-0 left-0 w-full h-0.5 bg-[#0A8BEC] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </div>

            <div className="relative px-12 pb-2 group">
              <Link to="/startlist" className="cursor-pointer">
                Startlist
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0A8BEC] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </div>

            <div className="relative px-12 pb-2 group ">
              <Link to="/schedule" className="cursor-pointer">
                Schedule
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0A8BEC] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </div>

            <div className="relative px-12 pb-2 group">
              <Link to="/results" className="cursor-pointer">
                Results
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0A8BEC] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </div>

            <div className="relative px-12 pb-2 group">
              <Link to="/medals" className="cursor-pointer">
                Medals
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0A8BEC] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

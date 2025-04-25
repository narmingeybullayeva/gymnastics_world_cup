import RU from "../../assets/images/RU.png";
import EST from "../../assets/images/EST.png";
import POR from "../../assets/images/POR.png";
import ISR from "../../assets/images/Israel.png";
import POL from "../../assets/images/POL.png";
import NED from "../../assets/images/NED.png";
import GBR from "../../assets/images/UK.png";

export default function ResultTable() {
  return (
    <div className="overflow-x-auto mt-12 text-sm text-gray-300 font-light">
      <table className="min-w-full border-separate border-spacing-y-8">
        <thead>
          <tr className="text-left text-white text-xs">
            <th>Rank</th>
            <th>Team</th>
            <th>Bib</th>
            <th>Name</th>
            <th className="text-center">D</th>
            <th className="text-center">E</th>
            <th className="text-center">Pen</th>
            <th className="text-center">Total</th>
          </tr>
        </thead>
        <tbody>

          {/* row 1 */}
          <tr className='p-0'>
            <td className="py-2 pl-2">
              <div className="bg-[#0A8BEC] text-white px-2 py-1 w-6 text-center text-xs">
                1
              </div>
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={RU} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">RUS</span>
              </div>
            </td>
            <td className="text-white">212</td>
            <td className="text-white">Bonartsev Aleksandr</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4] ">
              102.256
            </td>
          </tr>

          <tr>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4] ">
              102.256
            </td>
          </tr>
          <tr className="relative">
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">Score</td>
            <td className="text-center text-[#FF9C07] ">
              102.256
            </td>
            <td
              colSpan={8}
              className="absolute bottom-[-12px] left-0 w-full h-[2px]"
            >
              <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
            </td>
          </tr>

          {/* row 2 */}

          <tr className="relative ">
            <td className="py-2 pl-2 ">
              <div className="bg-[#0A8BEC] text-white px-2 py-1 w-6 text-center text-xs">
                2
              </div>
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={EST} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">EST</span>
              </div>
            </td>
            <td className="text-white">132</td>
            <td className="text-white">Bonartsev Aleksandr</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">
              102.256
            </td>
          </tr>

          <tr>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4] ">
              102.256
            </td>
          </tr>
          <tr className="relative">
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">Score</td>
            <td className="text-center text-[#FF9C07] ">
              102.256
            </td>
            <td
              colSpan={8}
              className="absolute bottom-[-12px] left-0 w-full h-[2px]"
            >
              <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
            </td>
          </tr>

          {/* row 3*/}

          <tr className="relative">
            <td className="py-2 pl-2">
              <div className="bg-[#0A8BEC] text-white px-2 py-1 w-6 text-center text-xs">
                3
              </div>
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={POR} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">POR</span>
              </div>
            </td>
            <td className="text-white">132</td>
            <td className="text-white">Bonartsev Aleksandr</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">
              102.256
            </td>
          </tr>

          <tr>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4] ">
              102.256
            </td>
          </tr>
          <tr className="relative">
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">Score</td>
            <td className="text-center text-[#FF9C07] ">
              102.256
            </td>
            <td
              colSpan={8}
              className="absolute bottom-[-12px] left-0 w-full h-[2px]"
            >
              <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
            </td>
          </tr>

          {/* row 4 */}

          <tr className="relative ">
            <td className="py-2 pl-2">
              <div className="bg-[#0A8BEC] text-white px-2 py-1 w-6 text-center text-xs">
                4
              </div>
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={ISR} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">ISR</span>
              </div>
            </td>
            <td className="text-white">212</td>
            <td className="text-white">Bonartsev Aleksandr</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">
              102.256
            </td>

          </tr>

          <tr>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4] ">
              102.256
            </td>
          </tr>
          <tr className="relative">
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">Score</td>
            <td className="text-center text-[#FF9C07] ">
              102.256
            </td>
            <td
              colSpan={8}
              className="absolute bottom-[-12px] left-0 w-full h-[2px]"
            >
              <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
            </td>
          </tr>

          {/* row 5 */}

          <tr className="relative ">
            <td className="py-2 pl-2">
              <div className="bg-[#0A8BEC] text-white px-2 py-1 w-6 text-center text-xs">
                5
              </div>
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={POL} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">POL</span>
              </div>
            </td>
            <td className="text-white">212</td>
            <td className="text-white">Bonartsev Aleksandr</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">
              102.256
            </td>

          </tr>

          <tr>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4] ">
              102.256
            </td>
          </tr>
          <tr className="relative">
            <td colSpan={6}></td>
            <td className="text-center text-[#C4C4C4]">Score</td>
            <td className="text-center text-[#FF9C07] ">
              102.256
            </td>
            <td
              colSpan={8}
              className="absolute bottom-[-12px] left-0 w-full h-[2px]"
            >
              <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
            </td>
          </tr>

          {/* row 6 */}

          <tr className="relative ">
            <td className="py-2 pl-2">
              <div className="bg-[#0A8BEC] text-white px-2 py-1 w-6 text-center text-xs">
                6
              </div>
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={NED} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">NED</span>
              </div>
            </td>
            <td className="text-white">212</td>
            <td className="text-white">Bonartsev Aleksandr</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#FF9C07] font-semibold">
              102.256
            </td>
          </tr>

          <tr>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4] ">
              102.256
            </td>
          </tr>
          <tr className="relative">
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">Score</td>
            <td className="text-center text-[#FF9C07] ">
              102.256
            </td>
            <td
              colSpan={8}
              className="absolute bottom-[-12px] left-0 w-full h-[2px]"
            >
              <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
            </td>
          </tr>

          {/* row 7 */}

          <tr className="relative ">
            <td className="py-2 pl-2">
              <div className="bg-[#0A8BEC] text-white px-2 py-1 w-6 text-center text-xs">
                7
              </div>
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={GBR} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">GBR</span>
              </div>
            </td>
            <td className="text-white">212</td>
            <td className="text-white">Bonartsev Aleksandr</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#FF9C07] font-semibold">
              102.256
            </td>
          </tr>

          <tr>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4]">43.833</td>
            <td className="text-center text-[#C4C4C4] ">
              102.256
            </td>
          </tr>
          <tr className="relative">
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td ></td>
            <td className="text-center text-[#C4C4C4]">Score</td>
            <td className="text-center text-[#FF9C07] ">
              102.256
            </td>
            <td
              colSpan={8}
              className="absolute bottom-[-12px] left-0 w-full h-[2px]"
            >
              <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

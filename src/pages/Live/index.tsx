import RU from "../../assets/images/RU.png";
import EST from "../../assets/images/EST.png";
import POR from "../../assets/images/POR.png";
import ISR from "../../assets/images/Israel.png";
import POL from "../../assets/images/POL.png";
import NED from "../../assets/images/NED.png";
import GBR from "../../assets/images/UK.png";
import vaultImg from "../../assets/images/VT.png";
import pommelImg from "../../assets/images/PH.png";
import ringsImg from "../../assets/images/Rings.png";
import parallelImg from "../../assets/images/PB.png";
import horizontalImg from "../../assets/images/HB.png";
import floorImg from "../../assets/images/FX.png";

const LivePage = () => {
  return (
    <div className="overflow-x-auto mt-12 text-sm text-white font-light">
      <table className="min-w-full border-separate border-spacing-y-4">
        <thead>
          <tr className="text-white">
            <th className="px-4" colSpan={5}></th>

            <th className="px-4 text-center">App</th>
            <th className="px-4 text-center">AA</th>
            <th className="px-4 text-center">Team</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {/* row 1 */}
          <tr className="relative">
            <td className="text-center">
              <img
                src={ringsImg}
                alt="Vault"
                className="w-8 h-8 inline-block"
              />
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={RU} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">RUS</span>
              </div>
            </td>
            <td className="px-4 py-2 text-center">212</td>
            <td className="px-4 py-2 text-center">Amirbekov T.</td>
            <td className="px-4 ">
              <div className="flex justify-center items-center gap-3">
                <span>D: 5.400</span>
                <span>E: 8.800</span>
                <span>P: 0.3</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center gap-2">
                <div className="text-center">102.360</div>
                <div className="bg-blue-500 text-white text-center w-6">4</div>
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex justify-center items-center gap-2">
                <div className="text-center">102.360</div>
                <div className="bg-blue-500 text-white text-center w-6">4</div>
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex justify-center items-center gap-2">
                <div className="text-center">102.360</div>
                <div className="bg-blue-500 text-white text-center w-6">4</div>
              </div>
            </td>
            <td
              colSpan={8}
              className="absolute bottom-[-12px] left-0 w-full h-[2px]"
            >
              <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
            </td>
          </tr>

          {/* <!-- Row 2 --> */}
          <tr className="relative">
            <td className="text-center">
              <img
                src={ringsImg}
                alt="Vault"
                className="w-8 h-8 inline-block"
              />
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={RU} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">RUS</span>
              </div>
            </td>
            <td className="px-4 py-2 text-center">212</td>
            <td className="px-4 py-2 text-center">Amirbekov T.</td>
            <td className="px-4 text-center">
              <button className="bg-yellow-500 te font-bold py-1 px-3 rounded">
                Wait
              </button>
            </td>
            <td className="px-4 py-2" colSpan={3}></td>

            <td
              colSpan={8}
              className="absolute bottom-[-12px] left-0 w-full h-[2px]"
            >
              <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
            </td>
          </tr>

          {/* <!-- Row 3 --> */}

          <tr className="relative">
            <td className="text-center">
              <img
                src={ringsImg}
                alt="Vault"
                className="w-8 h-8 inline-block"
              />
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={RU} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">RUS</span>
              </div>
            </td>
            <td className="px-4 py-2 text-center">212</td>
            <td className="px-4 py-2 text-center">Amirbekov T.</td>
            <td className="px-4 text-center">
              <button className="bg-green-500 text-white font-bold py-1 px-3 rounded">
                Go
              </button>
            </td>
            <td className="px-4 py-2" colSpan={3}></td>

            <td
              colSpan={8}
              className="absolute bottom-[-12px] left-0 w-full h-[2px]"
            >
              <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
            </td>
          </tr>

          {/* row 4 */}

          
            
          
          <tr className="relative">
            <td className="text-center">
            <span  className="text-orange-400 px-4 py-2">Inquiry Submitted</span>
              <img
                src={ringsImg}
                alt="Vault"
                className="w-8 h-8 inline-block"
              />
            </td>
            <td>
              <div className="flex justify-left items-center gap-2 ">
                <img src={RU} alt="rus" className="w-5 h-3 object-cover" />
                <span className="text-white">RUS</span>
              </div>
            </td>
            <td className="px-4 py-2 text-center">212</td>
            <td className="px-4 py-2 text-center">Amirbekov T.</td>
            <td className="px-4 ">
              <div className="flex justify-center items-center gap-3">
                <span>D: 5.400</span>
                <span>E: 8.800</span>
                <span>P: 0.3</span>
              </div>
            </td>
            <td className="px-4 py-2">
              <div className="flex justify-center items-center gap-2">
                <div className="text-center">102.360</div>
                <div className="bg-blue-500 text-white text-center w-6">4</div>
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex justify-center items-center gap-2">
                <div className="text-center">102.360</div>
                <div className="bg-blue-500 text-white text-center w-6">4</div>
              </div>
            </td>

            <td className="px-4 py-2">
              <div className="flex justify-center items-center gap-2">
                <div className="text-center">102.360</div>
                <div className="bg-blue-500 text-white text-center w-6">4</div>
              </div>
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
};

export default LivePage;

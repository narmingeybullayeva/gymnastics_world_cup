import vaultImg from "../../assets/images/VT.png";
import pommelImg from "../../assets/images/PH.png";
import ringsImg from "../../assets/images/Rings.png";
import parallelImg from "../../assets/images/PB.png";
import horizontalImg from "../../assets/images/HB.png";
import floorImg from "../../assets/images/FX.png";

const Apparatus = () => {
  return (
    <div className="flex gap-6 justify-center pt-4">
      <div className="flex flex-col items-center group">
        <div className="p-3 rounded-lg">
          <img src={floorImg} alt="Vault" className="w-10 h-10" />
        </div>
        <span className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Floor Exercise
        </span>
      </div>
      <div className="flex flex-col items-center group">
        <div className="text-3xl p-3 ">
          <img src={pommelImg} alt="Vault" className="w-10 h-10" />
        </div>
        <span className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Pommel Horse
        </span>
      </div>
      <div className="flex flex-col items-center group">
        <div className="text-3xl p-3 ">
          <img src={ringsImg} alt="Vault" className="w-10 h-10" />
        </div>
        <span className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Rings
        </span>
      </div>
      <div className="flex flex-col items-center group">
        <div className="text-3xl p-3 ">
          <img src={vaultImg} alt="Vault" className="w-10 h-10" />
        </div>
        <span className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Vault
        </span>
      </div>
      <div className="flex flex-col items-center group">
        <div className="text-3xl p-3 ">
          <img src={parallelImg} alt="Vault" className="w-10 h-10" />
        </div>
        <span className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Parallel Bars
        </span>
      </div>
      <div className="flex flex-col items-center group">
        <div className="text-3xl p-3 ">
          <img src={horizontalImg} alt="Vault" className="w-10 h-10" />
        </div>
        <span className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Horizontal Bar
        </span>
      </div>
    </div>
  );
};

export default Apparatus;

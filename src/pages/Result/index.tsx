import Apparatus from "../../components/Apparatus";
import Tab from "../../components/Tab";

const ResultsPage = () => {
  return (
    <div className="text-white mt-7">
      <div className="p-4 space-y-4">
        <Tab />
      </div>
      <div>
        <Apparatus />
      </div>
    </div>
  );
};

export default ResultsPage;

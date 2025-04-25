import { useResultsStore } from "../../store/useResultsStore";

function ResultTable() {
  const { results } = useResultsStore();

  return (
    <div className="overflow-x-auto my-12 text-sm  text-gray-300 font-light">
      <table className="min-w-full border-separate border-spacing-y-4">
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
          {results.map((result) => {
            return (
              <>
                <tr>
                  <td className="pl-2">
                    <div className="bg-[#0A8BEC] text-white px-2 py-1 w-6 text-center text-xs">
                      {result.rank}
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-left items-center gap-2 ">
                      <img
                        src={`images/${result.athlete.team_code}.png`}
                        alt="rus"
                        className="w-5 h-3 object-cover"
                      />
                      <span className="text-white">
                        {result.athlete.team_code}
                      </span>
                    </div>
                  </td>
                  <td className="text-white">{result.bib}</td>
                  <td className="text-white">{result.athlete.name}</td>
                  <td className="text-center text-[#C4C4C4]">
                    {result.apparatus_scores.d}
                  </td>
                  <td className="text-center text-[#C4C4C4]">
                    {result.apparatus_scores.e}
                  </td>
                  <td className="text-center text-[#C4C4C4]">
                    {result.apparatus_scores.p}
                  </td>
                  <td className="text-center text-[#C4C4C4] ">
                  
                    {(
                      result.apparatus_scores.d +
                      result.apparatus_scores.e -
                      result.apparatus_scores.p
                    ).toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <td colSpan={4}></td>
                  <td className="text-center text-[#C4C4C4]">
                    {result.apparatus_scores.d}
                  </td>
                  <td className="text-center text-[#C4C4C4]">
                    {result.apparatus_scores.e}
                  </td>
                  <td className="text-center text-[#C4C4C4]">
                    {result.apparatus_scores.p}
                  </td>
                  <td className="text-center text-[#C4C4C4] ">
                    {(
                      result.apparatus_scores.d +
                      result.apparatus_scores.e -
                      result.apparatus_scores.p
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr className="relative">
                  <td colSpan={6}></td>
                  <td className="text-center text-[#C4C4C4]">Score</td>
                  <td className="text-center text-[#FF9C07] ">{(
                      result.apparatus_scores.d +
                      result.apparatus_scores.e -
                      result.apparatus_scores.p
                     + 
                      result.apparatus_scores.d +
                      result.apparatus_scores.e -
                      result.apparatus_scores.p
                    ).toFixed(2)}</td>
                  <td
                    colSpan={8}
                    className="absolute bottom-[-12px] left-0 w-full h-[2px]"
                  >
                    <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;

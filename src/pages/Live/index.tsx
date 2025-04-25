import { useResultsStore } from "../../store/useResultsStore";

const LivePage = () => {
  const { results } = useResultsStore();

  return (
    <div className="overflow-x-auto my-12 text-sm text-white font-light hidden md:block">
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
          {results.map((result) => (
            <>
              <tr className="relative">
                <td className="text-center">
                  {result.inquiry_submitted && (
                    <span className="text-orange-400 px-4 py-2">
                      Inquiry Submitted
                    </span>
                  )}
                  <img
                    src={`images/${result.apparatus_code}.png`}
                    alt={result.apparatus_name}
                    className="w-8 h-8 inline-block"
                  />
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
                <td className="px-4 py-2 text-center">{result.bib}</td>
                <td className="px-4 py-2 text-center">{result.athlete.name}</td>
                {result.status === "Finished" ? (
                  <>
                    <td className="px-4">
                      <div className="flex justify-center items-center gap-3">
                        <span>D: {result.apparatus_scores.d}</span>
                        <span>E: {result.apparatus_scores.e}</span>
                        <span>P: {result.apparatus_scores.p}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center items-center gap-2">
                        <div className="text-center">
                          {result.apparatus_scores.app}
                        </div>
                        <div className="bg-[#0A8BEC] text-white text-center w-6">
                          {result.apparatus_scores.app_rank}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center items-center gap-2">
                        <div className="text-center">
                          {result.apparatus_scores.aa}
                        </div>
                        <div className="bg-[#0A8BEC] text-white text-center w-6">
                          {result.apparatus_scores.aa_rank}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center items-center gap-2">
                        <div className="text-center">
                          {result.apparatus_scores.team}
                        </div>
                        <div className="bg-[#0A8BEC] text-white text-center w-6">
                          {result.apparatus_scores.team_rank}
                        </div>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="text-center py-2">
                      {result.status === "Wait" ? (
                        <button className="bg-[#F5A100] text-white font-semibold py-1 px-4 rounded">
                          Wait
                        </button>
                      ) : result.status === "Go" ? (
                        <button className="bg-[#02D169] text-white font-semibold py-1 px-4 rounded">
                          Go
                        </button>
                      ) : null}
                    </td>
                    <td colSpan={3}></td>
                  </>
                )}

                <td
                  colSpan={8}
                  className="absolute bottom-[-12px] left-0 w-full h-[2px]"
                >
                  <div className="h-full w-full bg-[linear-gradient(to_right,transparent,rgba(168,85,247,0.4),transparent)]" />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivePage;

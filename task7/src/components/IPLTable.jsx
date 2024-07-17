import { useEffect, useState } from "react";

const IPLTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        const data = await response.json();
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">
        IPL Season 2022 Points Table
      </h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Position</th>
            <th className="border border-gray-300 p-2">Team</th>
            <th className="border border-gray-300 p-2">Matches Played</th>
            <th className="border border-gray-300 p-2">Wins</th>
            <th className="border border-gray-300 p-2">Losses</th>
            <th className="border border-gray-300 p-2">NRR</th>
            <th className="border border-gray-300 p-2">Points</th>
            <th className="border border-gray-300 p-2">Tied</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td className="border border-gray-300 p-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 p-2">{team.Team}</td>
              <td className="border border-gray-300 p-2 text-center">
                {team.Matches}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {team.Won}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {team.Lost}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {team.Tied}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {team.NRR}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                {team.Points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLTable;

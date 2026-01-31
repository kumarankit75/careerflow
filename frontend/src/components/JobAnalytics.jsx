// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const STATUSES = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

// function JobAnalytics({ jobs }) {
//   const data = STATUSES.map((status) => ({
//     status,
//     count: jobs.filter((job) => job.status === status).length,
//   }));

//   return (
//     <div className="mt-10 bg-white p-6 rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">
//         Job Application Analytics
//       </h2>

//       <div className="w-full h-64">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data}>
//             <XAxis dataKey="status" />
//             <YAxis allowDecimals={false} />
//             <Tooltip />
//             <Bar dataKey="count" fill="#2563eb" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// export default JobAnalytics;

//dark mode

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const STATUSES = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

function JobAnalytics({ jobs }) {
  const data = STATUSES.map((status) => ({
    status,
    count: jobs.filter((job) => job.status === status).length,
  }));

  return (
    <div className="mt-10 bg-white dark:bg-gray-800 dark:text-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        Job Application Analytics
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="status"
              stroke="#9CA3AF"
            />
            <YAxis
              allowDecimals={false}
              stroke="#9CA3AF"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                color: "#fff",
              }}
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
            />
            <Bar
              dataKey="count"
              fill="#2563EB"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default JobAnalytics;

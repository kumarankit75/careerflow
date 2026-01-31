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
    <div className="mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        Job Application Analytics
      </h2>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="status" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default JobAnalytics;

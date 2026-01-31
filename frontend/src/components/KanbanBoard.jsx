const STATUSES = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

function KanbanBoard({ jobs, onStatusChange }) {
  const onDragStart = (e, jobId) => {
    e.dataTransfer.setData("jobId", jobId);
  };

  const onDrop = (e, status) => {
    const jobId = e.dataTransfer.getData("jobId");
    onStatusChange(jobId, status);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
      {STATUSES.map((status) => (
        <div
          key={status}
          onDrop={(e) => onDrop(e, status)}
          onDragOver={onDragOver}
          className="bg-gray-100 rounded p-3 min-h-[300px]"
        >
          <h3 className="font-bold text-center mb-3">
            {status}
          </h3>

          <div className="space-y-3">
            {jobs
              .filter((job) => job.status === status)
              .map((job) => (
                <div
                  key={job.id}
                  draggable
                  onDragStart={(e) =>
                    onDragStart(e, job.id)
                  }
                  className="bg-white p-3 rounded shadow cursor-move"
                >
                  <p className="font-semibold">
                    {job.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {job.company}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;

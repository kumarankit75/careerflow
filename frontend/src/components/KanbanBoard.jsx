// const STATUSES = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

// function KanbanBoard({ jobs, onStatusChange }) {
//   const onDragStart = (e, jobId) => {
//     e.dataTransfer.setData("jobId", jobId);
//   };

//   const onDrop = (e, status) => {
//     const jobId = e.dataTransfer.getData("jobId");
//     onStatusChange(jobId, status);
//   };

//   const onDragOver = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
//       {STATUSES.map((status) => (
//         <div
//           key={status}
//           onDrop={(e) => onDrop(e, status)}
//           onDragOver={onDragOver}
//           className="bg-gray-100 rounded p-3 min-h-[300px]"
//         >
//           <h3 className="font-bold text-center mb-3">
//             {status}
//           </h3>

//           <div className="space-y-3">
//             {jobs
//               .filter((job) => job.status === status)
//               .map((job) => (
//                 <div
//                   key={job.id}
//                   draggable
//                   onDragStart={(e) =>
//                     onDragStart(e, job.id)
//                   }
//                   className="bg-white p-3 rounded shadow cursor-move"
//                 >
//                   <p className="font-semibold">
//                     {job.role}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {job.company}
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default KanbanBoard;



//dark mode
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
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Kanban Board
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {STATUSES.map((status) => (
          <div
            key={status}
            onDrop={(e) => onDrop(e, status)}
            onDragOver={onDragOver}
            className="bg-gray-100 dark:bg-gray-700 rounded p-3 min-h-[320px]"
          >
            <h3 className="font-bold text-center mb-3 dark:text-white">
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
                    className="bg-white dark:bg-gray-800 dark:text-white p-3 rounded shadow cursor-move border dark:border-gray-600"
                  >
                    <p className="font-semibold">
                      {job.role}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {job.company}
                    </p>
                  </div>
                ))}

              {jobs.filter((job) => job.status === status)
                .length === 0 && (
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center mt-6">
                  No jobs
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;

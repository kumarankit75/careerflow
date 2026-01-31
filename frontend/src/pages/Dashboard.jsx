// // // // // import { useEffect, useState } from "react";
// // // // // import api from "../api/axios";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // function Dashboard() {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const navigate = useNavigate();
// // // // // const [jobs, setJobs] = useState([]);
// // // // // const [company, setCompany] = useState("");
// // // // // const [role, setRole] = useState("");
// // // // // const [loading, setLoading] = useState(false);
// // // // // const STATUS_OPTIONS = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];


// // // // // //   useEffect(() => {
// // // // // //     const fetchUser = async () => {
// // // // // //       try {
// // // // // //         const res = await api.get("/users/me");
// // // // // //         setUser(res.data);
// // // // // //       } catch (err) {
// // // // // //         // token invalid / expired
// // // // // //         localStorage.removeItem("token");
// // // // // //         navigate("/login");
// // // // // //       }
// // // // // //     };

// // // // // //     fetchUser();
// // // // // //   }, [navigate]);


// // // // // useEffect(() => {
// // // // //   const fetchData = async () => {
// // // // //     try {
// // // // //       const userRes = await api.get("/users/me");
// // // // //       setUser(userRes.data);

// // // // //       const jobsRes = await api.get("/jobs");
// // // // //       setJobs(jobsRes.data);
// // // // //     } catch (err) {
// // // // //       localStorage.removeItem("token");
// // // // //       navigate("/login");
// // // // //     }
// // // // //   };

// // // // //   fetchData();
// // // // // }, [navigate]);





// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem("token");
// // // // //     navigate("/login");
// // // // //   };

// // // // //   if (!user) {
// // // // //     return (
// // // // //       <div className="h-screen flex items-center justify-center">
// // // // //         Loading...
// // // // //       </div>
// // // // //     );
// // // // //   }




// // // // // const statusColor = (status) => {
// // // // //   switch (status) {
// // // // //     case "APPLIED":
// // // // //       return "bg-blue-100 text-blue-700";
// // // // //     case "INTERVIEW":
// // // // //       return "bg-yellow-100 text-yellow-700";
// // // // //     case "OFFER":
// // // // //       return "bg-green-100 text-green-700";
// // // // //     case "REJECTED":
// // // // //       return "bg-red-100 text-red-700";
// // // // //     default:
// // // // //       return "bg-gray-100 text-gray-700";
// // // // //   }
// // // // // };


// // // // // const handleAddJob = async (e) => {
// // // // //   e.preventDefault();
// // // // //   if (!company || !role) return;

// // // // //   setLoading(true);
// // // // //   try {
// // // // //     const res = await api.post("/jobs", {
// // // // //       company,
// // // // //       role,
// // // // //     });

// // // // //     setJobs([res.data.job, ...jobs]);
// // // // //     setCompany("");
// // // // //     setRole("");
// // // // //   } catch (err) {
// // // // //     console.error("Add job failed");
// // // // //   } finally {
// // // // //     setLoading(false);
// // // // //   }
// // // // // };

// // // // // const handleDeleteJob = async (id) => {
// // // // //   try {
// // // // //     await api.delete(`/jobs/${id}`);
// // // // //     setJobs(jobs.filter((job) => job.id !== id));
// // // // //   } catch (err) {
// // // // //     console.error("Delete failed");
// // // // //   }
// // // // // };




// // // // // const handleStatusChange = async (jobId, newStatus) => {
// // // // //   try {
// // // // //     const res = await api.put(`/jobs/${jobId}/status`, {
// // // // //       status: newStatus,
// // // // //     });

// // // // //     setJobs(
// // // // //       jobs.map((job) =>
// // // // //         job.id === jobId ? res.data.job : job
// // // // //       )
// // // // //     );
// // // // //   } catch (err) {
// // // // //     console.error("Status update failed");
// // // // //   }
// // // // // };




// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // // //       <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
// // // // //         <div className="flex justify-between items-center mb-6">
// // // // //           <h1 className="text-2xl font-bold">
// // // // //             Welcome, {user.name} 👋
// // // // //           </h1>
// // // // //           <button
// // // // //             onClick={handleLogout}
// // // // //             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// // // // //           >
// // // // //             Logout
// // // // //           </button>
// // // // //         </div>

// // // // //         <p className="text-gray-600">
// // // // //           This is your CareerFlow dashboard.
// // // // //         </p>
// // // // //       </div>
    

// // // // //     <div className="mt-6">
// // // // //         <div className="mb-6 border p-4 rounded bg-gray-50">
// // // // //   <h2 className="font-semibold mb-3">Add New Job</h2>

// // // // //   <form onSubmit={handleAddJob} className="flex gap-3 flex-wrap">
// // // // //     <input
// // // // //       type="text"
// // // // //       placeholder="Company"
// // // // //       value={company}
// // // // //       onChange={(e) => setCompany(e.target.value)}
// // // // //       className="border px-3 py-2 rounded w-full md:w-auto"
// // // // //     />

// // // // //     <input
// // // // //       type="text"
// // // // //       placeholder="Role"
// // // // //       value={role}
// // // // //       onChange={(e) => setRole(e.target.value)}
// // // // //       className="border px-3 py-2 rounded w-full md:w-auto"
// // // // //     />

// // // // //     <button
// // // // //       type="submit"
// // // // //       disabled={loading}
// // // // //       className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
// // // // //     >
// // // // //       {loading ? "Adding..." : "Add Job"}
// // // // //     </button>
// // // // //   </form>
// // // // // </div>
// // // // //   <h2 className="text-xl font-semibold mb-4">Your Jobs</h2>


// // // // //   {jobs.length === 0 ? (
// // // // //     <p className="text-gray-500">No jobs added yet.</p>
// // // // //   ) : (
// // // // //     <div className="space-y-3">
// // // // //       {jobs.map((job) => (
// // // // //         <div
// // // // //           key={job.id}
// // // // //           className="flex justify-between items-center border p-4 rounded"
// // // // //         >
// // // // //           <div>
// // // // //             <h3 className="font-semibold">
// // // // //               {job.role} @ {job.company}
// // // // //             </h3>
// // // // //             <p className="text-sm text-gray-500">
// // // // //               Applied: {job.applied_date || "—"}
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* <span
// // // // //             className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor(
// // // // //               job.status
// // // // //             )}`}
// // // // //           >
// // // // //             {job.status}
// // // // //           </span> */}

// // // // //             <div className="flex items-center gap-3">
// // // // //   {/* <span
// // // // //     className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor(
// // // // //       job.status
// // // // //     )}`}
// // // // //   >
// // // // //     {job.status}
// // // // //   </span> */}

// // // // //         <select
// // // // //   value={job.status}
// // // // //   onChange={(e) =>
// // // // //     handleStatusChange(job.id, e.target.value)
// // // // //   }
// // // // //   className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${statusColor(
// // // // //     job.status
// // // // //   )}`}
// // // // // >
// // // // //   {STATUS_OPTIONS.map((status) => (
// // // // //     <option key={status} value={status}>
// // // // //       {status}
// // // // //     </option>
// // // // //   ))}
// // // // // </select>



// // // // //   <button
// // // // //     onClick={() => handleDeleteJob(job.id)}
// // // // //     className="text-red-500 hover:text-red-700 text-sm"
// // // // //   >
// // // // //     Delete
// // // // //   </button>
// // // // // </div>



// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   )}
// // // // // </div>

// // // // //     </div>
// // // // // );
// // // // // }

// // // // // export default Dashboard;




// // // // import { useEffect, useState } from "react";
// // // // import api from "../api/axios";
// // // // import { useNavigate } from "react-router-dom";
// // // // import KanbanBoard from "../components/KanbanBoard";
// // // // import JobAnalytics from "../components/JobAnalytics";

// // // // const STATUS_OPTIONS = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

// // // // function Dashboard() {
// // // //   const [user, setUser] = useState(null);
// // // //   const [jobs, setJobs] = useState([]);

// // // //   const [company, setCompany] = useState("");
// // // //   const [role, setRole] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // // const [dark, setDark] = useState(
// // // //   localStorage.getItem("theme") === "dark"
// // // // );

// // // //   const navigate = useNavigate();

// // // //   // Fetch user + jobs
// // // //   useEffect(() => {
// // // //     const fetchData = async () => {
// // // //       try {
// // // //         const userRes = await api.get("/users/me");
// // // //         setUser(userRes.data);

// // // //         const jobsRes = await api.get("/jobs");
// // // //         setJobs(jobsRes.data);
// // // //       } catch (err) {
// // // //         localStorage.removeItem("token");
// // // //         navigate("/login");
// // // //       }
// // // //     };

// // // //     fetchData();
// // // //   }, [navigate]);


// // // // useEffect(() => {
// // // //   if (dark) {
// // // //     document.documentElement.classList.add("dark");
// // // //     localStorage.setItem("theme", "dark");
// // // //   } else {
// // // //     document.documentElement.classList.remove("dark");
// // // //     localStorage.setItem("theme", "light");
// // // //   }
// // // // }, [dark]);




// // // //   // Add job
// // // //   const handleAddJob = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!company || !role) return;

// // // //     setLoading(true);
// // // //     try {
// // // //       const res = await api.post("/jobs", {
// // // //         company,
// // // //         role,
// // // //       });

// // // //       setJobs([res.data.job, ...jobs]);
// // // //       setCompany("");
// // // //       setRole("");
// // // //     } catch (err) {
// // // //       console.error("Add job failed");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // Delete job
// // // //   const handleDeleteJob = async (id) => {
// // // //     try {
// // // //       await api.delete(`/jobs/${id}`);
// // // //       setJobs(jobs.filter((job) => job.id !== id));
// // // //     } catch (err) {
// // // //       console.error("Delete job failed");
// // // //     }
// // // //   };

// // // //   // Update status
// // // //   const handleStatusChange = async (jobId, newStatus) => {
// // // //     try {
// // // //       const res = await api.put(`/jobs/${jobId}/status`, {
// // // //         status: newStatus,
// // // //       });

// // // //       setJobs(
// // // //         jobs.map((job) =>
// // // //           job.id === jobId ? res.data.job : job
// // // //         )
// // // //       );
// // // //     } catch (err) {
// // // //       console.error("Status update failed");
// // // //     }
// // // //   };

// // // //   // Logout
// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     navigate("/login");
// // // //   };




// // // //   const statusColor = (status) => {
// // // //     switch (status) {
// // // //       case "APPLIED":
// // // //         return "bg-blue-100 text-blue-700";
// // // //       case "INTERVIEW":
// // // //         return "bg-yellow-100 text-yellow-700";
// // // //       case "OFFER":
// // // //         return "bg-green-100 text-green-700";
// // // //       case "REJECTED":
// // // //         return "bg-red-100 text-red-700";
// // // //       default:
// // // //         return "bg-gray-100 text-gray-700";
// // // //     }
// // // //   };

// // // //   if (!user) {
// // // //     return (
// // // //       <div className="h-screen flex items-center justify-center">
// // // //         Loading...
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // //     <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded shadow">
// // // //       {/* <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow"> */}
// // // //         {/* Header */}
// // // //         <div className="flex justify-between items-center mb-6">
// // // //           <h1 className="text-2xl font-bold">
// // // //             Welcome, {user.name} 👋
// // // //           </h1>
// // // //           <button
// // // //             onClick={handleLogout}
// // // //             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// // // //           >
// // // //             Logout
// // // //           </button>

// // // //           <button
// // // //   onClick={() => setDark(!dark)}
// // // //   className="border px-3 py-2 rounded text-sm dark:text-white"
// // // // >
// // // //   {dark ? "☀️ Light" : "🌙 Dark"}
// // // // </button>

// // // //         </div>

// // // //         {/* Add Job */}
// // // //         <div className="mb-6 border p-4 rounded bg-gray-50">
// // // //           <h2 className="font-semibold mb-3">Add New Job</h2>

// // // //           <form
// // // //             onSubmit={handleAddJob}
// // // //             className="flex gap-3 flex-wrap"
// // // //           >
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Company"
// // // //               value={company}
// // // //               onChange={(e) => setCompany(e.target.value)}
// // // //               className="border px-3 py-2 rounded w-full md:w-auto"
// // // //             />

// // // //             <input
// // // //               type="text"
// // // //               placeholder="Role"
// // // //               value={role}
// // // //               onChange={(e) => setRole(e.target.value)}
// // // //               className="border px-3 py-2 rounded w-full md:w-auto"
// // // //             />

// // // //             <button
// // // //               type="submit"
// // // //               disabled={loading}
// // // //               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
// // // //             >
// // // //               {loading ? "Adding..." : "Add Job"}
// // // //             </button>
// // // //           </form>
// // // //         </div>

// // // //         {/* Jobs List */}
// // // //         <div>
// // // //           <h2 className="text-xl font-semibold mb-4">
// // // //             Your Jobs
// // // //           </h2>

// // // //           {jobs.length === 0 ? (
// // // //             <p className="text-gray-500">
// // // //               No jobs added yet.
// // // //             </p>
// // // //           ) : (
// // // //             <div className="space-y-3">
// // // //               {jobs.map((job) => (
// // // //                 <div
// // // //                   key={job.id}
// // // //                   className="flex justify-between items-center border p-4 rounded"
// // // //                 >
// // // //                   <div>
// // // //                     <h3 className="font-semibold">
// // // //                       {job.role} @ {job.company}
// // // //                     </h3>
// // // //                     <p className="text-sm text-gray-500">
// // // //                       Applied: {job.applied_date || "—"}
// // // //                     </p>
// // // //                   </div>

// // // //                   <div className="flex items-center gap-3">
// // // //                     <select
// // // //                       value={job.status}
// // // //                       onChange={(e) =>
// // // //                         handleStatusChange(
// // // //                           job.id,
// // // //                           e.target.value
// // // //                         )
// // // //                       }
// // // //                       className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${statusColor(
// // // //                         job.status
// // // //                       )}`}
// // // //                     >
// // // //                       {STATUS_OPTIONS.map((status) => (
// // // //                         <option
// // // //                           key={status}
// // // //                           value={status}
// // // //                         >
// // // //                           {status}
// // // //                         </option>
// // // //                       ))}
// // // //                     </select>

// // // //                     <button
// // // //                       onClick={() =>
// // // //                         handleDeleteJob(job.id)
// // // //                       }
// // // //                       className="text-red-500 hover:text-red-700 text-sm"
// // // //                     >
// // // //                       Delete
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // // {/* Kanban Board */}
// // // // <KanbanBoard
// // // //   jobs={jobs}
// // // //   onStatusChange={handleStatusChange}
// // // // />

// // // // {/* Analytics */}
// // // // <JobAnalytics jobs={jobs} />


// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Dashboard;



// // // import { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import api from "../api/axios";
// // // import KanbanBoard from "../components/KanbanBoard";
// // // import JobAnalytics from "../components/JobAnalytics";
// // // import JobNotes from "../components/JobNotes";

// // // const STATUS_OPTIONS = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

// // // function Dashboard() {
// // //   const navigate = useNavigate();

// // //   const [user, setUser] = useState(null);
// // //   const [jobs, setJobs] = useState([]);

// // //   const [company, setCompany] = useState("");
// // //   const [role, setRole] = useState("");
// // //   const [loading, setLoading] = useState(false);

// // //   // 🌙 Dark mode state (SAFE)
// // //   const [dark, setDark] = useState(
// // //     localStorage.getItem("theme") === "dark"
// // //   );

// // //   // 🌙 Apply dark mode to <html>
// // //   useEffect(() => {
// // //     if (dark) {
// // //       document.documentElement.classList.add("dark");
// // //       localStorage.setItem("theme", "dark");
// // //     } else {
// // //       document.documentElement.classList.remove("dark");
// // //       localStorage.setItem("theme", "light");
// // //     }
// // //   }, [dark]);

// // //   // Fetch user + jobs
// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const userRes = await api.get("/users/me");
// // //         setUser(userRes.data);

// // //         const jobsRes = await api.get("/jobs");
// // //         setJobs(jobsRes.data);
// // //       } catch (err) {
// // //         localStorage.removeItem("token");
// // //         navigate("/login");
// // //       }
// // //     };

// // //     fetchData();
// // //   }, [navigate]);

// // //   // Add job
// // //   const handleAddJob = async (e) => {

// // //     e.preventDefault();
// // //     if (!company || !role) return;

// // //     setLoading(true);
// // //     try {
// // //       const res = await api.post("/jobs", {
// // //         company,
// // //         role,
// // //       });

// // //       setJobs([res.data.job, ...jobs]);
// // //       setCompany("");
// // //       setRole("");
// // //     } catch (err) {
// // //       console.error("Add job failed");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Delete job
// // //   const handleDeleteJob = async (id) => {
// // //     try {
// // //       await api.delete(`/jobs/${id}`);
// // //       setJobs(jobs.filter((job) => job.id !== id));
// // //     } catch (err) {
// // //       console.error("Delete job failed");
// // //     }
// // //   };

// // //   // Update status
// // //   const handleStatusChange = async (jobId, newStatus) => {
// // //     try {
// // //       const res = await api.put(`/jobs/${jobId}/status`, {
// // //         status: newStatus,
// // //       });

// // //       setJobs(
// // //         jobs.map((job) =>
// // //           job.id === jobId ? res.data.job : job
// // //         )
// // //       );
// // //     } catch (err) {
// // //       console.error("Status update failed");
// // //     }
// // //   };

// // //   // Logout
// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     navigate("/login");
// // //   };

// // //   const statusColor = (status) => {
// // //     switch (status) {
// // //       case "APPLIED":
// // //         return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200";
// // //       case "INTERVIEW":
// // //         return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200";
// // //       case "OFFER":
// // //         return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200";
// // //       case "REJECTED":
// // //         return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200";
// // //       default:
// // //         return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200";
// // //     }
// // //   };

// // //   if (!user) {
// // //     return (
// // //       <div className="h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">
// // //         Loading...
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors">
// // //       <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 dark:text-white p-6 rounded shadow">
// // //         {/* Header */}
// // //         <div className="flex justify-between items-center mb-6 gap-3 flex-wrap">
// // //           <h1 className="text-2xl font-bold">
// // //             Welcome, {user.name} 👋
// // //           </h1>

// // //           <div className="flex gap-2">
// // //             <button
// // //               onClick={() => setDark(!dark)}
// // //               className="border px-3 py-2 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
// // //             >
// // //               {dark ? "☀️ Light" : "🌙 Dark"}
// // //             </button>

// // //             <button
// // //               onClick={handleLogout}
// // //               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// // //             >
// // //               Logout
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Add Job */}
// // //         <div className="mb-6 border dark:border-gray-700 p-4 rounded bg-gray-50 dark:bg-gray-700">
// // //           <h2 className="font-semibold mb-3">Add New Job</h2>

// // //           <form
// // //             onSubmit={handleAddJob}
// // //             className="flex gap-3 flex-wrap"
// // //           >
// // //             <input
// // //               type="text"
// // //               placeholder="Company"
// // //               value={company}
// // //               onChange={(e) => setCompany(e.target.value)}
// // //               className="border dark:border-gray-600 dark:bg-gray-800 px-3 py-2 rounded w-full md:w-auto"
// // //             />

// // //             <input
// // //               type="text"
// // //               placeholder="Role"
// // //               value={role}
// // //               onChange={(e) => setRole(e.target.value)}
// // //               className="border dark:border-gray-600 dark:bg-gray-800 px-3 py-2 rounded w-full md:w-auto"
// // //             />

// // //             <button
// // //               type="submit"
// // //               disabled={loading}
// // //               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
// // //             >
// // //               {loading ? "Adding..." : "Add Job"}
// // //             </button>
// // //           </form>
// // //         </div>

// // //         {/* Jobs List */}
// // //         <div>
// // //           <h2 className="text-xl font-semibold mb-4">
// // //             Your Jobs
// // //           </h2>

// // //           {jobs.length === 0 ? (
// // //             <p className="text-gray-500 dark:text-gray-300">
// // //               No jobs added yet.
// // //             </p>
// // //           ) : (
// // //             <div className="space-y-3">
// // //               {jobs.map((job) => (
// // //                 <div
// // //                   key={job.id}
// // //                   className="flex justify-between items-center border dark:border-gray-700 p-4 rounded"
// // //                 >
// // //                   <div>
// // //                     <h3 className="font-semibold">
// // //                             <JobNotes jobId={job.id} />

// // //                       {job.role} @ {job.company}
// // //                     </h3>
// // //                     <p className="text-sm text-gray-500 dark:text-gray-300">
// // //                       Applied: {job.applied_date || "—"}
// // //                     </p>
// // //                   </div>

// // //                   <div className="flex items-center gap-3">
// // //                     <select
// // //                       value={job.status}
// // //                       onChange={(e) =>
// // //                         handleStatusChange(
// // //                           job.id,
// // //                           e.target.value
// // //                         )
// // //                       }
// // //                       className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${statusColor(
// // //                         job.status
// // //                       )}`}
// // //                     >
// // //                       {STATUS_OPTIONS.map((status) => (
// // //                         <option
// // //                           key={status}
// // //                           value={status}
// // //                         >
// // //                           {status}
// // //                         </option>
// // //                       ))}
// // //                     </select>

// // //                     <button
// // //                       onClick={() =>
// // //                         handleDeleteJob(job.id)
// // //                       }
// // //                       className="text-red-500 hover:text-red-700 text-sm"
// // //                     >
// // //                       Delete
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Kanban */}
// // //         <KanbanBoard
// // //           jobs={jobs}
// // //           onStatusChange={handleStatusChange}
// // //         />

// // //         {/* Analytics */}
// // //         <JobAnalytics jobs={jobs} />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import KanbanBoard from "../components/KanbanBoard";
import JobAnalytics from "../components/JobAnalytics";
import JobNotes from "../components/JobNotes";

const STATUS_OPTIONS = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  // 🌙 Dark mode
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Fetch user + jobs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await api.get("/users/me");
        setUser(userRes.data);

        const jobsRes = await api.get("/jobs");
        setJobs(jobsRes.data);
      } catch (err) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

  // Add job
  const handleAddJob = async (e) => {
    e.preventDefault();
    if (!company || !role) return;

    setLoading(true);
    try {
      const res = await api.post("/jobs", { company, role });
      setJobs([res.data.job, ...jobs]);
      setCompany("");
      setRole("");
    } catch (err) {
      console.error("Add job failed");
    } finally {
      setLoading(false);
    }
  };

  // Delete job
  const handleDeleteJob = async (id) => {
    try {
      await api.delete(`/jobs/${id}`);
      setJobs(jobs.filter((job) => job.id !== id));
    } catch (err) {
      console.error("Delete job failed");
    }
  };

  // Update status
  const handleStatusChange = async (jobId, newStatus) => {
    try {
      const res = await api.put(`/jobs/${jobId}/status`, {
        status: newStatus,
      });

      setJobs(
        jobs.map((job) =>
          job.id === jobId ? res.data.job : job
        )
      );
    } catch (err) {
      console.error("Status update failed");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const statusColor = (status) => {
    switch (status) {
      case "APPLIED":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200";
      case "INTERVIEW":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200";
      case "OFFER":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200";
      case "REJECTED":
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 dark:text-white p-6 rounded shadow">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 gap-3 flex-wrap">
          <h1 className="text-2xl font-bold">
            Welcome, {user.name} 👋
          </h1>

          <div className="flex gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="border px-3 py-2 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Add Job */}
        <div className="mb-6 border dark:border-gray-700 p-4 rounded bg-gray-50 dark:bg-gray-700">
          <h2 className="font-semibold mb-3">Add New Job</h2>

          <form
            onSubmit={handleAddJob}
            className="flex gap-3 flex-wrap"
          >
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border dark:border-gray-600 dark:bg-gray-800 px-3 py-2 rounded w-full md:w-auto"
            />

            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border dark:border-gray-600 dark:bg-gray-800 px-3 py-2 rounded w-full md:w-auto"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Job"}
            </button>
          </form>
        </div>

        {/* Jobs List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Your Jobs
          </h2>

          {jobs.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-300">
              No jobs added yet.
            </p>
          ) : (
            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="border dark:border-gray-700 p-4 rounded"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h3 className="font-semibold">
                        {job.role} @ {job.company}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        Applied: {job.applied_date || "—"}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
  <label className="text-xs text-gray-500 dark:text-gray-300">
    Follow-up:
  </label>

  <input
    type="date"
    value={job.follow_up_date || ""}
    onChange={async (e) => {
      const res = await api.put(
        `/jobs/${job.id}/follow-up`,
        { follow_up_date: e.target.value }
      );

      setJobs(
        jobs.map((j) =>
          j.id === job.id ? res.data.job : j
        )
      );
    }}
    className="border px-2 py-1 text-sm rounded dark:bg-gray-800"
  />
</div>

                    </div>

                    <div className="flex items-center gap-3">
                      <select
                        value={job.status}
                        onChange={(e) =>
                          handleStatusChange(
                            job.id,
                            e.target.value
                          )
                        }
                        className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${statusColor(
                          job.status
                        )}`}
                      >
                        {STATUS_OPTIONS.map((status) => (
                          <option
                            key={status}
                            value={status}
                          >
                            {status}
                          </option>
                        ))}
                      </select>

                      <button
                        onClick={() =>
                          handleDeleteJob(job.id)
                        }
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* 📝 Notes */}
                  <JobNotes jobId={job.id} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Kanban */}
        <KanbanBoard
          jobs={jobs}
          onStatusChange={handleStatusChange}
        />

        {/* Analytics */}
        <JobAnalytics jobs={jobs} />
      </div>
    </div>
  );
}

export default Dashboard;





// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import KanbanBoard from "../components/KanbanBoard";
// import JobAnalytics from "../components/JobAnalytics";
// import JobNotes from "../components/JobNotes";

// const STATUS_OPTIONS = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

// function Dashboard() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [jobs, setJobs] = useState([]);

//   const [company, setCompany] = useState("");
//   const [role, setRole] = useState("");

//   const [dark, setDark] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", dark);
//     localStorage.setItem("theme", dark ? "dark" : "light");
//   }, [dark]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userRes = await api.get("/users/me");
//         const jobsRes = await api.get("/jobs");
//         setUser(userRes.data);
//         setJobs(jobsRes.data);
//       } catch {
//         localStorage.removeItem("token");
//         navigate("/login");
//       }
//     };
//     fetchData();
//   }, [navigate]);

//   const followUpLabel = (date) => {
//     if (!date) return null;

//     const today = new Date();
//     const follow = new Date(date);

//     today.setHours(0,0,0,0);
//     follow.setHours(0,0,0,0);

//     if (follow < today) return "Overdue 🔴";
//     if (follow.getTime() === today.getTime()) return "Due today 🟡";
//     return "Upcoming 🟢";
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };


//   const formatDateForInput = (date) => {
//   if (!date) return "";
//   return new Date(date).toISOString().split("T")[0];
// };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
//       <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 dark:text-white p-6 rounded shadow">

//         {/* Header */}
//         <div className="flex justify-between mb-6">
//           <h1 className="text-2xl font-bold">
//             Welcome, {user?.name}
//           </h1>

//           <div className="flex gap-2">
//             <button
//               onClick={() => setDark(!dark)}
//               className="border px-3 py-2 rounded"
//             >
//               {dark ? "☀️" : "🌙"}
//             </button>

//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* Jobs */}
//         <div className="space-y-4">
//           {jobs.map((job) => (
//             <div
//               key={job.id}
//               className="border dark:border-gray-700 p-4 rounded"
//             >
//               <h3 className="font-semibold">
//                 {job.role} @ {job.company}
//               </h3>

//               {/* Follow-up */}
//               <div className="mt-2 flex items-center gap-2">
//                 <label className="text-xs">Follow-up:</label>
//                 {/* <input
//                   type="date"
//                   value={job.follow_up_date || ""}
//                   onChange={async (e) => {
//                     const res = await api.put(
//                       `/jobs/${job.id}/follow-up`,
//                       { follow_up_date: e.target.value }
//                     );

//                     setJobs(
//                       jobs.map((j) =>
//                         j.id === job.id ? res.data.job : j
//                       )
//                     );
//                   }}
//                   className="border px-2 py-1 rounded dark:bg-gray-700"
//                 /> */}


//                 <input
//   type="date"
//   value={formatDateForInput(job.follow_up_date)}
//   onChange={async (e) => {
//     const res = await api.put(
//       `/jobs/${job.id}/follow-up`,
//       { follow_up_date: e.target.value }
//     );

//     setJobs(
//       jobs.map((j) =>
//         j.id === job.id ? res.data.job : j
//       )
//     );
//   }}
//   className="border px-2 py-1 rounded dark:bg-gray-700"
// />

//               </div>

//               {job.follow_up_date && (
//                 <p className="text-xs mt-1">
//                   {followUpLabel(job.follow_up_date)}
//                 </p>
//               )}

//               {/* Notes */}
//               <JobNotes jobId={job.id} />
//             </div>
//           ))}
//         </div>

//         {/* Kanban */}
//         <KanbanBoard
//           jobs={jobs}
//           onStatusChange={async (id, status) => {
//             const res = await api.put(
//               `/jobs/${id}/status`,
//               { status }
//             );
//             setJobs(
//               jobs.map((j) =>
//                 j.id === id ? res.data.job : j
//               )
//             );
//           }}
//         />

//         {/* Analytics */}
//         <JobAnalytics jobs={jobs} />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;




// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";
// import KanbanBoard from "../components/KanbanBoard";
// import JobAnalytics from "../components/JobAnalytics";
// import JobNotes from "../components/JobNotes";

// const STATUS_OPTIONS = ["APPLIED", "INTERVIEW", "OFFER", "REJECTED"];

// function Dashboard() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [jobs, setJobs] = useState([]);

//   // ➕ Add Job form state
//   const [company, setCompany] = useState("");
//   const [role, setRole] = useState("");
//   const [followUp, setFollowUp] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🌙 Dark mode
//   const [dark, setDark] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", dark);
//     localStorage.setItem("theme", dark ? "dark" : "light");
//   }, [dark]);

//   // Fetch user + jobs
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userRes = await api.get("/users/me");
//         const jobsRes = await api.get("/jobs");
//         setUser(userRes.data);
//         setJobs(jobsRes.data);
//       } catch {
//         localStorage.removeItem("token");
//         navigate("/login");
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   // Helpers
//   const formatDateForInput = (date) => {
//     if (!date) return "";
//     return new Date(date).toISOString().split("T")[0];
//   };

//   const followUpLabel = (date) => {
//     if (!date) return null;

//     const today = new Date();
//     const follow = new Date(date);

//     today.setHours(0, 0, 0, 0);
//     follow.setHours(0, 0, 0, 0);

//     if (follow < today) return "Overdue 🔴";
//     if (follow.getTime() === today.getTime()) return "Due today 🟡";
//     return "Upcoming 🟢";
//   };

//   // ➕ ADD JOB (FIXED)
//   const handleAddJob = async (e) => {
//     e.preventDefault();
//     if (!company || !role) return;

//     setLoading(true);
//     try {
//       const res = await api.post("/jobs", {
//         company,
//         role,
//         follow_up_date: followUp || null,
//       });

//       setJobs([res.data.job, ...jobs]);
//       setCompany("");
//       setRole("");
//       setFollowUp("");
//     } catch (err) {
//       console.error("Add job failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update follow-up
//   const updateFollowUp = async (jobId, value) => {
//     const res = await api.put(`/jobs/${jobId}/follow-up`, {
//       follow_up_date: value,
//     });

//     setJobs(
//       jobs.map((j) =>
//         j.id === jobId ? res.data.job : j
//       )
//     );
//   };

//   // Logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   if (!user) {
//     return (
//       <div className="h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
//       <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 dark:text-white p-6 rounded shadow">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
//           <h1 className="text-2xl font-bold">
//             Welcome, {user.name} 👋
//           </h1>

//           <div className="flex gap-2">
//             <button
//               onClick={() => setDark(!dark)}
//               className="border px-3 py-2 rounded"
//             >
//               {dark ? "☀️" : "🌙"}
//             </button>

//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* ➕ ADD JOB (RESTORED) */}
//         <div className="mb-8 border dark:border-gray-700 p-4 rounded bg-gray-50 dark:bg-gray-700">
//           <h2 className="font-semibold mb-3">Add New Job</h2>

//           <form
//             onSubmit={handleAddJob}
//             className="flex gap-3 flex-wrap"
//           >
//             <input
//               type="text"
//               placeholder="Company"
//               value={company}
//               onChange={(e) => setCompany(e.target.value)}
//               className="border px-3 py-2 rounded dark:bg-gray-800"
//             />

//             <input
//               type="text"
//               placeholder="Role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="border px-3 py-2 rounded dark:bg-gray-800"
//             />

//             <input
//               type="date"
//               value={followUp}
//               onChange={(e) => setFollowUp(e.target.value)}
//               className="border px-3 py-2 rounded dark:bg-gray-800"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//             >
//               {loading ? "Adding..." : "Add Job"}
//             </button>
//           </form>
//         </div>

//         {/* JOB LIST */}
//         <div className="space-y-4">
//           {jobs.map((job) => (
//             <div
//               key={job.id}
//               className="border dark:border-gray-700 p-4 rounded"
//             >
//               <h3 className="font-semibold">
//                 {job.role} @ {job.company}
//               </h3>

//               {/* Follow-up */}
//               <div className="mt-2 flex items-center gap-2">
//                 <label className="text-xs">Follow-up:</label>
//                 <input
//                   type="date"
//                   value={formatDateForInput(job.follow_up_date)}
//                   onChange={(e) =>
//                     updateFollowUp(job.id, e.target.value)
//                   }
//                   className="border px-2 py-1 rounded dark:bg-gray-700"
//                 />
//               </div>

//               {job.follow_up_date && (
//                 <p className="text-xs mt-1">
//                   {followUpLabel(job.follow_up_date)}
//                 </p>
//               )}

//               {/* Notes */}
//               <JobNotes jobId={job.id} />
//             </div>
//           ))}
//         </div>

//         {/* Kanban */}
//         <KanbanBoard jobs={jobs} />

//         {/* Analytics */}
//         <JobAnalytics jobs={jobs} />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

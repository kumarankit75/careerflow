import { useEffect, useState } from "react";
import api from "../api/axios";

function JobNotes({ jobId }) {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    api.get(`/notes/${jobId}`).then((res) => {
      setNotes(res.data);
    });
  }, [jobId]);

  const addNote = async () => {
    if (!text.trim()) return;

    const res = await api.post(`/notes/${jobId}`, {
      content: text,
    });

    setNotes([res.data, ...notes]);
    setText("");
  };

  return (
    <div className="mt-3 border-t pt-3 dark:border-gray-600">
      <h4 className="text-sm font-semibold mb-2">
        Notes
      </h4>

      <div className="space-y-2 mb-2">
        {notes.map((note) => (
          <div
            key={note.id}
            className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded"
          >
            {note.content}
          </div>
        ))}

        {notes.length === 0 && (
          <p className="text-xs text-gray-500">
            No notes yet
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a note..."
          className="flex-1 border px-2 py-1 rounded text-sm dark:bg-gray-800"
        />
        <button
          onClick={addNote}
          className="text-sm bg-blue-600 text-white px-3 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default JobNotes;

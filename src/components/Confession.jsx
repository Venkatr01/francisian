import React, { useState } from 'react';

const Confession = () => {
  const [confessions, setConfessions] = useState([]);
  const [newConfession, setNewConfession] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newConfession.trim()) {
      setConfessions([newConfession.trim(), ...confessions]);  // Add new confession to the beginning
      setNewConfession('');
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Confession Page</h1>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={newConfession}
          onChange={(e) => setNewConfession(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
          placeholder="Write your confession here..."
          rows="4"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg"
        >
          Submit
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Confessions</h2>
        {confessions.length === 0 ? (
          <p>No confessions yet. Be the first to confess!</p>
        ) : (
          <ul>
            {confessions.map((confession, index) => (
              <li key={index} className="mb-4 p-4 border-b border-gray-300">
                {confession}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Confession;


import React from 'react';
const apps = [
  { id: 1, title: "Demo App 1", url: "https://app1.yourdomain.com" },
  { id: 2, title: "Demo App 2", url: "https://app2.yourdomain.com" },
  { id: 3, title: "Demo App 3", url: "https://app3.yourdomain.com" },
  { id: 4, title: "Demo App 4", url: "https://app4.yourdomain.com" },
  { id: 5, title: "Demo App 5", url: "https://app5.yourdomain.com" },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Demo App Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {apps.map((app) => (
          <div key={app.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">{app.title}</h2>
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Open →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
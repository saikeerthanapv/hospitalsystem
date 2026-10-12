
import { useState } from "react";
import "./App.css";

const patients = [
  { id: "P101", name: "Ananya Sharma",
    doctor: "Dr. Ravi Kumar", time: "10:30 AM" },
  { id: "P102", name: "Rahul Verma",
    doctor: "Dr. Priya Reddy", time: "11:00 AM" },
  { id: "P103", name: "Sneha Patel",
    doctor: "Dr. Arjun Rao", time: "02:00 PM" }
];

function App() {
  const [id, setId] = useState("");
  const [patient, setPatient] = useState(null);
  const [searched, setSearched] = useState(false);

  function searchPatient() {
    setPatient(
      patients.find(p => p.id.toLowerCase() === id.trim().toLowerCase())
    );
    setSearched(true);
  }

  return (
    <div className="app">
      <header>
        <h1>♥ MediCare</h1>
        <p>Patient Information Portal</p>
      </header>

      <main>
        <h2>Find Patient</h2>
        <input
          placeholder="Enter Patient ID (e.g. P101)"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <button onClick={searchPatient}>Search Patient</button>

        {searched && (
          patient ? (
            <div className="card">
              <h2>{patient.name}</h2>
              <p>Patient ID: {patient.id}</p>
              <p>Doctor: {patient.doctor}</p>
              <p>Appointment: {patient.time}</p>
            </div>
          ) : (
            <p className="error">Patient not found!</p>
          )
        )}
      </main>
    </div>
  );
}

export default App;

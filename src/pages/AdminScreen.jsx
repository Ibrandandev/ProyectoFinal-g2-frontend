import { useState } from "react";

const AdminScreen = () => {
  const [formValues, setFormValues] = useState({ fecha: "", hora: "" });

  return (
    <main className="bg-white min-vh-100">
      <h1 className="text-center">Admin Page</h1>
      <div className="input-group mb-3">
        <input
          type="date"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          id="fecha"
          value={formValues.fecha}
          onChange={(e) => {
            setFormValues({ ...formValues, [e.target.id]: e.target.value });
          }}
        />
      </div>

      <div>
        <input
          type="time"
          className="form-control"
          placeholder="Server"
          aria-label="Server"
          id="hora"
          value={formValues.hora}
          onChange={(e) => {
            setFormValues({ ...formValues, [e.target.id]: e.target.value });
          }}
        />
      </div>
    </main>
  );
};

export default AdminScreen;

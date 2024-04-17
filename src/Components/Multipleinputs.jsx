import React, { useState } from "react";

export default function Multipleinputs() {
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      const { name, value } = e.target;
      return { ...prevData, [name]: value };
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold m-10">
        Handle Multiple Input in Forms
      </h1>
      <form className="m-10" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="border border-black"
            value={formData.username || ""}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            className="border border-black"
            value={formData.useremail || ""}
            name="useremail"
            onChange={handleChange}
          />
        </div>
        <button className="border border-black p-2">Submit</button>
      </form>
    </div>
  );
}

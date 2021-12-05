import { useState, useEffect } from "react";
import ErrorMessages from "./ErrorMessages";

const Form = () => {
  // siempre el primer valor es la variable
  // siempre el segundo valor es la funcion modificadora
  // eso es array destructurin
  const [name, setName] = useState("Michito");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setEntryDate] = useState("");
  const [comments, setComments] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formFields = [name, owner, email, date, comments];
    if (formFields.includes("")) {
      setTimeout(() => {
        setError(false);
      }, 3000);
      setError(true);
      return
    } 

    console.log('Valid');
  };

  return (
    <div className="mt-2 bg-white shadow-md rounded py-10 md:max-h-screen">
      <h2 className="mt-3 text-center sm:md:text-2xl md:text-5xl font-bold">
        Add a new Patient
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-3 mt-10 px-5 md:px-20 mx-auto">
        {error && <ErrorMessages></ErrorMessages> }
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-400 
                            leading-tight focus:outline-none focus:shadow-outline"
            id="Name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Owner"
          >
            Owner
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-400 
                        leading-tight focus:outline-none focus:shadow-outline"
            id="Owner"
            type="text"
            placeholder="Owner"
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-400 
                        leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="entryDay"
          >
            Entry Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-400 
                   leading-tight focus:outline-none focus:shadow-outline"
            id="entryDay"
            type="date"
            placeholder="Entry Day"
            value={date}
            onChange={(e) => {
              setEntryDate(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Commets"
          >
            Commets
          </label>
          <textarea
            name="Commets"
            id="Commets"
            cols="30"
            rows="8"
            className="shadow appearance-none border 
                   rounded w-full py-4 px-3 text-gray-400 
                   leading-tight focus:outline-none focus:shadow-outline"
            value={comments}
            onChange={(e) => {
              setComments(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            className="w-full flex items-center justify-center px-8 py-3 border 
            border-transparent text-base font-medium rounded-full text-white 
            bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;

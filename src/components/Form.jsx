import { useState, useEffect } from "react";
import ErrorMessages from "./ErrorMessages";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  // siempre el primer valor es la variable
  // siempre el segundo valor es la funcion modificadora
  // eso es array destructurin
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setEntryDate] = useState("");
  const [comments, setComments] = useState("");

  const [error, setError] = useState(false);

  // User Effect se utiliza como detector de cambios, en su callback
  // solo cuando la dependencia (el segundo alrgumento cambia) se dispara la funcion interna

  // useEffect(() => {
  //   console.log(patient)
  // }, [patient])

  // si en useEffect se pasant dependencias vacias en el segundo argumento, quiere decir que
  // solo se va ejecutar una vez, asi mismo se puede utilizar de esta forma para cuando
  // un componente este listo, (en el caso de un componente hijo que no se muestre hasta que tenga data por ejemplo)

  // useEffect(() => {
  //   console.log(patient)
  // }, [])

  useEffect(() => {
    // varifica que este objeto tenga keys
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setEntryDate(patient.date);
      setComments(patient.comments);
    }
  }, [patient]);

  const generarId = () => {
    const ramdon = Math.random.toString(36).substring(2);
    const date = Date.now().toString();

    return ramdon + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formFields = [name, owner, email, date, comments];
    if (formFields.includes("")) {
      setTimeout(() => {
        setError(false);
      }, 3000);
      setError(true);
      return;
    }

    const patientObj = { name, owner, email, date, comments };

    if (patient.id) {
      //edicion
      // se setea el mismo id para no sobre escribirlo
      patientObj.id = patient.id;
      const updatedPatients = patients.map((patientState) =>
        patientState.id === patient.id ? patientObj : patientState
      );

      setPatients(updatedPatients)
      setPatient({})
    } else {
      //creacion
      patientObj.id = generarId();
      setPatients([...patients, patientObj]);
    }

    //reiniciar el form
    setName("");
    setOwner("");
    setEmail("");
    setEntryDate("");
    setComments("");
  };

  return (
    <div className="mt-2 bg-white shadow-md rounded py-10 md:max-h-screen">
      <h2 className="mt-3 text-center sm:md:text-2xl md:text-5xl font-bold">
        Add a new Patient
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-3 mt-10 px-5 md:px-20 mx-auto"
      >
        {error && (
          <ErrorMessages> Todos los campos son obligatorios </ErrorMessages>
        )}
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
            value={patient.id ? "Update" : "Save"}
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

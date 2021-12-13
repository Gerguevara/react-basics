const Paciente = ({ patient, setPatient, removePatient, id}) => {
  return (
    <div className="mt-2 bg-white shadow-md rounded py-6">
      <div className="mt-10">
        <div className="flex justify-evenly mb-10">
          <button className="bg-blue-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={()=>{ setPatient(patient)}}
            // esta sintaxis se usa cuando se va mandar a llamar una funcion que recive parametros
            //sino hay aprametros se utiliza  solo {setPatien} y no arrow function sin parentesis tmabien
        >
            Editar
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => removePatient(id)}>
            Eliminar
          </button>
        </div>
        <ul className="mx-10 text-base">
          <li className="mb-2">
            <div>
              <span className="text-indigo-600 font-bold">Name</span>
              <p>{patient.name}</p>
            </div>
          </li>
          <li className="mb-10">
            <div>
              <span className="text-indigo-600 font-bold">Ownwe: &nbsp;</span>
              <p>{patient.owner}</p>
            </div>
          </li>
          <li className="mb-10">
            <div>
              <span className="text-indigo-600 font-bold">Email: &nbsp;</span>
              <p>{patient.email}</p>
            </div>
          </li>
          <li className="mb-10">
            <div>
              <span className="text-indigo-600 font-bold">
                Entry Date: &nbsp;
              </span>
              <p>{patient.date}</p>
            </div>
          </li>
          <li className="mb-10">
            <div>
              <span className="text-indigo-600 font-bold">
                Comments: &nbsp;
              </span>
              <p>{patient.comments}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Paciente;

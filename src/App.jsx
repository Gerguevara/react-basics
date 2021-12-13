import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListadoPascientes from "./components/ListadoPascientes";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const removePatient = (id) => {
   const updatedPatients = patients.filter(patient => patient.id !== id);
   if (confirm('Are you sure you want to remove this patient?')) {
     setPatients(updatedPatients);     
   }
  };

  useEffect(() => {
    
  const  getLocalStorage = () => {
      const patientsDataLocal = JSON.parse(localStorage.getItem('patients') || [])    
         setPatients(patientsDataLocal);      
    }

    getLocalStorage();
  },[])

  // al ejecutarse el primer efectt y hacer un sete el segundo efect no detecta
  // que ha habido un cambio y por lo tanto no se dispara, ya que el primero ya setio el valor

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  },[patients])

  return (
    <div className="container sm:mx-0.5 md:mx-auto mt-10">
      <Header></Header>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-5">
        <Form
          patients={patients}
          setPatients={setPatients}
          setPatient={setPatient}
          patient={patient}
        ></Form>
        <ListadoPascientes
          patients={patients}
          setPatient={setPatient}
          removePatient = {removePatient}
        ></ListadoPascientes>
      </div>
    </div>
  );
}

export default App;

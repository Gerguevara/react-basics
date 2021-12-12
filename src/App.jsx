import {useState} from 'react'
import Form from "./components/Form";
import Header from "./components/Header";
import ListadoPascientes from "./components/ListadoPascientes";

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  return (
    <div className="container sm:mx-0.5 md:mx-auto mt-10">
      <Header></Header>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-5">
      <Form
      patients={patients} 
      setPatients={setPatients}
      setPatient={setPatient}
      patient= {patient}
      >
      </Form>
      <ListadoPascientes 
      patients={patients} 
      setPatient={setPatient}>
      </ListadoPascientes> 
      </div>
    </div>
  );
}

export default App;

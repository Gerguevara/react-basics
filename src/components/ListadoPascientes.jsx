import Paciente from "./Paciente";

const ListadoPascientes = () => {
  return (
    <div>
      <div className="overflow-y-scroll max-h-screen">
        <Paciente></Paciente>       
      </div>
    </div>
  );
};

export default ListadoPascientes;

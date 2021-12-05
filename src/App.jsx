import Form from "./components/Form";
import Header from "./components/Header";
import ListadoPascientes from "./components/ListadoPascientes";

function App() {
  return (
    <div className="container sm:mx-0.5 md:mx-auto mt-10">
      <Header></Header>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-5">
      <Form></Form>
      <ListadoPascientes></ListadoPascientes> 
      </div>
    </div>
  );
}

export default App;

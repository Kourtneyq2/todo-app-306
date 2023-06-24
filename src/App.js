import  Container  from "react-bootstrap/Container";
import { Banner } from "./components/Banner";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

export const App = () => {
  return(
    <Container>
      <Banner />
      <ToDoForm />
      <ToDoList />
    </Container>
  );
};

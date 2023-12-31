import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ tareas, borrarTarea }) => {
  return (
    <ListGroup>
      {tareas.map((tarea, index) => (
        <ItemTarea
          key={index}
          tarea={tarea}
          borrarTarea={borrarTarea}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;

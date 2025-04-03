import { DndContext } from "@dnd-kit/core";
import Droppable from "./components/Droppable";
import Draggable from "./components/Draggable";
import { JSX, useState } from "react";

function App() {
  const containers = ["backlog", "in-progress", "done"];
  const [parent, setParent] = useState<string | null>(null);

  const draggableMarkup: JSX.Element = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  function handleDragEnd(e: any): void {
    setParent(e.over ? e.over.id : null);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      <div className="d-flex gap-4 w-100 h-100">
        {containers.map(c => (
          <Droppable key={c} id={c}>
            {c === parent ? draggableMarkup : "Drop here"}
          </Droppable>
        ))}
      </div>
    </DndContext>
  );
}

export default App;

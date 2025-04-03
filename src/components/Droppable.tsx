import { useDroppable } from "@dnd-kit/core";
import { JSX } from "react";

type Props = {
  id: string;
  children: React.ReactNode;
};

export default function Droppable(props: Props): JSX.Element {
  const droppable = useDroppable({ id: props.id });

  const style = {
    backgroundColor: droppable.isOver ? "green" : "red",
  };

  return (
    <div ref={droppable.setNodeRef} style={style} className="h-full w-100 p-3">
      {props.children}
    </div>
  );
}

import { useDraggable } from "@dnd-kit/core";
import { JSX } from "react";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  children: React.ReactNode;
};

export default function Draggable(props: Props): JSX.Element {
  const draggable = useDraggable({ id: props.id });

  const style = {
    transform: CSS.Translate.toString(draggable.transform),
  };

  return (
    <button
      className="btn btn-primary"
      ref={draggable.setNodeRef}
      style={style}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      {props.children}
    </button>
  );
}

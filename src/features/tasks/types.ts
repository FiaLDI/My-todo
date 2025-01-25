import { ReactNode } from "react";

export type task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  start: string;
  end: string;
};

export interface taskState {
  tasks: task[];
}

export interface ParentComponentProps {
  children: ReactNode;
}

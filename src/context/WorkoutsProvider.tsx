"use client";
import { IWorkout } from "@/components/type/Workouts-type";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TabType = "today" | "saved";

interface IWorkoutsContext {
  add: IWorkout[];
  setAdd: Dispatch<SetStateAction<IWorkout[]>>;
  save: IWorkout[];
  setSave: Dispatch<SetStateAction<IWorkout[]>>;
  activeTab: TabType;
  setActiveTab: Dispatch<SetStateAction<TabType>>;
}

export const WorkoutsContext = createContext<IWorkoutsContext>({
  add: [],
  setAdd: () => {},
  save: [],
  setSave: () => {},
  activeTab: "today",
  setActiveTab: () => {},
});

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [add, setAdd] = useState<IWorkout[]>([]);
  const [save, setSave] = useState<IWorkout[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>("today");

  const sharedData: IWorkoutsContext = {
    add,
    setAdd,
    save,
    setSave,
    activeTab,
    setActiveTab,
  };

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;

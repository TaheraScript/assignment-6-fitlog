"use client";
import { IWorkout } from "@/components/type/Workouts-type";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
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
  isLoaded: boolean;
}

export const WorkoutsContext = createContext<IWorkoutsContext>({
  add: [],
  setAdd: () => {},
  save: [],
  setSave: () => {},
  activeTab: "today",
  setActiveTab: () => {},
  isLoaded: false,
});

const ADD_KEY = "fitlog:add";
const SAVE_KEY = "fitlog:save";

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [add, setAdd] = useState<IWorkout[]>([]);
  const [save, setSave] = useState<IWorkout[]>([]);
  const [activeTab, setActiveTab] = useState<TabType>("today");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedAdd = localStorage.getItem(ADD_KEY);
      const storedSave = localStorage.getItem(SAVE_KEY);

      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (storedAdd) setAdd(JSON.parse(storedAdd));

      if (storedSave) setSave(JSON.parse(storedSave));
    } catch (err) {
      console.error("Failed to load saved plan from storage:", err);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(ADD_KEY, JSON.stringify(add));
    } catch (err) {
      console.error("Failed to save plan to storage:", err);
    }
  }, [add, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(save));
    } catch (err) {
      console.error("Failed to save list to storage:", err);
    }
  }, [save, isLoaded]);

  const sharedData: IWorkoutsContext = {
    add,
    setAdd,
    save,
    setSave,
    activeTab,
    setActiveTab,
    isLoaded,
  };

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;

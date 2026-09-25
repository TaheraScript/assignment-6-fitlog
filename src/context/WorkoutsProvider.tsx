'use client'
import { IWorkout } from "@/components/type/Workouts-type";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IWorkoutsContext {
  add: IWorkout[];
  setAdd: Dispatch<SetStateAction<IWorkout[]>>;
  save: IWorkout[];
  setSave: Dispatch<SetStateAction<IWorkout[]>>;
}

export const WorkoutsContext = createContext<IWorkoutsContext>({
    add: [],
  setAdd: () => {},
  save: [],
  setSave: () => {},
})
const WorkoutsProvider = ({children} : {children:ReactNode}) => {
    const [add,setAdd] =useState<IWorkout[]>([])
    const [save,setSave] =useState<IWorkout[]>([])

    const sharedData: IWorkoutsContext ={
        add,
        setAdd,
        save,
        setSave
    }

    return (
       <WorkoutsContext.Provider value={sharedData}>{children}</WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;
'use client'
import { LuCalendarPlus2 } from 'react-icons/lu';
import { IWorkout } from '../type/Workouts-type';
import { WorkoutsContext } from '@/context/WorkoutsProvider';
import { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';
import Link from 'next/link';

const AddButton = ({data} :{data:IWorkout}) => {
    const WorkoutsProvider = useContext(WorkoutsContext)
    const {add,setAdd} = WorkoutsProvider

    const handleWorkouts =() =>{
        setAdd([...add,data])
        toast.success(`You have added "${data.name}"`, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
    }
    return (
        <Link href="/my-plan? tab=today"
        onClick={()=>handleWorkouts()} 
         className="flex-1 bg-[#ccff00] text-[#0F1115] font-semibold p-2 rounded-lg hover:bg-lime-300 transition font-inter text-[14px] flex justify-center items-center gap-2">
                <LuCalendarPlus2 />Add to today&apos;s plan
              </Link>
    );
};

export default AddButton;
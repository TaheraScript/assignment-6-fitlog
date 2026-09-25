'use client'
import { IWorkout } from '../type/Workouts-type';
import { WorkoutsContext } from '@/context/WorkoutsProvider';
import { useContext } from 'react';
import { Bounce, toast } from 'react-toastify';
import { FaRegBookmark } from 'react-icons/fa';

const SaveButton = ({data} :{data:IWorkout}) => {
    const WorkoutsProvider = useContext(WorkoutsContext)
    const {save,setSave} = WorkoutsProvider

    const handleWorkouts =() =>{
        setSave([...save,data])
        toast.success(`You have saved "${data.name}"`, {
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
       <button className="flex-1 border border-[#374151] text-[#E5E7EB]  font-medium text-[14px] font-inter p-2 rounded-lg hover:bg-gray-800 transition flex justify-center items-center gap-2" onClick={() =>handleWorkouts()}>
               <FaRegBookmark /> Save for later
              </button>
    );
};

export default SaveButton;
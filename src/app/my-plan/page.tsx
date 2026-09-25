'use client'
import { WorkoutsContext } from '@/context/WorkoutsProvider';
import { useContext } from 'react';

const MyPlan = () => {
    const {add,save} = useContext(WorkoutsContext)
    console.log(add,save,'list')
    return (
        <div className='container mx-auto py-10'>

           <div> <h2 className='font-bold text-[30px] font-oswald'>MY PLAN</h2>
            <p className='text-[14px] font-normal font-inter text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p></div>
            <div>
                
            </div>
        </div>
    );
};

export default MyPlan;
'use client'
import { WorkoutsContext } from '@/context/WorkoutsProvider';
import { useContext, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import WorkoutsStats from '@/components/myplan/WorkoutsStats';
import PlanTabs from '@/components/myplan/PlanTabs';

const MyPlan = () => {
    const {add,save} = useContext(WorkoutsContext)
  const searchParams = useSearchParams(); 
  const tabParam = searchParams.get('tab');
   const [activeTab, setActiveTab] = useState<'today' | 'saved'>(
      tabParam === 'saved' ? 'saved' : 'today'
    );
    const activeData = activeTab === 'today' ? add : save;
    const totalMinutes = add.reduce((sum, item) => sum + item.duration, 0);
    const totalCalories = add.reduce((sum, item) => sum + item.caloriesBurned, 0);

    return (
        <div className='container mx-auto py-10'>

           <div> <h2 className='font-bold text-[30px] font-oswald'>MY PLAN</h2>
            <p className='text-[14px] font-normal font-inter text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p></div>
            <div className='mt-6'>
                <WorkoutsStats
                     exercises={activeData.length}
                    minutes={totalMinutes}
                    calories={totalCalories}
                />
        </div>
        <div className='mt-6'> 
            <PlanTabs add={add} save={save} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        </div>
    );
};

export default MyPlan;
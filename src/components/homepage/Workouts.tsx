
import WorkoutsCard from '../card/WorkoutsCard';
import { IWorkout } from '../type/Workouts-type';

const getWorkouts =async() =>{
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
        return await res.json()
    }
const  Workouts = async() => {
        const workoutsData = await getWorkouts()
    return (
        <div className='grid grid-cols-3 grid-rows-4 gap-4 container mx-auto '>
           {
            workoutsData.map((data : IWorkout ) =><WorkoutsCard key={data.id} data={data}></WorkoutsCard> )
        }
        </div>
    );
};

export default Workouts;
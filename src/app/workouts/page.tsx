import WorkoutsCard from "@/components/card/WorkoutsCard";
import { IWorkout } from "@/components/type/Workouts-type";



const getWorkouts =async() =>{
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
        return await res.json()
    }
const  Workouts = async() => {
        const workoutsData = await getWorkouts()
    return (
        <div>
            <h2 className="font-oswald font-bold text-[30px]">THE LIBRARY</h2>
            <p className="font-normal text-[14px]">Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-3 grid-rows-4 gap-4 container mx-auto'>
           {
            workoutsData.map((data : IWorkout ) =><WorkoutsCard key={data.id} data={data}></WorkoutsCard> )
        }
        </div>
        </div>
    );
};

export default Workouts;
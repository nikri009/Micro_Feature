
import CardinMenu from "../elements/CardinMenu";
import { useEffect, useState } from "react";
import { Challange } from "../Type";
import dumy from "../dataChallange/challange.json"
const Home: React.FC = () => {
    const [challenges, setChallenges] = useState<Challange[]>([]);

    useEffect(() => {
        setChallenges(dumy)
        
    }, []);

    return (
        <div className="grid justify-items-center text-white my-10 ">
            <h1 className="text-3xl"><b>Challenges on Task</b></h1>
            <p>Select and complete the tasks already provided below</p>
            <br />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {challenges.map((data:Challange, index:number)=>{
                return (
                    <div key={index}>
                            <CardinMenu data={data}/>
                        </div>
                    )
                })}
            </div>
            
        </div>
    );
}

export default Home;

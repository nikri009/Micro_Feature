import { Link } from "react-router-dom";
import { Challange } from "../Type";
interface CardMenuProps {
    data: Challange
}
const CardinMenu:React.FC<CardMenuProps> = ({data}) => {
  

    return(
        <div className="border-solid border-2 w-80 p-3 bg-gray-900 ">
                <h1 className="text-2xl my-2">{data.title}</h1>
                <p>Level: {data.level}</p>
                <p>Language: {data.language}</p>
                <div className="flex justify-center items-center bg-blue-900 p-1 my-2 rounded-md">
                <Link to={`/${data.path}`} ><b>Solve Challange</b></Link>
                </div>
            </div>
    )
}
export default CardinMenu;
import {useSelector} from "react-redux";
import type {RootState}  from "../Redux/Store/Store";
const Result = ()=>{
    const status = useSelector((state:RootState)=>state.btnStatus.status)
    return(
        <div className="flex flex-col gap-2 items-center">
            {!status &&  <p>Result</p>}
            <div  className="p-4 items-center"> 
               <button className="bg-green-700 text-white text-xl p-3 rounded-md" disabled={status}>Show</button>
            </div>
        </div>
    )
};

export default Result;
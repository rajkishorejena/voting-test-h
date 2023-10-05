const Vote = ()=>{
    return(
        <div className="w-full flex flex-row justify-center gap-x-3">
            <div className="p-4 ">
              <p>BateMan</p>
               <button className="bg-green-700 text-white text-xl p-3 rounded-md" onClick={()=>{}}>Vote</button>
            </div>
            <div  className="p-4">
              <p>SupperMan</p>
               <button className="bg-green-700 text-white text-xl p-3 rounded-md"  onClick={()=>{}}>Vote</button>
            </div>
        </div>
    )
};

export default Vote;
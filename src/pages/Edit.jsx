import {React,createRef,useState} from "react";
import Text from "../component/Text";
import { useSearchParams } from "react-router-dom";
import {exportComponentAsJPEG} from "react-component-export-image";

const EditPage=()=>{
    const [params]=useSearchParams();
    const[count,setCount]=useState(0);
    const memeRef=createRef();

    const addText=()=>{setCount(count+1) };
   

    return(
        <div>
            <div ref={memeRef} className=" meme mt-5 mb-5 ">
            <img src={params.get('url')} width={'250px'}/>
            {Array(count).fill(0).map((e)=><Text/>)}
        </div>
        <button onClick={addText} >Add Text</button>
        <button  variant="success" onClick={(e)=>exportComponentAsJPEG(memeRef)}>save</button>
        </div>
    )
}
export default EditPage;
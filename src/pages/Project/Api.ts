import {Get} from "@/API/methods";


interface IData{
    configurationId:number | null,
    id:number,
    image:string,
    name:String,
}
interface IResponse{
    data:IData | null,
    message:string
}

const getProject = async (id:string | undefined):Promise<IResponse| null> =>{
    if(!id){
        return {
            data:null,
            message:"Invalid project Id"
        }
    }
    return await Get<IData>(`/Projects/getProject/27/${id}`);
}
export {
    getProject
}
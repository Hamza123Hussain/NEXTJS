export default function Docs({params}){ // this is a custom not found file
    // not-found should the file name to create a custom not found
    
    
    if(params.slug?.length===2){
return <h1>Param1 : {params.slug[0]} && Param2 : {params.slug[1]}</h1>
    }
    
   else if(params.slug?.length===1){
        return <h1>Param1 : {params.slug[0]} </h1>
            }

            else{
                return <><h1>EMPTY Docs</h1></>
            }
    
 
    
}
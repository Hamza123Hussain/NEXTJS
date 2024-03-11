import { notFound } from "next/navigation"

export default function ReviewId({params}){
    console.log(params)

    if(parseInt(params.reviewid)>1000){
        notFound() // this is a function of next js to call the not found page
    }

    return(
        <>
        <h1>{`Review ID FOR PRODUCT ${params.productid} : ${params.reviewid}`}</h1>
        </>
    )
}

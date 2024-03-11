import Link from "next/link";

export default function Products(){
    const id=3;
    return(
        <>
        <h1>Product List</h1>
        <Link href={'Products/1'} >Product 1</Link>{/*Navigating via static/hardcoded data*/}
        <h1>Product 2</h1>
        <Link href={`Products/${id}`} replace >Product 3</Link> {/*Navigating via Dynamic Data*/}
        </>
    )            
}

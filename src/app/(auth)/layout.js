
"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlinks=[
  {name:'Register',href:'/Register'},
  {name:'Login',href:'/Login'},
  ,

]




export default function AuthLayout({ children }) {
  const pathname= usePathname()
  return (<>
   {
    Navlinks.map((ele)=>{


        const isactive=pathname.startsWith(ele.href)


        return <Link className={isactive?'text-cyan-500 font-bold':'text-gray-700'} href={ele.href}> {ele.name}  </Link>
    })
}

 <h1>THIS IS AUTH LAYOUT</h1>
  
      <body >{children}</body>
  
   

    </>
  );
}

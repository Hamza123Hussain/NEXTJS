import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (<>
      <header style={{width:'100vw',backgroundColor:'green',padding:'6%'}}>i am header</header>
 
  
      <body className={inter.className}>{children}</body>
  
   
    <footer style={{width:"100vw",backgroundColor:'grey',padding:'6%'}}>I am fotter</footer>
    </>
  );
}

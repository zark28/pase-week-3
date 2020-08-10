import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";

function Layout(props) { 
  return (

    <div className="layout">

       <CustomHead/>

       <Navbar/>
       
       <Header/>
      

      {/*STYLING with styled-jsx*/}
      <style jsx>{`
       
      `}</style>
    </div>
  );
}

export default Layout;

//creating a Head component
function CustomHead(){
  return(
    <Head>
    <title>Week #3</title>
    <link rel="stylesheet" href="/css/global.css" />
  </Head>

  )
}
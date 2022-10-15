import { GoogleAuthProvider } from "firebase/auth";
import React from "react-dom";

const provider = new GoogleAuthProvider();
export function Home() {
  //login com google firebase auth



  // login com email e senha firebase



 

  return (
    <> 
    <header className="container content-center bg-red-700 flex justify-between max-w-5xl p-4">
      <div>
        <a href="/" className="text-white font-bold text-2xl">
        <img src="./imgs/logoPalpite.svg" className="w-32 md:w-40" />
        </a>
      </div>
    <div className="align-end"> 
    <a href="/login" className=" uppercase hover:text-red-300 text-white"> Entrar </a>
</div>
    </header>
    
    <div className="min-h-screen bg-red-700 text-white p-4 flex flex-col items-center space-y-6">

    

    <div className="container max-w-5xl  flex-1 p-4 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">


      <div className="md:flex-1 flex flex-col p-2justify-center bg-yellow-500">
      <img src="./imgs/logoL.png" className="w-650"/>
      <img src="./imgs/logoB.png" className="w-650"/>
      </div>
     

      <div className="md:flex-1 flex flex-col space-y-6">
      <h1 className="text-3xl text-center md:text-left font-bold">Você gosta de dar Palpite??</h1>
     
      <a href="/signup" className="text-center text-red-700 bg-white  hover:bg-gray-300  text-xl px-8 py-4 rounded-xl">Criar minha conta</a>
      <button onClick="#" className="text-center text-white bg-red-500 hover:bg-red-300  text-xl px-8 py-4 rounded-xl"> Entrar com google </button>

      
    </div>
    </div>
    </div>
    </>
  )
}

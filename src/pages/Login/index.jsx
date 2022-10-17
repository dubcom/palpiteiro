import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../service/firebase";


export const Login = () => {
let navigate = useNavigate();

//Fazer login com google firebase auth

const handleClickButtonGoogle = async () => {
signInWithPopup(auth, new GoogleAuthProvider())
.then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  console.log(user);
  navigate("/dashboard")
})

.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
  console.log(errorCode, errorMessage, email, credential);
});

}
// logout com firebase

  return (
    <div>
      <header className="p-4 border-b bg-red-700 border-white">
        <div className="container max-w-xl flex justify-center">
        <a href="/" className="text-white font-bold text-2xl">
        <img src="./imgs/logoPalpite.svg" className="w-32 md:w-40" />
        </a>
        </div>
      </header>


      <main className="container bg-red-700 max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
          <img src="./imgs/arrow-left.svg" className="h-6 text-white" />
          </a>
          <h2 className="text-xl text-white font-bold">Entre na sua conta</h2>
        </div>

        <form className="p-4 space-y-6" >
          <input
            type="text"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu email"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            onChange={(event) => setLoginEmail(event.target.value)}
            
          />

          <input
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite sua senha"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            onChange={(event) => setLoginPassword(event.target.value)}

            
          />
          <button type='submit' className="w-full text-center text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">ENTRAR </button>
          
        </form>
        <div className="p-4 flex space-x-4 items-center">
        <button type='submit' onClick={handleClickButtonGoogle} className="w-full text-center text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">ENTRAR COM GOOGLE </button>
          </div>
         
        <div className=" space-x-2 ">
          <a href="/signup">
            <h2 className="text-sl text-center hover:text-sky-400 text-white font-bold">Crie sua conta</h2>
          </a>
         
        
          <button type='submit' onClick="#" className="text-sl text-center hover:text-sky-400 text-white font-bold">Sair</button>
 
        </div>
      </main>
    </div>
  )
}
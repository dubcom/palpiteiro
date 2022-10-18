import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle.jsx";


export const Login = () => {

  const { signed, signInGoogle } = useContext(AuthGoogleContext);

  async function handleLoginFromGoogle() {
    await signInGoogle();
  } if (signed) {
    return <Navigate to="/dashboard" />
  }


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
          <h2 className="text-xl text-white font-bold">Obrigado por palpitar...</h2>
        </div>
        <div className="p-4 bg-white rounded-lg"> 
          <div className="flex flex-col items-center">
           
            <h2 className="text-xl text-red-700 py-4 font-bold">Obrigado pelo palpite.</h2>
            <p className="text-center">Logo após confirmar seu pagamento, seu palpite vai concorrer  a prêmios</p>
            <p className="text-center"> Você pode voltar ao seu perfil a qualquer momento, basta clicar no botão a baixo </p>
          </div>  
          </div>
        
        <div className="p-4 flex space-x-4 items-center">
          <button onClick={handleLoginFromGoogle} className="w-full text-center uppercase text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">voltar </button>
        </div>

      </main>
    </div>
  )
}
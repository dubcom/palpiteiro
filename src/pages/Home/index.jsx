import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";


export function Home() {
  const { signed, signInGoogle } = useContext(AuthGoogleContext);

  async function handleLoginFromGoogle() {
    await signInGoogle();
  } if (signed) {
    return <Navigate to="/dashboard" />
  }



  return (
    <>
      <header className="container  bg-red-700 flex justify-between max-w-5xl p-4">
        <div>
          <a href="/" className="text-white font-bold text-2xl">
            <img src="./imgs/logoPalpite.svg" className="w-32 md:w-40" />
          </a>
        </div>
        <div className="align-end">
          <button onClick={handleLoginFromGoogle} className="text-center uppercase text-white bg-red-500 hover:bg-red-300  text-mx px-4 py-2 rounded-md"> Entrar  </button>
        </div>
      </header>
      <main className="container max-w-5xl flex flex-col  items-center">
        <div className="flex flex-col text-white justify-center items-center">
          <img src="./imgs/logoPalpite.svg" className="w-100 md:w-50" />
          <h1 className="text-4xl text-white font-bold">Valor do premio <strong>R$ 12.985,00</strong></h1>
          <h1 className="text-2xl font-bold text-center">Faça seu palpite</h1>
          <p className="text-center">Dê o seu palpite, se você acertar pode ganhar <strong>R$ 12.985,00</strong>.</p>
        </div>

        <div className=" text-white p-4 flex flex-col items-center space-y-6">

          <h3 className="text-2xl text-center md:text-center font-bold">
            Se você é bom em dar palpites, que tal tentar ganhar uma grana com eles?
          </h3>

          <div className="md:flex-1 space-y-6">
            <p>
              É só dizer quem vai ganhar as eleições dia 30 de outubro,  <strong>Lula ou Bolsonaro </strong>,
              e você pode faturar uma grana para comemorar seu acerto.
              Vamos lá, é fácil e rápido! Dê o seu palpite, se você acertar pode ganhar <strong>R$ 12.985,00</strong> (valores atualizados diariamente).
            </p>

          </div>
        </div>
        <div className="container max-w-5xl   p-4  flex md:space-y-0 md:space-x-6">
         
          <div className="flex flex-col  items-center justify-center align-center md:flex-row w-screen px-8 p-2  bg-yellow-500">
            <div>
              <img src="./imgs/logoL.png" className="w-650" />
            </div>
            <div className=" max-w-5xl text-center inline-block align-middle px-8">
              <h3 className="text-3xl font-bold text-red-700">X</h3>
            </div>
            <div className="align-middle">
              <img src="./imgs/logoB.png" className="w-650" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button onClick={handleLoginFromGoogle} className="text-center uppercase text-white bg-red-500 hover:bg-red-300  text-mx px-4 py-2 rounded-md"> Entrar  </button>
        </div>
      </main>
    </>
  )
}

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";

import QRCode from "qrcode.react";

import Pix from "../pix";

export const Profile = () => {
  const { idPayment } = useParams();
  console.log(idPayment)

  // login com google verification 

  const { user, signOut, signed } = useContext(AuthGoogleContext);
  const userLogin = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));
  console.log(userLogin)


  // Create  payload the pix payment 
  const chave = "ed46845b-09a6-4a0b-8323-95fea32b3968"
  const message = "Pagamento de aposta"
  const name = "DubcomTecnologia"
  const city = "Florianopolis"
  const textId = idPayment
  const valorPix = 5


  const pix = new Pix(
    chave,
    message,
    name,
    city,
    textId,
    valorPix
  );
  const payload = pix.getPayload();
  console.log(payload)
  const handleClick = () => {
    // 👇️ clear input value
    setAwayTeamScore("");
    setHomeTeamScore("");
  };

  return (
    <>
      <header className="bg-red-700 flex flex-row text-white px-8">
        <div className="container max-w-3xl flex flex-row justify-between p-4">
          <a href="/" className="text-white font-bold text-2xl">
            <img src="./imgs/logoPalpite.svg" className="w-32 md:w-40" />
          </a>
          <div className="flex flex-row ">
            <div className="flex flex-row items-center">
              <img src={userLogin.photoURL} className="w-10 h-10 rounded-full" />
              <span className="ml-2">{userLogin.displayName}</span>
            </div>
            <div className="flex flex-row items-center ml-4">
              <button onClick={signOut}>Sair</button>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-6 justify-center">
        <section className=" bg-red-500 text-white flex flex-row">
          <div className="container flex flex-row">
            <a href="/dashboard"><img src="./imgs/arrow-left.svg" className=" w-10" />
            </a>
            <div>
              <p className="text-2xl align-center font-bold">Faça seu pagamento</p>
            </div>
          </div>
        </section>

        <section className="container max-w-3xl p-4 space-y-4">
          <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>

          <div className="space-y-4">

            <h1> {userLogin.displayName}</h1>
          </div>

        </section>
        <section className="container max-w-3xl items-center p-4 space-y-4">
          <p className="text-white text-xl align-center ">Leia o QR-Code com aplicativo do seu banco, ou copie o código e é só esperar para ver se seu palpite é certeiro </p>
          <div className="flex center">
            <p> Leia o QR-Code com aplicativo do seu banco, ou copie o código e é só esperar para ver se seu palpite é certeiro</p>
            <QRCode value={payload}
              size={280}
              level="H"
              includeMargin={true}/>
          </div>
          <div className=" bg-green-200 justify-center ">
            <h3 className=" text-red-500 font-bold ">Pague com o PIX</h3>
            <p className="text-red-700 px-2 text-xs ">{payload}</p>
            <div className="p-2">

              <button onClick={() => navigator.clipboard.writeText(payload)}
                className="bg-red-500 text-white font-bold py-2 px-4  rounded-full"> Copiar pix </button>
            </div>
          </div>

        </section>
      </main>

    </>
  )
}
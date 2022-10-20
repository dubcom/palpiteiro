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
      <header className="bg-red-700 flex flex-row text-white ">
        <div className="container max-w-3xl flex flex-row justify-between p-2">
          <a href="/" className="text-white font-bold text-2xl">
            <img src="./imgs/logoPalpite.svg" className="w-32 md:w-40" />
          </a>
          <div className="flex flex-row ">
            <div className="flex flex-row items-center">
              <img src={userLogin.photoURL} className="w-10 h-10 p-2 rounded-full" />
              <span className="text-xs ">{userLogin.displayName}</span>
            </div>
            <div className="flex flex-row text-xs items-center ml-4">
              <button onClick={signOut}>Sair</button>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-6 justify-center">
        <section className=" bg-red-500 text-white">
          <div className="flex flex-row items-center">
            <a href="/dashboard"><img src="./imgs/arrow-left.svg" className=" w-10" />
            </a>
            <div>
              <p className="text-1xl font-bold">Faça seu pagamento</p>
            </div>
          </div>
        </section>

        <section className="container max-w-3xl p-4 space-y-4">

        </section>
        <section className="container max-w-3xl text-center p-4 space-y-4">
          <p className="text-white text-xl text-center ">Leia o QR-Code com aplicativo do seu banco, ou copie o código e é só esperar para ver se seu palpite é certeiro </p>
         
            <p> Leia o QR-Code com aplicativo do seu banco, ou copie o código e é só esperar para ver se seu palpite é certeiro</p>
            <QRCode value={payload}
              size={280}
              level="H"
              includeMargin={true}
              className="justify-center "/>
     
          <div className=" bg-green-200 text-center justify-center p-4">
            <h3 className=" text-red-500 font-bold uppercase pb-2">Pague com o PIX</h3>
            <p className="text-red-700 px-2 text-xs text-center pb-2 break-words">{payload}</p>
            <button onClick={() => navigator.clipboard.writeText(payload)}
                className="bg-red-500  text-white font-bold py-2 px-4  rounded-full"> Copiar pix </button>
        
          </div>

        </section>
      </main>

    </>
  )
}
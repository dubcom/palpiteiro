import { getDatabase, push, ref } from "firebase/database";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";

import { useId } from "react-id-generator";


import QRCode from "qrcode.react";


import Pix from "../pix";


export const Dashboard = () => {

  // login com google verification 
  const { user, signOut, signed } = useContext(AuthGoogleContext);
  const userLogin = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));
  console.log(userLogin)

  if (!signed) {
    return <Navigate to="/login" />
  }

  const [awayTeamScore, setAwayTeamScore] = useState("");
  const [homeTeamScore, setHomeTeamScore] = useState("");
  const [userId, setUserId] = useState(userLogin.uid);
  const [nameBet, seteNameBet] = useState(userLogin.displayName);
  const valueBet = 5;
  const [idPayment] = useId();

 
  async function handleChange() {

    const data = {
      nameBet: nameBet,
      userId: userId,
      awayTeamScore: awayTeamScore,
      homeTeamScore: homeTeamScore,
      valueBet: valueBet,
      createdAt: new Date().toLocaleString().toLocaleString('pt-BR')

    }
    console.log(data)
    const db = getDatabase();
    await push(ref(db, `bet/${userId}/betCreated`), data);
  }

  // Create  payload the pix pagment 
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

              <img src={userLogin.photoURL ? userLogin.photoURL : "./imgs/profile.svg"} className="w-10 h-10 rounded-full" />

              <span className="ml-2 text-xs">{userLogin.displayName}</span>
            </div>
            <div className="flex flex-row items-center ml-4">
              <button className=" text-xs " onClick={signOut}>Sair</button>
            </div>
          </div>
        </div>
      </header>

      <main className="w-screen ">
        <section id="header" className=" bg-red-500 text-white">
          <div className="container items-center flex  flex-row max-w-3xl space-y-2 p-4">
            <a href="/home">
              <img src="./imgs/arrow-left.svg" className=" w-10" />
            </a>
            <h3 className="sm:text-1xl text-2xl font-bold">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <div className="rounded-xl border border-gray-300 p-4 text-center bg-white space-y-4">
            <span className=" md:text-2xl text-red-700 font-bold">Dê o seu palpite, se você acertar pode ganhar <p> R$ 12.985,00</p></span>

            <form className="flex flex-col space-x-4  align-middle  items-center">
              <div className="flex flex-row p-8">
                <img src="/imgs/logoB.png" alt="Logo Bolsonaro" className="w-60 px-2" />

                <input
                  className=" bg-red-300/[0.15]  w-[55px] h-[55px] text-red-700  text-xl text-center"
                  type="number"
                  name="homeTeamScore"
                  value={homeTeamScore}
                  placeholder="0"
                  min="1"
                  max="100"
                  onChange={(e) => setHomeTeamScore(e.target.value)}
                />
              </div>



              <span className=" text-red-500 font-bold text-2xl p-4">X</span>

              <div className="flex flex-row p-8 align-middle  ">
                <img src="../imgs/LogoL.png" alt="Logo do lula Lula" className="w-60 px-2" />
                <input
                  className=" bg-red-600/[0.15]  w-[55px] h-[55px] text-red-700 text-xl text-center"
                  type="number"
                  name="awayTeamScore"
                  value={awayTeamScore}
                  placeholder="0"
                  min="1"
                  max="100"
                  onChange={(e) => setAwayTeamScore(e.target.value)}
                />


              </div>

            </form>
            <div className="flex fles-row p-4 justify-between ">
              <button onClick={handleClick} className="bg-red-500  text-white font-bold py-2 px-4  rounded-full"> Limpar </button>
              <button onClick={handleChange} className="bg-red-500 text-white font-bold py-2 px-4  rounded-full"> Palpitar </button>
            </div>

          </div>

          <div className="rounded-xl center flex flex-col text-center bg-white ">
            <div>
              <QRCode value={payload}
                size={280}
                level={"H"}
                includeMargin={true}
                className="p-2 center" />
            </div>
          
            <div className=" bg-green-200">
              <h3 className=" text-red-500 font-bold text-1xl ">Pague com o PIX</h3>
              <p className="text-red-700 px-2 text-xs ">{payload}</p>
             <div className="p-2">

              <button onClick={() =>  navigator.clipboard.writeText(payload)} 
              className="bg-red-500 text-white font-bold py-2 px-4  rounded-full"> Copiar pix </button>
             </div>
              
            </div>
          </div>


          <div>
            <button onClick={() => { }}
              className="bg-red-500 text-white font-bold py-2 px-4  rounded-full"> Compartilhar </button>

          </div>
        </section>
      </main>

    </>
  )
}
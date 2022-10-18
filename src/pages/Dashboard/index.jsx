import { getDatabase, ref, set } from "firebase/database";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export const Dashboard = () => {

  // login com google verification 
  const { user, signOut, signed } = useContext(AuthGoogleContext);
  let userLogin = JSON.parse(user)
  // console.log(userLogin.uid)
  // const [userUid, setUserUid] = useState(userLogin.uid)
if (!signed) {
    return <Navigate to="/login" />
  }

  const [awayTeamScore, setAwayTeamScore]  = useState("");
  const  [homeTeamScore, setHomeTeamScore ] = useState("");
  const userId = useState(userLogin.uid);
  const name = useState(userLogin.displayName);
  const valueBet = 5;

 
  async function handleChange() {
    console.log( awayTeamScore, valueBet, homeTeamScore, userId, name)
    const db = getDatabase();
    set(ref(db, 'bet/'+ userId), {
      awayTeamScore: awayTeamScore,
      homeTeamScore: homeTeamScore,
      userId: userId,
      name: name,
      valueBet: valueBet,
    });
    
  }

  

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

      <main className="space-y-6">
        <section id="header" className=" bg-red-500 text-white">
          <div className="container flex items-center flex-row max-w-3xl space-y-2 p-4">
            <a href="/home">
              <img src="./imgs/arrow-left.svg" className=" w-10" />
            </a>
            <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <div className="rounded-xl border border-gray-300 p-4 text-center bg-white space-y-4">
            <span className="text-sm md:text-base text-red-700 font-bold">Hoje Você pode fazer uma aposto no seu palpite e mostrar que sabe tudo sobre política</span>

            <form className="flex space-x-4 justify-center items-center">

              <img src="/imgs/logoB.png" alt="Logo Bolsonaro" className="w-60 " />



              <input
                className=" bg-red-300/[0.15]  w-[55px] h-[55px] text-red-700 text-xl text-center"
                type="number"
                name="homeTeamScore"
                value={homeTeamScore}
                placeholder="0"
                onChange={(e) => setHomeTeamScore(e.target.value)}
              />

              <span className=" text-red-500 font-bold">X</span>
              <input
                className=" bg-red-300/[0.15]  w-[55px] h-[55px] text-red-700 text-xl text-center"
                type="number"
                name="awayTeamScore"
                value={awayTeamScore}
                placeholder="0"
                onChange={(e) => setAwayTeamScore(e.target.value)}
              />

              <img src="../imgs/LogoL.png" alt="Logo do lula Lula" className="w-60" />
              

            </form>
            <div className="flex fles-row p-4 justify-between ">
              <button className="bg-red-500 text-white font-bold py-2 px-4  rounded-full"> Cancelar </button>
              <button onClick={handleChange} className="bg-red-500 text-white font-bold py-2 px-4  rounded-full"> Palpitar </button>
            </div>
            
          </div>


          <div className="space-y-4">


          </div>

        </section>
      </main>

    </>
  )
}
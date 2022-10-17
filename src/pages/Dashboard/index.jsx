import React from "react";
import { useAuth } from "../../contexts/authGoogle";

export const Dashboard = () => {
  const setUser = firebase.auth().currentUser;
  const { logout } = useAuth();
  const useNavigate = useNavigate();

 


  return (
    <>
      <header className="bg-red-700 text-white px-8">
        <div className="container max-w-3xl flex justify-between p-4">
          <a href="/" className="text-white font-bold text-2xl">
            <img src="./imgs/logoPalpite.svg" className="w-32 md:w-40" />
          </a>
          <a href={`/848457`}>
            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
            <img src="./imgs/arrow-left.svg" className=" w-10" />
          </a>
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className=" bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <span>Marcos Antonio</span>
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

              />

              <span className=" text-red-500 font-bold">X</span>
              <input
                className=" bg-red-300/[0.15]  w-[55px] h-[55px] text-red-700 text-xl text-center"
                type="number"
                name="awayTeamScore"

              />

              <img src="../imgs/LogoL.png" alt="Bandeira da Suiça" className="w-60" />

            </form>
            <div className="flex fles-row p-4 justify-between ">
              <button className="bg-red-500 text-white font-bold py-2 px-4  rounded-full"> Cancelar </button>
              <button className="bg-red-500 text-white font-bold py-2 px-4  rounded-full"> Palpitar </button>
            </div>
          </div>


          <div className="space-y-4">


          </div>

        </section>
      </main>

    </>
  )
}
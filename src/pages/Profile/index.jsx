import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";

export const Profile = () => {
  const { user, signOut, signed } = useContext(AuthGoogleContext);
  let userLogin = JSON.parse(user)
if (!signed) {
    return <Navigate to="/home" />
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
          <div className="container max-w-3xl space-y-2 p-4">
            <a href="/dashboard"><img src="./imgs/arrow-left.svg" className=" w-10" />
            </a>
            <h3 className="text-2xl font-bold">Nome do user</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>


         


          <div className="space-y-4">
            
             <h1> {userLogin.displayName}</h1>
          </div>

        </section>
      </main>

    </>
  )
}
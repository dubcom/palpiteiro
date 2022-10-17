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
          <h2 className="text-xl text-white font-bold">Entre na sua conta</h2>
        </div>

        <form onSubmit={() => { }} className="p-4 space-y-6" >
          <input
            type="email"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu email"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            ref={() => { }}
            required

          />

          <input
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite sua senha"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
            ref={() => { }}
            required


          />
          <button type='submit' className="w-full text-center text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">ENTRAR </button>
        </form>
        <div className="p-4 flex space-x-4 items-center">
          <button onClick={handleLoginFromGoogle} className="w-full text-center text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">ENTRAR COM GOOGLE </button>
        </div>

        <div className=" container max-w-3xl flex flex-row center justify-between p-4">
          <div className="p-4  text-white">
            Esqueceu sua senha? <a href="/forgot-password" className="text-red-500">Clique aqui</a>

            <div>
              <a href="/signup">
                <h2 className="text-sl  hover:text-sky-400 text-white font-bold">Crie sua conta</h2>
              </a>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}
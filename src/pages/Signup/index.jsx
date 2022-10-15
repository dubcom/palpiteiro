
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();

export const Signup = () => {
//login com google firebase auth



// login com email e senha firebase



    

  return (
    <div>
      <header className="p-4 border-b border-red-300">
        <div className="container max-w-xl flex justify-center">
          <a href="/">
          <img src="./imgs/logoPalpite.svg" className="w-32 md:w-40" />
          </a>
        </div>
      </header>
      <main className="container max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <img src="./imgs/arrow-left.svg" className="h-6 text-white" />
          </a>
          <h2 className="text-xl font-bold">Crie a sua conta</h2>
        </div>

        <form className="p-4 space-y-6" onSubmit="#">
          <input
            type="text"
            name="name"
            label="Seu nome"
            placeholder="Digite seu nome"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
          />


          <input
            type="text"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu email"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
           
          />

          <input
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite sua senha"
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
           
       
          />
          <button type='submit' className="w-full text-center text-white bg-red-500  hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50"> Criar minha conta </button>
          <button type='submit' className="w-full text-center text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">Criar com google</button>

        </form>
      </main>
    </div>
  )
}
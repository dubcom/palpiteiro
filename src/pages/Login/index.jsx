import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const provider = new GoogleAuthProvider();

export const Login = () => {
//criar login com google firebase auth
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });





// criar login com email e senha firebase 
  

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

        <form className="p-4 space-y-6" onSubmit="#">
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
          <button type='submit' className="w-full text-center text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">ENTRAR </button>
          <button type='submit' onClick={signInWithPopup()} className="w-full text-center text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">ENTRAR COM GOOGLE </button>
         
        </form>
        <div className=" space-x-2 ">
          <a href="/signup">
            <h2 className="text-sl text-center hover:text-sky-400 text-white font-bold">Crie sua conta</h2>
          </a>
          <div className="flex flex-col items-center justify-center h-screen">
<button onClick="#">Sign in with Google</button>
</div>
        </div>
      </main>
    </div>
  )
}
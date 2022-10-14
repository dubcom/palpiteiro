

import { GoogleAuthProvider } from '../../service/firebase/auth';

const provider = new GoogleAuthProvider();

export const Login = () => {
//login com google firebase auth
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

  
  // login email e senha google 

    

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
            <Icon name="back" className="h-6" />
          </a>
          <h2 className="text-xl font-bold">Crie a sua conta</h2>
        </div>

        <form className="p-4 space-y-6" onSubmit={handleSubscribe}>
          <Input
            type="text"
            name="name"
            label="Seu nome"
            placeholder="Digite seu nome"
            onChange={event => setName(event.target.value)}
           
          />


          <Input
            type="text"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu email"
            onChange={event => setEmail(event.target.value)}
           
          />

          <Input
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite sua senha"
            onChange={event => setPassword(event.target.value)}
       
          />
          <button type='submit' disabled={loading} className="w-full text-center text-white bg-red-500  hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50"> Criar minha conta </button>
          <button type='submit' onClick={handLoginGoogle} className="w-full text-center text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">Criar com google</button>

        </form>
      </main>
    </div>
  )
}
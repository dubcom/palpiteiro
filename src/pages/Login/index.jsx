import { useEffect } from "react";
import { AuthContext } from "../../contexts/authGoogle";
import { auth } from "../../service/firebase";


export const Login = () => {

  const { user, setUser } = useContext(AuthContext); 

  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL)
          throw new Error('Missing information from Google Account.');

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
    }, [])


  //Fazer login com google firebase auth
  const handleClickButtonGoogle = async () => { 
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
        
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
          })
          navigate("/dashboard")
        }
      }}


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

          <form className="p-4 space-y-6" >
            <input
              type="text"
              name="email"
              label="Seu e-mail"
              placeholder="Digite seu email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2"
              onChange={(event) => setLoginEmail(event.target.value)}

            />

            <input
              type="password"
              name="password"
              label="Sua senha"
              placeholder="Digite sua senha"
              className="w-full border border-gray-300 rounded-xl px-4 py-2"
              onChange={(event) => setLoginPassword(event.target.value)}


            />
            <button type='submit' className="w-full text-center text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">ENTRAR </button>

          </form>
          <div className="p-4 flex space-x-4 items-center">
            <button type='submit' onClick={handleClickButtonGoogle} className="w-full text-center text-white bg-red-500 hover:bg-red-300 px-6 py-3 rounded-xl block disabled:opacity-50">ENTRAR COM GOOGLE </button>
          </div>

          <div className=" space-x-2 ">
            <a href="/signup">
              <h2 className="text-sl text-center hover:text-sky-400 text-white font-bold">Crie sua conta</h2>
            </a>


            <button type='submit' onClick="#" className="text-sl text-center hover:text-sky-400 text-white font-bold">Sair</button>

          </div>
        </main>
      </div>
    )
  }
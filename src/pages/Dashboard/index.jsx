
import { Icon } from "~/components"

export const Dashboard = () => {
  


  return (
    <>
      <header className="bg-red-700 text-white">
        <div className="container max-w-3xl flex justify-between p-4">
          <img src="./imgs/logoPalpite.svg" className="w-2832 md:w-40" />
          <a href={`/848457`}>
            <Icon name="profile" className="w-10" />
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
        <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
      <span className="text-sm md:text-base text-gray-700 font-bold">hoje</span>

      <form className="flex space-x-4 justify-center items-center">
        <span className="uppercase">brasil</span>
        <img src="/imgs/logoB.png" alt="Bandeira da Suiça" className="w-60" />
       

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

        <img src="../imgs/LULA-2022_MARCA_RGB.png" alt="Bandeira da Suiça" className="w-60" />
        <span className="uppercase">brasil</span>
      </form>
      <div> 
      <button className="bg-red-500 text-white font-bold py-2 px-4  rounded-full"> Palpitar </button>
      <button className="bg-red-500 text-white font-bold py-2 px-4  rounded-full"> Cancelar </button>
      </div>
    </div>
          

          <div className="space-y-4">
          

          </div>

        </section>
      </main>

    </>
  )
}



export const Profile = () => {
  

  return (
    <>
      <header className="bg-red-500 text-white">
        <div className="container max-w-3xl flex justify-between p-4">
        <a href="/" className="text-white font-bold text-2xl">
        <img src="./imgs/logoPalpite.svg" className="w-32 md:w-40" />
        </a>
          <img src="./imgs/logo-black.svg" className="w-2832 md:w-40" />
          {auth?.user?.id && (
          <div onClick={logout} className="p-2 cursor-pointer">
            Sair
          </div>
          )}
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className=" bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <a href="/dashboard"><Icon name="back" className="w-10" />
            </a>
            <h3 className="text-2xl font-bold">{user?.name}</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>


          <DateSelect currentDate={currentDate} onChange={setDate} />


          <div className="space-y-4">
            {isLoading && 'Carregando jogos...'}
            {hasError && 'Ops! Algo deu errado.'}

            {isDone && games.value?.map(game => (
              <Card
                key={game.id}
                gameId={game.id}
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
                gameTime={format(new Date(game.gameTime), 'H:mm')}
                homeTeamScore={user?.hunches?.[game.id]?.homeTeamScore || ''}
                awayTeamScore={user?.hunches?.[game.id]?.awayTeamScore || ''}
                disabled={true}
              />
            ))}
          </div>

        </section>
      </main>

    </>
  )
}
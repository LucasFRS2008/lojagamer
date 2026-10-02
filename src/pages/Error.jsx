

const Error = () => {
  return (
    <main className="px-[5%] my-20 grow text-center flex flex-col items-center justify-center">
      <h2 className="text-6x1 font-bold text-[#95ff00]">404</h2>
      <p className="text-2xl font-bold mb-2 text-cyan-400">Ops! Pagina nao encontrada</p>
      <p className="text-gray-400 mb-8 max-w-md">Parece que voce se perdeu no mapa do jogo. A pagina que voce procura nao existe ou foi removida.</p>
      <Link to="/"className="text-white">Voltar para o Home</Link>
    </main>
  )
}

export default Error
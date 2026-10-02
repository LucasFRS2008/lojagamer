

const GameCard = ({titulo,peco,imagem}) => {
  return (
    <div className="bg-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-4 hover:border-[#95ff00]">
      <img src={imagem} alt={titulo} className="w-full h-[260px] object-cover"/>
      <article className="p-4 text-center">
        <h2 className="text-x1 text-[#95ff00] uppercase mb-3 font-bold"></h2>
        <p className="text-white text-2xl front 2x1 font-bold mb-4">{preco}</p>
      </article>
    </div>
  )
}

export default GameCard

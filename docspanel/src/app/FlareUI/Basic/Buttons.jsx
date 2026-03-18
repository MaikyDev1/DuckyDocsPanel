export function BlackButton({title, icon, onClick}) {
  return (
    <button onClick={onClick} type="button" className="cursor-pointer shadow hover:scale-[1.01] py-2 flex items-center justify-center bg-black rounded-2xl">
      <p className="text-white">{title}</p>
      {icon}
    </button>
  )
}

export function GrayButton({title, icon, onClick}) {
  return (
    <button onClick={onClick} type="button" className="cursor-pointer shadow hover:scale-[1.01] py-2 flex items-center justify-center bg-gray-300 rounded-2xl">
      <p className="text-black">{title}</p>
      {icon}
    </button>
  )
}

export function StoneButton({title, icon, onClick}) {
  return (
    <button onClick={onClick} type="button" className="cursor-pointer w-full shadow hover:scale-[1.01] py-2 flex items-center justify-center bg-stone-600 rounded-2xl">
      <p className="text-stone-400">{title}</p>
      {icon}
    </button>
  )
}
export function DirectionalPad() {
  return (
    <article id='cruz' className="flex flex-col items-center justify-center w-32 h-32 drop-shadow-[0_2px_7px_rgba(0,0,0,0.5)]">
      <button className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-t border-[3px] border-black border-b-[#2B2B2B] transition ease-in duration-100'>
        <p className='text-white opacity-40'>↑</p>
      </button>
      <div className='flex flex-row'>
        <button className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-l border-[3px] border-black border-r-[#2B2B2B] transition ease-in duration-100'>
          <p className='text-white opacity-40'>←</p>
        </button>
        <div className='w-10 h-10 bg-[#2B2B2B]'>
        </div>
        <button className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-r border-[3px] border-black border-l-[#2B2B2B] transition ease-in duration-100'>
          <p className='text-white opacity-40'>→</p>
        </button>
      </div>
      <button className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-b border-[3px] border-black border-t-[#2B2B2B] transition ease-in duration-100'>
        <p className='text-white opacity-40'>↓</p>
      </button>
    </article>
  )
}
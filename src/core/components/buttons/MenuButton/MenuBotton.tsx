export function MenuButton({ text, type }: { text: string, type: string }) {
  return (
    <button className={`flex items-center justify-center w-28 h-10 bg-[#2B2B2B] ${type === 'left' ? 'rounded-b-3xl rounded-t-lg rounded-r-lg' :
      type === 'center' ? 'rounded-lg' :
        type === 'right' ? 'rounded-b-3xl rounded-t-lg rounded-l-lg' : ''
      } border-[3px] border-black shadow-[inset_0_-2px_4px_-0px_rgba(0,0,0,1),inset_0_1px_4px_-0px_rgba(150,150,150,1),0px_2px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_0px_4px_0px_rgba(0,0,0,1)] transition ease-in duration-100`}>
      <p className='text-white text-lg font-bold opacity-40'>{text}</p>
    </button>
  )
}
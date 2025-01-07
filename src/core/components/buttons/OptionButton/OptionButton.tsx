export function OptionButton({ text }: { text: string }) {
  return (
    <button className='flex items-center justify-center w-[62px] bg-[#2B2B2B] rounded-full border-[3px] border-black shadow-[inset_0_-2px_4px_-0px_rgba(0,0,0,1),inset_0_1px_4px_-0px_rgba(150,150,150,1),0px_2px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0px_0px_4px_-0px_rgba(0,0,0,1)] origin-bottom -rotate-[25deg] transition ease-in duration-100'>
      <p className='text-white text-xs font-bold opacity-40'>{text}</p>
    </button>
  )
}
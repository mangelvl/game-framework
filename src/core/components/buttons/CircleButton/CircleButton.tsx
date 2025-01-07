export function CircleButton({text,color}:{text:string,color:string}) {

    return (
        <button className={`flex items-center justify-center w-11 h-11 ${
            color === 'blue' ? 'bg-[#0649B2]' :
            color === 'green' ? 'bg-[#009740]' :
            color === 'red' ? 'bg-[#E81B22]' :
            color === 'yellow' ? 'bg-[#FECD19]' : ''} rounded-full border-[3px] border-black shadow-[inset_0_-1px_4px_-0px_rgba(0,0,0,1),inset_0_2px_4px_-0px_rgba(256,256,256,1),0px_1px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0px_0px_4px_-0px_rgba(0,0,0,1)] transition ease-in duration-100`}>
            <p className='text-white text-lg font-bold opacity-50'>{text}</p>
        </button>
    )
}
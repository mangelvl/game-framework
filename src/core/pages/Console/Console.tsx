import { CircleButton } from "../../components/buttons/CircleButton/CircleButton"
import { MenuButton } from "../../components/buttons/MenuButton/MenuBotton"
import { Screen } from "../../components/Screen/Screen"

export function Console() {
  return (
    <>
      <div className="flex flex-col bg-[#6404D7] w-full sm:w-[430px] h-full rounded-3xl rounded-b-[80px] border-[3px] border-black p-6 shadow-[inset_0_-3px_10px_-0px_rgba(0,0,0,1),inset_0_3px_3px_0px_rgba(200,200,200,1),0px_1px_7px_0px_rgba(0,0,0,0.5)]">
        <Screen />
        <div id='controles' className=''>
          <div id="gatillos" className='flex flex-col items-center justify-center w-full gap-8'>
            <div className="w-full flex flex-row justify-between px-4 mt-2">
              <MenuButton text='Left' type='left' />
              <MenuButton text='Menu' type='center' />
              <MenuButton text='Right' type='right' />
            </div>
            <div className="flex flex-row items-center justify-around w-full">
              <div id='cruz' className="flex flex-col items-center justify-center w-32 h-32 drop-shadow-[0_2px_7px_rgba(0,0,0,0.5)]">
                <div className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-t border-[3px] border-black border-b-[#2B2B2B] transition ease-in duration-100'>
                  <p className='text-white opacity-40'>↑</p>
                </div>
                <div className='flex flex-row'>
                  <div className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-l border-[3px] border-black border-r-[#2B2B2B] transition ease-in duration-100'>
                    <p className='text-white opacity-40'>←</p>
                  </div>
                  <div className='w-10 h-10 bg-[#2B2B2B]'>
                  </div>
                  <div className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-r border-[3px] border-black border-l-[#2B2B2B] transition ease-in duration-100'>
                    <p className='text-white opacity-40'>→</p>
                  </div>
                </div>
                <div className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-b border-[3px] border-black border-t-[#2B2B2B] transition ease-in duration-100'>
                  <p className='text-white opacity-40'>↓</p>
                </div>
              </div>
              <div id='botones' className='flex flex-col items-center justify-center w-40 h-40'>
                <CircleButton text="X" color='blue' />
                <div className='flex flex-row gap-10'>
                  <CircleButton text="Y" color='green' />
                  <CircleButton text="A" color='red' />
                </div>
                <CircleButton text="B" color="yellow" />
              </div>
            </div>
            <div id='menu' className="flex flex-row justify-center gap-8 w-full mb-14">
              <div className='flex items-center justify-center w-[62px] bg-[#2B2B2B] rounded-full border-[3px] border-black shadow-[inset_0_-2px_4px_-0px_rgba(0,0,0,1),inset_0_1px_4px_-0px_rgba(150,150,150,1),0px_2px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0px_0px_4px_-0px_rgba(0,0,0,1)] origin-bottom -rotate-[25deg] transition ease-in duration-100'>
                <p className='text-white text-xs font-bold opacity-40'>Start</p>
              </div>
              <div className='flex items-center justify-center w-[62px] bg-[#2B2B2B] rounded-full border-[3px] border-black shadow-[inset_0_-2px_4px_-0px_rgba(0,0,0,1),inset_0_1px_4px_-0px_rgba(150,150,150,1),0px_2px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0px_0px_4px_-0px_rgba(0,0,0,1)] origin-bottom -rotate-[25deg] transition ease-in duration-100'>
                <p className='text-white text-xs font-bold opacity-40'>Select</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export function Console() {
    return (
      <>
        <div className="flex flex-col bg-[#6404D7] w-full sm:w-[430px] h-full rounded-3xl rounded-b-[80px] border-[3px] border-black p-6 shadow-[inset_0_-3px_10px_-0px_rgba(0,0,0,1),inset_0_3px_3px_0px_rgba(200,200,200,1),0px_1px_7px_0px_rgba(0,0,0,0.5)]">
  
          <div id="pantalla" className='bg-black rounded-t-xl rounded-b-3xl p-4'>
            <div className='flex items-center justify-center bg-slate-900 rounded-md w-full h-72'>
              <p className='text-white'>Pantalla</p>
            </div>
  
            <div className='flex justify-center bg-black pt-2'>
              <h2 className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-green-400'>MangelStation</h2>
            </div>
          </div>
  
          <div id='controles' className=''>
            <div id="gatillos" className='flex flex-col items-center justify-center w-full gap-8'>
              <div className="w-full flex flex-row justify-between px-4 mt-2">
                <div className='flex items-center justify-center w-28 h-10 bg-[#2B2B2B] rounded-b-3xl rounded-t-lg rounded-r-lg border-[3px] border-black shadow-[inset_0_-2px_4px_-0px_rgba(0,0,0,1),inset_0_1px_4px_-0px_rgba(150,150,150,1),0px_2px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_0px_4px_0px_rgba(0,0,0,1)] transition ease-in duration-100'>
                  <p className='text-white text-lg font-bold opacity-40'>L</p>
                </div>
  
                <div className='flex items-center justify-center w-28 h-10 bg-[#2B2B2B] rounded-lg border-[3px] border-black shadow-[inset_0_-2px_4px_-0px_rgba(0,0,0,1),inset_0_1px_4px_-0px_rgba(150,150,150,1),0px_2px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_0px_4px_0px_rgba(0,0,0,1)] transition ease-in duration-100'>
                  <p className='text-white text-lg font-bold opacity-40'>MENU</p>
                </div>
  
                <div className='flex items-center justify-center w-28 h-10 bg-[#2B2B2B] rounded-b-3xl rounded-t-lg rounded-l-lg border-[3px] border-black shadow-[inset_0_-2px_4px_-0px_rgba(0,0,0,1),inset_0_1px_4px_-0px_rgba(150,150,150,1),0_2px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,1)] transition ease-in duration-100'>
                  <p className='text-white text-lg font-bold opacity-40'>R</p>
                </div>
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
                  <div className='flex items-center justify-center w-11 h-11 bg-[#0649B2] rounded-full border-[3px] border-black shadow-[inset_0_-1px_4px_-0px_rgba(0,0,0,1),inset_0_2px_4px_-0px_rgba(256,256,256,1),0px_1px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0px_0px_4px_-0px_rgba(0,0,0,1)] transition ease-in duration-100'>
                    <p className='text-white text-lg font-bold opacity-30'>X</p>
                  </div>
  
                  <div className='flex flex-row gap-10'>
                    <div className='flex items-center justify-center w-11 h-11 bg-[#009740] rounded-full border-[3px] border-black shadow-[inset_0_-1px_4px_-0px_rgba(0,0,0,1),inset_0_2px_4px_-0px_rgba(256,256,256,1),0px_1px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0px_0px_4px_-0px_rgba(0,0,0,1)] transition ease-in duration-100'>
                      <p className='text-white text-lg font-bold opacity-30'>Y</p>
                    </div>
  
                    <div className='flex items-center justify-center w-11 h-11 bg-[#E81B22] rounded-full border-[3px] border-black shadow-[inset_0_-1px_4px_-0px_rgba(0,0,0,1),inset_0_2px_4px_-0px_rgba(256,256,256,1),0px_1px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0px_0px_4px_-0px_rgba(0,0,0,1)] transition ease-in duration-100'>
                      <p className='text-white text-lg font-bold opacity-50'>A</p>
                    </div>
                  </div>
  
                  <div className='flex items-center justify-center w-11 h-11 bg-[#FECD19] rounded-full border-[3px] border-black shadow-[inset_0_-1px_4px_-0px_rgba(0,0,0,1),inset_0_2px_4px_-0px_rgba(256,256,256,1),0px_1px_7px_0px_rgba(0,0,0,0.5)] hover:shadow-[inset_0px_0px_4px_-0px_rgba(0,0,0,1)] transition ease-in duration-100'>
                    <p className='text-white text-lg font-bold opacity-60'>B</p>
                  </div>
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
export function Console() {
  return (
    <>
      <div className="flex flex-col bg-[#6404D7] w-full sm:w-[430px] h-full rounded-3xl border-[3px] border-black p-5">

        <div id="pantalla" className='bg-black rounded-t-xl rounded-b-3xl p-4'>
          <div className='flex items-center justify-center bg-slate-600 rounded-md w-full h-72'>
            <p className='text-white'>Pantalla</p>
          </div>

          <div className='flex justify-center bg-black'>
            <h2 className='text-gray-200 text-lg font-medium'>MangelStation</h2>
          </div>

        </div>

        <div id='controles' className=''>
          <div className='flex flex-col items-center justify-center w-full gap-8'>

            <div className="w-full flex flex-row justify-between px-4 mt-1">
              <div className='flex items-center justify-center w-20 h-10 bg-[#2B2B2B] rounded-b-3xl rounded-t-lg rounded-r-lg border-[3px] border-black'>
                <p className='text-gray-200 text-lg font-medium'>L</p>
              </div>

              <div className='flex items-center justify-center w-20 h-10 bg-[#2B2B2B] rounded-b-3xl rounded-t-lg rounded-l-lg border-[3px] border-black'>
                <p className='text-gray-200 text-lg font-medium'>R</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-around w-full">
              <div className="flex flex-col items-center justify-center w-32 h-32">
                <div className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-t border-[3px] border-black border-b-[#2B2B2B]'>
                  <p className='text-gray-200 text-lg font-medium'>T</p>
                </div>

                <div id='cruz' className='flex flex-row'>
                  <div className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-l border-[3px] border-black border-r-[#2B2B2B]'>
                    <p className='text-gray-200 text-lg font-medium'>L</p>
                  </div>

                  <div className='w-10 h-10 bg-[#2B2B2B] border-[3px] border-[#2B2B2B]'></div>

                  <div className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-r border-[3px] border-black border-l-[#2B2B2B]'>
                    <p className='text-gray-200 text-lg font-medium'>R</p>
                  </div>
                </div>

                <div className='flex items-center justify-center w-10 h-10 bg-[#2B2B2B] rounded-b border-[3px] border-black border-t-[#2B2B2B]'>
                  <p className='text-gray-200 text-lg font-medium'>B</p>
                </div>
              </div>

              <div id='botones' className='flex flex-col items-center justify-center w-36 h-36 rounded-full bg-[#4F08AC]'>
                <div className='flex items-center justify-center w-10 h-10 bg-[#0649B2] rounded-full border-[3px] border-black'>
                  <p className='text-gray-200 text-lg font-medium'>X</p>
                </div>

                <div className='flex flex-row gap-10'>
                  <div className='flex items-center justify-center w-10 h-10 bg-[#009740] rounded-full border-[3px] border-black'>
                    <p className='text-gray-200 text-lg font-medium'>Y</p>
                  </div>

                  <div className='flex items-center justify-center w-10 h-10 bg-[#E81B22] rounded-full border-[3px] border-black'>
                    <p className='text-gray-200 text-lg font-medium'>A</p>
                  </div>
                </div>

                <div className='flex items-center justify-center w-10 h-10 bg-[#FECD19] rounded-full border-[3px] border-black'>
                  <p className='text-gray-200 text-lg font-medium'>B</p>
                </div>
              </div>
            </div>

            <div id='menu' className="flex flex-row justify-center gap-4 w-full mt-10 mb-14">
              <div className='flex items-center justify-center w-[62px] bg-[#2B2B2B] rounded-full border-[3px] border-black'>
                <p className='text-gray-200 text-xs font-medium'>Start</p>
              </div>

              <div className='flex items-center justify-center w-[62px] bg-[#2B2B2B] rounded-full border-[3px] border-black'>
                <p className='text-gray-200 text-xs font-medium'>Menu</p>
              </div>

              <div className='flex items-center justify-center w-[62px] bg-[#2B2B2B] rounded-full border-[3px] border-black'>
                <p className='text-gray-200 text-xs font-medium'>Select</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
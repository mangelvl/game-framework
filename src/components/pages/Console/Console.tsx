export function Console() {
  return (
    <>
      <div className="flex flex-col bg-slate-300 w-full sm:w-[430px] h-full rounded-3xl gap-4 p-5">

        <div id="pantalla" className='bg-black rounded-t-xl rounded-b-3xl p-4'>
          <div className='flex items-center justify-center bg-slate-600 rounded-md w-full h-72'>
            <p className='text-white'>Pantalla</p>
          </div>

          <div className='flex justify-center bg-black'>
            <h2 className='text-gray-200 text-lg font-medium'>MangelStation</h2>
          </div>

        </div>

        <div id='controles' className='h-[288px] py-4'>
          <div className='flex flex-col items-center justify-center w-full gap-4'>
            <div className="w-full flex flex-row justify-between">
              <div className='flex items-center justify-center w-[62px] h-[32px] bg-white rounded-b-3xl rounded-t-lg rounded-r-lg border border-black'>
                <p className=''>L</p>
              </div>

              <div className='flex items-center justify-center w-[62px] h-[32px] bg-white rounded-b-3xl rounded-t-lg rounded-l-lg border border-black'>
                <p>R</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-around w-full">
              <div className="flex flex-col items-center justify-center w-[94px] h-[94px]">
                <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-t border border-black border-b-white'>
                  <p>T</p>
                </div>

                <div className='flex flex-row'>
                  <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-l border border-black border-r-white'>
                    <p>L</p>
                  </div>

                  <div className='w-[32px] h-[32px] bg-white border border-white'></div>

                  <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-r border border-black border-l-white'>
                    <p>R</p>
                  </div>
                </div>

                <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-b border border-black border-t-white'>
                  <p>B</p>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center w-[142px] h-[142px] border rounded-full'>
                <div className='flex items-center justify-center w-[42px] h-[42px] bg-white rounded-full border border-black'>
                  <p>X</p>
                </div>

                <div className='flex flex-row gap-[42px]'>
                  <div className='flex items-center justify-center w-[42px] h-[42px] bg-white rounded-full border border-black'>
                    <p>Y</p>
                  </div>

                  <div className='flex items-center justify-center w-[42px] h-[42px] bg-white rounded-full border border-black'>
                    <p>A</p>
                  </div>
                </div>

                <div className='flex items-center justify-center w-[42px] h-[42px] bg-white rounded-full border border-black'>
                  <p>B</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-around w-full">
              <div className='flex items-center justify-center w-[62px] bg-white rounded-full border border-black'>
                <p>Start</p>
              </div>

              <div className='flex items-center justify-center w-[62px] bg-white rounded-full border border-black'>
                <p>Menu</p>
              </div>

              <div className='flex items-center justify-center w-[62px] bg-white rounded-full border border-black'>
                <p>Select</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
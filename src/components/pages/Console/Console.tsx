export function Console() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-slate-300 w-96 h-96 rounded-xl">
        <div className='flex items-center justify-center bg-black w-72 h-72 m-4'>
          <p className='text-gray-300'>Pantalla</p>
        </div>

        <div className='flex flex-col items-center justify-center bg-slate-400 w-72 h-72 m-4 border'>

          <div className="w-full flex flex-row justify-between p-1">
            <div className='flex items-center justify-center w-[62px] h-[32px] bg-white rounded-md border border-black'>
              <p>L</p>
            </div>
            <div className='flex items-center justify-center w-[62px] h-[32px] bg-white rounded-md border border-black'>
              <p>R</p>
            </div>
          </div>

          <div className="flex-row gap-10 p-1">
            <div className="flex flex-col items-center">
              <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-t-md border border-black'>
                <p>T</p>
              </div>
              <div className='flex flex-row'>
                <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-l-md border border-black'>
                  <p>L</p>
                </div>
                <div className='flex items-center justify-center w-[32px] h-[32px] bg-white border border-black'>
                  <p></p>
                </div>
                <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-r-md border border-black'>
                  <p>R</p>
                </div>
              </div>
              <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-b-md border border-black'>
                <p>B</p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full border border-black'>
                <p>X</p>
              </div>
              <div className='flex flex-row gap-[32px]'>
                <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full border border-black'>
                  <p>Y</p>
                </div>
                <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full border border-black'>
                  <p>A</p>
                </div>
              </div>
              <div className='flex items-center justify-center w-[32px] h-[32px] bg-white rounded-full border border-black'>
                <p>B</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-2 p-1">
            <div className='flex items-center justify-center w-[62px] h-[32px] bg-white rounded-md border border-black'>
              <p>Start</p>
            </div>
            <div className='flex items-center justify-center w-[62px] h-[32px] bg-white rounded-md border border-black'>
              <p>Select</p>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
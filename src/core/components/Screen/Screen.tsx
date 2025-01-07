export function Screen() {
  return (
    <div id="screen" className='bg-black rounded-t-xl rounded-b-3xl p-4'>
      <div className='flex items-center justify-center bg-slate-900 rounded-md w-full h-72'>
        <p className='text-white'>Componente Pantalla</p>
      </div>
      <div className='flex justify-center bg-black pt-2'>
        <h2 className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-green-400'>MangelStation</h2>
      </div>
    </div>
  )
}
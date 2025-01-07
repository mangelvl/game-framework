import { CircleButton } from "../../components/buttons/CircleButton/CircleButton"
import { DirectionalPad } from "../../components/buttons/DirectionalPad/DirectionalPad"
import { MenuButton } from "../../components/buttons/MenuButton/MenuBotton"
import { OptionButton } from "../../components/buttons/OptionButton/OptionButton"
import { Screen } from "../../components/Screen/Screen"

export function Console() {
  return (
    <>
      <div className="flex flex-col bg-[#6404D7] w-full sm:w-[430px] h-full rounded-3xl rounded-b-[80px] border-[3px] border-black p-6 shadow-[inset_0_-3px_10px_-0px_rgba(0,0,0,1),inset_0_3px_3px_0px_rgba(200,200,200,1),0px_1px_7px_0px_rgba(0,0,0,0.5)]">
        <Screen />
        <div id='buttons' className='flex flex-col items-center justify-center w-full gap-8'>
          <div id='menubuttons' className="w-full flex flex-row justify-between px-4 mt-2">
            <MenuButton text='Left' type='left' />
            <MenuButton text='Menu' type='center' />
            <MenuButton text='Right' type='right' />
          </div>
          <div className="flex flex-row items-center justify-around w-full">
            <DirectionalPad />
            <div id='actionbuttons' className='flex flex-col items-center justify-center w-40 h-40'>
              <CircleButton text="X" color='blue' />
              <div className='flex flex-row gap-10'>
                <CircleButton text="Y" color='green' />
                <CircleButton text="A" color='red' />
              </div>
              <CircleButton text="B" color="yellow" />
            </div>
          </div>
          <div id='optionbuttons' className="flex flex-row justify-center gap-8 w-full mb-14">
            <OptionButton text='Start' />
            <OptionButton text='Select' />
          </div>
        </div>
      </div>
    </>
  )
}
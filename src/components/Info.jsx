import { useState } from "react";
import { X } from "react-feather";
import PremiumButton from "./PremiumButton"

const Info = () =>{
  const [isClicked, setIsClicked] = useState(false);
  
    return(
     <>
      <section className='sticky top-0 z-10 bg-barBackground/90 text-textSec w-full hidden md:flex justify-center'>
        <div className='flex p-4 justify-center items-center'>
          <p>
            Não limite sua criatividade, junte-se a familia Blocks por apenas <strong>BRL 19,99</strong>
          </p>
          <div className='pl-4'>
            <PremiumButton />
          </div>
        </div>
      </section>
      <section className={`${isClicked ? 'hidden' : ''} text-center text-textSec bg-barBackground/90 p-8 sticky bottom-0 md:hidden`}>
        <div className='flex justify-center p-2'>
          <button onClick={() => setIsClicked(true)} className='flex justify-center items-center'>Fechar <X className='pl-2' color='#fff' size='25'/> </button>
        </div>
        <p className='p-2'>
          Não limite sua criatividade, junte-se a familia Blocks por apenas <strong>BRL 19,99</strong>
        </p>
        <div className='p-2 flex justify-center'>
          <PremiumButton />
        </div>
      </section>
      
    </>
    )
}

export default Info;
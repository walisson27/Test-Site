const Header = () => {
    return(
      <header className='border-b-4'>
        <section className='p-10 flex justify-center items-center'>
          <div>
            <img className='w-24 md:w-full' src='./assets/logo.png' alt='Blocks logo' />
          </div>
        </section>
        <hr className='colorfulCatalog w-full' />
        <section className='p-4 py-12 container mx-auto'>
          <h1 className='md:text-3xl text-2xl font-bold'>Catálogo</h1>
          <hr className='md:w-12 w-8 colorTitlee rounded-lg' />
        </section>
      </header>
    )
}

export default Header;
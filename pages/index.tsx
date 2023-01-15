import Head from 'next/head'
import Navbar from './navbar'
import Header from './header'
import Services from './services'
import Project from './project'
import Contact from './contact'
import Footer from './footer'
import { createContext, useContext, useState } from 'react';

export const Context = createContext({})

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const DarkModeSwitchBtn = () => {
    return <div className='shadow-xl flex items-center fixed bottom-10 right-10 z-40 border border-black rounded-full'>
      <button
        className={'p-2 rounded-full ' + (isDarkMode ? 'bg-gray-450 text-white' : 'bg-white text-gray-450')}
        onClick={() => setIsDarkMode(true)}>
        Dark
      </button>
      <button
        className={'p-2 rounded-full ' + (!isDarkMode ? 'bg-gray-450 text-white' : 'bg-white text-gray-450')}
        onClick={() => setIsDarkMode(false)}>
        Light
      </button>
    </div >
  }

  return (
    <Context.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Head>
        <title>Vision Group - Your Software Engineering department</title>
        <meta name="description" content="Software development and outstaffing company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={(isDarkMode ? 'bg-gray-450 text-white' : 'bg-white text-gray-450')}>
        <main className='max-w-[1440px] mx-auto'>
          <Navbar />
          <Header />
          <Services />
          <Project />
          <Contact />
          <Footer />
          <DarkModeSwitchBtn />
        </main>
      </div>
    </Context.Provider>
  )
}

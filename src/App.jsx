import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import StriveExcel from './components/StriveExcel'
import WhoEffect from './components/WhoEffect'
import EfficiencyBest from './components/EfficiencyBest'
import OurPhilosphy from './components/OurPhilosophy'
import OurClients from './components/OurClients'
import GetInTouch from './components/GetInTouch'
import OurPartners from './components/OurPartners'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <motion.section className='flex justify-center items-center w-full overflow-x-hidden'>
        <section className='flex flex-col justify-center items-center max-w-[1280px]'>
          <Header />
          <HeroBanner />
          <StriveExcel />
          <WhoEffect />
          <EfficiencyBest />
          <OurPhilosphy />
          <OurClients />
          <GetInTouch />
          <OurPartners />
        </section>
      </motion.section>
      <Footer />
    </>

  )
}

export default App

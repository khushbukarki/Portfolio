import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'

export default function App(){
  const [dark, setDark] = useState(false)
  const [modalData, setModalData] = useState(null)

  useEffect(()=>{
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches
    const saved = localStorage.getItem('kk_theme')
    const val = saved ? saved==='dark' : system
    setDark(val)
  },[])

  useEffect(()=>{
    const root = document.documentElement
    if(dark){ root.classList.add('dark'); localStorage.setItem('kk_theme','dark') }
    else { root.classList.remove('dark'); localStorage.setItem('kk_theme','light') }
  },[dark])

  useEffect(()=>{
    const onKey = (e)=>{
      if((e.metaKey || e.ctrlKey) && e.key === '/'){ e.preventDefault(); setDark(d=>!d) }
    }
    window.addEventListener('keydown', onKey)
    return ()=>window.removeEventListener('keydown', onKey)
  },[])

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpen={setModalData} />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      {modalData && <Modal data={modalData} onClose={()=>setModalData(null)} />}
    </>
  )
}

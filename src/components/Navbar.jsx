import React from 'react'
const base = import.meta.env.BASE_URL || './'

export default function Navbar({dark, setDark}){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-xl tracking-tight">KK<span className="text-indigo-600 dark:text-indigo-400">.</span></a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#skills" className="hover:text-indigo-600">Skills</a>
          <a href="#experience" className="hover:text-indigo-600">Experience</a>
          <a href="#education" className="hover:text-indigo-600">Education</a>
          <a href="#certs" className="hover:text-indigo-600">Certifications</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={()=>setDark(!dark)} className="rounded-xl px-3 py-2 border border-slate-300 dark:border-slate-700 text-xs hover:shadow">
            {dark? 'Light':'Dark'} ⌘/
          </button>
          <a href={`${base}Khushbu_Karki_CV.pdf`} className="hidden md:inline-block rounded-xl px-3 py-2 text-xs bg-indigo-600 text-white hover:bg-indigo-700">Download CV</a>
        </div>
      </nav>
    </header>
  )
}

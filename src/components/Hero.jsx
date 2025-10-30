import React from 'react'
const base = import.meta.env.BASE_URL || './'

export default function Hero(){
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Khushbu Karki</h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
          Graduate Software & Data Engineer • Full‑Stack (React, FastAPI, TypeScript, Python) • Cloud & CI/CD (AWS, Docker, GitHub Actions).
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-xl px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700">See Projects</a>
          <a href={`${base}Khushbu_Karki_CV.pdf`} className="rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700">Resume</a>
          <a href="#contact" className="rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700">Get in touch</a>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <a className="hover:underline" href="mailto:khushbukarki.18@gmail.com">khushbukarki.18@gmail.com</a>
          <a className="hover:underline" href="https://linkedin.com/in/khushbukarki" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:underline" href="https://github.com/khushbukarki" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:underline" href="https://khushbukarki.github.io/Weather-Forecasting-Nz" target="_blank" rel="noreferrer">Weather App</a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src={`${base}avatar.png`} alt="Khushbu Karki headshot" className="w-64 h-64 object-contain drop-shadow-xl rounded-full ring-4 ring-indigo-600/20" />
      </div>
    </section>
  )
}

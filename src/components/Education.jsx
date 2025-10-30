import React from 'react'

export default function Education(){
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Education</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
          <h3 className="font-semibold">Master of Applied Technologies (Software Development)</h3>
          <p className="text-sm opacity-80">Unitec Institute of Technology, Auckland • Jul 2024 – Nov 2025</p>
          <p className="text-sm mt-2">Key coursework: Machine Learning, Data Analytics, Cloud Computing, IoT, Advanced Web Development</p>
        </div>
        <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60">
          <h3 className="font-semibold">B.E. (Electronics & Communication)</h3>
          <p className="text-sm opacity-80">BTKIT, India • Aug 2017 – Aug 2021</p>
        </div>
      </div>
    </section>
  )
}

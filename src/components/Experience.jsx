import React from 'react'

export default function Experience(){
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Experience</h2>
      <div className="border-l border-slate-200 dark:border-slate-800 pl-6 mt-6">
        <div className="relative mb-6">
          <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-indigo-600"></div>
          <h3 className="font-semibold">Software Development Virtual Experience — Datacom (Forage)</h3>
          <p className="text-xs opacity-70">Aug 2025 – Sep 2025</p>
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li>Enhanced Python-based CI/CD in Azure DevOps, improving deployment reliability by 15%.</li>
            <li>Simulated client cloud automation and data workflows; collaborated in Agile iterations.</li>
          </ul>
        </div>
        <div className="relative mb-6">
          <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-indigo-600"></div>
          <h3 className="font-semibold">Customer Service Representative — BP Connect, Kumeu</h3>
          <p className="text-xs opacity-70">Jul 2024 – Present</p>
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li>Managed high-volume POS operations with 100% accuracy; strengthened teamwork and communication.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

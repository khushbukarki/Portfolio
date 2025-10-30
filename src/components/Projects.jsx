import React, { useMemo, useState } from 'react'
import { projects } from '../data/projects'

export default function Projects({onOpen}){
  const [filter, setFilter] = useState('all')
  const list = useMemo(()=> projects.filter(p => filter==='all' || p.tags.includes(filter)), [filter])

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Projects</h2>
        <div className="flex gap-2 text-sm">
          {['all','ml','web'].map(f=>(
            <button key={f} onClick={()=>setFilter(f)} className={`rounded-xl px-3 py-1 border border-slate-300 dark:border-slate-700 text-xs hover:bg-indigo-50 dark:hover:bg-slate-800 ${filter===f?'bg-indigo-600 text-white border-indigo-600':''}`}>{f.toUpperCase()}</button>
          ))}
        </div>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p, i)=>(
          <div key={i} className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:shadow-lg transition cursor-pointer" onClick={()=>onOpen(p)}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold">{p.title}</h3>
              <div className="flex gap-1">{p.tags.map(t=>(<span key={t} className="inline-block text-[11px] px-2 py-0.5 rounded-full border border-slate-300 dark:border-slate-700">{t.toUpperCase()}</span>))}</div>
            </div>
            <p className="text-sm opacity-90 mt-2">{p.summary}</p>
            <div className="mt-4 flex gap-2">
              {p.live && <a target="_blank" rel="noreferrer" className="inline-block text-[11px] px-2 py-0.5 rounded-full border border-slate-300 dark:border-slate-700 hover:underline" href={p.live}>Live</a>}
              {p.code && <a target="_blank" rel="noreferrer" className="inline-block text-[11px] px-2 py-0.5 rounded-full border border-slate-300 dark:border-slate-700 hover:underline" href={p.code}>Code</a>}
              <span className="inline-block text-[11px] px-2 py-0.5 rounded-full border border-slate-300 dark:border-slate-700">More</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

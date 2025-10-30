import React from 'react'

export default function Modal({data, onClose}){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4" onClick={(e)=>{ if(e.target===e.currentTarget) onClose() }}>
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{data.title}</h3>
          <button onClick={onClose} className="text-xl">×</button>
        </div>
        <p className="mt-3 text-sm opacity-90">{data.summary}</p>
        <div className="mt-5 flex gap-3">
          {data.live && <a href={data.live} className="rounded-xl px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700" target="_blank" rel="noreferrer">Live</a>}
          {data.code && <a href={data.code} className="rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700" target="_blank" rel="noreferrer">Code</a>}
        </div>
      </div>
    </div>
  )
}

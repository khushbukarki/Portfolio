import React, { useEffect } from 'react'
const skillList = [
  'Python','TypeScript','JavaScript','Java','C++','React','FastAPI','REST APIs','SQL','PostgreSQL','MySQL','Docker','GitHub Actions','AWS (EC2,S3,IAM,Lambda,RDS)','Azure DevOps','Vite','Tailwind CSS','Streamlit','Power BI','Tableau','TensorFlow','scikit-learn','NumPy','Pandas','SHAP','LIME'
]
export default function Skills(){
  useEffect(()=>{
    document.querySelectorAll('[data-kpi]').forEach(n=>{
      const target=parseInt(n.getAttribute('data-kpi'),10); let cur=0; const step=Math.max(1,Math.floor(target/60));
      const t=setInterval(()=>{cur+=step; if(cur>=target){cur=target; clearInterval(t)}; n.textContent=cur},20)
    })
  },[])
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Skills</h2>
      <div className="flex flex-wrap gap-2 mt-4">
        {skillList.map(s=>(<span key={s} className="inline-block text-[11px] px-2 py-0.5 rounded-full border border-slate-300 dark:border-slate-700">{s}</span>))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 text-center">
          <div className="text-3xl font-extrabold" data-kpi="6">0</div>
          <div className="text-xs opacity-80 mt-1">Major Projects</div>
        </div>
        <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 text-center">
          <div className="text-3xl font-extrabold" data-kpi="12">0</div>
          <div className="text-xs opacity-80 mt-1">Certifications & Programs</div>
        </div>
        <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 text-center">
          <div className="text-3xl font-extrabold" data-kpi="5">0</div>
          <div className="text-xs opacity-80 mt-1">Cloud & DevOps Tools</div>
        </div>
        <div className="rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 text-center">
          <div className="text-3xl font-extrabold" data-kpi="100">0</div>
          <div className="text-xs opacity-80 mt-1">% Accuracy at POS 😉</div>
        </div>
      </div>
    </section>
  )
}

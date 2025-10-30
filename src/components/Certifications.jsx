import React from 'react'

export default function Certifications(){
  return (
    <section id="certs" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Certifications & Achievements</h2>
      <ul className="mt-4 grid md:grid-cols-2 gap-4 list-disc pl-5">
        <li>AWS Academy Cloud Foundations (2025)</li>
        <li>AWS Cloud Practitioner Essentials (In Progress)</li>
        <li>IBM Data Analysis with Python (2022)</li>
        <li>Accenture Developer Virtual Program (2023)</li>
        <li>IEEEXtreme 19.0 — Ranked #1 in New Zealand</li>
        <li>HackerRank Certifications: 
          <a className="text-indigo-600 hover:underline ml-1" href="https://www.hackerrank.com/certificates/440814eeaf11" target="_blank" rel="noreferrer">Software Engineer</a> • 
          <a className="text-indigo-600 hover:underline" href="https://www.hackerrank.com/certificates/9f147ea78cd0" target="_blank" rel="noreferrer">React</a> • 
          <a className="text-indigo-600 hover:underline" href="https://www.hackerrank.com/certificates/1862849d1061" target="_blank" rel="noreferrer">SQL</a>
        </li>
      </ul>
    </section>
  )
}

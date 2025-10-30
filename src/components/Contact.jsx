import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Contact</h2>
      <div className="mt-4 grid gap-3 text-sm">
        <div><span className="opacity-70 mr-2">Email:</span><a className="hover:underline" href="mailto:khushbukarki.18@gmail.com">khushbukarki.18@gmail.com</a></div>
        <div><span className="opacity-70 mr-2">LinkedIn:</span><a className="hover:underline" target="_blank" rel="noreferrer" href="https://linkedin.com/in/khushbukarki">linkedin.com/in/khushbukarki</a></div>
      </div>
    </section>
  )
}

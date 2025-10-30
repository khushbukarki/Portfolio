import React from 'react'

export default function Footer(){
  return (
    <footer className="py-10 text-center text-sm opacity-70">
      © {new Date().getFullYear()} Khushbu Karki • Built with React & Tailwind • <a className="hover:underline" href="https://github.com/khushbukarki" target="_blank" rel="noreferrer">GitHub</a>
    </footer>
  )
}

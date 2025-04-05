"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Book, Laptop, Database } from "lucide-react"

export default function Hero() {
  const countersInitialized = useRef(false)

  useEffect(() => {
    if (countersInitialized.current) return

    // Fixed accurate counter data
    const counterData = {
      courseCount: 12,
      bookCount: 25,
      softwareCount: 8,
      datasetCount: 15,
    }

    const animateCounter = (element: HTMLElement, target: number, duration: number) => {
      if (!element) return

      const start = 0
      const increment = target / (duration / 16)
      let current = start

      const updateCounter = () => {
        current += increment
        if (current < target) {
          element.textContent = Math.floor(current).toString()
          requestAnimationFrame(updateCounter)
        } else {
          element.textContent = target.toString()
        }
      }

      updateCounter()
    }

    const updateCounters = () => {
      const coursesCountEl = document.querySelector(".courses-count")
      const booksCountEl = document.querySelector(".books-count")
      const softwaresCountEl = document.querySelector(".softwares-count")
      const datasetsCountEl = document.querySelector(".datasets-count")

      if (coursesCountEl) animateCounter(coursesCountEl as HTMLElement, counterData.courseCount, 2000)
      if (booksCountEl) animateCounter(booksCountEl as HTMLElement, counterData.bookCount, 2200)
      if (softwaresCountEl) animateCounter(softwaresCountEl as HTMLElement, counterData.softwareCount, 2400)
      if (datasetsCountEl) animateCounter(datasetsCountEl as HTMLElement, counterData.datasetCount, 2600)
    }

    // Initial update
    updateCounters()

    countersInitialized.current = true
  }, [])

  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-br from-[rgba(52,152,219,0.9)] to-[rgba(46,204,113,0.8)] text-white flex items-center relative overflow-hidden"
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h1 className="hero-title text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Master GIS with <span className="text-[#2c3e50] font-bold">CodeGIS</span>
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl mb-12">Your one-stop hub for GIS learning resources</p>

        <div className="flex justify-center flex-wrap gap-6 md:gap-8 mt-8">
          <div className="flex flex-col items-center gap-2 min-w-[100px]">
            <GraduationCap size={40} className="text-[#2c3e50]" />
            <span className="courses-count text-3xl font-bold">0</span>
            <span className="text-sm opacity-90">Courses</span>
          </div>
          <div className="flex flex-col items-center gap-2 min-w-[100px]">
            <Book size={40} className="text-[#2c3e50]" />
            <span className="books-count text-3xl font-bold">0</span>
            <span className="text-sm opacity-90">Books</span>
          </div>
          <div className="flex flex-col items-center gap-2 min-w-[100px]">
            <Laptop size={40} className="text-[#2c3e50]" />
            <span className="softwares-count text-3xl font-bold">0</span>
            <span className="text-sm opacity-90">Software</span>
          </div>
          <div className="flex flex-col items-center gap-2 min-w-[100px]">
            <Database size={40} className="text-[#2c3e50]" />
            <span className="datasets-count text-3xl font-bold">0</span>
            <span className="text-sm opacity-90">Datasets</span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </section>
  )
}


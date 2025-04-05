"use client"

import { useState, useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Card from "@/components/card"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface ResourceTabsProps {
  courses: {
    category: string
    items: Array<{
      title: string
      description: string
      imageSrc: string
      imageAlt: string
      tags: Array<{
        label: string
        type: string
      }>
    }>
  }[]
  books: Array<{
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    tags: Array<{
      label: string
      type: string
    }>
  }>
  software: Array<{
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    tags: Array<{
      label: string
      type: string
    }>
  }>
  datasets: Array<{
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    tags: Array<{
      label: string
      type: string
    }>
  }>
}

export default function ResourceTabs({ courses, books, software, datasets }: ResourceTabsProps) {
  const [activeTab, setActiveTab] = useState("courses")
  const [activeCourseCategory, setActiveCourseCategory] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handlePrevCategory = () => {
    setActiveCourseCategory((prev) => (prev === 0 ? courses.length - 1 : prev - 1))
  }

  const handleNextCategory = () => {
    setActiveCourseCategory((prev) => (prev === courses.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="resources" ref={sectionRef} className="section bg-[#ecf0f1] py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Learning Resources</h2>
        <p className="section-subtitle">Everything you need to master GIS</p>

        <Tabs defaultValue="courses" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="courses" className="text-lg py-3">
              Courses
            </TabsTrigger>
            <TabsTrigger value="books" className="text-lg py-3">
              Books
            </TabsTrigger>
            <TabsTrigger value="software" className="text-lg py-3">
              Software
            </TabsTrigger>
            <TabsTrigger value="datasets" className="text-lg py-3">
              Datasets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-0">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl text-[#2c3e50] font-semibold">{courses[activeCourseCategory].category}</h3>
              <div className="flex gap-4">
                <button
                  onClick={handlePrevCategory}
                  className="w-10 h-10 rounded-full bg-[#3498db] text-white flex items-center justify-center transition-all hover:bg-[#2ecc71] hover:text-black hover:-translate-y-1 hover:shadow-md"
                  aria-label="Previous category"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {courses.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCourseCategory(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeCourseCategory === index ? "bg-[#3498db] transform scale-125" : "bg-[#bdc3c7]"
                      }`}
                      aria-label={`Go to ${courses[index].category}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNextCategory}
                  className="w-10 h-10 rounded-full bg-[#3498db] text-white flex items-center justify-center transition-all hover:bg-[#2ecc71] hover:text-black hover:-translate-y-1 hover:shadow-md"
                  aria-label="Next category"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses[activeCourseCategory].items.map((course, index) => (
                <Card key={index} {...course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <Card key={index} {...book} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="software" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {software.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="datasets" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {datasets.map((dataset, index) => (
                <Card key={index} {...dataset} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}


"use client"

import { useEffect, useRef } from "react"
import Carousel from "@/components/carousel"
import Card from "@/components/card"

export default function BooksSection() {
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

  const books = [
    {
      title: "GIS Fundamentals",
      description: "A comprehensive introduction to geographic information systems.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=GIS+Fundamentals",
      imageAlt: "GIS Fundamentals",
      tags: [
        { label: "Paul Bolstad", type: "author" },
        { label: "2021", type: "year" },
      ],
    },
    {
      title: "Python Scripting for ArcGIS",
      description: "Learn to automate ArcGIS workflows with Python.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=Python+Scripting",
      imageAlt: "Python Scripting for ArcGIS",
      tags: [
        { label: "Paul A. Zandbergen", type: "author" },
        { label: "2020", type: "year" },
      ],
    },
    {
      title: "Web GIS: Principles and Applications",
      description: "Discover the concepts and tools for building web-based GIS applications.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=Web+GIS",
      imageAlt: "Web GIS: Principles and Applications",
      tags: [
        { label: "Pinde Fu", type: "author" },
        { label: "2019", type: "year" },
      ],
    },
    {
      title: "QGIS By Example",
      description: "Practical guide to using QGIS for spatial data analysis.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=QGIS+Guide",
      imageAlt: "QGIS Guide",
      tags: [
        { label: "Anita Graser", type: "author" },
        { label: "2022", type: "year" },
      ],
    },
    {
      title: "Spatial Statistics Illustrated",
      description: "Learn spatial statistical techniques with practical examples.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=Spatial+Statistics",
      imageAlt: "Spatial Statistics",
      tags: [
        { label: "Lauren Bennett", type: "author" },
        { label: "2021", type: "year" },
      ],
    },
  ]

  return (
    <section id="books" ref={sectionRef} className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Recommended Books</h2>
        <p className="section-subtitle">Expand your GIS knowledge</p>

        <Carousel slidesToShow={3}>
          {books.map((book, index) => (
            <Card key={index} {...book} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}


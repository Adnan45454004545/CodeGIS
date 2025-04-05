"use client"

import { useEffect, useRef } from "react"
import Carousel from "@/components/carousel"
import Card from "@/components/card"

export default function DataSection() {
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

  const datasets = [
    {
      title: "OpenStreetMap",
      description: "Free, editable map of the world, created and maintained by volunteers.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=OpenStreetMap",
      imageAlt: "OpenStreetMap",
      tags: [
        { label: "Vector Data", type: "type" },
        { label: "Open Data", type: "license" },
      ],
    },
    {
      title: "USGS Earth Explorer",
      description: "Access to satellite imagery, aerial photography, and cartographic products.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=USGS",
      imageAlt: "USGS Earth Explorer",
      tags: [
        { label: "Satellite Imagery", type: "type" },
        { label: "Public Domain", type: "license" },
      ],
    },
    {
      title: "Natural Earth",
      description: "Public domain map dataset available at 1:10m, 1:50m, and 1:110 million scales.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=Natural+Earth",
      imageAlt: "Natural Earth",
      tags: [
        { label: "Base Maps", type: "type" },
        { label: "Public Domain", type: "license" },
      ],
    },
    {
      title: "NASA GIBS",
      description: "Global Imagery Browse Services providing satellite imagery as time-enabled OGC services.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=NASA+GIBS",
      imageAlt: "NASA GIBS",
      tags: [
        { label: "Satellite Imagery", type: "type" },
        { label: "Open Data", type: "license" },
      ],
    },
    {
      title: "UNEP Environmental Data",
      description: "Global environmental datasets from the United Nations Environment Programme.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=UNEP",
      imageAlt: "UNEP Environmental Data",
      tags: [
        { label: "Thematic Data", type: "type" },
        { label: "Open Data", type: "license" },
      ],
    },
  ]

  return (
    <section id="data" ref={sectionRef} className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">GIS Data Sources</h2>
        <p className="section-subtitle">Find the data you need</p>

        <Carousel slidesToShow={3}>
          {datasets.map((dataset, index) => (
            <Card key={index} {...dataset} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}


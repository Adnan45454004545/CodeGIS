"use client"

import { useEffect, useRef } from "react"
import Carousel from "@/components/carousel"
import Card from "@/components/card"

export default function SoftwareSection() {
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

  const software = [
    {
      title: "QGIS",
      description: "Free and open source geographic information system.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=QGIS",
      imageAlt: "QGIS",
      tags: [
        { label: "Desktop GIS", type: "type" },
        { label: "Open Source", type: "license" },
      ],
    },
    {
      title: "ArcGIS Pro",
      description: "Professional GIS software by Esri for 2D and 3D mapping.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=ArcGIS",
      imageAlt: "ArcGIS",
      tags: [
        { label: "Desktop GIS", type: "type" },
        { label: "Commercial", type: "license" },
      ],
    },
    {
      title: "GRASS GIS",
      description: "Geographic Resources Analysis Support System for geospatial data management.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=GRASS",
      imageAlt: "GRASS GIS",
      tags: [
        { label: "Desktop GIS", type: "type" },
        { label: "Open Source", type: "license" },
      ],
    },
    {
      title: "Leaflet",
      description: "JavaScript library for mobile-friendly interactive maps.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=Leaflet",
      imageAlt: "Leaflet",
      tags: [
        { label: "Web Mapping", type: "type" },
        { label: "Open Source", type: "license" },
      ],
    },
    {
      title: "GDAL",
      description: "Geospatial Data Abstraction Library for raster and vector geospatial data formats.",
      imageSrc: "/placeholder.svg?height=200&width=300&text=GDAL",
      imageAlt: "GDAL",
      tags: [
        { label: "Library", type: "type" },
        { label: "Open Source", type: "license" },
      ],
    },
  ]

  return (
    <section id="softwares" ref={sectionRef} className="section bg-[#ecf0f1] py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">GIS Software</h2>
        <p className="section-subtitle">Tools for your GIS projects</p>

        <Carousel slidesToShow={3}>
          {software.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}


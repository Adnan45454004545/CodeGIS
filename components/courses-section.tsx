"use client"

import { useEffect, useRef } from "react"
import Carousel from "@/components/carousel"
import Card from "@/components/card"

export default function CoursesSection() {
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

  const gisSoftwareCourses = [
    {
      title: "QGIS",
      description: "Master open-source GIS with QGIS for mapping and spatial analysis.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "QGIS Course",
      tags: [
        { label: "Beginner", type: "level" },
        { label: "12 hours", type: "duration" },
      ],
    },
    {
      title: "ArcGIS",
      description: "Comprehensive training in Esri's ArcGIS platform for spatial analysis.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "ArcGIS Course",
      tags: [
        { label: "Intermediate", type: "level" },
        { label: "14 hours", type: "duration" },
      ],
    },
    {
      title: "ArcGIS Pro",
      description: "Professional 2D/3D GIS workflows with Esri's ArcGIS Pro software.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "ArcGIS Pro Course",
      tags: [
        { label: "Advanced", type: "level" },
        { label: "20 hours", type: "duration" },
      ],
    },
    {
      title: "ERDAS Imagine",
      description: "Professional remote sensing and image processing with ERDAS Imagine.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "ERDAS Imagine Course",
      tags: [
        { label: "Intermediate", type: "level" },
        { label: "15 hours", type: "duration" },
      ],
    },
  ]

  const programmingCourses = [
    {
      title: "Python for GIS",
      description: "Automate GIS workflows and spatial analysis using Python scripting.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "Python for GIS Course",
      tags: [
        { label: "Intermediate", type: "level" },
        { label: "10 hours", type: "duration" },
      ],
    },
    {
      title: "R Programming",
      description: "Statistical analysis and visualization of geospatial data using R.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "R Programming",
      tags: [
        { label: "Intermediate", type: "level" },
        { label: "12 hours", type: "duration" },
      ],
    },
    {
      title: "WebGIS",
      description: "Build interactive web mapping applications using modern GIS technologies.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "WebGIS Development Course",
      tags: [
        { label: "Intermediate", type: "level" },
        { label: "18 hours", type: "duration" },
      ],
    },
  ]

  const aiMlCourses = [
    {
      title: "Machine Learning",
      description: "Apply ML algorithms to geospatial data for pattern recognition and prediction.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "Machine Learning",
      tags: [
        { label: "Advanced", type: "level" },
        { label: "15 hours", type: "duration" },
      ],
    },
    {
      title: "Deep Learning",
      description: "Advanced neural networks for satellite image analysis and geospatial AI.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "Deep Learning for GIS Course",
      tags: [
        { label: "Advanced", type: "level" },
        { label: "18 hours", type: "duration" },
      ],
    },
    {
      title: "Neural Networks",
      description: "Design and implement NN architectures for geospatial applications.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "Neural Networks for GIS Course",
      tags: [
        { label: "Advanced", type: "level" },
        { label: "16 hours", type: "duration" },
      ],
    },
  ]

  const earthEngineCourses = [
    {
      title: "GEE with JavaScript",
      description: "Process petabyte-scale geospatial data using Google Earth Engine's JavaScript API.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "Google Earth Engine with JavaScript",
      tags: [
        { label: "Intermediate", type: "level" },
        { label: "14 hours", type: "duration" },
      ],
    },
    {
      title: "GEE with Python",
      description: "Leverage Earth Engine's Python API for advanced geospatial analysis.",
      imageSrc: "/placeholder.svg?height=200&width=300",
      imageAlt: "Google Earth Engine with Python Course",
      tags: [
        { label: "Advanced", type: "level" },
        { label: "16 hours", type: "duration" },
      ],
    },
  ]

  return (
    <section id="courses" ref={sectionRef} className="section bg-[#ecf0f1] py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Courses</h2>
        <p className="section-subtitle">Learn GIS from industry experts</p>

        <h3 className="text-2xl text-[#2c3e50] mb-5 mt-10 pb-2 border-b-2 border-[#3498db]">GIS Software</h3>
        <Carousel slidesToShow={3}>
          {gisSoftwareCourses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </Carousel>

        <h3 className="text-2xl text-[#2c3e50] mb-5 mt-10 pb-2 border-b-2 border-[#3498db]">Programming for GIS</h3>
        <Carousel slidesToShow={3}>
          {programmingCourses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </Carousel>

        <h3 className="text-2xl text-[#2c3e50] mb-5 mt-10 pb-2 border-b-2 border-[#3498db]">AI & Machine Learning</h3>
        <Carousel slidesToShow={3}>
          {aiMlCourses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </Carousel>

        <h3 className="text-2xl text-[#2c3e50] mb-5 mt-10 pb-2 border-b-2 border-[#3498db]">Google Earth Engine</h3>
        <Carousel slidesToShow={3}>
          {earthEngineCourses.map((course, index) => (
            <Card key={index} {...course} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}


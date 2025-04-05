"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { GraduationCap, BookOpen, Globe, Lightbulb } from "lucide-react"

export default function AboutSection() {
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

  return (
    <section id="about" ref={sectionRef} className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About CodeGIS</h2>
        <p className="section-subtitle">Your trusted resource for geospatial learning</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
          {/* Left column */}
          <div className="flex flex-col gap-8 h-full">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Our+Team"
                alt="CodeGIS Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Team</h3>
                  <p className="text-sm opacity-90">A diverse group of GIS experts passionate about education</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3498db] to-[#2ecc71] text-white p-8 rounded-xl shadow-lg flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="mb-4">
                CodeGIS is dedicated to making GIS learning accessible to everyone, from beginners to professionals.
              </p>
              <p>
                Founded in 2020 by a team of GIS experts, we provide high-quality courses, curated book recommendations,
                software guides, and data sources to help you master GIS technologies.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8 h-full">
            <div className="bg-[#f8f9fa] p-8 rounded-xl shadow-md border border-gray-100 flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-[#2c3e50]">Our Vision</h3>
              <p className="mb-4 text-gray-700">
                We envision a world where geographic information systems are accessible to everyone, empowering
                individuals and organizations to make data-driven decisions that positively impact our planet.
              </p>
              <p className="text-gray-700">
                By 2025, we aim to become the leading platform for GIS education, serving students and professionals
                across 50+ countries with comprehensive learning resources in multiple languages.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                <div className="flex items-start">
                  <div className="bg-[rgba(52,152,219,0.1)] p-3 rounded-full mr-4 flex-shrink-0">
                    <GraduationCap className="text-[#3498db] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#2c3e50]">Expert-Led Courses</h3>
                    <p className="text-sm text-gray-600">
                      Learn from industry professionals with years of GIS experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                <div className="flex items-start">
                  <div className="bg-[rgba(46,204,113,0.1)] p-3 rounded-full mr-4 flex-shrink-0">
                    <BookOpen className="text-[#2ecc71] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#2c3e50]">Curated Resources</h3>
                    <p className="text-sm text-gray-600">
                      Hand-picked books and tutorials to accelerate your learning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                <div className="flex items-start">
                  <div className="bg-[rgba(155,89,182,0.1)] p-3 rounded-full mr-4 flex-shrink-0">
                    <Globe className="text-[#9b59b6] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#2c3e50]">Global Community</h3>
                    <p className="text-sm text-gray-600">Connect with GIS professionals from around the world.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                <div className="flex items-start">
                  <div className="bg-[rgba(241,196,15,0.1)] p-3 rounded-full mr-4 flex-shrink-0">
                    <Lightbulb className="text-[#f1c40f] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#2c3e50]">Practical Projects</h3>
                    <p className="text-sm text-gray-600">Apply your knowledge with real-world GIS projects.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2c3e50] text-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
                  <p className="text-sm opacity-90">Become part of our growing community of GIS enthusiasts.</p>
                </div>
                <button className="bg-[#3498db] hover:bg-[#2ecc71] text-white py-2 px-6 rounded-md transition-all hover:-translate-y-1 hover:shadow-md whitespace-nowrap">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


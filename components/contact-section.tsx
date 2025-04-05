"use client"

import { useEffect, useRef } from "react"
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Youtube, Github } from "lucide-react"

export default function ContactSection() {
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
    <section
      id="contact"
      ref={sectionRef}
      className="section bg-gradient-to-br from-[rgba(52,152,219,0.05)] to-[rgba(46,204,113,0.05)] py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Get in touch with our team</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Contact Information</h3>

            <div className="flex items-center mb-4">
              <div className="w-9 h-9 rounded-full bg-[rgba(52,152,219,0.1)] flex items-center justify-center mr-4">
                <MapPin className="text-[#3498db] w-5 h-5" />
              </div>
              <p>123 GIS Street, GeoTown, GT 12345</p>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-9 h-9 rounded-full bg-[rgba(52,152,219,0.1)] flex items-center justify-center mr-4">
                <Mail className="text-[#3498db] w-5 h-5" />
              </div>
              <p>info@codegis.com</p>
            </div>

            <div className="flex items-center mb-6">
              <div className="w-9 h-9 rounded-full bg-[rgba(52,152,219,0.1)] flex items-center justify-center mr-4">
                <Phone className="text-[#3498db] w-5 h-5" />
              </div>
              <p>+1 (555) 123-4567</p>
            </div>

            <h4 className="text-lg font-medium mb-3 text-[#2c3e50]">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-[#3498db] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#2ecc71] hover:text-black hover:-translate-y-1 hover:shadow-md"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#3498db] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#2ecc71] hover:text-black hover:-translate-y-1 hover:shadow-md"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#3498db] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#2ecc71] hover:text-black hover:-translate-y-1 hover:shadow-md"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#3498db] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#2ecc71] hover:text-black hover:-translate-y-1 hover:shadow-md"
              >
                <Youtube size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#3498db] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#2ecc71] hover:text-black hover:-translate-y-1 hover:shadow-md"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md h-full">
            <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Send Us a Message</h3>

            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#3498db] focus:ring focus:ring-[rgba(52,152,219,0.2)] transition-all"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#3498db] focus:ring focus:ring-[rgba(52,152,219,0.2)] transition-all"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#3498db] focus:ring focus:ring-[rgba(52,152,219,0.2)] transition-all"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  required
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#3498db] focus:ring focus:ring-[rgba(52,152,219,0.2)] transition-all min-h-[100px] resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#3498db] text-white rounded-md font-medium transition-all hover:bg-[#2ecc71] hover:text-black hover:-translate-y-1 hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


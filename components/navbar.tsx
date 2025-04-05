"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    if (term.trim() === "") {
      setShowSuggestions(false)
      return
    }

    // Mock search results - in a real app, this would come from an API
    const mockResults = [
      { title: "QGIS Course", category: "Courses", type: "course" },
      { title: "Python for GIS", category: "Courses", type: "course" },
      { title: "GIS Fundamentals Book", category: "Books", type: "book" },
      { title: "ArcGIS Pro", category: "Software", type: "software" },
      { title: "OpenStreetMap Data", category: "Data", type: "dataset" },
    ].filter((item) => item.title.toLowerCase().includes(term.toLowerCase()))

    setSearchResults(mockResults)
    setShowSuggestions(true)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Close suggestions when toggling menu
    setShowSuggestions(false)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setShowSuggestions(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center z-20">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-[#3498db] rounded-md flex items-center justify-center text-white font-bold text-lg mr-3">
              CG
            </div>
            <span className="text-xl font-bold">
              <span className="text-[#3498db]">Code</span>
              <span className="text-[#2ecc71]">GIS</span>
            </span>
          </Link>
        </div>

        <ul
          className={`${
            isMobile
              ? "fixed top-[70px] left-0 w-full bg-white flex-col items-center shadow-md transition-transform duration-300 z-10 " +
                (isMenuOpen ? "flex translate-y-0" : "flex translate-y-[-150%]")
              : "flex space-x-8 ml-12"
          }`}
        >
          {isMobile && (
            <li className="w-full px-6 py-4 border-b border-gray-100">
              <div className="relative w-full">
                <div className="flex bg-white rounded-full overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md">
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="flex-1 px-4 py-2 border-none outline-none text-sm"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <button className="px-3 py-2 bg-[#3498db] text-white transition-all hover:bg-[#2ecc71] flex items-center justify-center rounded-r-md">
                    <Search size={16} />
                  </button>
                </div>
                {showSuggestions && (
                  <div className="absolute top-full left-0 right-0 bg-white rounded-lg max-h-[300px] overflow-y-auto shadow-md mt-1 border border-gray-200 z-50">
                    {searchResults.length > 0 ? (
                      <ul className="py-2">
                        {searchResults.map((result, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 cursor-pointer transition-all hover:bg-[#3498db] hover:text-white border-b border-gray-100"
                            onClick={() => {
                              setSearchTerm(result.title)
                              setShowSuggestions(false)
                            }}
                          >
                            <strong>{result.title}</strong>
                            <span className="block text-xs mt-1 opacity-80">{result.category}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="px-4 py-2 text-gray-500 text-sm">No results found. Try different keywords.</div>
                    )}
                  </div>
                )}
              </div>
            </li>
          )}

          <li className={isMobile ? "my-4 w-full text-center" : ""}>
            <Link
              href="#home"
              className="font-medium relative hover:text-[#3498db] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#3498db] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className={isMobile ? "my-4 w-full text-center" : ""}>
            <Link
              href="#courses"
              className="font-medium relative hover:text-[#3498db] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#3498db] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              Courses
            </Link>
          </li>
          <li className={isMobile ? "my-4 w-full text-center" : ""}>
            <Link
              href="#books"
              className="font-medium relative hover:text-[#3498db] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#3498db] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              Books
            </Link>
          </li>
          <li className={isMobile ? "my-4 w-full text-center" : ""}>
            <Link
              href="#softwares"
              className="font-medium relative hover:text-[#3498db] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#3498db] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              Software
            </Link>
          </li>
          <li className={isMobile ? "my-4 w-full text-center" : ""}>
            <Link
              href="#data"
              className="font-medium relative hover:text-[#3498db] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#3498db] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              Data
            </Link>
          </li>
          <li className={isMobile ? "my-4 w-full text-center" : ""}>
            <Link
              href="#about"
              className="font-medium relative hover:text-[#3498db] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#3498db] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className={isMobile ? "my-4 w-full text-center" : ""}>
            <Link
              href="#contact"
              className="font-medium relative hover:text-[#3498db] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#3498db] after:transition-all hover:after:w-full"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {!isMobile && (
          <div className="relative ml-4 w-[250px]">
            <div className="flex bg-white rounded-full overflow-hidden shadow-sm border border-gray-200 transition-all hover:shadow-md">
              <input
                type="text"
                placeholder="Search resources..."
                className="flex-1 px-4 py-2 border-none outline-none text-sm"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className="px-3 py-2 bg-[#3498db] text-white transition-all hover:bg-[#2ecc71] flex items-center justify-center rounded-r-md">
                <Search size={16} />
              </button>
            </div>
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 bg-white rounded-lg max-h-[300px] overflow-y-auto shadow-md mt-1 border border-gray-200 z-50">
                {searchResults.length > 0 ? (
                  <ul className="py-2">
                    {searchResults.map((result, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 cursor-pointer transition-all hover:bg-[#3498db] hover:text-white border-b border-gray-100"
                        onClick={() => {
                          setSearchTerm(result.title)
                          setShowSuggestions(false)
                        }}
                      >
                        <strong>{result.title}</strong>
                        <span className="block text-xs mt-1 opacity-80">{result.category}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-2 text-gray-500 text-sm">No results found. Try different keywords.</div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="block md:hidden z-20">
          <button
            className="flex flex-col justify-center items-center w-6 h-6"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-full h-[3px] bg-[#2c3e50] mb-[5px] transition-all ${isMenuOpen ? "transform rotate-45 translate-y-[8px]" : ""}`}
            ></span>
            <span
              className={`w-full h-[3px] bg-[#2c3e50] mb-[5px] transition-all ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-full h-[3px] bg-[#2c3e50] transition-all ${isMenuOpen ? "transform -rotate-45 -translate-y-[8px]" : ""}`}
            ></span>
          </button>
        </div>
      </div>
    </nav>
  )
}


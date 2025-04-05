"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: React.ReactNode[]
  slidesToShow?: number
}

export default function Carousel({ children, slidesToShow = 1 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [prevTranslate, setPrevTranslate] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const actualSlidesToShow = Math.min(slidesToShow, children.length)

  const maxIndex = Math.max(0, children.length - actualSlidesToShow)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true)
    if ("touches" in e) {
      setTouchStart(e.touches[0].clientX)
      setStartPos(e.touches[0].clientX)
    } else {
      setTouchStart(e.clientX)
      setStartPos(e.clientX)
    }
    setPrevTranslate(currentTranslate)
    if (trackRef.current) {
      trackRef.current.style.transition = "none"
    }
  }

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return

    let currentPosition
    if ("touches" in e) {
      currentPosition = e.touches[0].clientX
      setTouchEnd(e.touches[0].clientX)
    } else {
      currentPosition = e.clientX
      setTouchEnd(e.clientX)
    }

    const newTranslate = prevTranslate + (currentPosition - startPos)
    setCurrentTranslate(newTranslate)

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${newTranslate}px)`
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)

    const movedBy = currentTranslate - prevTranslate

    if (movedBy < -100 && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    } else if (movedBy > 100 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }

    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.5s ease"
    }
  }

  useEffect(() => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.clientWidth / actualSlidesToShow
      const newTranslate = -currentIndex * slideWidth
      setCurrentTranslate(newTranslate)
      setPrevTranslate(newTranslate)
      trackRef.current.style.transform = `translateX(${newTranslate}px)`
    }
  }, [currentIndex, actualSlidesToShow])

  return (
    <div className="relative mb-10">
      <div
        className="overflow-hidden cursor-grab"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out py-5"
          style={{
            transform: `translateX(${currentTranslate}px)`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2 transition-transform duration-300 hover:scale-[1.03]"
              style={{
                flex: `0 0 ${100 / actualSlidesToShow}%`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-5 gap-5">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="w-10 h-10 rounded-full bg-[#3498db] text-white flex items-center justify-center transition-all hover:bg-[#2ecc71] hover:text-black hover:-translate-y-1 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: Math.min(children.length - actualSlidesToShow + 1, 5) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-[#3498db] transform scale-125" : "bg-[#bdc3c7]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          className="w-10 h-10 rounded-full bg-[#3498db] text-white flex items-center justify-center transition-all hover:bg-[#2ecc71] hover:text-black hover:-translate-y-1 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}


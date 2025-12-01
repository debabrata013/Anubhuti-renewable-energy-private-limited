"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Harness the Power of the Sun",
      subtitle: "Transform your energy future with clean, renewable solar plants by AR Energy",
      cta: "Get Free Solar Quote",
      bg: "/solar-hero-bg.jpg"
    },
    {
      title: "Industrial Solar Plants",
      subtitle: "High-efficiency solar plant solutions for factories and industrial complexes",
      cta: "Learn More",
      bg: "/solar-hero-2.jpg"
    },
    {
      title: "Commercial Solar Parks",
      subtitle: "Large-scale solar plant installations for commercial sustainability and savings",
      cta: "Calculate ROI",
      bg: "/solar-hero-3.jpg"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative w-full h-screen overflow-hidden pt-16">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url("${slide.bg}")`,
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
          {slides[currentSlide].subtitle}
        </p>
        <button className="bg-[#00ff88] hover:bg-[#0d5f3f] text-[#0d5f3f] hover:text-white px-10 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
          {slides[currentSlide].cta}
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-[#00ff88] w-10" : "bg-white/50 w-3 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </section>
  )
}

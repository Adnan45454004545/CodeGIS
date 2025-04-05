import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import ResourceTabs from "@/components/resource-tabs"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  // Course data
  const courses = [
    {
      category: "GIS Software",
      items: [
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
      ],
    },
    {
      category: "Programming for GIS",
      items: [
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
      ],
    },
    {
      category: "AI & Machine Learning",
      items: [
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
      ],
    },
    {
      category: "Google Earth Engine",
      items: [
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
      ],
    },
  ]

  // Books data
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

  // Software data
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

  // Datasets data
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
    <main className="min-h-screen bg-[#ecf0f1]">
      <Navbar />
      <Hero />
      <ResourceTabs courses={courses} books={books} software={software} datasets={datasets} />
      <AboutSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  )
}


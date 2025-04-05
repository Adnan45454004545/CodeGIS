import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Youtube, Github, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-[#ecf0f1] pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="footer-section">
            <div className="flex items-center mb-5">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="CodeGIS Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold text-white">CodeGIS</span>
            </div>
            <p className="mb-5 text-sm">
              Your one-stop hub for GIS learning resources, courses, books, software, and data.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 bg-[rgba(255,255,255,0.1)] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#3498db] hover:-translate-y-1"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[rgba(255,255,255,0.1)] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#3498db] hover:-translate-y-1"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[rgba(255,255,255,0.1)] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#3498db] hover:-translate-y-1"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[rgba(255,255,255,0.1)] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#3498db] hover:-translate-y-1"
              >
                <Youtube size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[rgba(255,255,255,0.1)] text-white rounded-full flex items-center justify-center transition-all hover:bg-[#3498db] hover:-translate-y-1"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-5 text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-[#3498db]">
              Quick Links
            </h3>
            <ul>
              <li className="mb-3">
                <Link
                  href="#home"
                  className="text-[#bdc3c7] transition-all hover:text-[#3498db] hover:-translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#courses"
                  className="text-[#bdc3c7] transition-all hover:text-[#3498db] hover:-translate-x-1 inline-block"
                >
                  Courses
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#books"
                  className="text-[#bdc3c7] transition-all hover:text-[#3498db] hover:-translate-x-1 inline-block"
                >
                  Books
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#softwares"
                  className="text-[#bdc3c7] transition-all hover:text-[#3498db] hover:-translate-x-1 inline-block"
                >
                  Software
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#data"
                  className="text-[#bdc3c7] transition-all hover:text-[#3498db] hover:-translate-x-1 inline-block"
                >
                  Data
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-5 text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-[#3498db]">
              Legal
            </h3>
            <ul>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-[#bdc3c7] transition-all hover:text-[#3498db] hover:-translate-x-1 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-[#bdc3c7] transition-all hover:text-[#3498db] hover:-translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-[#bdc3c7] transition-all hover:text-[#3498db] hover:-translate-x-1 inline-block"
                >
                  Cookie Policy
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-[#bdc3c7] transition-all hover:text-[#3498db] hover:-translate-x-1 inline-block"
                >
                  DMCA
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="#"
                  className="text-[#bdc3c7] transition-all hover:text-[#3498db] hover:-translate-x-1 inline-block"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-5 text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[2px] after:bg-[#3498db]">
              Newsletter
            </h3>
            <p className="mb-5 text-sm">Subscribe to get updates on new resources</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="flex-1 px-4 py-2 border-none outline-none rounded-l-md"
              />
              <button
                type="submit"
                className="px-4 bg-[#3498db] text-white rounded-r-md transition-all hover:bg-[#2ecc71] hover:text-black"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="text-center py-5 border-t border-[rgba(255,255,255,0.1)] text-sm text-[#bdc3c7]">
          <p>&copy; {new Date().getFullYear()} CodeGIS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}


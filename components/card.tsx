import Image from "next/image"
import { cn } from "@/lib/utils"

interface CardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  tags?: Array<{
    label: string
    type: "level" | "duration" | "author" | "year" | "type" | "license"
  }>
  className?: string
}

export default function Card({ title, description, imageSrc, imageAlt, tags = [], className }: CardProps) {
  const tagColors: Record<string, string> = {
    level: "bg-[rgba(52,152,219,0.1)] text-[#3498db]",
    duration: "bg-[rgba(46,204,113,0.1)] text-[#2ecc71]",
    author: "bg-[rgba(155,89,182,0.1)] text-[#9b59b6]",
    year: "bg-[rgba(241,196,15,0.1)] text-[#f1c40f]",
    type: "bg-[rgba(231,76,60,0.1)] text-[#e74c3c]",
    license: "bg-[rgba(52,73,94,0.1)] text-[#2c3e50]",
  }

  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 h-[420px] flex flex-col hover:-translate-y-2 hover:shadow-xl",
        className,
      )}
    >
      <div className="h-[200px] overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={300}
          height={200}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col text-center items-center">
        <h3 className="text-xl font-semibold mb-2 text-[#2c3e50]">{title}</h3>
        <p className="text-[#7f8c8d] text-sm mb-4 flex-1">{description}</p>
        <div className="flex justify-center items-center text-xs text-[#7f8c8d] gap-3">
          {tags.map((tag, index) => (
            <span key={index} className={`px-2 py-1 rounded ${tagColors[tag.type]}`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}


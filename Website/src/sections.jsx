import React, { useRef, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import * as Tooltip from '@radix-ui/react-tooltip'
import * as HoverCard from '@radix-ui/react-hover-card'

const PROJECT_TECHNOLOGIES = {
  "Terahertz MM Wave X-Ray Imaging System": [
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Git",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Arduino", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  ],
  "Friley Frights, a Labyrinth Horror Game": [
    { name: "Unity", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
    { name: "Git",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "C#",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  ],
}

function SectionMark({ index, title }) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-3 pt-32 pb-20">
      <div className="text-[11px] tracking-[0.3em] font-medium text-neutral-500">
        {index} * {title.toUpperCase()}
      </div>
      <div className="w-px h-10 bg-gradient-to-b from-red-800/50 to-transparent dark:from-rose-300/50" />
    </div>
  )
}

function DividedRow({ left, right, leftClassName = "", rightClassName = "" }) {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-10 md:gap-24 items-center py-12">
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-red-800/20 dark:bg-rose-300/15" aria-hidden />
      <div className={"col-span-12 md:col-span-6 md:pr-10 flex flex-col items-end text-right gap-3 " + leftClassName}>
        {left}
      </div>
      <div className={"col-span-12 md:col-span-6 md:pl-10 flex flex-col items-start text-left gap-3 " + rightClassName}>
        {right}
      </div>
    </div>
  )
}

function SectionEyebrow({ children }) {
  return (
    <div className="text-[11px] tracking-[0.3em] font-medium text-red-700/80 dark:text-rose-300/70">
      {children}
    </div>
  )
}

function ProjectTechIcon({ tech }) {
  return (
    <HoverCard.Root openDelay={120} closeDelay={80}>
      <HoverCard.Trigger asChild>
        <div className="flex h-8 w-8 items-center justify-center rounded-md transition-all duration-200 ease-out hover:-translate-y-px">
          <img
            src={tech.src}
            alt={tech.name}
            className="h-6 w-6 object-contain transition-transform duration-200 ease-out hover:scale-[1.04]"
          />
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          sideOffset={10}
          className="z-50 px-3 py-2 rounded-md bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.28)] dark:shadow-[0_10px_28px_-16px_rgba(0,0,0,0.55)] text-[12px] font-mono tracking-tight text-neutral-800 dark:text-neutral-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:slide-in-from-bottom-1 transition-all duration-200"
        >
          <span className="text-red-700 dark:text-red-400 mr-2">&rsaquo;</span>
          {tech.name}
          <HoverCard.Arrow className="fill-white/95 dark:fill-neutral-900/95" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}

export function AboutSection() {
  const ref = useRef(null)

  return (
    <section id="about" ref={ref} className="relative">
      <DividedRow
        leftClassName="md:items-start md:text-left"
        rightClassName="md:items-start md:text-left md:pt-16"
        left={
          <>
            <SectionEyebrow>ORIGIN</SectionEyebrow>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
              Sammamish, WA. Curious about technology from the start.
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              Born in Sammamish, Washington in 2004, I have been interested in technology since
              my first iPod Touch and kept following that curiosity through software, cybersecurity,
              cloud, cryptocurrency, and AI.
            </p>
          </>
        }
        right={
          <>
            <SectionEyebrow>FOCUS</SectionEyebrow>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
              Designing, editing, debugging, and securing complex systems.
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              My interest in video games pushed me to learn how software is built. I enjoy the
              parts of engineering where performance, correctness, and trust all matter at the
              same time.
            </p>
          </>
        }
      />
    </section>
  )
}

export const CURRENT_PROJECTS = [
  {
    title: "Terahertz MM Wave X-Ray Imaging System",
    tag: "Hardware * Python",
    media: {
      type: "gallery",
      images: [
        { src: "/images/thz/THZ_startup.png", alt: "Terahertz system startup screen" },
        { src: "/images/thz/thz_step1.png",   alt: "Terahertz project step one" },
        { src: "/images/thz/thz_step2.png",   alt: "Terahertz project step two" },
      ],
    },
    blurb:
      "Placeholder project entry for the Terahertz MM Wave X-Ray Imaging System. Replace this description with the final project overview, responsibilities, stack, and outcome details.",
  },
  {
    title: "Scurvy: A Self-Hosted E2E Anti-Cheat",
    tag: "Security * Systems",
    media: { type: "placeholder" },
    blurb:
      "Placeholder project entry for Scurvy. Replace this with the final summary of the anti-cheat design, detection model, architecture, and implementation details.",
  },
  {
    title: "GoalSense: A Machine Learning Rocket League Replay Analysis Web-App",
    tag: "ML * Web App",
    media: { type: "placeholder" },
    blurb:
      "Placeholder project entry for GoalSense. Replace this with the final description covering replay ingestion, ML analysis, output insights, and the web application stack.",
  },
  {
    title: "Wake: A Social Media App",
    tag: "Mobile * Social",
    media: { type: "placeholder" },
    blurb:
      "Placeholder project entry for Wake. Replace this with the final writeup for the app concept, user flows, backend/frontend stack, and what you built.",
  },
  {
    title: "Cybooks: Ticket Marketplace for Students",
    tag: "Marketplace * Product",
    media: { type: "placeholder" },
    blurb:
      "Placeholder project entry for Cybooks. Replace this with the final summary of the marketplace concept, student use case, transaction flow, and implementation details.",
  },
  {
    title: "Friley Frights, a Labyrinth Horror Game",
    tag: "Unity * C#",
    media: { type: "video", src: "/images/movie1.mp4" },
    blurb:
      "Friley Frights is a Euclidean horror game built in Unity as a final project for SE186 at Iowa State University. The game is based on a dormitory with labyrinth-like properties and uses algorithmic design, 3D game mechanics, and real-time graphics rendering. What makes it different is that the map changes behind the player, rearranging rooms in real time with raycasting and integer math. My contribution focused mainly on map design and building the dormitory room modules in my branch.",
  },
]

function GalleryCarousel({ images }) {
  const [index, setIndex] = useState(0)
  const activeValue = String(index)

  const move = (direction) => {
    setIndex((value) => (value + direction + images.length) % images.length)
  }

  return (
    <Tabs.Root
      value={activeValue}
      onValueChange={(value) => setIndex(Number(value))}
      className="group relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-26px_rgba(0,0,0,0.55)] dark:hover:shadow-[0_24px_56px_-28px_rgba(0,0,0,0.75)]"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.14), inset 0 -32px 48px -36px rgba(255,255,255,0.22)" }}
      />
      <div className="absolute inset-x-0 top-0 h-20 pointer-events-none bg-gradient-to-b from-white/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {images.map((image, imageIndex) => (
        <Tabs.Content key={image.src} value={String(imageIndex)} className="absolute inset-0 m-0 outline-none">
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover block select-none" draggable="false" />
        </Tabs.Content>
      ))}

      <Tooltip.Provider delayDuration={80}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              type="button"
              onClick={() => move(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/55 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 hover:scale-105"
              aria-label="Previous image"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content side="top" sideOffset={6} className="px-2 py-1 rounded-md bg-white/95 dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 text-[11px] shadow-sm">
              Previous
              <Tooltip.Arrow className="fill-white/95 dark:fill-neutral-900/95" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              type="button"
              onClick={() => move(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/55 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 hover:scale-105"
              aria-label="Next image"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content side="top" sideOffset={6} className="px-2 py-1 rounded-md bg-white/95 dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 text-[11px] shadow-sm">
              Next
              <Tooltip.Arrow className="fill-white/95 dark:fill-neutral-900/95" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <Tabs.List
        aria-label="Project images"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/20 px-2 py-1 backdrop-blur-sm"
      >
        {images.map((image, imageIndex) => (
          <Tabs.Trigger
            key={image.src}
            value={String(imageIndex)}
            className={
              "h-2.5 w-2.5 rounded-full transition-all duration-200 outline-none " +
              (imageIndex === index ? "bg-white scale-110" : "bg-white/45 hover:bg-white/70")
            }
            aria-label={`Show image ${imageIndex + 1}`}
          />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}

function ProjectMedia({ media, side, title }) {
  const align = side === "left" ? "ml-auto" : "mr-auto"
  const iconAlign = side === "left" ? "justify-end" : "justify-start"
  const mediaWrapClass = "w-full max-w-md mt-8 md:mt-12 " + align
  const frameClass =
    "relative w-full max-w-md rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800/80 shadow-lg shadow-black/20 " + align
  const technologies = PROJECT_TECHNOLOGIES[title] || []

  if (media.type === "gallery") {
    return (
      <div className={mediaWrapClass}>
        <div className={frameClass}><GalleryCarousel images={media.images} /></div>
        {technologies.length > 0 && (
          <div className={"mt-4 flex flex-wrap items-center gap-4 " + iconAlign}>
            {technologies.map((tech) => <ProjectTechIcon key={tech.name} tech={tech} />)}
          </div>
        )}
      </div>
    )
  }

  if (media.type === "placeholder") {
    return (
      <div className={mediaWrapClass}>
        <div className={frameClass}>
          <div className="aspect-video w-full bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="text-[11px] tracking-[0.3em] font-medium text-red-700/80 dark:text-rose-300/70">PROJECT PREVIEW</div>
              <div className="mt-3 text-sm text-neutral-500 dark:text-neutral-500">{title}</div>
            </div>
          </div>
        </div>
        {technologies.length > 0 && (
          <div className={"mt-4 flex flex-wrap items-center gap-4 " + iconAlign}>
            {technologies.map((tech) => <ProjectTechIcon key={tech.name} tech={tech} />)}
          </div>
        )}
      </div>
    )
  }

  if (media.type === "video") {
    return (
      <div className={mediaWrapClass}>
        <div className={frameClass}>
          <video src={media.src} controls className="w-full h-auto block bg-black" />
        </div>
        {technologies.length > 0 && (
          <div className={"mt-4 flex flex-wrap items-center gap-4 " + iconAlign}>
            {technologies.map((tech) => <ProjectTechIcon key={tech.name} tech={tech} />)}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={mediaWrapClass}>
      <div className={frameClass}>
        <img src={media.src} alt={media.alt} className="w-full h-auto block" />
      </div>
      {technologies.length > 0 && (
        <div className={"mt-4 flex flex-wrap items-center gap-4 " + iconAlign}>
          {technologies.map((tech) => <ProjectTechIcon key={tech.name} tech={tech} />)}
        </div>
      )}
    </div>
  )
}

function ProjectRow({ project, idx }) {
  const mediaOnLeft = idx % 2 === 0

  const meta = (
    <>
      <SectionEyebrow>
        {String(idx + 1).padStart(2, "0")} * {project.tag.toUpperCase()}
      </SectionEyebrow>
      <h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
        {project.title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
        {project.blurb}
      </p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener"
          className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono tracking-wide text-red-800 dark:text-rose-300 hover:underline underline-offset-4"
        >
          View on GitHub
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      )}
    </>
  )

  return (
    <DividedRow
      left={mediaOnLeft ? <ProjectMedia media={project.media} side="left" title={project.title} /> : meta}
      right={mediaOnLeft ? meta : <ProjectMedia media={project.media} side="right" title={project.title} />}
    />
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative -mt-64 md:-mt-[22rem]">
      <div className="-mb-8 md:-mb-12">
        <DividedRow
          left={<div aria-hidden />}
          rightClassName="md:items-start md:text-left"
          right={
            <div className="w-full max-w-md">
              <div className="text-3xl md:text-4xl font-light tracking-tight text-red-800 dark:text-red-300 mb-6">
                Projects
              </div>
              <div className="border-t border-neutral-300 dark:border-neutral-800 pt-5" />
            </div>
          }
        />
      </div>
      <div className="flex flex-col gap-14 md:gap-20">
        {CURRENT_PROJECTS.map((project, index) => (
          <ProjectRow key={project.title} project={project} idx={index} />
        ))}
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="relative">
      <DividedRow
        left={
          <>
            <SectionEyebrow>EMAIL</SectionEyebrow>
            <a
              href="mailto:gyocum@iastate.edu"
              className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-red-800 dark:hover:text-rose-200 transition"
            >
              gyocum@iastate.edu
            </a>
          </>
        }
        right={
          <>
            <SectionEyebrow>PHONE</SectionEyebrow>
            <a
              href="tel:+14255591201"
              className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-red-800 dark:hover:text-rose-200 transition"
            >
              425.559.1201
            </a>
          </>
        }
      />
      <div className="text-center pt-12 pb-24 text-[11px] tracking-[0.3em] text-neutral-500">
        &copy; {new Date().getFullYear()} GRIFFIN YOCUM
      </div>
    </section>
  )
}

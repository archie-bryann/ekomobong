"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react"
import ParticlesBackground from "@/components/ui/particles-background"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center" style ={{ paddingTop:"2.5rem" }}>
        <Link href="/" className="text-4xl font-bold">
          Ekomobong Archibong
        </Link>
        <div className="md:flex items-center gap-6 hidden">
          <button onClick={() => scrollToSection("about")} className="text-white hover:text-gray-600 transition-colors">
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-white hover:text-gray-600 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-white hover:text-gray-600 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white hover:text-gray-600 transition-colors"
          >
            Projects
          </button>
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contact")
            }}
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
      {mounted && <ParticlesBackground />}
        <div className="flex-1">
          <h1 className="text-6xl font-bold leading-tight mb-6">Full Stack Developer</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Building innovative web applications with React, Next.js, and Node.js. Founder of Platle - an all-in-one AI
            tool for students.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-white text-black px-8 py-3 rounded-md flex items-center gap-2 hover:bg-gray-200 transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <Link
              href="https://drive.google.com/file/d/1ScUWc76R4B44ox2OXU82Kgq1QLPD8qn5/view?usp=sharing"
              target="_blank"
              className="border-2 border-white px-8 py-3 rounded-md flex items-center gap-2 transition-colors"
            >
              Download CV <Download size={18} />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="https://fanbear-app.s3-accelerate.amazonaws.com/800x800_1742629776022280019156.jpg"
              alt="Ekomobong Archibong"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I'm Ekomobong Archibong, a passionate Full Stack Developer with expertise in React, Next.js, Node.js, and
              various other technologies. I specialize in building scalable web applications and have experience working
              with both startups and established companies.
            </p>
            <p className="text-lg mb-6">
              Currently, I'm the Founder of Platle, an all-in-one AI tool for students that helps with learning,
              studying, writing notes, setting goals, and collaborating with peers.
            </p>
            <p className="text-lg">
              With a strong background in full-stack development, I've worked on various projects ranging from
              e-commerce platforms to financial applications and healthcare systems.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Platle */}
            <div className="border-l-4 border-white pl-6 relative">
              <div className="absolute w-4 h-4 bg-white rounded-full -left-[10px] top-1"></div>
              <h3 className="text-2xl font-bold">Founder</h3>
              <div className="flex justify-between items-center mb-2">
                <p className="text-xl">Platle</p>
                <p className="text-gray-400">Dec 2023 – Present</p>
              </div>
              <p className="text-gray-400 mb-4">Abuja, Nigeria</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Built platle.com - an all-in-one AI tool for students.</li>
                <li>Made use of React, Express.js, MongoDB, Redis & Socket.io to develop the application.</li>
                <li>Utilized OpenAI APIs to enable students to research and generate study materials efficiently</li>
                <li>
                  Deployed the frontend, backend, and background workers on PM2 with reverse proxies using Nginx on an
                  Ubuntu Linux server.
                </li>
                <li>
                  Integrated payments into the application via the provider Paddle and coordinated with customer support
                  to resolve issues.
                </li>
              </ul>
            </div>

            {/* Punch Group */}
            <div className="border-l-4 border-white pl-6 relative">
              <div className="absolute w-4 h-4 bg-white rounded-full -left-[10px] top-1"></div>
              <h3 className="text-2xl font-bold">Full Stack Developer</h3>
              <div className="flex justify-between items-center mb-2">
                <p className="text-xl">Punch Group</p>
                <p className="text-gray-400">Jan 2022 – Oct 2023</p>
              </div>
              <p className="text-gray-400 mb-4">SA, United States</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Successfully managed and regularly updated Pantrei (Shopify store), resulting in financial
                  profitability.
                </li>
                <li>
                  Utilized DialogFlow's natural language processing capabilities and AI models to efficiently categorize
                  clothing inventory.
                </li>
                <li>
                  Developed full-stack web applications with Express.JS, GraphQl, React.JS which processed, analyzed,
                  and rendered data visually.
                </li>
                <li>Developed and maintained custom shopify apps using Next.js & Node.js.</li>
                <li>
                  Deployed node.js backend apps on AWS EC2 instances and also made use of services like SES, SNS, Code
                  Build, SQS.
                </li>
              </ul>
            </div>

            {/* View More Button */}
            <div className="text-center">
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 border-2 border-white px-6 py-3 rounded-md transition-colors"
              >
                View More Experience <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "React Native",
                  "Node/Express.js",
                  "Ionic-React",
                  "MUI",
                  "Tailwind CSS",
                  "HTML",
                  "CSS",
                  "JavaScript",
                ].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "MySQL", "PostgreSQL", "GraphQL"].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">Others</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C/C++", "Java", "SEO"].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-white pb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Linux",
                  "Unix",
                  "Windows",
                  "OpenAI",
                  "GCP",
                  "Azure",
                  "AWS",
                  "Firebase",
                  "Docker",
                  "Kubernetes",
                  "Kafka",
                  "Redis",
                  "VS Code",
                ].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Platle */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-800 relative">
                <Image src="https://fanbear-app.s3-accelerate.amazonaws.com/1898x971_1742640400678647578937.png" alt="Platle" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Platle</h3>
                <p className="text-gray-400 mb-4">
                  An all-in-one AI tool for students that helps with learning, studying, writing notes, setting goals,
                  and collaborating with peers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">React</span>
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">Express.js</span>
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">MongoDB</span>
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">Redis</span>
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">Socket.io</span>
                </div>
                <Link
                  href="https://platle.com"
                  target="_blank"
                  className="text-white font-medium flex items-center gap-1 hover:underline"
                >
                  Visit Website <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Auxcar */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-800 relative">
                <Image src="https://fanbear-app.s3-accelerate.amazonaws.com/1901x971_1742640441116942531204.png" alt="Auxcar" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Auxcar Admin Dashboards</h3>
                <p className="text-gray-400 mb-4">
                  Three robust React admin dashboard applications for auxcar.co: Admin, Customer, and Driver interfaces.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">React</span>
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">CSS</span>
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">SCSS</span>
                  {/* <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">Tailwind CSS</span> */}
                  {/* <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">REST API</span> */}
                </div>
                <div className="space-y-2">
                  <Link
                    href="https://distracted-wright-64cb56.netlify.app/"
                    target="_blank"
                    className="text-white font-medium flex items-center gap-1 hover:underline"
                  >
                    Admin Dashboard <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="https://romantic-noyce-c9b175.netlify.app/"
                    target="_blank"
                    className="text-white font-medium flex items-center gap-1 hover:underline"
                  >
                    Customer Dashboard <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="https://deft-duckanoo-b1e564.netlify.app/"
                    target="_blank"
                    className="text-white font-medium flex items-center gap-1 hover:underline"
                  >
                    Driver Dashboard <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* LoveSet */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-800 relative">
                <Image src="https://fanbear-app.s3-accelerate.amazonaws.com/1901x971_1742640441116942531204.png" alt="Auxcar" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">LoveSet</h3>
                <p className="text-gray-400 mb-4">
                  A platform that enables users to discover movies and shows tailored to their taste. Users ca swipe right on what they love, left on what they don't and thus get a personalized recommendation every time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">React</span>
                <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">CSS</span>
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">Express.js</span>
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">MongoDB</span>
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">Redis</span>
                  <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">Socket.io</span>
                  {/* <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">Tailwind CSS</span> */}
                  {/* <span className="bg-gray-800 px-2 py-1 rounded-md text-xs">REST API</span> */}
                </div>
                <Link
                  href="https://loveset.platle.com"
                  target="_blank"
                  className="text-white font-medium flex items-center gap-1 hover:underline"
                >
                  Visit Website <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Aptech Computer Education</h3>
              <p className="text-gray-400 mb-2">Certificate for Proficiency in Information System Management (CPISM)</p>
              <p className="text-gray-400">May 2020 | Oyo state</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Oritamefa Baptist Model School</h3>
              <p className="text-gray-400 mb-2">West African Senior School Certificate (WAEC)</p>
              <p className="text-gray-400">July 2018 | Oyo state</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Redeemer's Private School</h3>
              <p className="text-gray-400 mb-2">First School Leaving Certificate</p>
              <p className="text-gray-400">April 2012 | F.C.T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:ekomobongarchibong24@gmail.com" className="hover:underline">
                    ekomobongarchibong24@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+2349015871166" className="hover:underline">
                    +234 901 587 1166
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5" />
                  <a
                    href="https://github.com/archie-bryann"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5" />
                  <a
                    href="https://www.linkedin.com/in/ekomobong-archibong-08ba4b255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <Link href="/" className="text-3xl font-bold">
                Ekomobong Archibong
              </Link>
              <p className="mt-2">Full Stack Developer</p>
            </div>

            <div className="mt-6 md:mt-0">
              <div className="flex gap-4">
                <a
                  href="https://github.com/archie-bryann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ekomobong-archibong-08ba4b255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ekomobongarchibong24@gmail.com"
                  className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Ekomobong Archibong. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}


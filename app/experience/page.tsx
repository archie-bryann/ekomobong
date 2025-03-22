import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold text-white">
          Ekomobong Archibong
        </Link>
        <div className="md:flex items-center gap-6 hidden">
          <Link href="/#about" className="text-white hover:text-gray-400 transition-colors">
            About
          </Link>
          <Link href="/#experience" className="text-white hover:text-gray-400 transition-colors">
            Experience
          </Link>
          <Link href="/#skills" className="text-white hover:text-gray-400 transition-colors">
            Skills
          </Link>
          <Link href="/#projects" className="text-white hover:text-gray-400 transition-colors">
            Projects
          </Link>
          <Link
            href="/#contact"
            className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <Link
          href="/#experience"
          className="inline-flex items-center gap-2 text-white hover:text-gray-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-12">Full Work Experience</h1>

        <div className="max-w-4xl space-y-12">
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
                clothing inventory and generate engaging titles and descriptions at scale.
              </li>
              <li>
                Developed full-stack web applications with Express.JS, GraphQl, React.JS which processed, analyzed, and
                rendered data visually.
              </li>
              <li>Liaised with back end developers, front end developers, testers, and CTO as needed.</li>
              <li>Managed time-sensitive updates, including content changes and database upgrades.</li>
              <li>
                Developed and maintained custom shopify apps that scraped products to show on a Shopify store using
                Next.js & Node.js.
              </li>
              <li>
                Deployed node.js backend apps on AWS EC2 instances and also made use of services like SES, SNS, Code
                Build, SQS on AWS for the app.
              </li>
              <li>
                Deployed node.js backend apps on VPS Ubuntu servers using PM2 and setup reverse proxies using Nginx to
                run on the designated server url.
              </li>
            </ul>
          </div>

          {/* CreditChek */}
          <div className="border-l-4 border-white pl-6 relative">
            <div className="absolute w-4 h-4 bg-white rounded-full -left-[10px] top-1"></div>
            <h3 className="text-2xl font-bold">Full Stack Developer (Contract)</h3>
            <div className="flex justify-between items-center mb-2">
              <p className="text-xl">CreditChek</p>
              <p className="text-gray-400">Feb 2022 – April 2022</p>
            </div>
            <p className="text-gray-400 mb-4">Lagos, Nigeria</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Designed and implemented a platform enabling customers to access and verify their creditworthiness,
                similar to a credit score.
              </li>
              <li>Built a reliable, accessible, convenient, finance, credit and BNPL data platform.</li>
              <li>Implemented a user experience that was seamless for Android, iOS, and Web users.</li>
              <li>
                Integrated the front-end elements with the Rest APIs and other 3rd-party services like Monnify,
                Paystack, Mono and Flutterwave.
              </li>
              <li>Built a FICO Credit Score React Component from scratch.</li>
            </ul>
          </div>

          {/* Walex Biz Nigeria Ltd. */}
          <div className="border-l-4 border-white pl-6 relative">
            <div className="absolute w-4 h-4 bg-white rounded-full -left-[10px] top-1"></div>
            <h3 className="text-2xl font-bold">Senior Front-end Developer</h3>
            <div className="flex justify-between items-center mb-2">
              <p className="text-xl">Walex Biz Nigeria Ltd.</p>
              <p className="text-gray-400">Sept 2021 – Dec 2021</p>
            </div>
            <p className="text-gray-400 mb-4">Abuja, Nigeria</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Designed and implemented an online healthcare platform that facilitated virtual consultations with
                medical professionals and provided access to pharmaceutical services.
              </li>
              <li>
                Developed landing pages & dashboards using my knowledge of React, HTML/CSS & JavaScript and ensured a
                good User Experience while using the product.
              </li>
              <li>
                Managed full-cycle design tasks, handling all phases from conception to completion while maintaining
                guidelines throughout.
              </li>
              <li>
                Collaborated with stakeholders during the development processes to confirm creative proposals and design
                best practices.
              </li>
            </ul>
          </div>

          {/* Sekani-Tech Company Limited */}
          <div className="border-l-4 border-white pl-6 relative">
            <div className="absolute w-4 h-4 bg-white rounded-full -left-[10px] top-1"></div>
            <h3 className="text-2xl font-bold">Backend Developer</h3>
            <div className="flex justify-between items-center mb-2">
              <p className="text-xl">Sekani-Tech Company Limited</p>
              <p className="text-gray-400">June 2021 – Sept 2021</p>
            </div>
            <p className="text-gray-400 mb-4">Abuja, Nigeria</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Developed and maintained core-banking applications for African businesses consisting mainly of
                microfinance banks with high system functionalities which resulted in financial profitability.
              </li>
              <li>
                Developed functionalities which includes payments, BVN search, deposit/withdraw transactions, bills
                payment, loan and investment calculator and other key functionalities.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ekomobong-archibong-08ba4b255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="mailto:ekomobongarchibong24@gmail.com"
                  className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
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


"use client"

import Image from "next/image"

export function ScheduleMeeting() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-950 text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule a Free Consultation</h2>
            <p className="text-gray-400 mb-6">
              Ready to discuss your project? Schedule a free 30-minute consultation with our experts to explore how we
              can help you achieve your goals.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>No obligation, completely free consultation</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Expert advice tailored to your specific needs</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Flexible scheduling options to fit your calendar</span>
              </li>
            </ul>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium hover:opacity-90 transition-all">
              Book Your Free Consultation
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-video relative rounded-xl overflow-hidden">
              <Image src="/business-meeting-collaboration.png" alt="Schedule a meeting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

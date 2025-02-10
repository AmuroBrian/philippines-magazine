import React from 'react'
import Link from 'next/link';

export default function About() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-[#29C75E] mb-6">
          About Philippine Insider Intelligence Magazines
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <strong>Philippine Insider Intelligence Magazines</strong>, a **fan-based platform** dedicated to showcasing the **power players and influential figures** shaping the Philippine business world.
        </p>
  
        <div className="my-8 border-t-2 border-gray-300"></div>
  
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We highlight the journeys of top CEOs, entrepreneurs, and industry leaders—providing valuable insights into their **success stories, business strategies, and contributions to the economy**.
        </p>
  
        <div className="my-8 border-t-2 border-gray-300"></div>
  
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          This platform is created by **passionate developers and business enthusiasts** aiming to inspire the next generation of leaders. While we are **not officially affiliated** with any of the individuals featured, we celebrate their impact and success.
        </p>
  
        <div className="my-8 border-t-2 border-gray-300"></div>
  
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
        <ul className="text-lg text-gray-700 leading-relaxed list-disc list-inside">
          <li>Curated **biographies** of top executives</li>
          <li>Insights into their **business strategies**</li>
          <li>Inspiring **success stories**</li>
          <li>A platform for **fans to engage and learn**</li>
        </ul>
  
        <div className="my-8 border-t-2 border-gray-300"></div>
  
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join the Community</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you’re a **business student, aspiring CEO, or simply fascinated by the stories of Filipino business moguls**, this platform is for you!  
          📩 **Want to contribute?** Reach out—we’d love to hear from fellow fans and business enthusiasts!
        </p>
  
        <div className="mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-[#29C75E] text-white font-semibold rounded-md shadow-md hover:bg-[#25A14A] transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  

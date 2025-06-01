//Rushina Sherstha About Page

import React from 'react'
import Title from '../components/Title'
import about from '../assets/about.png'
import NewsletterBox from '../components/NewsletterBox'

// About page component showing company information
const About = () => {
  return (
    <div>
      {/* Main title section */}
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      
      {/* Company information section with image and text */}
      <div className='my-10 flex flec-col md:flex-row gap-16'>
        {/* Company image */}
        <img className='w-full md:max-w-[400px]' src={about} alt="" />
        {/* Company description text */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p> At RAEVOLVE, we dont just keep up with change—we create it. Born out of curiosity, built with purpose, and driven by innovation, RAEVOLVE is a company dedicated to redefining the way people connect with technology. Whether were building intuitive digital tools, designing future-ready platforms, or streamlining everyday experiences, our mission is always the same: evolve with intent, and never settle for ordinary.</p>
            <p> We believe great ideas are sparked at the intersection of creativity and function. Thats why our team is made up of thinkers, builders, designers, and dreamers—each one passionate about crafting smarter, more meaningful solutions to real-world problems. Were not here just to make products. Were here to make progress. RAEVOLVE  Revolution. Adaptation. Evolution. </p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At RAEVOLVE, our mission is to push the boundaries of innovation by building technology that adapts, empowers, and evolves with the world around it. We aim to create products and experiences that aren't just functional—but transformative. By blending thoughtful design with cutting-edge development, we strive to simplify complexity, amplify human potential, and shape a future where technology serves people—not the other way around. Were here to ask better questions, challenge the status quo, and keep evolving—relentlessly, responsibly, and with real impact. </p>
        </div>
      </div>

      {/* Why choose us section title */}
      <div className='text-xl py-4'>
          <Title  text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      {/* Three feature boxes explaining company benefits */}
      <div className='flex fles-col md:flex-row text-sm mb-20'>
        {/* Quality assurance feature box */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At RAEVOLVE, quality is built in from day one. We test early, often, and thoroughly—ensuring everything we create is reliable, secure, and ready to perform. No shortcuts, no compromises—just clean, dependable results.</p>
        </div>

        {/* Convenience feature box */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>We design with real life in mind. At RAEVOLVE, convenience means intuitive experiences, seamless navigation, and solutions that just make sense—so users can get what they need, when they need it, without the hassle.</p>
        </div>

        {/* Customer service feature box */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>At RAEVOLVE, we believe great service builds lasting relationships. Our team is here to help—solving problems, answering questions, and making sure your experience is smooth and positive.</p>
        </div>  
      </div>

      {/* Newsletter subscription section */}
      <NewsletterBox/>
    </div>
  )
}

export default About

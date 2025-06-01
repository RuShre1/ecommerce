//Rushina Sherstha Contact Page

import React from 'react'
import Title from '../components/Title'
import contact from '../assets/contact.png'
import NewsletterBox from '../components/NewsletterBox'

// Contact page showing store information and contact details
const Contact = () => {
  return (
    <div>
      {/* Page title section */}
      <div className='text-center text2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      {/* Main content section with image and contact info */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          {/* Store image */}
          <img className='w-full md:max-w-[480px]' src={contact} alt="" />
          {/* Contact information section */}
          <div className='flex flex-col justify-center items-start gap-6'>
              {/* Store location heading */}
              <p className='font-semibold text-xl text-gray-600'>Our Store</p>
              {/* Store address */}
              <p className='text-gray-500'>55709 Willms Station <br /> Suite 350, Washingtion, USA</p>
              {/* Contact details */}
              <p className='text-gray-500'>Tel: +1(212) 456-7890 <br /> Email: contact@raevolve.com </p>
              {/* Careers section heading */}
              <p className='font-semibold text-xl text-gray-600'>Careers at Raevolve</p>
              {/* Careers description */}
              <p className='text-gray-500'>Learn more about our teams and job openings</p>
              {/* Careers button */}
              <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transistion-all duration-500'>Explore Jobs</button>
          </div>
      </div>

      {/* Newsletter subscription section */}
      <NewsletterBox/>
    </div>
  )
}

export default Contact

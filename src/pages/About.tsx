import React from 'react'

const About = () => {
  return (
    <div>
      <h1 className="mb-3 text-red-300 text-center capitalize text-7xl font-bold">About</h1>
      <h3 className='mb-3 text-slate-600 text-2xl font-bold'>How To Create An Advanced Shopping Cart With React and TypeScript</h3>
      <p className="mb-3 text-slate-500">Shopping carts are one of the most common things you will build as a web developer, but there is a lot that goes into building a good shopping cart. In this video I will show you how to build a fully functional shopping cart using React, TypeScript, and Bootstrap. This is a great intermediate level project.</p>
      <h5 className='text-sm mb-3 text-slate-500'>Content by <a className='text-blue-500 font-bold' href="https://www.youtube.com/c/WebDevSimplified" target="_blank">Web Dev Simplified</a></h5>
      <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/lATafp15HWA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default About
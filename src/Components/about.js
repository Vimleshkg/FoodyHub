import React from 'react'

const About = () => {
  return (
    <div>
      {
      Array(20).fill("").map((e)=>{
         return <h1>This is About</h1>
      })

      }
    </div>
  )
}

export default About;
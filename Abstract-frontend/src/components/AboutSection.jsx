import React from 'react'
import UserCard from './userCard'
import mujtaba from '../images/mujtaba.png'

function AboutSection() {
  return (
    <div className="p-10">
        <UserCard name="Mujtaba" title="Full Stack Dev" desc="He is the only guys who uses malt (As a beer) and uses Code to protect himself from danger.Guy uses Dijsktra to find path." mail="mujtaba@gmail.com" img={mujtaba}/>
      
                
    </div>
  )
}

export default AboutSection
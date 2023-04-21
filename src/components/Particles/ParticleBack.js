import Particles from "react-tsparticles";
import ParticlesConfig from "./ParticleConfig";
import React from 'react'
// import './particles.css'

const ParticleBack = () => {
  return (
    <Particles params={ParticlesConfig}></Particles>
  )
}

export default ParticleBack
import React from 'react'
import { AboutUS } from './components/AboutUS'
import { Latest } from './components/Latest'
import { Team } from './components/Team'

export const Landing = () => {
  return (
    <div>
      <AboutUS/>
      <Latest/>
      <Team/>
    </div>
  )
}

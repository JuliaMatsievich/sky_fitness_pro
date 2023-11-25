import React from 'react'
import { useParams } from 'react-router-dom'
import { WorkoutComponent } from './Workout'

export const WorkoutPage = () => {
  const params = useParams()
  const workoutId = params.id

  return (
    <WorkoutComponent workoutId={workoutId} />
  )
}
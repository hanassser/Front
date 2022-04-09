import { Container } from '@mui/material'
import React from 'react'
import Post from '../components/Post'

function SuggestedPosts() {
  return (
    <>
    <Container><Post /><Post /> <Post /></Container>
   
    </>
    
  )
}

export default SuggestedPosts
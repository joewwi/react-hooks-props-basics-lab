import React from 'react'

const Link = ( githubLink, linkedinLink ) => {
    console.log(linkedinLink);
  return (
    <div>
      <h3>Links</h3>
      <a href={githubLink}></a>
      <a href={linkedinLink}></a>
    </div>
  )
}

export default Link

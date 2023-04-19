import React from "react";
import Link from "./Link";

function About({bio,links}) {


  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio = true ? bio : ""}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      <Link 
      githubLink={links.githubLink} 
      linkedinLink={links.linkedinLink}
      />

      <Link 
      githubLink={links.githubLink} 
      linkedinLink={links.linkedinLink}
      />

    </div>
  );
}

export default About;
 
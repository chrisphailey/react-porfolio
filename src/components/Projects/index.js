import React, { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      name: "Run Buddy",
    },
    {
      name: "Tenantive.ly",
    },
  ]);

  return (
    <div className="flex-row">
      {projects.map((image, i) => (
        <img
          src={require(`../../assets/project-img/${i}.png`)}
          alt={image.name}
          className="img-thumbnail mx-1"
          key={image.name}
        />
      ))}
    </div>
  );
}

export default Projects;

import { createSwaggerSpec } from "next-swagger-doc";

export default function handler(req, res) {
  const spec = createSwaggerSpec({
    apiFolder: "pages/api", // Dossier où se trouvent tes API Next.js
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API Exercices - Next.js",
        version: "1.0.0",
        description: "Documentation de l'API pour la gestion des exercices",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Serveur de développement",
        },
        {
          url: "https://backend-teal-zeta.vercel.app/api",
          description: "Serveur de production",
        },
      ],
    },
  });

  res.status(200).json(spec);
}

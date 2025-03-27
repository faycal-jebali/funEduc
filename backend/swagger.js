const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Exercices - Next.js",
    version: "1.0.0",
    description: "Documentation de l'API pour la gestion des exercices",
  },
  servers: [
    {
      url: "http://localhost:3000", // URL en local
      description: "Serveur de développement",
    },
    {
      url: "https://ton-projet.vercel.app", // URL de prod sur Vercel
      description: "Serveur de production",
    },
  ],
};

export default swaggerDefinition;


const mainRoutes = 'https://psicamilasamogim.com';

export default async function sitemap() {

  const routes = [''].map((route) => {
    return {
      url: `${mainRoutes}${route}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    };
  });

  return [...routes]
}
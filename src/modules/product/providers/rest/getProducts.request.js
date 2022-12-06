export default async function () {
  return await fetch(import.meta.env.VITE_PRODUCTS_API)
    .then((data) => data.json())
    .catch((error) => console.error(error));
}

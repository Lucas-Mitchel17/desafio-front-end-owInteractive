export default async function (cep) {
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

  return await fetch(endpoint)
    .then((data) => data.json())
    .catch((error) => console.error(error));
}

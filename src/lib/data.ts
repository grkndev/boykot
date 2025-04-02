async function getData() {
  const res = await fetch("https://boykotyap.net/data/list.json");
  const data = await res.json();
  return data.images;
}

export default getData;
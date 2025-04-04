async function getData() {
  const res = await fetch("https://boykotyap.net/data/list.json");
  const data = await res.json();
  return data.images;
}
async function getTitle() {
  const res = await fetch("https://boykotyap.net/data/hero.json");
  const data = await res.json();
  return data;
}

export { getData, getTitle };
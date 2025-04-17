async function getData() {
  const res = await fetch("https://boykotyap.org/data/list.json");
  const data = await res.json();
  return data.images;
}
async function getTitle() {
  const res = await fetch("https://boykotyap.org/data/hero.json");
  const data = await res.json();
  return data;
}

export { getData, getTitle };
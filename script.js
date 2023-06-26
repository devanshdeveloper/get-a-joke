const newBtn = document.getElementById("newBtn");
const jokeEl = document.getElementById("joke");

async function getJoke() {
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = res.json();
    return data;
  } catch (error) {
    return error;
  }
}

newBtn.addEventListener("click", async () => {
  const joke = await getJoke();
  console.log(joke);
  jokeEl.innerHTML = (
    joke.type === "twopart" ? `${joke.setup}\n${joke.delivery}` : joke.joke
  ).replace("\n", "<br><br>");
});

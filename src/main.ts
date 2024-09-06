import { INews, IArticle } from "./interfaces/INews";

const apiKey = "517e77f5cd1c4fc39b5eff509379de62";
const BASE_URL = "https://newsapi.org";

const formElement = document.getElementById("form") as HTMLFormElement;
const searchElement = document.getElementById("search") as HTMLInputElement;
const languageElement = document.getElementById(
  "language"
) as HTMLSelectElement;
const sortElement = document.getElementById("sort") as HTMLSelectElement;
const submitBtn = document.getElementById("btn-search") as HTMLButtonElement;

formElement.appendChild(searchElement);
formElement.appendChild(languageElement);
formElement.appendChild(sortElement);
formElement.appendChild(submitBtn);

const newsContent = document.getElementsByClassName(
  "news-content"
)[0] as HTMLDivElement;

const createNewsCard = () => {
  const newsCard = document.createElement("div") as HTMLDivElement;
  newsCard.className = "news-card";
  const headlineContent = document.createElement("h2") as HTMLHeadingElement;
  headlineContent.className = "title";
  const infoElement = document.createElement("p") as HTMLParagraphElement;
  infoElement.className = "info";
  const imageElement = document.createElement("img") as HTMLParagraphElement;
  const toArticleElement = document.createElement(
    "button"
  ) as HTMLButtonElement;
  toArticleElement.className = "to-article";
};
formElement.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  let newsURL = `${BASE_URL}/v2/everything`;

  const queryParams: string[] = [];
  if (searchElement.value.length !== 0) {
    const searchKey = searchElement.value;
    queryParams.push(`q=${searchKey}`);
  }

  if (languageElement.value.length !== 0) {
    const languageKey = languageElement.value;
    queryParams.push(`language=${languageKey}`);
  }

  if (sortElement.value.length !== 0) {
    const sortKey = sortElement.value;
    queryParams.push(`sortBy=${sortKey}`);
  }

  newsURL += `?${queryParams.join("&")}`;
});

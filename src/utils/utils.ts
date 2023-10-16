import { MinifigWithDetailType } from "../types/types";
import { API_KEY } from "./config";

async function fetchAPI(url: string) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `key ${API_KEY}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`API request failed: ${error}`);
  }
}

async function repeatFetch(url: string, additionalParameter?: string) {
  const data = await fetchAPI(
    url + "?page_size=1" + (additionalParameter ? additionalParameter : "")
  );
  const count = data.count;

  const urlWithCount =
    url +
    `?page_size=${count}` +
    (additionalParameter ? additionalParameter : "");
  const data2 = await fetchAPI(urlWithCount);

  return data2;
}

async function fetchAllThemes(setName: string) {
  const data2 = await repeatFetch(
    "https://rebrickable.com/api/v3/lego/themes/"
  );

  const allThemes = data2.results.filter(
    (theme: { id: number; parent_id: number; name: string }) =>
      theme.name.includes(setName)
  );
  return allThemes;
}

async function fetchMinifigsFromTheme(
  allThemes: { id: number; parent_id: number; name: string }[]
) {
  let allMiniFigs: any[] = [];
  const fetchPromises = allThemes.map(async (theme) => {
    const data2 = await repeatFetch(
      "https://rebrickable.com/api/v3/lego/minifigs/",
      `&in_theme_id=${theme.id}`
    );
    allMiniFigs = allMiniFigs.concat(data2.results);
  });

  await Promise.all(fetchPromises);
  return allMiniFigs;
}

export async function fetchRandomMinifigs(amountOfFigures: number) {
  const allThemes = await fetchAllThemes("Harry Potter");
  const allMiniFigs = await fetchMinifigsFromTheme(allThemes);
  const shuffled = allMiniFigs.sort(() => 0.5 - Math.random());
  const randomFigures = shuffled.slice(0, amountOfFigures);
  return randomFigures;
}

export async function getPartsOfMinifig(setNum?: string) {
  const url = `https://rebrickable.com/api/v3/lego/minifigs/${setNum}/parts/`;
  const data = await fetchAPI(url);
  const allParts = data.results;
  return allParts;
}

export async function sendData(data: {
  inputValuesToSend?: {
    name: string;
    value: string;
  }[];
  selectedMinifig?: MinifigWithDetailType;
}) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
}

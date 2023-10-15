import { MinifigType, MinifigWithDetailType } from "../types/types";
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

async function fetchRandomSet(setName: string) {
  const url = `https://rebrickable.com/api/v3/lego/sets/?min_parts=1&search=${setName}`;
  const data = await fetchAPI(url);
  const shuffledSets = data.results?.sort(() => 0.5 - Math.random());
  return shuffledSets[0];
}

const fetchedSetNumbers = new Set();

async function getMinifigsFromSet(setNum: string, allMinifigs: MinifigType[]) {
  //Don't fetch Minifigs if already fetched
  if (fetchedSetNumbers.has(setNum)) {
    return [];
  }
  fetchedSetNumbers.add(setNum);
  console.log(fetchedSetNumbers);
  const url = `https://rebrickable.com/api/v3/lego/sets/${setNum}/minifigs/`;
  const data = await fetchAPI(url);
  const allFigsFromSet = data.results;

  // Filter out minifigs that are already in allMinifigs because some set has same Minifigs
  const newMinifigs = allFigsFromSet.filter(
    (fig: { id: number }) =>
      !allMinifigs.some(
        (existingFig: { id: number }) => existingFig.id === fig.id
      )
  );

  return newMinifigs;
}

async function fetchDetailsAboutFigure(setNum: string) {
  const url = `https://rebrickable.com/api/v3/lego/minifigs/${setNum}`;
  const details = await fetchAPI(url);
  return details;
}

export async function fetchRandomMinifigs(amountOfFigures: number) {
  const fetchAllMinifigs = async (amountOfFigures: number) => {
    let allMinifigs: MinifigType[] = [];

    while (allMinifigs.length < amountOfFigures) {
      const randomSet = await fetchRandomSet("Harry Potter");
      const minifigsFromSet = await getMinifigsFromSet(
        randomSet.set_num,
        allMinifigs
      );
      allMinifigs = allMinifigs.concat(minifigsFromSet);
      console.log("ALLMINIFIGS", allMinifigs);
      if (allMinifigs.length < amountOfFigures) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    return allMinifigs;
  };
  const allMinifigs = await fetchAllMinifigs(amountOfFigures);

  const fetchDetailsAboutArrayOfFigures = async (
    randomFigures: MinifigType[]
  ) => {
    return Promise.all(
      randomFigures.map(async (figure) => {
        const figureWithDetail = await fetchDetailsAboutFigure(figure.set_num);
        return figureWithDetail;
      })
    );
  };

  const shuffled = allMinifigs.sort(() => 0.5 - Math.random());
  const randomFigures = shuffled.slice(0, amountOfFigures);
  const randomFiguresWithDetails = await fetchDetailsAboutArrayOfFigures(
    randomFigures
  );
  return randomFiguresWithDetails;
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

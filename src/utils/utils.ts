const API_KEY = "a9a125116a1d7485cd87ef98acfe18e7";

export async function getAllSets(setName: string) {
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/?search=${setName}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `key ${API_KEY}`,
      },
    }
  );
  const data = await response.json();
  const allSets = data.results;

  return allSets;
}

export async function getMinifigsFromSet(setNum: string) {
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/${setNum}/minifigs/`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `key ${API_KEY}`,
      },
    }
  );
  const data = await response.json();
  const allSets = data.results;

  return allSets;
}

export async function fetchRandomMinifigs(amountOfFigures: number) {
  // const allSets = await getAllSets("Harry Potter");
  // let allMinifigs: any[] = [];
  // allSets.forEach(async (element: { set_num: string }) => {
  //   const xd = await getMinifigsFromSet(element.set_num);
  //   allMinifigs.push(xd.results);
  // });
  // console.log(allMinifigs);
  const response = await fetch(
    "https://rebrickable.com/api/v3/lego/minifigs/?search=Harry%20Potter",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `key ${API_KEY}`,
      },
    }
  );
  const data = await response.json();
  const shuffled = data.results.sort(() => 0.5 - Math.random());
  const threeRandom = shuffled.slice(0, amountOfFigures);

  return threeRandom;
}

export async function getPartsOfMinifig(setNum?: string) {
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/minifigs/${setNum}/parts/`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `key ${API_KEY}`,
      },
    }
  );
  const data = await response.json();
  const allParts = data.results;

  return allParts;
}

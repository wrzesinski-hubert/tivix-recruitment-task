const API_KEY = "a9a125116a1d7485cd87ef98acfe18e7";

async function fetchRandomSet(setName: string) {
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/sets/?min_parts=1&search=${setName}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `key ${API_KEY}`,
      },
    }
  );
  const data = await response.json();
  const shuffledSets = data.results?.sort(() => 0.5 - Math.random());
  return shuffledSets[0];
}

async function getMinifigsFromSet(setNum: string) {
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

async function fetchDetailsAboutFigure(set_num: string) {
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/minifigs/${set_num}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `key ${API_KEY}`,
      },
    }
  );
  const details = await response.json();
  return details;
}

export async function fetchRandomMinifigs(amountOfFigures: number) {
  const fetchAllMinifigs = async (amountOfFigures: number) => {
    let allMinifigs: {
      id: number;
      quantity: number;
      set_img_url: string;
      set_name: string;
      set_num: string;
    }[] = [];

    while (allMinifigs.length < amountOfFigures) {
      const randomSet = await fetchRandomSet("Harry Potter");
      const minifigsFromSet = await getMinifigsFromSet(randomSet.set_num);
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
    randomFigures: { set_num: string }[]
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

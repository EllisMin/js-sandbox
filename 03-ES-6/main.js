// Challenge
class Element {
  constructor(name = "no name", founded = "-1") {
    this.name = name;
    this.founded = founded;
  }
}

class Park extends Element {
  constructor(name, founded, numTrees = 0, area = 0) {
    super(name, founded);
    this.numTrees = numTrees;
    this.area = area;
  }

  calcDensity() {
    // Round up to 2 decimal places
    return Math.round((this.numTrees / this.area) * 100) / 100;
  }

  hasMoreThanThousand() {
    return this.numTrees > 1000;
  }
  calcAge() {
    return new Date().getFullYear() - this.founded;
  }
}

class Street extends Element {
  constructor(name, founded, length, size = 3) {
    super(name, founded);
    this.length = length;
    this.size = size;
  }
  getClassificationWithSize() {
    const classification = new Map();
    classification.set(0, "tiny");
    classification.set(1, "small");
    classification.set(2, "normal");
    classification.set(3, "big");
    classification.set(4, "huge");
    return classification.get(size);
  }
}

// Main
{
  const allParks = [
    new Park("Green Park", 1987, 215, 0.2),
    new Park("National Park", 1894, 3541, 2.9),
    new Park("Oak Park", 1953, 949, 0.4)
  ];
  const allStreets = [
    new Street("Ocean Ave", 1999, 1.1, 4),
    new Street("Evergreen St", 2008, 2.7, 2),
    new Street("4th St", 2015, 0.8),
    new Street("sunset blvd", 1982, 2.5, 5)
  ];

  // Display report
  let avgAge = 0;

  allParks.forEach(cur => {
    avgAge += cur.calcAge();
    console.log(`Density of Park, ${cur.name}, : ${cur.calcDensity()}`);
    if (cur.hasMoreThanThousand()) {
      console.log(`${cur.name} has over 1000 trees`);
    }
  });

  avgAge = avgAge / allParks.length;
  console.log("Parks have average age of " + avgAge);

  let totalLen = 0;
  allStreets.forEach(cur => {
    totalLen += cur.length;
  });
  console.log(
    `Total length of streets: ${totalLen} and average of ${totalLen /
      allStreets.length}`
  );
}

class Video {
  constructor(title, duration, description) {
    this.title = title;
    this.duration = duration;
    this.description = description;
  }

  getData() {
    return this.title && this.duration;
  }
}

class Movie extends Video {
  constructor(title, duration, description, director, year) {
    super(title, duration, description);
    this.director = director;
    this.year = year;
  }

  getData() {
    return `Title: ${this.title}, Duration: ${this.duration}, Director: ${this.director}, Year: ${this.year}`;
  }
}

class Series extends Video {
  constructor(title, duration, description, name, season, episode) {
    super(title, duration, description);
    this.name = name;
    this.season = season;
    this.episode = episode;
  }

  getData() {
    return `Title: ${this.title}, Duration: ${this.duration}, Name: ${this.name}, Season: ${this.season}, Episode: ${this.episode}`;
  }
}

class Documentary extends Video {
  constructor(title, duration, description) {
    super(title, duration, description);
  }

  getData() {
    return `Title: ${this.title}, Duration: ${this.duration}`;
  }
}

// instances of movies , docu and TV series
const seriesInstances = [
  new Series(
    "Stranger Things",
    55,
    "Friends don't lie",
    "Chapter four: The Vanishing of Will Byers",
    4,
    1
  ),
  new Series(
    "Breaking Bad",
    47,
    "High school chemistry teacher turned methamphetamine manufacturer",
    "Pilot",
    2,
    5
  ),
  new Series(
    "Game of Thrones",
    60,
    "Winter is coming",
    "Winter Is Coming",
    1,
    1
  ),
  new Series(
    "The Mandalorian",
    35,
    "Bounty hunting in the Star Wars universe",
    "Chapter 1: The Mandalorian",
    1,
    1
  ),
];

const movieInstances = [
  new Movie(
    "Inception",
    148,
    "A mind-bending thriller",
    "Christopher Nolan",
    2010
  ),
  new Movie(
    "The Shawshank Redemption",
    142,
    "Two imprisoned men bond over a number of years",
    "Frank Darabont",
    1994
  ),
  new Movie(
    "Rocky",
    120,
    "A story about an underdog boxer",
    "John G. Avildsen",
    1976
  ),
  new Movie(
    "Kickboxer",
    97,
    "A martial artist seeks revenge",
    "Mark DiSalle",
    1989
  ),
  new Movie(
    "The Godfather",
    175,
    "A crime epic following the Corleone family",
    "Francis Ford Coppola",
    1972
  ),
];

const documentaryInstances = [
  new Documentary("Planet Earth II", 360, "Narrated by Sir David Attenborough"),
  new Documentary(
    "The Social Dilemma",
    94,
    "Examining the impact of social media on society"
  ),
];

console.log("Series Info:", seriesInstances[1].getData());
console.log("Movie Info:", movieInstances[3].getData());
console.log("Documentary Info:", documentaryInstances[0].getData());

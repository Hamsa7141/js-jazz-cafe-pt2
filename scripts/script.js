// Functional Programming Tasks:

// Task 1: Implement a function that calculates total earnings

function calculateEarnings(ticketPrices) {
    const totalEarnings = ticketPrices.reduce((sum, price) => sum + price, 0);
    return totalEarnings;
  }
  
  // Examples to test in console:
  const ticketPrices = [20, 25, 30];
  const totalEarnings = calculateEarnings(ticketPrices);
  console.log("Total Earnings:", totalEarnings); // Output: Total Earnings: 75
  
  // Task 2: Implement a function to filter out free events from a list of events
  
  function filterFreeEvents(events) {
    const paidEvents = events.filter((event) => event.price > 0); // Filter events with price > 0
    return paidEvents;
  }
  
  // Examples to test in console:
  const events = [
    { name: "Jazz Night", price: 15 },
    { name: "Open Mic", price: 0 },
    { name: "Live Concert", price: 25 },
  ];
  const paidEvents = filterFreeEvents(events);
  console.log("Paid Events:", paidEvents); // Output: Paid Events: [{ name: "Jazz Night", price: 15 }, { name: "Live Concert", price: 25 }]
  
  
  // Object-Oriented Programming Tasks:
  
  // Task 3: Define a class for Jazz Musicians
  
  class JazzMusician {
    constructor(name, instrument) {
      this.name = name;
      this.instrument = instrument;
    }
  }
  
  // Examples to test in console:
  const musician = new JazzMusician("Louis Armstrong", "Trumpet");
  console.log("Jazz Musician:", musician); // Output: Jazz Musician: { name: "Louis Armstrong", instrument: "Trumpet" }
  
  // Task 4: Extend the JazzMusician class for Vocalists
  
  class Vocalist extends JazzMusician {
    constructor(name, style) {
      super(name); // Call parent constructor (JazzMusician)
      this.style = style;
    }
  }
  
  // Examples to test in console:
  const vocalist = new Vocalist("Ella Fitzgerald", "Scat");
  console.log("Jazz Vocalist:", vocalist); // Output: Jazz Vocalist: { name: "Ella Fitzgerald", instrument: undefined, style: "Scat" } (instrument is inherited from JazzMusician but not set in Vocalist)
  
  
  // Classes and Constructors Tasks:
  
  // Task 5: Create a custom constructor function for Jazz Bands
  
  function JazzBand(name, genre) {
    return { // Return an object with properties
      name,
      genre,
    };
  }
  
  // Examples to test in console:
  const band = JazzBand("The Jazz Messengers", "Hard Bop");
  console.log("Jazz Band:", band); // Output: Jazz Band: { name: "The Jazz Messengers", genre: "Hard Bop" }
  
  // Task 6 : Implement a class with default parameters for Jazz Instruments.
  // The default TYPE should be Saxophone, and the default PLAYER should be John Coltrane.
  
  class JazzInstrument {
    constructor(type = "Saxophone", player = "John Coltrane") {
      this.type = type;
      this.player = player;
    }
  }
  
  // Examples to test in console:
  const saxophonist = new JazzInstrument();
  console.log("Default Saxophonist:", saxophonist); // Output: Default Saxophonist: { type: "Saxophone", player: "John Coltrane" }
  const customInstrument = new JazzInstrument("Piano", "Thelonious Monk");
  console.log("Custom Instrument:", customInstrument); // Output: Custom Instrument: { type: "Piano", player: "Thelonious Monk" }
  
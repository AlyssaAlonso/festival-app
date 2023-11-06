require("dotenv").config();
require("./config/database");

const Pavilion = require("./models/pavilion");
const Booth = require("./models/booth");

const pavilionsData = [
  {
    name: "United Kingdom",
    description: "Explore charming British architecture and gardens...",
  },
  {
    name: "Canada",
    description:
      "Experience the natural beauty of Canada with stunning landscapes...",
  },
  {
    name: "Mexico",
    description:
      "Transport yourself to a lively Mexican marketplace. Explore Mayan and Aztec influences...",
  },
  {
    name: "Norway",
    description:
      "Experience the charm of a Norwegian village, complete with a stave church...",
  },
  {
    name: "China",
    description:
      "Wander through a beautiful Chinese garden, watch intricate acrobatics...",
  },
  {
    name: "Germany",
    description:
      "Stroll through a picturesque Bavarian village, surrounded by timber-framed houses...",
  },
  {
    name: "Italy",
    description:
      "Revel in the romance of Italy with replicas of famous landmarks, Venetian canals...",
  },
  {
    name: "The American Adventure",
    description:
      "A celebration of American history and culture. Watch the inspiring show...",
  },
  {
    name: "Japan",
    description:
      "Immerse yourself in Japanese tradition and pop culture. Admire the beautiful gardens...",
  },
  {
    name: "Morocco",
    description:
      "Wander through a vibrant Moroccan bazaar with intricate architecture...",
  },
  {
    name: "France",
    description:
      "Stroll along the Seine River and enjoy French cuisine, wine, and pastries...",
  },
  {
    name: "Future World",
    description:
      "While not a traditional pavilion, Future World showcases technological innovations...",
  },
  {
    name: "Port of Entry",
    description:
      "The lively central hub of Epcot, Port of Entry is your starting point for exploring the World Showcase...",
  },
  {
    name: "Refreshment Outpost",
    description:
      "A hidden gem in Epcot, the Refreshment Outpost offers a quick culinary escape...",
  },
  {
    name: "The Odyssey",
    description:
      "The Odyssey: A versatile venue in Epcot, The Odyssey offers ever-changing exhibits...",
  },
];

const boothsData = [
  {
    name: "Shimmering Sips",
    description:
      "Get the brunch party started! Sample sweet treats and sip on sparkling mimosas.",
    pavilionName: "Port of Entry",
  },
  {
    name: "Ireland",
    description:
      "Enjoy favorites from the Emerald Isle, like Irish sausage and seafood pie...",
    pavilionName: "United Kingdom",
  },
  {
    name: "Canada",
    description:
      "Discover delightful dishes and refreshing beverages from the Great White North...",
    pavilionName: "Canada",
  },
  {
    name: "France",
    description:
      "Fall in love with the classic cuisine of France—along with assorted wines...",
    pavilionName: "France",
  },
  {
    name: "Greece",
    description:
      "Opa! Enjoy traditional Greek dishes like spanakopita or a gyro and a glass of wine...",
    pavilionName: "Morocco",
  },
  {
    name: "Belgium",
    description:
      "Satisfy your sweet tooth with a fluffy Belgian waffle—and pair it with a bold Belgian beer...",
    pavilionName: "Morocco",
  },
  {
    name: "Brazil",
    description:
      "Dig into South American cuisine and culture with the Land of the Palms’ finest fare...",
    pavilionName: "Morocco",
  },
  {
    name: "Japan",
    description:
      "Delight your appetite with delish dishes and lively libations from the Land of the Rising Sun...",
    pavilionName: "Japan",
  },
  {
    name: "Flavors of America",
    description:
      "Celebrate flavors from both coasts, with dishes from such regions as New England, the Southwest and more...",
    pavilionName: "The American Adventure",
  },
  {
    name: "Italy",
    description:
      "Relish the simple elegance of cucina italiana, with some of the world’s best-loved food and wine...",
    pavilionName: "Italy",
  },
  {
    name: "Spain",
    description:
      "Feast on flavorful Spanish foods—like paella and charcuterie—along with sangria...",
    pavilionName: "Italy",
  },
  {
    name: "Germany",
    description:
      "Venture to Germany for Bavarian bites sure to sate foodies of all ages—every dish is köstlich!",
    pavilionName: "Germany",
  },
  {
    name: "The Alps",
    description:
      "Indulge in comforting Alpine cuisine, like warm Raclette Swiss cheese served with a baguette...",
    pavilionName: "Germany",
  },
  {
    name: "Kenya",
    description:
      "Set off on a safari of flavor as you enjoy traditional Kenyan food and beer...",
    pavilionName: "Port of Entry",
  },
  {
    name: "India",
    description:
      "Spice up your life with Indian cuisine, like samosas and chicken tikka masala...",
    pavilionName: "China",
  },
  {
    name: "China",
    description:
      "Please your palate with popular Chinese plates, bubble tea, draft beer and cocktails...",
    pavilionName: "China",
  },
  {
    name: "Mexico",
    description:
      "Take your taste buds south of the border for tacos, tostadas, Mexican craft beer and margaritas...",
    pavilionName: "Mexico",
  },
  {
    name: "Australia",
    description:
      "Embark on a culinary journey Down Under as you sample popular Australian food and wine...",
    pavilionName: "Port of Entry",
  },
  {
    name: "Hawaii",
    description:
      "Traverse the Pacific for tropical flavors and island favorites both savory and sweet...",
    pavilionName: "Port of Entry",
  },
  {
    name: "The Noodle Exchange",
    description:
      "Savor the flavors of the Far East served up in delicious noodle dishes...",
    pavilionName: "Mexico",
  },
  {
    name: "Char & Chop",
    description:
      "Visit this butcher shop-inspired marketplace for a selection of high-end meats and tasty beers and wine...",
    pavilionName: "Port of Entry",
  },
  {
    name: "Wine & Wedge",
    description:
      "Indulge in different cheeses and cheesy dishes—artistically paired with wonderful wines—at this fromagerie...",
    pavilionName: "Port of Entry",
  },
  {
    name: "Bubbles & Brine",
    description:
      "Pop the bubbly and spoil yourself with Champagne and succulent seafood...",
    pavilionName: "Port of Entry",
  },
  {
    name: "Swirled Showcase",
    description:
      "Travel World Showcase with unique frozen treats from Swirled Showcase...",
    pavilionName: "Port of Entry",
  },
  {
    name: "Brew-Wing Lab",
    description:
      "Take a flavorful adventure featuring the culinary creations—and madcap mishaps—of Muppet Labs...",
    pavilionName: "The Odyssey",
  },
  {
    name: "Flavors from Fire",
    description:
      "Enjoy heartwarming dishes inspired by campfire-cooked summertime favorites...",
    pavilionName: "Future World",
  },
  {
    name: "The Fry Basket",
    description:
      "Snack on crispy French fries or yucca fries, seasoned to perfection...",
    pavilionName: "Future World",
  },
  {
    name: "Coastal Eats",
    description:
      "Savor succulent seafood dishes that pair beautifully with sparkling wine or a classic cocktail...",
    pavilionName: "Future World",
  },
];

const findPavilionByName = (name, pavilions) => {
  return pavilions.find((p) => p.name === name);
};

Promise.all([
  Pavilion.insertMany(pavilionsData)
    .then((pavilions) => {
      console.log("Pavilions seeded:", pavilions);
      return pavilions;
    })
    .catch((error) => {
      console.error("Error seeding pavilions:", error);
    }),

  Pavilion.find()
    .then((pavilions) => {
      const boothPromises = boothsData.map((data) => {
        const pavilion = findPavilionByName(data.pavilionName, pavilions);
        if (pavilion) {
          const booth = new Booth({
            name: data.name,
            description: data.description,
            pavilion: pavilion._id,
          });
          return booth.save();
        }
      });

      return Promise.all(boothPromises);
    })
    .then((booths) => {
      console.log("Booths seeded:", booths);
    })
    .catch((error) => {
      console.error("Error seeding booths:", error);
    }),
])
  .then(() => {
    console.log("Database seeding completed.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error during seeding:", error);
    process.exit(1);
  });

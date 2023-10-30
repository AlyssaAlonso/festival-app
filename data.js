const ukPav = new Pavilion({
  name: "United Kingdom",
  description:
    "Explore charming British architecture and gardens. Relax at the Rose & Crown Pub and shop for British goods in this delightful pavilion.",
});

const canadaPav = new Pavilion({
  name: "Canada",
  description:
    'Experience the natural beauty of Canada with stunning landscapes, a totem pole garden, and the breathtaking "O Canada!" film.',
});

const mexicoPav = new Pavilion({
  name: "Mexico",
  description:
    "Transport yourself to a lively Mexican marketplace. Explore Mayan and Aztec influences, shop for folk art, and dine on delicious cuisine in this festive pavilion.",
});

const norwayPav = new Pavilion({
  name: "Norway",
  description:
    "Experience the charm of a Norwegian village, complete with a stave church. The Frozen Ever After attraction is a must-see for fans of Disney's hit movie.",
});

const chinaPav = new Pavilion({
  name: "China",
  description:
    "Wander through a beautiful Chinese garden, watch intricate acrobatics, and enjoy authentic cuisine while exploring Chinese culture and history.",
});

const germanyPav = new Pavilion({
  name: "Germany",
  description:
    "Stroll through a picturesque Bavarian village, surrounded by timber-framed houses. Sample German beer, sausages, and pastries, and shop for cuckoo clocks and beer steins.",
});

const italyPav = new Pavilion({
  name: "Italy",
  description:
    "Revel in the romance of Italy with replicas of famous landmarks, Venetian canals, and delicious cuisine. Be sure to enjoy some gelato.",
});

const usaPav = new Pavilion({
  name: "The American Adventure",
  description:
    "A celebration of American history and culture. Watch the inspiring show and explore colonial and revolutionary artifacts.",
});

const japanPav = new Pavilion({
  name: "Japan",
  description:
    "Immerse yourself in Japanese tradition and pop culture. Admire the beautiful gardens, shop for kimonos, and dine on sushi and other authentic dishes.",
});

const moroccoPav = new Pavilion({
  name: "Morocco",
  description:
    "Wander through a vibrant Moroccan bazaar with intricate architecture and authentic crafts. Savor Moroccan cuisine and enjoy live music and belly dancing.",
});

const francePav = new Pavilion({
  name: "France",
  description:
    "Stroll along the Seine River and enjoy French cuisine, wine, and pastries. Don't miss the stunning Impressions de France film.",
});

const futurePav = new Pavilion({
  name: "Future World",
  description:
    "While not a traditional pavilion, Future World showcases technological innovations, including Spaceship Earth, the iconic Epcot ball, and other attractions focusing on the future.",
});

const poePav = new Pavilion({
  name: "Port of Entry",
  description:
    "The lively central hub of Epcot, Port of Entry is your starting point for exploring the World Showcase. With iconic views of Spaceship Earth, shops, and refreshments, it's the perfect place to plan your Epcot adventure.",
});

const outpostPav = new Pavilion({
  name: "Refreshment Outpost",
  description:
    "A hidden gem in Epcot, the Refreshment Outpost offers a quick culinary escape with unique flavors and snacks. It's a delightful stop for a quick bite or refreshing beverage on your World Showcase journey.",
});

const odysseyPav = new Pavilion({
  name: "The Odyssey",
  description:
    "The Odyssey: A versatile venue in Epcot, The Odyssey offers ever-changing exhibits, special events, and a welcoming atmosphere. It's a dynamic space where you can find art, culture, and relaxation in the heart of the park.",
});

ukPav.save();
canadaPav.save();
mexicoPav.save();
norwayPav.save();
chinaPav.save();
germanyPav.save();
italyPav.save();
usaPav.save();
japanPav.save();
moroccoPav.save();
francePav.save();
futurePav.save();
poePav.save();
outpostPav.save();
odysseyPav.save();

const shimmeringSips = new Booth({
  name: "Shimmering Sips",
  description:
    "Get the brunch party started! Sample sweet treats and sip on sparkling mimosas.",
  pavilion: poePav._id,
});

const ireland = new Booth({
  name: "Ireland",
  description:
    "Enjoy favorites from the Emerald Isle, like Irish sausage and seafood pie—which pair wonderfully with Irish ale and mead honey wine.",
  pavilion: ukPav._id,
});

const canada = new Booth({
  name: "Canada",
  description:
    "Discover delightful dishes and refreshing beverages from the Great White North.",
  pavilion: canadaPav._id,
});

const france = new Booth({
  name: "France",
  description:
    "Fall in love with the classic cuisine of France—along with assorted wines or a slushy cocktail.",
  pavilion: francePav._id,
});

const greece = new Booth({
  name: "Greece",
  description:
    "Opa! Enjoy traditional Greek dishes like spanakopita or a gyro and a glass of wine.",
  pavilion: moroccoPav._id,
});

const belgium = new Booth({
  name: "Belgium",
  description:
    "Satisfy your sweet tooth with a fluffy Belgian waffle—and pair it with a bold Belgian beer.",
  pavilion: moroccoPav._id,
});

const brazil = new Booth({
  name: "Brazil",
  description:
    "Dig into South American cuisine and culture with the Land of the Palms’ finest fare.",
  pavilion: moroccoPav._id,
});

const japan = new Booth({
  name: "Japan",
  description:
    "Delight your appetite with delish dishes and lively libations from the Land of the Rising Sun.",
  pavilion: japanPav._id,
});

const flavorsOfAmerica = new Booth({
  name: "Flavors of America",
  description:
    "Celebrate flavors from both coasts, with dishes from such regions as New England, the Southwest and more.",
  pavilion: usaPav._id,
});

const italy = new Booth({
  name: "Italy",
  description:
    "Relish the simple elegance of cucina italiana, with some of the world’s best-loved food and wine.",
  pavilion: italyPav._id,
});

const spain = new Booth({
  name: "Spain",
  description:
    "Feast on flavorful Spanish foods—like paella and charcuterie—along with sangria.",
  pavilion: italyPav._id,
});

const Germany = new Booth({
  name: "Germany",
  description:
    "Venture to Germany for Bavarian bites sure to sate foodies of all ages—every dish is köstlich!",
  pavilion: germanyPav._id,
});

const theAlps = new Booth({
  name: "The Alps",
  description:
    "Indulge in comforting Alpine cuisine, like warm Raclette Swiss cheese served with a baguette.",
  pavilion: germanyPav._id,
});

const kenya = new Booth({
  name: "Kenya",
  description:
    "Set off on a safari of flavor as you enjoy traditional Kenyan food and beer.",
  pavilion: outpostPav._id,
});

const india = new Booth({
  name: "India",
  description:
    "Spice up your life with Indian cuisine, like samosas and chicken tikka masala.",
  pavilion: chinaPav._id,
});

const china = new Booth({
  name: "China",
  description:
    "Please your palate with popular Chinese plates, bubble tea, draft beer and cocktails.",
  pavilion: chinaPav._id,
});

const mexico = new Booth({
  name: "Mexico",
  description:
    "Take your taste buds south of the border for tacos, tostadas, Mexican craft beer and margaritas.",
  pavilion: mexicoPav._id,
});

const australia = new Booth({
  name: "Australia",
  description:
    "Embark on a culinary journey Down Under as you sample popular Australian food and wine.",
  pavilion: poePav._id,
});

const hawaii = new Booth({
  name: "Hawaii",
  description:
    "Traverse the Pacific for tropical flavors and island favorites both savory and sweet.",
  pavilion: poePav._id,
});

const theNoodleExchange = new Booth({
  name: "The Noodle Exchange",
  description:
    "Savor the flavors of the Far East served up in delicious noodle dishes.",
  pavilion: mexicoPav._id,
});

const charAndChop = new Booth({
  name: "Char & Chop",
  description:
    "Visit this butcher shop-inspired marketplace for a selection of high-end meats and tasty beers and wine.",
  pavilion: poePav._id,
});

const wineAndWedge = new Booth({
  name: "Wine & Wedge",
  description:
    "Indulge in different cheeses and cheesy dishes—artistically paired with wonderful wines—at this fromagerie.",
  pavilion: poePav._id,
});

const bubblesAndBrine = new Booth({
  name: "Bubbles & Brine",
  description:
    "Pop the bubbly and spoil yourself with Champagne and succulent seafood.",
  pavilion: poePav._id,
});

const swirledShowcase = new Booth({
  name: "Swirled Showcase",
  description:
    "Travel World Showcase with unique frozen treats from Swirled Showcase!",
  pavilion: poePav._id,
});

const brewWing = new Booth({
  name: "Brew-Wing Lab",
  description:
    "Take a flavorful adventure featuring the culinary creations—and madcap mishaps—of Muppet Labs.",
  pavilion: odysseyPav._id,
});

const flavorsFromFire = new Booth({
  name: "Flavors from Fire",
  description:
    "Enjoy heartwarming dishes inspired by campfire-cooked summertime favorites.",
  pavilion: futurePav._id,
});

const theFryBasket = new Booth({
  name: "The Fry Basket",
  description:
    "Snack on crispy French fries or yucca fries, seasoned to perfection.",
  pavilion: futurePav._id,
});

const costalEats = new Booth({
  name: "Coastal Eats",
  description:
    "Savor succulent seafood dishes that pair beautifully with sparkling wine or a classic cocktail.",
  pavilion: futurePav._id,
});

shimmeringSips.save();
ireland.save();
canada.save();
france.save();
greece.save();
belgium.save();
brazil.save();
japan.save();
flavorsOfAmerica.save();
italy.save();
spain.save();
germany.save();
theAlps.save();
kenya.save();
india.save();
china.save();
mexico.save();
australia.save();
hawaii.save();
theNoodleExchange.save();
charAndChop.save();
wineAndWedge.save();
bubblesAndBrine.save();
swirledShowcase.save();
brewWing.save();
flavorsFromFire.save();
theFryBasket.save();
costalEats.save();

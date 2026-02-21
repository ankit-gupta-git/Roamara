export const mockListings = [
  ...Array(20).fill(null).map((_, i) => ({
    _id: (i + 1).toString(),
    title: [
      "Eco-friendly Cave House", "Luxury Cabin", "Cliffside Villa", "Historic Townhouse",
      "Tropical Hut", "Modern Apartment", "Lake Cottege", "Desert Resort",
      "Mountain Loft", "Zen Garden Retreat", "Nordic Chalet", "Urban Studio",
      "Seaside Bungalow", "Safari Lodge", "Castle Tower", "Vineyard Estate",
      "Island Paradise", "Snowy Peak Lodge", "Bohemian Loft", "Glass House"
    ][i % 20],
    description: "A wonderful stay with amazing amenities and great views.",
    location: [
      "Santorini, Greece", "Aspen, USA", "Malibu, USA", "London, UK",
      "Bali, Indonesia", "Tokyo, Japan", "Lake District, UK", "Dubai, UAE",
      "Swiss Alps, Switzerland", "Kyoto, Japan", "Oslo, Norway", "New York, USA",
      "Cape Town, SA", "Maasai Mara, Kenya", "Tuscany, Italy", "Bordeaux, France",
      "Maldives", "Banff, Canada", "Berlin, Germany", "Reykjavik, Iceland"
    ][i % 20],
    country: "Worldwide",
    price: Math.floor(Math.random() * 50000) + 5000,
    image: { url: `https://images.unsplash.com/photo-${[
      "1570077188670-e3a8d69ac5ff", "1449156001437-3a1f9397e3b3", "1512917774080-9991f1c4c750", "1513635269975-59663e0ac1ad",
      "1520250497591-112f2f40a3f4", "1503899036084-c55cdd92da26", "1464822759023-fed622ff2c3b", "1512453979798-5ea266f8880c",
      "1502672260266-1c1ef2d93688", "1493663284031-b7e3aefcae8e", "1480074568708-e7b720bb3f09", "1522708323590-d24dbb6b0267",
      "1499793983690-e29da59ef1c2", "1470770841072-f978cf4d019e", "1518780664697-55e3ad937233", "1523217582562-09d0def993a6",
      "1505881502353-a1986bdd4921", "1439066615861-d1af74d74000", "1536376072261-38c75010e6c9", "1507525428034-b723cf961d3e"
    ][i % 20]}?auto=format&fit=crop&w=800&q=80` },
    ownerName: "Host " + (i + 1),
    reviews: Array(Math.floor(Math.random() * 10) + 1).fill({})
  }))
];

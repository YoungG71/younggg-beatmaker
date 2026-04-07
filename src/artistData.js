export const artistData = {
  name: "YOUNG G",
  tagline: "WEST COAST LEGEND IN THE MAKING",
  bio: "Young G is a French beatmaker who has been collaborating with West Coast artists since 2010. Blending California’s smooth synths and heavy basslines with his own European touch, he has carved out a unique sound that bridges cultures. With over a decade of experience, Young G keeps delivering authentic West Coast vibes while bringing fresh energy from across the Atlantic.",
  socials: {
    instagram: "https://www.instagram.com/young_g_westcoast_beatmaker/",
    facebook: "https://www.facebook.com/profile.php?id=61582607850367",
    tiktok: "https://www.tiktok.com/@youngg7134?is_from_webapp=1&sender_device=pc",
    youtube: "https://www.youtube.com/@YoungG71"
  },
  albums: [
    {
      id: 1,
      title: "The Golden Era",
      year: "2023",
      cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop", // Placeholder
      spotifyId: "07bIdDDe3I3jfdtoZbVP03", // Placeholder ID (e.g., Linkin Park or generic)
      price: "19.99",
      isNew: true
    },
    {
      id: 2,
      title: "Midnight Cruiser",
      year: "2022",
      cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop",
      spotifyId: "37i9dQZF1DX0XUsuxWHRQd",
      price: "14.99",
      isNew: false
    },
    {
      id: 3,
      title: "Palm Trees & Hennessy",
      year: "2021",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
      spotifyId: "37i9dQZF1DX0XUsuxWHRQd",
      price: "12.99",
      isNew: false
    }
  ],
  shop: [
    {
      id: 204,
      name: "Up The Level",
      subtitle: "Young G Presents",
      price: "19.99",
      image: "/upthelevel.jpg",
      description: "Available now. Get your copy today!",
      paypalId: "VHLQ8JJBMU7DW",
      dedicationName: "os0",
      isPack: false,
      isRestocking: false, // Mis à jour à false
      buttonText: "BUY NOW"
    },
    {
      id: 201,
      name: "International West Coast Shit",
      subtitle: "Young G Presents",
      price: "19.99",
      image: "/album1.jpg",
      description: "The first chapter. Pure West Coast vibes.",
      paypalId: "39T47NFW5LREY",
      dedicationName: "os0",
      isPack: false,
      buttonText: "BUY NOW"
    },
    {
      id: 202,
      name: "International West Coast Shit (Part 2)",
      subtitle: "Young G Presents",
      price: "19.99",
      image: "/album2.jpg",
      description: "The saga continues. Harder beats, smoother synths.",
      paypalId: "7HBWX3Q5EAFTQ",
      dedicationName: "os0",
      isPack: false,
      buttonText: "BUY NOW"
    },
    {
      id: 203,
      name: "DOUBLE DISC PACK",
      subtitle: "The Full Collection",
      price: "29.99",
      image: ["/album1.jpg", "/album2.jpg"],
      description: "Get the complete collection. Both volumes included at a special price.",
      paypalId: "QEDW46HYQF6H6",
      dedicationName: "os0",
      isPack: true,
      bestDeal: true,
      buttonText: "ORDER THE PACK"
    },
    {
      id: 205,
      name: "20eleven Knockout",
      subtitle: "Mr. Seven",
      price: "19.99",
      image: "/mrseven.jpg",
      description: "Classic West Coast release.",
      paypalId: "SOLD_OUT",
      dedicationName: "os0",
      isPack: false,
      isSoldOut: true,
      buttonText: "SOLD OUT"
    },
    {
      id: 206,
      name: "Find Me Ridin",
      subtitle: "Jblak",
      price: "19.99",
      image: "/jblak.jpg",
      description: "Smooth G-Funk vibes.",
      paypalId: "SOLD_OUT",
      dedicationName: "os0",
      isPack: false,
      isSoldOut: true,
      buttonText: "SOLD OUT"
    }
  ]
};

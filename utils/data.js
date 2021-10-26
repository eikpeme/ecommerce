import bycrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bycrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bycrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Ruby",
      slug: "ruby",
      category: "Igneous",
      image: "/images/ruby.jpg",
      price: 170,
      brand: "Fire",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "Ruby is a pink to blood-red colored gemstone. Ancient Hindus believed they'd be reborn as emperors if they offered rubies to the god Krishna. In Hindu folklore, the glowing fire within rubiesIn ancient times, the ruby was considered more valuable than diamonds. Many cultures admired this precious gemstone and considered it a token of wealth, safety, and passion.",
    },
    {
      name: "Emerald",
      slug: "emerald",
      category: "Metamorphic",
      image: "/images/emerald.jpg",
      price: 130,
      brand: "Earth",
      rating: 3.5,
      numReviews: 10,
      countInStock: 20,
      description:
        "Emerald is a green themed gemstone. Emerald is the most famous member of the beryl family. Legends endowed the wearer with the ability to foresee the future when emerald was placed under the tongue, as well as to reveal truth and be protected against evil spells. Emerald was once also believed to cure diseases like cholera and malaria.",
    },
    {
      name: "Sapphire",
      slug: "sapphire",
      category: "Igneous",
      image: "/images/sapphire.jpg",
      price: 290,
      brand: "Water",
      rating: 4.4,
      numReviews: 10,
      countInStock: 20,
      description:
        "Sapphire is a precious gemstone, Sapphires are associated with focusing the mind, maintaining self-discipline, and channeling higher powers. Throughout time, the September birthstone has been referenced in almost all religions. Greeks wore sapphire for guidance when seeking answers from the oracle.",
    },
    {
      name: "Amethyst",
      slug: "amethyst",
      category: "Igneous",
      image: "/images/amethyst.jpg",
      price: 155,
      brand: "Wind",
      rating: 4.6,
      numReviews: 10,
      countInStock: 20,
      description:
        "The ancient Greeks wore amethyst and carved drinking vessels from it in the belief that it would prevent intoxication. Amethyst is a semiprecious stone that is often used in jewelry and is the traditional birthstone for February.",
    },
    {
      name: "Opal",
      slug: "opal",
      category: "Metamorphic",
      image: "/images/opal.jpg",
      price: 110,
      brand: "Fire",
      rating: 4.7,
      numReviews: 10,
      countInStock: 20,
      description:
        "Many cultures have credited opal with supernatural origins and powers. Arabic legends say it falls from the heavens in flashes of lightning. The ancient Greeks believed opals gave their owners the gift of prophecy and guarded them from disease. Europeans have long considered the gem a symbol of hope, purity, and truth.",
    },
    {
      name: "Diamond",
      slug: "diamond",
      category: "Shirts",
      image: "/images/diamond.jpg",
      price: 300,
      brand: "Earth",
      rating: 5.0,
      numReviews: 10,
      countInStock: 20,
      description:
        "Almost every civilization has some kind of lore on the diamond. Every civilization's lore however, shares one theme- that the diamond symbolizes all forces necessary for a healthy society, and that it brings its wearer great strength. The diamond was always considered a stone of winners.",
    },
    {
      name: "Tanzanite",
      slug: "tanzanite",
      category: "Pants",
      image: "/images/tanzanite.jpg",
      price: 230,
      brand: "Earth",
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description:
        "It was considered a stone of transformation. Legend has it that tanzanite could strengthen the immune system; regenerate cells, skin and hair; and detoxify blood. It was also believed to help with mental and emotional issues such as stress and fear.",
    },
    {
      name: "Topaz",
      slug: "topaz",
      category: "Metamorphic",
      image: "/images/topaz.jpg",
      price: 100,
      brand: "Water",
      rating: 3.9,
      numReviews: 10,
      countInStock: 20,
      description:
        "It was believed that it's healing power and color intensity waxed and waned with lunar phases. Modern lore suggests topaz will bring about love and good fortune while uncovering lies and deceit. Some feel that the gemstone will reduce feelings of tiredness and promote good moods.",
    },
    {
      name: "Garnet",
      slug: "garnet",
      category: "Metamorphic",
      image: "/images/garnet.jpg",
      price: 7120,
      brand: "Fire",
      rating: 4.9,
      numReviews: 10,
      countInStock: 20,
      description:
        "According to legend, Noah used a finely cut, glowing garnet to illuminate the ark during those dark wet days and nights. Hebrew writers include the garnet as one of the twelve gems in Aaron's breastplate. Christian tradition considered the blood-red garnet as a symbol of Christ's sacrifice",
    },
    {
      name: "Pearl",
      slug: "pearl",
      category: "Sedimentary",
      image: "/images/pearl.jpg",
      price: 300,
      brand: "Water",
      rating: 4.7,
      numReviews: 10,
      countInStock: 20,
      description:
        "Some ancient legends described pearls as tears cried by gods. It was believed that Eve cried pearls when she was exiled from Eden. Pearls have also been symbols of wealth, purity, and fertility. ... Some cultures believed that pearls were bad luck, since the gemstones were ripped from living creatures.",
    },
    {
      name: "Moonstone",
      slug: "Moonstone",
      category: "Sedimentary",
      image: "/images/moonstone.jpg",
      price: 210,
      brand: "Water",
      rating: 5.0,
      numReviews: 10,
      countInStock: 20,
      description:
        "Hindu mythology also told that moonstone was made from the moon's ethereal light. Legend portrayed it as a sacred and magical “dream stone” that could bring serene and beautiful dreams at night. Legends have claimed that moonstone could help the wearer have clear visions and prophecies",
    },
    {
      name: "Peridot",
      slug: "peridot",
      category: "Metamorphic",
      image: "/images/peridot.jpg",
      price: 90,
      brand: "Wind",
      rating: 3.9,
      numReviews: 10,
      countInStock: 20,
      description:
        "Peridot—one of three August birthstones—is a lime green stone that has many links to nature. Ancient Hawaiian folklore told stories of the gems being tears from the goddess of elements, Pele. ... In fact, sometimes when it rained, the gemstones will fall from the sky",
    },
    {
      name: "Onyx",
      slug: "onyx",
      category: "Igneous",
      image: "/images/onyx.jpg",
      price: 70,
      brand: "Earth",
      rating: 5.0,
      numReviews: 10,
      countInStock: 20,
      description:
        "The name comes from the Greek word onyx which means nail of a finger or claw. Legend says that one day while Venus was sleeping Eros/Cupid cut her fingernails and left the clippings scattered on the ground. Because no part of a heavenly body can die, the gods turned them into stone which later became known as onyx.",
    },
  ],
};

export default data;

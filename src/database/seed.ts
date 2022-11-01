import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seeds() {
  const { product } = prisma;
  await product.createMany({
    data: [
      {
        name: "alphonso mango",
        desc: "great Quality of Mango",
        type: "fruits",
        banner: "http://codergogoi.com/youtube/images/alphonso.jpeg",
        unit: 1,
        price: 300,
        available: true,
        supplier: "Golden seed firming",
      },
      {
        name: "Apples",
        desc: "great Quality of Apple",
        type: "fruits",
        banner: "http://codergogoi.com/youtube/images/apples.jpeg",
        unit: 1,
        price: 140,
        available: true,
        supplier: "Golden seed firming",
      },
      {
        name: "Kesar Mango",
        desc: "great Quality of Mango",
        type: "fruits",
        banner: "http://codergogoi.com/youtube/images/kesar.jpeg",
        unit: 1,
        price: 170,
        available: true,
        supplier: "Golden seed firming",
      },
      {
        name: "Langra Mango",
        desc: "great Quality of Mango",
        type: "fruits",
        banner: "http://codergogoi.com/youtube/images/langra.jpeg",
        unit: 1,
        price: 280,
        available: true,
        supplier: "Golden seed firming",
      },
      {
        name: "Broccoli",
        desc: "great Quality of Fresh Vegetable",
        type: "vegetables",
        banner: "http://codergogoi.com/youtube/images/broccoli.jpeg",
        unit: 1,
        price: 280,
        available: true,
        supplier: "Golden seed firming",
      },
      {
        name: "Cauliflower",
        desc: "great Quality of Fresh Vegetable",
        type: "vegetables",
        banner: "http://codergogoi.com/youtube/images/cauliflower.jpeg",
        unit: 1,
        price: 280,
        available: true,
        supplier: "Golden seed firming",
      },
      {
        name: "Olive Oil",
        desc: "great Quality of Oil",
        type: "oils",
        banner: "http://codergogoi.com/youtube/images/oliveoil.jpg",
        unit: 1,
        price: 400,
        available: true,
        supplier: "Golden seed firming",
      },
    ],
  });
}

seeds()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

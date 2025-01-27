import { Product, Review } from "@/types/types";

export const products: Product[]  = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        rating: 4.5,
        category: 'Category 1',
        badge: 'Sale',
        image: '/product1.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 200,
        rating: 3.5,
        badge: 'New',
        category: 'Category 2',
        image: '/product2.jpg',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 300,
        rating: 4.0,
        badge: 'Sale',
        category: 'Category 3',
        image: '/product3.jpg',
      },
      {
        id: 4,
        name: 'Product 4',
        price: 400,
        rating: 5.0,
        badge: 'New',
        category: 'Category 1',
        image: '/product3.jpg',
      }
];


export const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    photo: "/avatar.jpg", // Sample image path
    rating: 5,
    reviewText: "This product is amazing! It exceeded my expectations.",
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "/avatar.jpg", // Sample image path
    rating: 4,
    reviewText: "Good quality, but the delivery took longer than expected.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    photo: "/avatar.jpg", // Sample image path
    rating: 4,
    reviewText: "Great service and good value for money.",
  },
  {
    id: 4,
    name: "Bob Brown",
    photo: "/avatar.jpg", // Sample image path
    rating: 5,
    reviewText: "I love this product! It's exactly what I was looking for.",
  },
  {
    id: 5,
    name: "Eve White",
    photo: "/avatar.jpg", // Sample image path
    rating: 3,
    reviewText: "The product is good, but I expected better quality.",

  },
  {
    id: 6,
    name: "Charlie Black",
    photo: "/avatar.jpg", // Sample image path
    rating: 4,
    reviewText: "I'm satisfied with my purchase. The product is good value for money.",
  },
];
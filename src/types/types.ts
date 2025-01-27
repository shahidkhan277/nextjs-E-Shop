export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    rating?: number;
    badge?: string;  // Optional field for badges like "New" or "Best Seller"
    description?: string;

  }
export interface Filters {
    category: string;
    priceRange: [number, number];
    rating: number;
  }

export interface PromoSectionProps {
    discount: string;
    message: string;
    endDate: string; // End date for the countdown timer in ISO format
  }

  export interface Review {
    id: number;
    name: string;
    photo: string;
    rating: number; // Rating out of 5
    reviewText: string;
  }
  
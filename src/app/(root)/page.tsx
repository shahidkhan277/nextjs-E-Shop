import CustomerReviews from '@/components/CustomerReviews';
import FeaturedProducts from '@/components/FeaturedProducts';
import HeroSection from '@/components/HeroSection';
import ProductListingPage from '@/components/ProductListingPage';
import PromoSection from '@/components/PromoSection';
import React from 'react';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductListingPage />
      <FeaturedProducts />
      <PromoSection
       discount="Up to 50% off on selected items"
       message="Limited Time Offer!"
       endDate="2025-01-31T00:00:00Z"
       />
       <CustomerReviews/>
    </>
  );
}

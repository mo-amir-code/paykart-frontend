interface ProductCardType{
    _id: string;
    title: string;
    price: number;
    stock: number;
    discount: number;
    thumbnail: string;
    ratingAndReviews?: RatingAndReviewsType
}

interface RatingAndReviewsType{
  totalRating:number;
  totalReviews:number;
  avgRating:number
}

interface ProductDetailsType extends ProductCardType{
  description: object;
  colors: string[];
  thumbnail: string;
  images: string[];
  category: "audio" | "audio and video" | "gadgets";
  subCategory: "wired" | "wireless" | "analog" | "smart";
  highlights: string[];
  warranty: {
    serviceType: string;
    covered: string;
  };
  specifications: object;
  importantNote?: string;
}
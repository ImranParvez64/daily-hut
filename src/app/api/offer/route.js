export async function GET() {
    const offer =[
  {
    "id": 1,
    "titlePart1": "Everyday Fresh & Clean",
    "titlePart2": "with Our Products",
    "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-1.png",
    "bgColor": "#F0E8D5"
  },
  {
    "id": 2,
    "titlePart1": "Start Your Day Fresh",
    "titlePart2": "with Our Products",
    "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-2.png",
    "bgColor": "#F3E8E8"
  },
  {
    "id": 3,
    "titlePart1": "Clean Living Made",
    "titlePart2": "Simple",
    "img": "https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-3.png",
    "bgColor": "#E7EAF3"
  },
  {
    "id": 4,
    "titlePart1": "Freshness You Can Feel",
    "titlePart2": "Every Day",
    "img": "https://example.com/image4.jpg",
    "bgColor": "#D8EBE5"
  },
  {
    "id": 5,
    "titlePart1": "Pure & Natural Clean",
    "titlePart2": "for Your Home",
    "img": "https://example.com/image5.jpg",
    "bgColor": "#FFE5D9"
  },
  {
    "id": 6,
    "titlePart1": "Hygiene Meets Quality",
    "titlePart2": "in Every Product",
    "img": "https://example.com/image6.jpg",
    "bgColor": "#E0F7FA"
  },
  {
    "id": 7,
    "titlePart1": "Make Every Day",
    "titlePart2": "a Fresh Start",
    "img": "https://example.com/image7.jpg",
    "bgColor": "#FFF0F5"
  },
  {
    "id": 8,
    "titlePart1": "Your Daily Dose",
    "titlePart2": "of Cleanliness",
    "img": "https://example.com/image8.jpg",
    "bgColor": "#F5F5DC"
  },
  {
    "id": 9,
    "titlePart1": "From Our Home to Yours",
    "titlePart2": "Fresh & Clean",
    "img": "https://example.com/image9.jpg",
    "bgColor": "#E6F2FF"
  },
  {
    "id": 10,
    "titlePart1": "Experience Everyday",
    "titlePart2": "Freshness",
    "img": "https://example.com/image10.jpg",
    "bgColor": "#F0FFF0"
  }
];

    return Response.json(offer);
}
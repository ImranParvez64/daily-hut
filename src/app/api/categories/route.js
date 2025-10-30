export async function GET() {
    const categories = [
        {
            "id": 1,
            "name": "Fruits & Vegetables",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-5.png",
            "bgColor": "#F0E8D5",
            "items": 98,
            "subcategories": [
                "Fresh Fruits",
                "Fresh Vegetables",
                "Herbs & Seasoning",
                "Organic Produce"
            ]
        },
        {
            "id": 2,
            "name": "Rice, Flour & Pulses",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png",
            "bgColor": "#E7EAF3",
            "items": 112,
            "subcategories": [
                "Rice",
                "Flour & Atta",
                "Lentils (Dal)",
                "Chickpeas & Beans"
            ]
        },
        {
            "id": 3,
            "name": "Oil, Ghee & Spices",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-14.png",
            "bgColor": "#F3E8E8",
            "items": 87,
            "subcategories": [
                "Cooking Oil",
                "Ghee & Butter",
                "Masala & Spices",
                "Salt & Sugar"
            ]
        },
        {
            "id": 4,
            "name": "Snacks & Beverages",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-7.png",
            "bgColor": "#D8EBE5",
            "items": 134,
            "subcategories": [
                "Chips & Biscuits",
                "Soft Drinks",
                "Tea & Coffee",
                "Juices & Energy Drinks"
            ]
        },
        {
            "id": 5,
            "name": "Dairy & Bakery",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png",
            "bgColor": "#FFF3E2",
            "items": 76,
            "subcategories": [
                "Milk & Yogurt",
                "Cheese & Butter",
                "Bread & Buns",
                "Cakes & Pastries"
            ]
        },
        {
            "id": 6,
            "name": "Meat, Fish & Eggs",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-8.png",
            "bgColor": "#E8F4F8",
            "items": 59,
            "subcategories": [
                "Fresh Meat",
                "Frozen Fish",
                "Eggs",
                "Processed Meat"
            ]
        },
        {
            "id": 7,
            "name": "Household & Cleaning",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png",
            "bgColor": "#F8EDEB",
            "items": 91,
            "subcategories": [
                "Detergents",
                "Dishwash & Cleaners",
                "Toilet Cleaners",
                "Air Fresheners"
            ]
        },
        {
            "id": 8,
            "name": "Personal Care",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-12.png",
            "bgColor": "#E9F7EF",
            "items": 103,
            "subcategories": [
                "Soap & Body Wash",
                "Shampoo & Conditioner",
                "Toothpaste & Oral Care",
                "Skin Care"
            ]
        },
        {
            "id": 9,
            "name": "Baby & Kids",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-13.png",
            "bgColor": "#FDEEF4",
            "items": 68,
            "subcategories": [
                "Baby Food",
                "Diapers",
                "Baby Soap & Lotion",
                "Baby Accessories"
            ]
        },
        {
            "id": 10,
            "name": "Stationery & Others",
            "img": "https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-14.png",
            "bgColor": "#EEF6FF",
            "items": 84,
            "subcategories": [
                "Pen & Notebook",
                "Battery & Bulb",
                "Plastic Products",
                "Kitchen Accessories"
            ]
        }
    ];

    return Response.json(categories);
}
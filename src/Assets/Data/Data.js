const Data = [
    {
      "name": "Latte",
      "price": 4.99,
      "rating": 4.5,
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/330px-Caffe_Latte_at_Pulse_Cafe.jpg",
      "description": "A creamy espresso-based drink with steamed milk.",
      "popularity": 85,
      "parent_category": "Beverages",
      "sub_category": "Coffee"
    },
    {
      "name": "Cappuccino",
      "price": 4.50,
      "rating": 4.7,
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/375px-Cappuccino_at_Sightglass_Coffee.jpg",
      "description": "Espresso with steamed milk foam, topped with cocoa powder.",
      "popularity": 90,
      "parent_category": "Beverages",
      "sub_category": "Coffee"
    },
    {
      "name": "Espresso",
      "price": 2.99,
      "rating": 4.6,
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/330px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
      "description": "A strong and rich shot of espresso.",
      "popularity": 88,
      "parent_category": "Beverages",
      "sub_category": "Coffee"
    },
    {
      "name": "Mocha",
      "price": 5.20,
      "rating": 4.4,
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Mocha_coffee.jpg/375px-Mocha_coffee.jpg",
      "description": "A delicious blend of espresso, chocolate, and steamed milk.",
      "popularity": 70,
      "parent_category": "Beverages",
      "sub_category": "Coffee"
    },
    {
      "name": "Iced Americano",
      "price": 3.99,
      "rating": 4.3,
      "image_url": "https://diethood.com/wp-content/uploads/2023/08/iced-americano-3.jpg",
      "description": "A refreshing cold brew of espresso and water served with ice.",
      "popularity": 65,
      "parent_category": "Beverages",
      "sub_category": "Cold Drinks"
    },
    {
      "name": "Cold Brew",
      "price": 4.20,
      "rating": 4.5,
      "image_url": "https://www.simplyrecipes.com/thmb/zLJOA2Gov9Q2_n4fFfHOEHaiL5E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Cold-Brew-Coffee-LEAD-6-896c6872ac3e421ca4d88f29b528b349.jpg",
      "description": "A smooth and refreshing coffee brewed cold.",
      "popularity": 75,
      "parent_category": "Beverages",
      "sub_category": "Cold Drinks"
    },
    {
      "name": "Matcha Latte",
      "price": 5.50,
      "rating": 4.3,
      "image_url": "https://coffeecopycat.com/wp-content/uploads/2023/04/IcedMatchaLatte-1200-x-1200-500x500.jpg",
      "description": "Green tea matcha with steamed milk for a unique flavor.",
      "popularity": 60,
      "parent_category": "Beverages",
      "sub_category": "Tea"
    },
    {
      "name": "Chai Tea Latte",
      "price": 4.80,
      "rating": 4.6,
      "image_url": "https://www.modernfarmhouseeats.com/wp-content/uploads/2022/01/starbucks-chai-tea-latte-12.jpg",
      "description": "Spiced chai tea blended with steamed milk.",
      "popularity": 82,
      "parent_category": "Beverages",
      "sub_category": "Tea"
    },
    {
      "name": "Iced Tea",
      "price": 3.50,
      "rating": 4.1,
      "image_url": "https://images.themodernproper.com/billowy-turkey/production/posts/IcedTea_8.jpg?w=1200&q=82&auto=format&fit=crop&dm=1716306653&s=106dea35c7406e03f4ec643638104115",
      "description": "A refreshing glass of iced tea, available in various flavors.",
      "popularity": 68,
      "parent_category": "Beverages",
      "sub_category": "Cold Drinks"
    },
    {
      "name": "Lemonade",
      "price": 3.99,
      "rating": 4.2,
      "image_url": "https://detoxinista.com/wp-content/uploads/2022/05/lemonade-recipe.jpg",
      "description": "Freshly squeezed lemonade with a hint of mint.",
      "popularity": 75,
      "parent_category": "Beverages",
      "sub_category": "Cold Drinks"
    },
    {
      "name": "Chocolate Cake",
      "price": 5.99,
      "rating": 4.8,
      "image_url": "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg",
      "description": "A rich and moist chocolate cake.",
      "popularity": 85,
      "parent_category": "Desserts",
      "sub_category": "Cakes"
    },
    {
      "name": "Cheesecake",
      "price": 5.50,
      "rating": 4.8,
      "image_url": "https://natashaskitchen.com/wp-content/uploads/2020/05/Pefect-Cheesecake-7.jpg",
      "description": "A rich and creamy cheesecake with a buttery crust.",
      "popularity": 75,
      "parent_category": "Desserts",
      "sub_category": "Cakes"
    },
    {
      "name": "Brownie",
      "price": 3.99,
      "rating": 4.7,
      "image_url": "https://juliemarieeats.com/wp-content/uploads/2023/08/Espresso-Brownies-14-2-scaled.jpg",
      "description": "A fudgy and rich chocolate brownie.",
      "popularity": 78,
      "parent_category": "Desserts",
      "sub_category": "Pastries"
    },
    {
      "name": "Blueberry Muffin",
      "price": 2.99,
      "rating": 4.5,
      "image_url": "https://www.olgainthekitchen.com/wp-content/uploads/2020/03/Sour-Cream-Blueberry-Muffins-Recipe-4.jpg",
      "description": "A soft muffin with fresh blueberries.",
      "popularity": 70,
      "parent_category": "Snacks",
      "sub_category": "Pastries"
    },
    {
      "name": "Croissant",
      "price": 3.50,
      "rating": 4.6,
      "image_url": "https://i0.wp.com/www.pardonyourfrench.com/wp-content/uploads/2023/04/French-Almond-Croissants-Bakery-Style-8.jpg?fit=1202%2C1800&ssl=1",
      "description": "A flaky and buttery croissant.",
      "popularity": 80,
      "parent_category": "Snacks",
      "sub_category": "Pastries"
    },
    {
      "name": "Bagel",
      "price": 2.50,
      "rating": 4.3,
      "image_url": "https://www.wholesomeyum.com/wp-content/uploads/2017/04/wholesomeyum-Low-Carb-Keto-Bagels-22.jpg",
      "description": "A toasted bagel with cream cheese or butter.",
      "popularity": 65,
      "parent_category": "Snacks",
      "sub_category": "Pastries"
    },
    {
      "name": "Fruit Salad",
      "price": 4.20,
      "rating": 4.4,
      "image_url": "https://plantyou.com/wp-content/uploads/2024/06/DSC05685-scaled.jpg",
      "description": "A fresh and healthy mix of seasonal fruits.",
      "popularity": 72,
      "parent_category": "Snacks",
      "sub_category": "Healthy Snacks"
    },
    {
      "name": "Granola Bar",
      "price": 1.99,
      "rating": 4.0,
      "image_url": "https://www.jocooks.com/wp-content/uploads/2023/08/granola-bars-1-25.jpg",
      "description": "A crunchy and healthy granola bar with nuts and honey.",
      "popularity": 55,
      "parent_category": "Snacks",
      "sub_category": "Healthy Snacks"
    },
    {
      "name": "Smoothie Bowl",
      "price": 6.50,
      "rating": 4.6,
      "image_url": "https://www.joyousapron.com/wp-content/uploads/2020/05/acai-smoothie-bowl-sq-1.jpg",
      "description": "A blend of fruits, topped with granola and seeds.",
      "popularity": 80,
      "parent_category": "Snacks",
      "sub_category": "Healthy Snacks"
    },
    {
      "name": "Vegan Brownie",
      "price": 4.20,
      "rating": 4.7,
      "image_url": "https://simple-veganista.com/wp-content/uploads/2019/04/vegan-brownies-recipe-.jpg",
      "description": "A rich and moist vegan-friendly brownie.",
      "popularity": 68,
      "parent_category": "Desserts",
      "sub_category": "Vegan"
    },
    {
      "name": "Quiche",
      "price": 5.00,
      "rating": 4.2,
      "image_url": "https://entertainingwithbeth.com/wp-content/uploads/2016/03/SpinachQuicheRecipe_Featured-1.jpg",
      "description": "A savory quiche with eggs, cheese, and vegetables.",
      "popularity": 58,
      "parent_category": "Snacks",
      "sub_category": "Savory"
    },
    {
      "name": "Chicken Wrap",
      "price": 6.99,
      "rating": 4.4,
      "image_url": "https://www.howsweeteats.com/wp-content/uploads/2022/01/buffalo-chicken-wraps-12.jpg",
      "description": "Grilled chicken with vegetables in a wrap.",
      "popularity": 65,
      "parent_category": "Meals",
      "sub_category": "Wraps"
    },
    {
      "name": "Turkey Sandwich",
      "price": 5.99,
      "rating": 4.5,
      "image_url": "https://cashmereandcocktails.com/wp-content/uploads/2021/11/Tuscan-Turkey-Sandwich-Cover-image.jpg",
      "description": "A sandwich with turkey, lettuce, and tomato.",
      "popularity": 70,
      "parent_category": "Meals",
      "sub_category": "Sandwiches"
    },
    {
      "name": "Vegan Salad",
      "price": 7.50,
      "rating": 4.6,
      "image_url": "https://lovelyjubley.com/wp-content/uploads/2022/01/LJ220127_Blog_AsianSlawSalad_3-1-683x1024.jpg",
      "description": "A fresh and light salad with greens, veggies, and vinaigrette.",
      "popularity": 75,
      "parent_category": "Meals",
      "sub_category": "Vegan"
    }
  ]
  export default Data
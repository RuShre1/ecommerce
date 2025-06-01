//Icons or Assets
import logo from './logo.png'; //1
import profile from './profile.png'; //2
import menu from './menu.png'; //3
import cross from './cross.png'; //4
import cart from './cart.png'; //5
import search from './search.png'; //6
import hero from './hero.png'; //7
import dropdown from './dropdown.png'; //8
import exchange from './exchange.png'; //9
import quality from './quality.png'; //10
import support from './support.png'; //11
import star from './star.png'; //12
import star_dull from './star_dull.png'; //13
import trash from './trash.png';//14
import stripe_logo from './stripe.png';//15
import razorpay_logo from './razorpay_logo.png';//16
import about from './about.png';//17
import contact from './contact.png'; //18

//Tube
import black_tube1 from './black_tube1.png'; //19
import pink_tube2 from './pink_tube2.png'; //20
import orange_tube4 from './orange_tube4.png'; //21
import purple_tube5 from './purple_tube5.png'; //22

//Card
import blue_card1 from './blue_card1.png'; //23
import gray_card2 from './gray_card2.png'; //24
import beige_card3 from './beige_card3.png'; //25

//Fauxleath
import brown_fauxleath1 from './brown_fauxleath1.png'; //26
import black_fauxleath3 from './black_fauxleath3.png'; //27
import black_fauxleath4 from './black_fauxleath4.png'; //28
import grn_fauxleath5 from './grn_fauxleath5.png'; //29

//Jean
import black_jeans1 from './black_jeans1.png'; //30
import black_jeans2 from './black_jeans2.png'; //31
import black_jeans3 from './black_jeans3.png'; //32
import black_jeans4 from './black_jeans4.png'; //33
import black_jeans5 from './black_jeans5.png'; //34
import denim_jeans6 from './denim_jeans6.png'; //35
import denim_jeans7 from './denim_jeans7.png'; //36

//Long
import blue_longs1 from './blue_longs1.png'; //37
import black_longs5 from './black_longs5.png'; //38
import blue_longs7 from './blue_longs7.png'; //39

//Shirt
import blue_shirt3 from './blue_shirt3.png'; //40
import blue_shirt4 from './blue_shirt4.png'; //41
import beige_shirt5 from './beige_shirt5.png'; //42
import beige_shirt6 from './beige_shirt6.png'; //43
import black_shirt7 from './black_shirt7.png'; //44


//Dress
import black_dress4 from './black_dress4.png'; //45
import pink_dress5 from './pink_dress5.png'; //46
import pink_dress6 from './pink_dress6.png'; //47
import pink_dress7 from './pink_dress7.png'; //48
import black_dress8 from './black_dress8.png'; //49
import black_dress9 from './black_dress9.png'; //50
import red_dress10 from './red_dress10.png'; //51
import red_dress11 from './red_dress11.png'; //52
import red_dress12 from './red_dress12.png'; //53


//Shorts
import denim_shorts1 from './denim_shorts1.png'; //54
import black_shorts2 from './black_shorts2.png'; //55
import denim_shorts3 from './denim_shorts3.png'; //56
import blue_shorts4 from './blue_shorts4.png'; //57
import denim_shorts5 from './denim_shorts5.png'; //58
import black_shorts6 from './black_shorts6.png'; //59


//Skirts
import white_skirt1 from './white_skirt1.png';//60
import black_skirt2 from './black_skirt2.png'; //61
import denim_skirt3 from './denim_skirt3.png'; //62
import white_skirt4 from './white_skirt4.png'; //63

//export assets
export const assets = {
  logo,
  profile,
  menu,
  cross,
  cart,
  search,
  hero,
  dropdown,
  exchange,
  quality,
  support,
  star,
  star_dull,
  trash,
  stripe_logo,
  razorpay_logo,
  about,
  contact
};

//products arrays (48 in total)
export const products = [
  //tube
  {
    id: 1,
    name: "Black Tube Top",
    description: "Comfortable and stylish black tube top.",
    price: 20.99,
    images: [black_tube1],
    category: "Topwear",
    subCategory: "Tube Top",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 2,
    name: "Pink Tube Top",
    description: "Comfortable and stylish pink tube top.",
    price: 20.99,
    images: [pink_tube2],
    category: "Topwear",
    subCategory: "Tube Top",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 3,
    name: "Orange Tube Top",
    description: "Comfortable and stylish orange tube top.",
    price: 20.99,
    images: [orange_tube4],
    category: "Topwear",
    subCategory: "Tube Top",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 4,
    name: "Purple Tube Top",
    description: "Comfortable and stylish purple tube top.",
    price: 10.99,
    images: [purple_tube5],
    category: "Topwear",
    subCategory: "Tube Top",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
 
  //card
  {
    id: 7,
    name: "Blue Cardigan",
    description: "Comfortable blue cardigan.",
    price: 45.00,
    images: [blue_card1],
    category: "Topwear",
    subCategory: "Cardigan",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 8,
    name: "Gray Cardigan",
    description: "Comfortable gray cardigan.",
    price: 35.00,
    images: [gray_card2],
    category: "Topwear",
    subCategory: "Cardigan",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 9,
    name: "Beige Cardigan",
    description: "Comfortable beige cardigan.",
    price: 25.00,
    images: [beige_card3],
    category: "Topwear",
    subCategory: "Cardigan",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },

  //fauxleath
  {
    id: 11,
    name: "Brown Fauxleather Jacket",
    description: "Stylish brown fauxleather jacket.",
    price: 55.00,
    images: [brown_fauxleath1],
    category: "Topwear",
    subCategory: "Faux Leather",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
 
  {
    id: 13,
    name: "Black Fauxleather Jacket",
    description: "Stylish black fauxleather jacket.",
    price: 55.00,
    images: [black_fauxleath3],
    category: "Topwear",
    subCategory: "Faux Leather",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 14,
    name: "Black Fauxleather Jacket",
    description: "Stylish black fauxleather jacket.",
    price: 75.00,
    images: [black_fauxleath4],
    category: "Topwear",
    subCategory: "Faux Leather",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 15,
    name: "Green Fauxleather Jacket",
    description: "Stylish green fauxleather jacket.",
    price: 55.00,
    images: [grn_fauxleath5],
    category: "Topwear",
    subCategory: "Faux Leather",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  //Jean
  {
    id: 16,
    name: " Long Black Jeans ",
    description: "Stylish black jeans.",
    price: 60.00,
    images: [black_jeans1],
    category: "Bottomwear",
    subCategory: "Jeans",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 17,
    name: " Wide Black Jeans ",
    description: "Stylish black jeans.",
    price: 65.00,
    images: [black_jeans2],
    category: "Bottomwear",
    subCategory: "Jeans",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 18,
    name: " Long Black Jeans ",
    description: "Stylish black jeans.",
    price: 55.00,
    images: [black_jeans3],
    category: "Bottomwear",
    subCategory: "Jeans",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 19,
    name: "Black Jeans ",
    description: "Stylish black jeans.",
    price: 45.00,
    images: [black_jeans4],
    category: "Bottomwear",
    subCategory: "Jeans",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 20,
    name: "Black Jeans ",
    description: "Stylish black jeans.",
    price: 63.00,
    images: [black_jeans5],
    category: "Bottomwear",
    subCategory: "Jeans",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 21,
    name: "Denim Jeans ",
    description: "Stylish and comfortable blue jeans.",
    price: 75.00,
    images: [denim_jeans6],
    category: "Bottomwear",
    subCategory: "Jeans",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 22,
    name: "Denim Jeans ",
    description: "Stylish and comfortable blue jeans.",
    price: 35.00,
    images: [denim_jeans7],
    category: "Bottomwear",
    subCategory: "Jeans",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  //long
  {
    id: 23,
    name: "Blue Long Sleeve Shirt",
    description: "Stylish blue long sleeve shirt.",
    price: 50.00,
    images: [blue_longs1],
    category: "Topwear",
    subCategory: "Long Sleeve",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },

  {
    id: 27,
    name: "Black Long Sleeve Shirt",
    description: "Stylish black llong sleeve shirt.",
    price: 50.00,
    images: [black_longs5],
    category: "Topwear",
    subCategory: "Long Sleeve",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },

  {
    id: 29,
    name: "Blue Long Sleeve Shirt",
    description: "Stylish blue long sleeve shirt.",
    price: 50.00,
    images: [blue_longs7],
    category: "Topwear",
    subCategory: "Long Sleeve",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  //shirt

 
  {
    id: 32,
    name: "Blue Shirt",
    description: "Stylish blue shirt.",
    price: 30.00,
    images: [blue_shirt3],
    category: "Topwear",
    subCategory: "Shirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 33,
    name: "Blue Shirt",
    description: "Stylish blue shirt.",
    price: 30.00,
    images: [blue_shirt4],
    category: "Topwear",
    subCategory: "Shirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 34,
    name: "Beige Shirt",
    description: "Stylish beige shirt.",
    price: 20.00,
    images: [beige_shirt5],
    category: "Topwear",
    subCategory: "Shirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 35,
    name: "Beige Shirt",
    description: "Stylish beige shirt.",
    price: 10.00,
    images: [beige_shirt6],
    category: "Topwear",
    subCategory: "Shirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 36,
    name: "Black Shirt",
    description: "Stylish black shirt.",
    price: 30.00,
    images: [black_shirt7],
    category: "Topwear",
    subCategory: "Shirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },

  //Dress
  
  {
    id: 43,
    name: "Black Dress",
    description: "Stylish black dress.",
    price: 60.00,
    images: [black_dress4],
    category: "Topwear",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 44,
    name: "Pink Dress",
    description: "Stylish pink dress.",
    price: 40.00,
    images: [pink_dress5],
    category: "Topwear",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 45,
    name: "Pink Dress",
    description: "Stylish pink dress.",
    price: 30.00,
    images: [pink_dress6],
    category: "Topwear",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 46,
    name: "Pink Dress",
    description: "Stylish pink dress.",
    price: 20.00,
    images: [pink_dress7],
    category: "Topwear",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 47,
    name: "Black Dress",
    description: "Stylish black dress.",
    price: 50.00,
    images: [black_dress8],
    category: "Topwear",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 48,
    name: "Black Dress",
    description: "Stylish black dress.",
    price: 55.99,
    images: [black_dress9],
    category: "Topwear",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 49,
    name: "Red Dress",
    description: "Stylish red dress.",
    price: 50.00,
    images: [red_dress10],
    category: "Topwear",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 50,
    name: "Red Dress",
    description: "Stylish red dress.",
    price: 50.00,
    images: [red_dress11],
    category: "Topwear",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 51,
    name: "Red Dress",
    description: "Stylish red dress.",
    price: 50.00,
    images: [red_dress12],
    category: "Topwear",
    subCategory: "Dresses",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },

  //skirts
  {
    id: 52,
    name: "White Skirt",
    description: "Stylish white skirt",
    price: 20.00,
    images: [white_skirt1],
    category: "Bottomwear",
    subCategory: "Skirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 53,
    name: "Black Skirt",
    description: "Stylish black skirt",
    price: 21.00,
    images: [black_skirt2],
    category: "Bottomwear",
    subCategory: "Skirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 54,
    name: "Denim Skirt",
    description: "Stylish Denim skirt",
    price: 30.00,
    images: [denim_skirt3],
    category: "Bottomwear",
    subCategory: "Skirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 55,
    name: "White Skirt",
    description: "Stylish white skirt",
    price: 21.00,
    images: [white_skirt4],
    category: "Bottomwear",
    subCategory: "Skirts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },

  //shorts
  {
    id: 56,
    name: "Denim Shorts",
    description: "Stylish denim short",
    price: 30.00,
    images: [denim_shorts1],
    category: "Bottomwear",
    subCategory: "Shorts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 57,
    name: "Black Shorts",
    description: "Stylish black short",
    price: 25.00,
    images: [black_shorts2],
    category: "Bottomwear",
    subCategory: "Shorts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 58,
    name: "Denim Shorts",
    description: "Stylish denim short",
    price: 30.00,
    images: [denim_shorts3],
    category: "Bottomwear",
    subCategory: "Shorts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: true,
  },
  {
    id: 59,
    name: "Blue Shorts",
    description: "Stylish blue short",
    price: 20.00,
    images: [blue_shorts4],
    category: "Bottomwear",
    subCategory: "Shorts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  },
  {
    id: 60,
    name: "Denim Shorts",
    description: "Stylish denim short",
    price: 20.00,
    images: [denim_shorts5],
    category: "Bottomwear",
    subCategory: "Shorts",
    sizes: ["S", "M", "L"],
    date: Date.now(),
    bestseller: false,
  }
];
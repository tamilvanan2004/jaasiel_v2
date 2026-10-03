// Hosted images from Pexels (free to use). Resized via query params.
const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;

const jaasielFoods = [
  {
    slug: 'jjs-swiggy',
    navLabel: 'Swiggy',
    breadcrumb: 'Jaasiel Foods',
    title: 'Jaasiel Foods - Swiggy',
    tagline: 'Freshly prepared South Indian meals, delivered to your doorstep through Swiggy.',
    heroImage: px(4393240), // South Indian breakfast on banana leaf with chai
    heroHeading: 'Order Jaasiel Foods on Swiggy',
    body: [
      'Jaasiel Foods is available on Swiggy, making it easy to enjoy home-style South Indian breakfast, lunch, and dinner without leaving your home or workplace. Browse the menu, choose your meal, and track your order in real time.',
      'Every order is freshly prepared and packed following FSSAI-compliant hygiene and food-safety practices, so it reaches you in good condition and ready to enjoy.',
    ],
    highlights: [
      'Breakfast, Lunch & Dinner',
      'Easy In-App Ordering',
      'Live Order Tracking',
      'Freshly Prepared',
      'Hygienically Packed',
      'Doorstep Delivery',
    ],
  },
  {
    slug: 'jjs-zomato',
    navLabel: 'Zomato',
    breadcrumb: 'Jaasiel Foods',
    title: 'Jaasiel Foods - Zomato',
    tagline: 'Authentic South Indian flavours, now just a few taps away on Zomato.',
    heroImage: px(12203654), // masala dosa with chutneys on banana leaf
    heroHeading: 'Order Jaasiel Foods on Zomato',
    body: [
      'Jaasiel Foods is also listed on Zomato, giving customers another convenient way to order traditional South Indian meals. From tiffin favourites to complete meals, the menu is designed for everyday dining at home, in the office, or at institutions.',
      'Food is prepared fresh, packed with care, and dispatched promptly so that quality and taste are maintained from our kitchen to your table.',
    ],
    highlights: [
      'Wide Menu Selection',
      'Simple Online Ordering',
      'Secure Digital Payments',
      'Prompt Dispatch',
      'Consistent Quality',
      'Hygienically Packed',
    ],
  },
  {
    slug: 'jjs-online-menu',
    navLabel: 'What You Can Order',
    breadcrumb: 'Jaasiel Foods',
    title: 'Jaasiel Foods - What You Can Order',
    tagline: 'Everyday South Indian favourites, available for individual orders online.',
    heroImage: px(13243817), // South Indian rice meal with curries
    heroHeading: 'Everyday Meals, Made Simple',
    body: [
      'The online menu brings together Jaasiel\u2019s popular South Indian dishes, including idly, dosa, pongal, and poori for breakfast, and traditional meals with sambar, kootu, poriyal, and rasam for lunch and dinner.',
      'Add-ons such as biryani, chicken gravy, and boiled egg can be included alongside your main meal. Individual orders suit professionals, students, and families, while bulk and institutional needs are served through our catering service.',
    ],
    highlights: [
      'Idly, Dosa & Pongal',
      'South Indian Meals',
      'Biryani & Chicken Gravy',
      'Boiled Egg Add-On',
      'Individual & Family Orders',
      'Freshly Prepared',
    ],
  },
];

export default jaasielFoods;
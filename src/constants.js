export const breakfastSections = [
  {
    name: 'Sandwiches',
    show: true,
    items: [
      {
        name: 'B',
        price: 7,
        description: '2 EGGS, CHEDDAR, ARUGULA ON CIABATTA',
      },
      {
        name: 'B + B',
        price: 9,
        description: ' 2 EGGS, CHEDDAR, ARUGULA, BACON ON CIABATTA',
      },
      {
        name: 'PR',
        price: 9,
        description: '2 EGGS, AMERICAN, TAYLOR HAM ON POTATO BUN',
      },
    ],
  },
  {
    name: 'Drinks',
    show: true,
    items: [{ name: 'HOT COFFEE BOX' }, { name: 'COLD BREW BOX' }],
  },
  {
    name: 'Other Stuff',
    show: true,
    items: [
      {
        name: 'PASTRY PLATTER',
        description: 'A DOZEN MIXED CROISSANTS + DANISHES',
      },
    ],
  },
]

export const lunchSections = [
  {
    name: 'Sandwiches',
    show: true,
    items: [
							{
								name: 'HEROES',
								description: "WHEN EVERYONE'S NOSHING.",
								price: { 3: 115, 4: 145, 6: 200 },
							},
							{
								name: 'PLATTER',
								description: 'WHEN EVERYONE WANTS THEIR OWN.',
								price: 195,
							},
    ],
    sandwiches: [
      {
        name: 'Droopy',
								description:
									'ROAST BEEF, ARUGULA, CRISPY ONIONS, HORSERADISH MAYO',
      },
      {
        name: 'Italian Combo',
        description:
          'MORTADELLA, SALAMI, SWISS, MOZZ, PECORINO, ARUGULA, ONION, CSG OLIVE SPREAD, MAYO',
      },
      {
        name: 'Vegetalian Combo',
        description:
          'O BUTTERNUT SQUASH, SWISS, MOZZ, PECORINO, ARUGULA, RED ONION, HOAGIE SPREAD, MAYO (V)',
      },
      {
        name: 'Tunaberry',
        description: 'TUNA SALAD, HORSERADISH MAYO, CRANBERRY SAUCE, ROMAINE',
      },
      {
        name: 'Turkey',
        description:
          'TURKEY BREAST, BREAD + BUTTER PICKLES, ARUGULA, ONION, MAYO, RED WINE VINAIGRETTE',
      },
      {
        name: 'Uncle Chucky',
        description:
          ' ROASTED CAULIFLOWER, AJVAR, PICKLED FENNEL, ONION, ARUGULA, SUMAC VINAIGRETTE (VEGAN)',
      },
      {
        name: 'American Combo',
        description:
          'TURKEY BREAST, HERITAGE HAM, AMERICAN CHEESE, COLESLAW, PICKLES, COME-BACK SAUCE',
      },
      {
        name: 'Ham + Cheese',
        description: 'HERITAGE HAM, CHEDDAR, BIBB LETTUCE, PICKLE DIJONNAISE',
      },
    ],
  },
  {
    name: 'Salads',
    show: true,
    sizes: ['Small', 'Medium', 'Large'],
    items: [
      {
        name: 'POTATO',
        description:
          'RED POTATO, GREEN ONION, CELERY, SOUR PICKLE, CLASSIC DRESSING*',
        price: {
          Small: 35,
          Medium: 55,
          Large: 80,
        },
      },
      {
        name: 'MACARONI',
        description:
          'MINI ELBOW MAC, SHREDDED ONION, CARROT, GREEN ONION, CREAMY DRESSING* ',
        price: {
          Small: 35,
          Medium: 55,
          Large: 80,
        },
      },

      {
        name: 'KALE',
        description:
          ' PICKLED APRICOT, ROASTED BEETS, FETA, PUMPKIN SEEDS, ITALIAN DRESSING',
        price: {
          Small: 35,
          Medium: 55,
          Large: 80,
        },
      },
      {
        name: 'GRAIN',
        description:
          'QUINOA, LENTILS, GREENS, KALE, SWEET POTATO, BLACK BEAN PICO, PICKLED VEGETABLES (V, GF)',
        price: {
          Small: 35,
          Medium: 55,
          Large: 80,
        },
      },
      {
        name: 'BROCCOLI',
        description:
          ' RAW BROCCOLI, BACON, PICKLED CURRANTS, ONION, TOGARASHI, JERSEY DRESSING*',
        price: {
          Small: 35,
          Medium: 55,
          Large: 80,
        },
      },
      {
        name: 'COLESLAW',
        description:
          ' RED & GREEN CABBAGE, CARROT, RED ONION, CSG SLAW DRESSING*',
								price: {
									Small: 35,
									Medium: 55,
									Large: 80,
								},
      },
    ],
  },
  {
    name: 'Drinks',
    show: true,
    items: [
      { name: 'Iced Coffee', description: "it's coffee but cold" },
      { name: "Dr Brown's", description: 'cans' },
      { name: 'Water', description: 'if you care about hydration' },
    ],
  },
  {
    name: 'Other Stuff',
    show: true,
    items: [
      { name: 'Chips', description: "Zapp's" },
      { name: 'Dessert Platter - Big', description: 'More dessert' },
      { name: 'Dessert Platter - Small', description: 'less dessert' },
    ],
  },
]

export const heroOptions = [3, 4, 6]

export const lunchSandwiches = [
  {
    name: 'Droopy',
    description: 'ROAST BEEF, ARUGULA, CRISPY ONIONS, HORSERADISH MAYO',
  },
  {
    name: 'Italian Combo',
    description:
      'MORTADELLA, SALAMI, SWISS, MOZZ, PECORINO, ARUGULA, ONION, CSG OLIVE SPREAD, MAYO',
  },
  {
    name: 'Vegetalian Combo',
    description:
      'O BUTTERNUT SQUASH, SWISS, MOZZ, PECORINO, ARUGULA, RED ONION, HOAGIE SPREAD, MAYO (V)',
  },
  {
    name: 'Tunaberry',
    description: 'TUNA SALAD, HORSERADISH MAYO, CRANBERRY SAUCE, ROMAINE',
  },
  {
    name: 'Turkey',
    description:
      'TURKEY BREAST, BREAD + BUTTER PICKLES, ARUGULA, ONION, MAYO, RED WINE VINAIGRETTE',
  },
  {
    name: 'Uncle Chucky',
    description:
      ' ROASTED CAULIFLOWER, AJVAR, PICKLED FENNEL, ONION, ARUGULA, SUMAC VINAIGRETTE (VEGAN)',
  },
  {
    name: 'American Combo',
    description:
      'TURKEY BREAST, HERITAGE HAM, AMERICAN CHEESE, COLESLAW, PICKLES, COME-BACK SAUCE',
  },
  {
    name: 'Ham + Cheese',
    description: 'HERITAGE HAM, CHEDDAR, BIBB LETTUCE, PICKLE DIJONNAISE',
  },
]

export const menu = {
  breakfastSections,
  lunchSections,
  lunchSandwiches,
  heroOptions,
}

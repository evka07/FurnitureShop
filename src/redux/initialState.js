const initialState = {
  categories: [
    { id: 'bed', name: 'Bed', folder: 'Beds' },
    { id: 'chair', name: 'Chair', folder: 'Chairs' },
    { id: 'sofa', name: 'Sofa', folder: 'Sofas' },
    { id: 'table', name: 'Table', folder: 'Tables' },
    { id: 'dining', name: 'Dining', folder: 'Dinings' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'top seller',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'top seller',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'top seller',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'top seller',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'top seller',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'top seller',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'top seller',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'top seller',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'featured',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'featured',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'featured',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'featured',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'featured',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'featured',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'featured',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'featured',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'sale off',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'sale off',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'sale off',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'sale off',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'sale off',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'sale off',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'sale off',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      tab: 'sale off',
    },
    {
      id: 'Modern Chair 1',
      name: 'Modern Chair 1',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      tab: 'top rated',
    },
    {
      id: 'Modern Chair 2',
      name: 'Modern Chair 2',
      category: 'chair',
      price: 10,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      tab: 'top rated',
    },

    {
      id: 'Old-fashioned chair 3',
      name: 'Old-fashioned chair 3',
      category: 'chair',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      tab: 'top rated',
    },
    {
      id: 'Modern Chair 4',
      name: 'Modern Chair 4',
      category: 'chair',
      price: 10,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      tab: 'top rated',
    },
    {
      id: 'Modern Chair 5',
      name: 'Modern Chair 5',
      category: 'chair',
      price: 15,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      tab: 'top rated',
    },
    {
      id: 'Modern Chair 6',
      name: 'Modern Chair 6',
      category: 'chair',
      price: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      tab: 'top rated',
    },
    {
      id: 'Modern Chair 7',
      name: 'Modern Chair 7',
      category: 'chair',
      price: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      tab: 'top rated',
    },

    {
      id: 'Modern Chair 8',
      name: 'Modern Chair 8',
      category: 'chair',
      price: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      tab: 'top rated',
    },
    {
      id: 'Modern Chair 9',
      name: 'Modern Chair 9',
      category: 'chair',
      price: 5,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      tab: 'top rated',
    },

    {
      id: 'Cosy modern sofa 1',
      name: 'Cosy modern sofa 1',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      tab: 'top rated',
    },
    {
      id: 'Cosy modern sofa 2',
      name: 'Cosy modern sofa 2',
      category: 'sofa',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'Cosy modern sofa 3',
      name: 'Cosy modern sofa 3',
      category: 'sofa',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'Cosy modern sofa 4',
      name: 'Cosy modern sofa 4',
      category: 'sofa',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'Cosy modern sofa 5',
      name: 'Cosy modern sofa 5',
      category: 'sofa',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'Cosy modern sofa 6',
      name: 'Cosy modern sofa 6',
      category: 'sofa',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'cosy modern sofa 7',
      name: 'cosy modern sofa 7',
      category: 'sofa',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'Cosy modern sofa 8',
      name: 'Cosy modern sofa 8',
      category: 'sofa',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'Cosy modern sofa 9',
      name: 'Cosy modern sofa 9',
      category: 'sofa',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'Table 1',
      name: 'Table 1',
      category: 'table',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'Table 3',
      name: 'Table 3',
      category: 'table',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'Table 4',
      name: 'Table 4',
      category: 'table',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },

    {
      id: 'Dining 1',
      name: 'Dining 1',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
    {
      id: 'Dining 2',
      name: 'Dining 2',
      category: 'dining',
      price: 45,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
    },
  ],

  feedback: [
    {
      id: 1,
      name: 'John Smith',
      message:
        'Niezrównana jakość i obsługa! Kupiłem niedawno zestaw mebli do salonu i jestem zachwycony ich jakością. Meble są solidne, stylowe i wygodne. Obsługa klienta była również na najwyższym poziomie. Zdecydowanie polecam ten sklep!',
      clientImg: `images/clientsAvatar/man1.jpg`,
    },
    {
      id: 2,
      name: 'Amanda Doe',
      message:
        'Doskonałe doświadczenie zakupowe! Sklep oferuje szeroki wybór mebli, co ułatwiło mi znalezienie idealnego stołu do jadalni. Proces zakupu był prosty, a dostawa szybka i bezproblemowa. Jestem bardzo zadowolony z mojego zakupu',
      clientImg: `images/clientsAvatar/woman1.jpg`,
    },
    {
      id: 3,
      name: 'Sara Black',
      message:
        'Kupiłem tu kilka mebli do sypialni i są one nie tylko piękne, ale także wyjątkowo trwałe. Na pewno wrócę tu po więcej!',
      clientImg: `images/clientsAvatar/woman2.jpg`,
    },
  ],

  promotional: [
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      finishPromoDate: '12 30 2023',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      finishPromoDate: '1 30 2024',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      finishPromoDate: '2 30 2024',
    },
  ],

  brands: [
    {
      id: 1,
      description: 'brands1',
    },
    {
      id: 2,
      description: 'brands2',
    },
    {
      id: 3,
      description: 'brands3',
    },
    {
      id: 4,
      description: 'brands4',
    },
    {
      id: 5,
      description: 'brands5',
    },
    {
      id: 6,
      description: 'brands6',
    },
    {
      id: 7,
      description: 'brands7',
    },
    {
      id: 8,
      description: 'brands8',
    },
    {
      id: 9,
      description: 'brands9',
    },
  ],

  promotions: [
    {
      id: 'aenean-ru-bristique-13',
      title: 'GUEST ROOM',
      subtitle: 'SOFA',
      description: '-20%',
      imgSrc:
        'https://images.pexels.com/photos/6588592/pexels-photo-6588592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-1',
      title: 'OFFICE CHAIR',
      subtitle: 'COLLECTION',
      description: '$200.000',
      imgSrc:
        'https://images.pexels.com/photos/12277015/pexels-photo-12277015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'aenean-ru-bristique-6',
      title: 'SPECIAL COLLECTION',
      description: 'SAVE UP 45% OF FURNITURE',
      imgSrc:
        'https://images.pexels.com/photos/5178075/pexels-photo-5178075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ],
  posts: [
    {
      id: 1,
      date: '15 JAN 16',
      comments: '4',
      header: 'Products that fight static',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
    },
    {
      id: 2,
      date: '15 JAN 16',
      comments: '4',
      header: 'Products that fight static',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
    },
    {
      id: 3,
      date: '15 JAN 16',
      comments: '4',
      header: 'Products that fight static',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
    },
  ],
  productsToCompare: [],
  chatBotData: [
    {
      question: 'cena dostawy',
      answer: 'Cena dostawy wynosi 50zł',
    },
    {
      question: 'opcje dostawy',
      answer: 'Korzystamy z kuriera firmy DPD',
    },
    {
      question: 'ile produktów',
      answer: 'Jeden kurier może dostarczyć do 10 produktów.',
    },
    {
      question: 'czas oczekiwania',
      answer: 'Czas oczekiwania na produkty wynosi 20 dni',
    },
    {
      question: 'instrukcje montażu',
      answer: 'Tak, każdy mebel zawiera instrukcję montarzu',
    },
    {
      question: 'gwarancja',
      answer: 'Tak, meble są objęte 2 letnią gwarancją',
    },
    {
      question: 'zwrot',
      answer: 'Meble można zwrocić do 14 dni na koszt sklepu',
    },
    {
      question: 'czas oczekiwania',
      answer: 'Czas oczekiwania na produkty wynosi 20 dni',
    },
    {
      question: 'metody płatności',
      answer: 'Za meble można zapłacić przelewem i przy odbiorze',
    },
  ],
  cart: {
    deliveryFee: 20,
    products: [],
  },
};

export default initialState;
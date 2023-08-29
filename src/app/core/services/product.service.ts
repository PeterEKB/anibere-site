import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 0,
      name: 'Cross back sports bra',
      unit: 'CBSSW01',
      sku: 'CBSSW01-001',
      collection: 'Elevate',
      category: 'Sportswear',
      description: {
        colors: {
          primary: '1',
          secondary: '0',
          tertiary: '0',
          profile: '001',
          list: ['001'],
        },
        quickDescription: [
          'A quick description of the product.',
          'high support',
        ],
        fullDescription:
          'A full description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nibh a odio tincidunt feugiat. Pellentesque vitae nisi at nibh viverra ultricies. Sed in nibh ut urna tincidunt viverra.',
      },
      sizes: [
        {
          size: 'xs',
          quantity: 10,
          available: true,
        },
        {
          size: 'S',
          quantity: 0,
          available: true,
        },
        {
          size: 'M',
          quantity: 10,
          available: true,
        },
        {
          size: 'L',
          quantity: 10,
          available: true,
        },
        {
          size: 'xl',
          quantity: 10,
          available: true,
        },
      ],
      prices: {
        price: 30,
        currency: 'usd',
      },
      images: {
        primary: 0,
        secondary: 1,
        list: [
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-Black-B5A5J-BBBB-1939_ce7a6a45-f4e4-40cf-a0ec-e20aeaf2c669.jpg?v=1690107787',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-Black-B5A5J-BBBB-1947_fee9fa34-1624-446d-a01f-3d767e5080ef.jpg?v=1690107787',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-Black-B5A5J-BBBB-1955_6a6bec27-2731-4e47-95a8-472eb4af0a41.jpg?v=1690107787',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-Black-B5A5J-BBBB-1972_164f57f1-0aee-4083-92ee-6fb5709b0b3e.jpg?v=1690107787',
        ],
      },
      createdAt: '',
    },
    {
      id: 1,
      name: 'Title',
      collection: 'Elevate',
      sku: 'sku',
      category: 'Lifestyle',
      description: {
        quickDescription: ['A quick description of the product.'],
        fullDescription:
          'A full description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nibh a odio tincidunt feugiat. Pellentesque vitae nisi at nibh viverra ultricies. Sed in nibh ut urna tincidunt viverra.',
      },
      prices: {
        price: 55,
        currency: 'usd',
      },
      images: {
        primary: 0,
        secondary: 1,
        list: [
          'https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerCropZipHoodieWhiteB3A9X-WBBM.1252.43_3ce54f9d-f72b-4e07-96b1-0647c02ff428.jpg?v=1679945724',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerCropZipHoodieWhiteB3A9X-WBBM.1259.50_8f7635c8-8aa2-47a6-a95c-55d48ff7304b.jpg?v=1679945724',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerCropZipHoodieWhiteB3A9X-WBBM.1254.45_b1d8771b-d336-4771-84c5-23d79d449427.jpg?v=1679945724',
        ],
      },
      createdAt: '',
    },
    {
      id: 2,
      name: 'Title',
      collection: 'Elevate',
      sku: 'sku',
      category: 'Activewear',
      description: {
        quickDescription: ['A quick description of the product.'],
        fullDescription:
          'A full description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nibh a odio tincidunt feugiat. Pellentesque vitae nisi at nibh viverra ultricies. Sed in nibh ut urna tincidunt viverra.',
      },
      prices: {
        price: 45,
        discount: 30,
        currency: 'usd',
      },
      images: {
        primary: 0,
        secondary: 1,
        list: [
          'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSportsBraRepLA0024BlackB2A7JBBHVA-Edit_CM_6fbdd9d5-351e-4cdf-af7a-7b9573043b3a.jpg?v=1650999022',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSportsBraRepLA0024BlackB2A7JBBHVB-Edit_CM_8b22ea00-8180-4e9f-b5e9-9c8aa9e330c7.jpg?v=1650999022',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSportsBraRepLA0024BlackB2A7JBBHVD1-Edit_CM_d040bd97-2c26-479b-aef7-e6dc18b06c3e.jpg?v=1650999022',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSportsBraRepLA0024BlackB2A7JBBHVD3-Edit_CM_38e28a57-e6cd-4df8-9402-1db4a2462b2d.jpg?v=1650999022',
        ],
      },
      createdAt: '',
    },
    {
      id: 3,
      name: 'Title',
      collection: 'Elevate',
      sku: 'sku',
      category: 'Activewear',
      description: {
        quickDescription: ['A quick description of the product.'],
        fullDescription:
          'A full description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nibh a odio tincidunt feugiat. Pellentesque vitae nisi at nibh viverra ultricies. Sed in nibh ut urna tincidunt viverra.',
      },
      prices: {
        price: 45,
        currency: 'usd',
      },
      images: {
        primary: 0,
        secondary: 1,
        list: [
          'https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerSportsBraIcebergBlueB2A7J-UBZM.1216.7_99f23b7f-48e6-4616-812a-74f617ac6e3f.jpg?v=1679945751',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerSportsBraIcebergBlueB2A7J-UBZM.1218.9_70f2b54c-b354-4957-bcdf-4cafc4c897d8.jpg?v=1679945751',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerCropZipHoodieWhiteB3A9X-WBBM.1254.45_b1d8771b-d336-4771-84c5-23d79d449427.jpg?v=1679945724',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerSportsBraIcebergBlueB2A7J-UBZM.1222.13_b5b844fd-9ff9-4fa7-8876-932c40fba221.jpg?v=1679945751',
        ],
      },
      createdAt: '',
    },
    {
      id: 4,
      name: 'Title',
      collection: 'Elevate',
      unit: 'CBSSW01',
      sku: 'CBSSW01-006A',
      category: 'Sportswear',
      description: {
        colors: {
          primary: '6A',
          secondary: '0',
          tertiary: '0',
          profile: '006A',
          list: ['006A'],
        },
        quickDescription: [
          'A quick description of the product.',
          'high support',
        ],
        fullDescription:
          'A full description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nibh a odio tincidunt feugiat. Pellentesque vitae nisi at nibh viverra ultricies. Sed in nibh ut urna tincidunt viverra.',
      },
      prices: {
        price: 45,
        currency: 'usd',
      },
      images: {
        primary: 0,
        secondary: 1,
        list: [
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-CoreOlive-B5A5J-EBF1-0783_f2217dd3-c730-46dc-960e-f9d522c3d80d.jpg?v=1690107787',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-CoreOlive-B5A5J-EBF1-0792_75be2334-14df-4a93-be59-043f6c722fee.jpg?v=1690107787',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-CoreOlive-B5A5J-EBF1-0797_6a56dc23-ce9f-47cb-a390-1a986a490f51.jpg?v=1690107787',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-CoreOlive-B5A5J-EBF1-0825_7b055194-53cf-419f-bb31-279d7c79f4d2.jpg?v=1690107787',
        ],
      },
      createdAt: '',
    },
    {
      id: 5,
      name: 'Title',
      collection: 'Elevate',
      sku: 'sku',
      category: 'Activewear',
      description: {
        quickDescription: ['A quick description of the product.'],
        fullDescription:
          'A full description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nibh a odio tincidunt feugiat. Pellentesque vitae nisi at nibh viverra ultricies. Sed in nibh ut urna tincidunt viverra.',
      },
      prices: {
        price: 45,
        discount: 30,
        currency: 'usd',
      },
      images: {
        primary: 0,
        secondary: 1,
        list: [
          'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSportsBraRep-L-A0024BrightTurquoise-B2A7J-UBHY.A_ZH-2_ZH_e189b436-7de8-412e-97d7-d67cf60dd41f.jpg?v=1650999023',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSportsBraRep-L-A0024BrightTurquoise-B2A7J-UBHY.B_ZH_ZH_c1ee701f-dbb5-447d-93ae-c10a27865d87.jpg?v=1650999023',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSportsBraRep-L-A0024BrightTurquoise-B2A7J-UBHY.D2_ZH_ZH_73de8f44-dbc9-4972-9d8c-faecc8238f69.jpg?v=1650999023',
          'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerSportsBraRep-L-A0024BrightTurquoise-B2A7J-UBHY.D1_ZH_ZH_c3286731-9dbb-4e15-ab8f-099056743eed.jpg?v=1650999023',
        ],
      },
      createdAt: '',
    },
    {
      id: 6,
      name: 'Cross back sports bra',
      collection: 'Elevate',
      unit: 'CBSSW01',
      sku: 'CBSSW01-002',
      category: 'Sportswear',
      description: {
        colors: {
          primary: '2',
          secondary: '0',
          tertiary: '0',
          profile: '002',
          list: ['002'],
        },
        quickDescription: [
          'A quick description of the product.',
          'high support',
        ],
        fullDescription:
          'A full description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nibh a odio tincidunt feugiat. Pellentesque vitae nisi at nibh viverra ultricies. Sed in nibh ut urna tincidunt viverra.',
      },
      prices: {
        price: 30,
        currency: 'usd',
      },
      images: {
        primary: 0,
        secondary: 1,
        list: [
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-White-B5A5J-WBBM-1800_b767c774-ebb0-4696-9bd5-78715f25c6d9.jpg?v=1690107786',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-White-B5A5J-WBBM-1813_5d7473ff-00a7-41f3-b43c-a663be279abe.jpg?v=1690107786',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-White-B5A5J-WBBM-1817_e787c03a-be00-4525-b4ea-bc6473733130.jpg?v=1690107786',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/CROSSBACKSPORTSBRA-White-B5A5J-WBBM-1835_be06ad3b-64e0-4896-b50e-d0677ce38a44.jpg?v=1690107786',
        ],
      },
      createdAt: '',
    },
    {
      id: 7,
      name: 'Elevate Top',
      collection: 'Elevate',
      sku: 'ELEAW01-001',
      category: 'Activewear',
      description: {
        quickDescription: ['A quick description of the product.'],
        fullDescription:
          'A full description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nibh a odio tincidunt feugiat. Pellentesque vitae nisi at nibh viverra ultricies. Sed in nibh ut urna tincidunt viverra.',
      },
      prices: {
        price: 45,
        currency: 'usd',
      },
      images: {
        primary: 0,
        secondary: 1,
        list: [
          'https://cdn.shopify.com/s/files/1/0156/6146/files/ElevateSsTopBlackB4A8A-BBBB109_73778b99-c555-459f-99e8-2b4f0ccdd5c4.jpg?v=1692959270',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/ElevateSsTopBlackB4A8A-BBBB111_d0fb62d8-049c-45b1-b5df-5cd0b449e8d2.jpg?v=1692959270',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/ElevateSsTopBlackB4A8A-BBBB110_0659b150-5839-40db-a8a6-ff83cb9a42aa.jpg?v=1692959270',
          'https://cdn.shopify.com/s/files/1/0156/6146/files/ElevateSsTopBlackB4A8A-BBBB114_96923305-db50-4dd6-adbf-47d3e9cb93f3.jpg?v=1692959271'
        ],
      },
      createdAt: '',
    },
  ];

  constructor() {}

  findProductById(id: number): Product {
    return this.products.find((product) => product.id === id)!;
  }
  findProductBySku(sku: string): Product {
    return this.products.find((product) => product.sku === sku)!;
  }

  getProducts(): Product[] {
    return this.products;
  }
  getProductsByCollection(collection: string): Product[] {
    return this.products.filter((product) => product.collection === collection);
  }
  getProductsByCategory(category: string): Product[] {
    return this.products.filter((product) => product.category === category);
  }
  getProductsByUnit(unit: string): Product[] {
    return this.products.filter((product) => product.unit === unit);
  }
}

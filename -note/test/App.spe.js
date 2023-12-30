import { test, describe, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import Products from '@/views/backend/Products.vue';

import App from '@/App.vue';
import axios from 'axios';

describe('App.vue', () => {
  const getProducts = vi.spyOn(axios, 'get');
  getProducts.mockReturnValue({ data: [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
          "rate": 3.9,
          "count": 120
      }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
  
    },
    {
  
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
  ]});

  const wrapper = mount(App, {
    global: {
      components: {
        Products
      }
    }
  });

  test('標題是否為 IsRayNotArray 正確', () => {
    const text = wrapper.find('h1.text-base').text();
    expect(text).toBe('IsRayNotArray');
  });

  test('products 方法有被呼叫一次', () => {
    expect(getProducts).toHaveBeenCalledTimes(1);
  });

  test('products 目前已經有資料，而且資料長度為 3', () => {
    expect(wrapper.vm.products.length).toBe(3);
  });

  test('products 裡面的資料是否正確', () => {
    expect(wrapper.vm.products[0].title).toBe("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
  })

  test('Products 元件是否存在於畫面上', () => {
    expect(wrapper.findComponent(Products).exists()).toBe(true);
  });
});
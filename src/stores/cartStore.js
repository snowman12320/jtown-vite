import { defineStore } from 'pinia';
import axios from 'axios';

//! 改成default才能在其他store引入，不然引入時都要用解構取出(但不是問題)
export default defineStore('cartStore', {
  state: () => ({
    isLoading: false,
    statusBtn_car: {
      loadingItem: ''
    },
    qty: 1,
    carts: [],
    sumTotal: 0,
    sumFinalQty: 0,
    toast: {
      id: null,
      res: '',
      info: ''
    }
  }),
  actions: {
    async getCart() {
      this.isLoading = true;
      const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`;
      try {
        const response = await axios.get(api);
        this.carts = response.data.data.carts;
        //! 需先歸零，必需在這計算
        this.sumTotal = 0;
        this.sumFinalQty = 0;
        if (this.carts && this.carts.length > 0) {
          this.carts.forEach((item) => {
            this.sumTotal += item.total;
            this.sumFinalQty += item.qty;
          });
        }
      } catch (error) {
        this.toast = {
          res: 'warning',
          info: `Error fetching the cart: ${error}`
        };
      } finally {
        this.isLoading = false;
      }
    },
    updateCart(item) {
      this.statusBtn_car.loadingItem = item.id;
      const url = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart/${
        item.id
      }`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      };
      axios.put(url, { data: cart }).then(() => {
        this.statusBtn_car.loadingItem = '';
        this.getCart();
      });
    }
  }
});

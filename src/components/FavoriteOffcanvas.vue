<script>
import offcanvasMixin from "@/mixins/offcanvasMixin";
import DelModal from "@/components/DelModal.vue";

import favoriteStore from "@/stores/favoriteStore.js";
import productStore from "@/stores/productStore";
import { mapActions, mapState } from "pinia";

export default {
  mixins: [offcanvasMixin],
  components: {
    DelModal,
  },
  data() {
    return {
      offcanvas: {},
      tempFavorite: "",
    };
  },
  created() {
    this.getFavorite();
  },
  watch: {
    toast: {
      handler() {
        this.$toast(this.toast.res, this.toast.info);
      },
      deep: true,
    },
  },
  computed: {
    ...mapState(favoriteStore, ["filteredProducts", "favoriteIds", "isLoading", "toast"]),
  },
  methods: {
    ...mapActions(favoriteStore, ["getFavorite", "getFavoriteId", "delFavorite_store"]),
    ...mapActions(productStore, ["getProduct_item"]),
    async handleGetProductAndHideModal(id) {
      await this.getProduct_item(id);
      this.hideOffcanvas();
    },
    delFavorite(id) {
      this.delFavorite_store(id);
      const delCp = this.$refs.delModal;
      delCp.hideModal();
    },
    delFavorites() {
      if (JSON.parse(localStorage.getItem("favorite")).length > 0) {
        this.$swal
          .fire({
            title: "Do you want to delete the all Favorite?",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "O.K",
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.isLoading = true;
              localStorage.setItem("favorite", JSON.stringify([]));
              this.getFavorite();
              setTimeout(() => {
                this.$swal.fire("Done delete all!", "", "success");
                this.isLoading = false;
              }, 1000);
            }
          });
      } else {
        this.$swal.fire("Favorites was empty.", "", "warning");
      }
    },
    openDelModel(item) {
      this.tempFavorite = { ...item };
      const delCp = this.$refs.delModal;
      delCp.showModal();
    },
  },
};
</script>

<template>
  <div>
    <div
      ref="offcanvas"
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <LoadingMask :active="isLoading" />
      <div class="offcanvas-header d-flex justify-content-between align-items-center">
        <h5 id="offcanvasRightLabel" class="fs-3 text-center pt-3">
          <i class="fa fa-check-circle text-nbaRed" aria-hidden="true" /> MY COLLECT

          <a
            @click.prevent="delFavorites"
            class="btn btn-outline-danger fs-5 px-2 ms-1"
            href="#"
            role="button"
          >
            <i class="fa-sharp fa-solid fa-heart-circle-xmark" />ALL</a
          >
        </h5>
        <button
          type="button"
          class="btn-close text-reset fs-5"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div class="offcanvas-body">
        <div
          class="d-flex p-2 border border-2 border-light rounded-3 product_item my-2 gap-2"
          v-for="item in filteredProducts"
          :key="item.id"
        >
          <div style="width: 100px !important; height: 70px !important">
            <img
              class="of-cover op-top w-100 h-100"
              :src="item.imageUrl"
              :alt="item.title"
            />
          </div>
          <div class="w-100 p-1" @click="handleGetProductAndHideModal(item.id)">
            <h2 class="fs-6 text-center ellipsis">{{ item.title }}</h2>
            <p class="text-center pt-2 fs-5 mb-0">
              <small
                class="text-secondary text-decoration-line-through fw-lighter"
                style="font-size: 12px"
                >$ {{ $filters.currency(item.origin_price) }}</small
              >
              $ {{ $filters.currency(item.price) }}
              <span style="font-size: 12px">/{{ item.unit }}</span>
            </p>
          </div>
          <button
            @click="openDelModel(item)"
            type="button"
            class="border-0 bg-transparent"
            style="height: 30px"
          >
            <i class="bi bi-trash" />
          </button>
        </div>

        <p class="d-flex justify-content-end fs-4 mt-3">
          <span>TOTAL( {{ favoriteIds.length }} ) </span>
        </p>
      </div>
    </div>
    <DelModal
      :item="tempFavorite"
      ref="delModal"
      data-ref="delModal"
      @del-item="delFavorite(tempFavorite.id)"
    />
  </div>
</template>

<style scoped>
.no-spin::-webkit-inner-spin-button,
.no-spin::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.product_item {
  cursor: pointer;
}

.product_item:hover {
  background: rgba(172, 121, 255, 0.274);
  transition: all 300ms;
}

.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  /*  有寬度才能多行  */
  width: 100%;
  height: 20px;
}
</style>

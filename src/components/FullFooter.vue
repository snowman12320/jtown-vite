<script>
export default {
  name: ['FullFooter'],
  data() {
    return {
      isHover: false
    };
  },
  methods: {
    updateHover() {
      this.isHover = !this.isHover;
    }
  }
};
</script>

<template>
  <div>
    <footer class="footer bg-dark text-center text-white py-2 pt-4">
      <div class="d-md-flex justify-content-around px-md-5">
        <p>Copyright © {{ new Date().getFullYear() }} JerseyTown.All rights reserved.</p>
        <p>( 學術用，非商業用途 / Educational use, non-commercial use )</p>
        <p
          class="d-flex align-items-center justify-content-md-end justify-content-center gap-md-5 gap-3"
        >
          <a
            href="tel:0976103738"
            class="rounded-circle bg-success text-white d-inline-flex align-items-center justify-content-center"
          >
            <i class="bi bi-telephone-fill" style="width: 26px; height: 26px; padding-top: 2px" />
          </a>
          <a
            href="mailto:snowman12320@gmail.com"
            class="text-white d-inline-flex align-items-center justify-content-center"
          >
            <i class="bi bi-envelope-at-fill text-white" style="font-size: 23px" />
          </a>
          <a
            href="https://drive.google.com/file/d/1TGvceo-thlafmKdnMducqczBb6rBRy6j/view"
            class="text-white d-inline-flex align-items-center justify-content-center"
          >
            <i class="bi bi-file-earmark-word-fill text-primary" style="font-size: 23px" />
          </a>
          <a
            href="#"
            class="position-relative d-inline-flex align-items-center justify-content-center"
            style="background-color: transparent"
          >
            <img
              src="@/assets/image/nbaWeb/instagram_icon.png"
              alt="instagram_icon"
              style="width: 30px; height: 30px"
            />
          </a>
          <a
            href="#"
            class="position-relative d-flex align-items-center justify-content-center"
            style="height: 10px"
          >
            <i class="bi bi-youtube pt-1 text-danger" style="font-size: 25px" />
          </a>
          <a
            href="#"
            class="position-relative d-inline-flex align-items-center justify-content-center"
            style="height: 10px"
          >
            <i class="bi bi-line relative z-[1] pt-1 text-success" style="font-size: 25px" />
          </a>
          <a
            href="#"
            class="position-relative d-inline-flex align-items-center justify-content-center"
            style="height: 10px"
          >
            <i class="bi bi-facebook pt-1 text-primary" style="font-size: 25px" />
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import FrontNavbar from "@/components/FrontNavbar.vue";
import FullFooter from "@/components/FullFooter.vue";

import loginStore from "@/stores/loginStore.js";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    FrontNavbar,
    FullFooter,
  },
  data() {
    return {
      user: {
        username: "",
        // username: 'VIP-test@jtown.com.tw',
        password: "",
      },
      rememberMe: false,
    };
  },
  created() {
    this.checkRemember();
  },
  mounted() {
    this.checkLoginStatus();
  },
  computed: {
    ...mapState(loginStore, ["isLoading", "isLogin"]),
  },
  watch: {
    rememberMe() {
      if (this.rememberMe) {
        this.$swal
          .fire({
            title: "Are you sure remember it?",
            text: " Please verify and correct it if necessary!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!",
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.$swal.fire("Remember!", "Your password has been saved.", "success");
              localStorage.setItem("username", this.user.username);
              localStorage.setItem("password", this.user.password);
              localStorage.setItem("rememberMe", true);
            }
          });
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
      }
    },
  },
  methods: {
    ...mapActions(loginStore, ["checkLoginStatus"]),
    signIn() {
      const api = `${import.meta.env.VITE_APP_API}admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `JTownToken=${token}; expires=${new Date(expired)}`;
          this.$router.go(-1);
          localStorage.setItem("username", JSON.stringify(this.user.username));
        } else {
          this.$swal.fire("Incorrect", "please check username or password.", "warning");
        }
      });
    },
    validatePassword(value) {
      if (!value) return false;
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
      return regex.test(value) ? true : "密碼需包含英文大小寫和數字，且超過十位數以上";
    },
    checkRemember() {
      if (localStorage.getItem("rememberMe") === "true") {
        this.rememberMe = true;
        this.user.username = localStorage.getItem("username");
        this.user.password = localStorage.getItem("password");
      } else {
        localStorage.setItem("rememberMe", "false");
      }
    },
    confirmEvent() {
      localStorage.setItem("VIP", JSON.stringify("testToken"));
      localStorage.setItem("username", JSON.stringify(this.user.username));
      this.$router.push("/dashboard/products");
    },
  },
};
</script>

<template>
  <div>
    <LoadingMask :active="isLoading" />
    <FrontNavbar :is-login="isLogin" />
    <div class="login_bg">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Login</h3>
            <div class="d-flex justify-content-end social_icon">
              <span><i class="fab fa-google-plus-square" /></span>
            </div>
          </div>
          <div class="card-body">
            <FormValidate @submit="signIn" v-slot="{ errors }">
              <div class="input-group form-group mb-2 position-relative">
                <div class="input-group-prepend">
                  <i class="fas fa-user" />
                </div>
                <FieldValidate
                  id="email"
                  type="text"
                  name="email"
                  class="form-control rounded-3"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  :class="{
                    'is-invalid': errors['email'],
                    'is-valid': !errors['email'] && Boolean(user.username),
                  }"
                  autofocus
                  v-model="user.username"
                />
                <ErrorMessage name="email" class="invalid-feedback ms-5" />
              </div>

              <div class="input-group form-group mt-4">
                <div class="input-group-prepend">
                  <i class="fas fa-key" />
                </div>
                <FieldValidate
                  type="password"
                  name="密碼"
                  id="password"
                  class="form-control rounded-3"
                  placeholder="password"
                  required
                  v-model="user.password"
                  maxlength="20"
                  :rules="validatePassword"
                  :class="{
                    'is-invalid': errors['密碼'],
                    'is-valid': !errors['密碼'] && Boolean(user.password),
                  }"
                />
                <ErrorMessage name="密碼" class="invalid-feedback ms-5" />
              </div>
              
              <div class="mt-2 d-flex gap-1 align-items-center justify-content-end me-2">
                <input id="remember" type="checkbox" v-model="rememberMe" />
                <label for="remember" class="text-white">Remember Me</label>
              </div>
              <div class="form-group text-center mt-5">
                <input type="submit" value="Login" class="btn float-right login_btn" />
              </div>
            </FormValidate>
          </div>
          <div class="card-footer d-flex justify-content-center align-items-center">
            <div class="d-flex justify-content-center align-items-center links">
              Don't have an account?
              <el-button style="">Sign Up</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FullFooter />
  </div>
</template>

<style scoped>
.login_bg {
  background-size: cover;
  background-position: 50% 80%;
  background-repeat: no-repeat;
  background-image: url("@/assets/image/nbaWeb/jusdevoyage-hJOHlZjW9FQ-unsplash.jpg");
  min-height: 110vh;
  max-width: 100vw;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden !important;
}

.card {
  height: 430px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.4) !important;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #fff;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend i {
  background-color: #fff;
  color: black;
  border: 0 !important;
  padding: 15px;
  border-radius: 50%;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.login_btn {
  color: black;
  background-color: #fff;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}

.links a {
  margin-left: 4px;
}

.el-button {
  background: transparent;
  color: white;
  text-shadow: 0 2px 5px black;
  padding: 10px;
}

.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>

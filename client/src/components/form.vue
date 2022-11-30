<template>
  <Form class="form-group" enctype="multipart/form-data" @submit="submitContact" :validation-schema="contactFormSchema">
    <div class="card mb-4">
      <div class="card-body">
        <div class="form-group row" v-if="register">
          <label for="name" class="col-sm-3 col-form-label mb-0">Tên đầy đủ</label>
          <div class=" col-sm-9">
            <Field name="name" type="text" class="form-control" v-model="contactLocal.name" />
          </div>
          <ErrorMessage name="name" class="d-flex invalid justify-content-center" />
        </div>
        <hr v-if="register" />
        <div class="form-group row">
          <label for="email" class="col-sm-3 col-form-label mb-0">E-mail</label>
          <div class=" col-sm-9">
            <Field name="email" type="email" class="form-control" v-model="contactLocal.email" />
          </div>

          <ErrorMessage name="email" class="d-flex invalid justify-content-center" />
        </div>
        <hr v-if="register" />
        <div class="form-group row" v-if="register">
          <label for="phone" class="col-sm-3 col-form-label mb-0">Điện thoại</label>
          <div class=" col-sm-9">
            <Field name="phone" type="tel" class="form-control" v-model="contactLocal.phone" />
          </div>
          <ErrorMessage name="phone" class="d-flex invalid justify-content-center" />
        </div>
        <hr v-if="register" />
        <div class="form-group row" v-if="register">
          <label for="address" class="col-sm-3 col-form-label mb-0">Địa chỉ</label>
          <div class=" col-sm-9">
            <Field name="address" type="text" class="form-control" v-model="contactLocal.address" />
          </div>

          <ErrorMessage name="address" class="invalid" />
        </div>
        <hr />
        <div class="form-group row">
          <label for="password" class="col-sm-3 col-form-label mb-0">Mật khẩu</label>
          <div class=" col-sm-9">
            <Field name="password" type="password" class="form-control" v-model="contactLocal.password" />
          </div>
          <ErrorMessage name="password" class="d-flex invalid justify-content-center" />
        </div>
        <hr v-if="register" />
        <div class="form-group row" v-if="register">
          <label for="confirm_password " class="col-sm-3 col-form-label mb-0">Nhập lại mật khẩu</label>
          <div class=" col-sm-9">
            <Field name="confirm_password" type="password" class="form-control" />
          </div>
          <ErrorMessage name="confirm_password" class="d-flex invalid justify-content-center" />
        </div>

      </div>
      <router-link class="card-text text-center" to="/register" v-if="login"><span class="text-center">Chưa có tài
          khoản</span></router-link>
          <div class="form-group card-footer text-center">
      <button class="btn btn-primary">{{ submit_title }}</button>
    </div>
    </div>
    
  </Form>

</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:user"],
  props: {
    user: { type: Object, required: true },
    submit_title: String,
    message: String,
    register: { type: Boolean, default: false },
    login: { type: Boolean, default: false }
  },
  data() {
    var contactFormSchema = null;
    if (this.login) {
      contactFormSchema = yup.object().shape({
        email: yup
          .string()
          .email("E-mail không đúng.")
          .max(50, "E-mail tối đa 50 ký tự."),
        password: yup.string()
          .required('Vui lòng nhập mật khẩu'),
      });
    } else {
      contactFormSchema = yup.object().shape({
        name: yup
          .string()
          .min(2, "Tên phải ít nhất 2 ký tự.")
          .max(50, "Tên có nhiều nhất 50 ký tự."),
        email: yup
          .string()
          .email("E-mail không đúng.")
          .max(50, "E-mail tối đa 50 ký tự."),
        phone: yup
          .string()
          .required('Vui lòng nhập số điện thoại')
          .matches(
            /((09|03|07|08|05)+([0-9]{8})\b)/g,
            "Số điện thoại không hợp lệ."
          ),
        address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
        password: yup.string().required('Vui lòng nhập mật khẩu'),
        confirm_password: yup.string()
          .label('confirm password')
          .required('Không thể đăng kí nếu trống').oneOf([yup.ref('password'), null], 'Mật khẩu không trùng khớp!'),
      });
    }
    return {
      contactLocal: this.user,
      contactFormSchema,
    };
  },
  methods: {
    submitContact() {
      this.$emit("submit:user", this.contactLocal);

    },
  },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>

<template>
  <Form enctype="multipart/form-data" @submit="submitContact"
    :validation-schema="contactFormSchema">
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="form-group row">
        <div class="col-lg-12">
          <div class="card mb-4">
            <div class="card-body">
              <div class="form-group row">
                <label for="name" class="col-sm-3 col-form-label mb-0">Tên đầy đủ</label>
                <div class="col-sm-9">
                  <Field name="name" type="text" class="form-control" 
                  v-model="user.name"
                   />
                   <ErrorMessage name="name" class="d-flex invalid justify-content-center" />
                </div>
                
              </div>
              <hr />
              <div class="form-group row">
                <label for="Email" class="col-sm-3 col-form-label mb-0">Email</label>
                <div class=" col-sm-9">
              <Field name="email" type="email" class="form-control" v-model="user.email" />
            </div>

            <ErrorMessage name="email" class="d-flex invalid justify-content-center" />
              </div>
              <hr />
              <div class="form-group row">
                <label for="phone" class="col-sm-3 col-form-label mb-0">Phone</label>
                <div class=" col-sm-9">
              <Field name="phone" type="tel" class="form-control" v-model="user.phone" />
            </div>
            <ErrorMessage name="phone" class="d-flex invalid justify-content-center" />
              </div>
              <hr />
              <div class="form-group row">
                <label for="Địa chỉ" class="col-sm-3 col-form-label mb-0">Địa chỉ</label>
                <div class=" col-sm-9">
              <Field name="address" type="text" class="form-control" v-model="user.address" />
            </div>
            <ErrorMessage name="address" class="invalid" />
              </div>
              <div class="form-group row">
                <div class="form-group d-flex justify-content-end">
                  <button class="btn btn-primary mt-5 mb-0">Sửa đổi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  props:{
    user:{type:Object,required: true }
  },
  emits:['rented'],
  data(){
      const contactFormSchema = yup.object().shape({
        name: yup
          .string()
          .required('tên phải có giá trị')
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
      });
    return {
      contactFormSchema,
    };
  },
  methods:{
    submitContact(){
      const areaId = this.$route.params.areaId;
      const parkId = this.$route.params.parkId;
      this.$store.state.Area.forEach((area) => {
        if (area._id == areaId) {
          let areaLocal = area
          area.park.forEach((park) => {
            if (park._id == parkId) {
              this.$emit('rented',this.user,areaLocal,park);
            }
          });
        }
      });
      
    }
  },
};
</script>

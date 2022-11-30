<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            
            <div class="card-body text-center">
              <img
                src="data:image/png;base64,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"
                alt="avatar"
                class="rounded-circle img-fluid"
                style="width: 150px"
              />
              <h5 class="my-3">{{ this.$store.state.user_rent.name }}</h5>
              <p><span>Khu xe {{Area.name}} </span><span>, tại vị trí {{parkLocal._id}}</span></p>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Tên đầy đủ</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{ this.$store.state.user_rent.name }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{ this.$store.state.user_rent.email }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{ this.$store.state.user_rent.phone }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{ this.$store.state.user_rent.address }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Giờ vào</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {{
                      time.toLocaleDateString() +
                      " vào lúc " +
                      time.toLocaleTimeString()
                    }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Tổng tiền</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    Ngày hiện tại: {{ now.toLocaleDateString() }}
                  </p>
                  <p class="text-muted mb-0">
                    Giờ hiện tại: {{ now.toLocaleTimeString() }}
                  </p>
                  <p class="text-muted mb-0">
                    Tổng số giờ: {{ totalTime.toFixed(2) }} giờ
                  </p>
                  <p class="text-muted mb-0">
                    Tổng số tiền :
                    {{
                      (totalTime * price)
                        .toFixed()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                    VND
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Kết thúc
      </button>
      <!-- Modal -->
      <teleport to="body">
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Tính tiền</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p class="mb-0">
                  Tính tiền vào lúc :
                  {{
                    new Date().toLocaleDateString() +
                    " vào lúc " +
                    new Date().toLocaleTimeString()
                  }}
                </p>
                <p class="mb-0">Tổng số giờ: {{ totalTime.toFixed(2) }} giờ</p>
                <p class="mb-0 fs-4">
                  Tổng số tiền :
                  {{
                    (totalTime * price)
                      .toFixed()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  VND
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đợi xíu
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  @click="unRent"
                >
                  Tính tiền
                </button>
              </div>
            </div>
          </div>
        </div>
      </teleport>
    </div>
  </section>
</template>
<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import contactService from "../services/contact.service";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    var parkLocal;
    var Area;
    var price;
    const now = new Date();
    const time = new Date();
    store.state.Area.forEach((e) => {
      e.park.forEach((park) => {
        if (park.user.id == route.params.id) {
          price = e.price;
          Area = e;
          parkLocal = park;
          time.setTime(park.user.time);
        }
      });
    });
    now.getTime();
    const totalTime = (now - time) / 1000 / 60 / 60;
    // function
    async function unRent() {
      if (Area._id) {
        if (parkLocal.user.phone) {
          await new contactService("/api/user").delete(route.params.id);
        }
        parkLocal.rented = false;
        parkLocal.user = {};
        await new contactService("/api").update(Area._id, parkLocal);
        router.push({ path: "/user/0" });
      }
    }
    return { time, totalTime, unRent, price, now,Area , parkLocal};
  },
};
</script>

<style></style>

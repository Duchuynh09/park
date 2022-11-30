<template>
    <div class="dropdown row d-flex justify-content-center col-lg-6 col-xl-4" >
        <button class="w-100 rounded-3 btn "
            :class="[park.rented ? selected.Rent ? 'd-none': 'btn-outline-success' : selected.notRent ? 'd-none' :'btn-outline-danger',]" data-bs-toggle="dropdown"
            :id="'#id' + park._id+area._id" aria-expanded="false" :aria-controls="'id' + park._id+area._id">
            <span v-if="park.rented">
                Đã thuê
            </span>
            <span v-else>
                Chưa có người thuê
            </span>
        </button>

        <div class="dropdown-menu" :aria-labelledby="'id' + park._id + area._id">
            <div class="dropdown-item text-center w-100">
                <div v-if="park.rented">
                    <div class="card card-title">
                        {{ park.user.name }}
                    </div>
                    <div class="card card-body">
                        Thời gian bắt đầu:
                        <p class="card-text">
                            {{
                                    (new Date(park.user.time)).toLocaleDateString() + " vào lúc " + (new
                                        Date(park.user.time)).toLocaleTimeString()
                            }}
                        </p>
                    </div>
                    <div class=" card-footer d-flex justify-content-around mt-2">
                        <RouterLink :to="{ path: `/admin/profile/${park.user.id}` }" class="btn btn-primary">Xem chi
                            tiết ...</RouterLink>
                        <RouterLink
                            :to='{ name: "editUser", params: { name: "admin", areaId: this.area._id, parkId: this.park._id , id:this.park.user.id} }'
                            class="btn btn-primary">Sửa</RouterLink>
                        
                        <!-- Modal -->
                        <teleport to="body">
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Tính tiền</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            thuê vào ngày :
                                            {{
                                                    (new Date(park.user.time)).toLocaleDateString() + " vào lúc " + (new
                                                        Date(park.user.time)).toLocaleTimeString()
                                            }}
                                            <p>kết thúc: {{ (new Date()).toLocaleDateString() + " vào lúc " + (new
                                                    Date()).toLocaleTimeString()
                                            }} </p>
                                            <p>Tổng số giờ : {{ (((((new
                                                    Date()).getTime() - park.user.time) / 1000) / 60) / 60).toFixed(2)
                                            }} giờ</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đợi
                                                xíu</button>
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                                @click="unRent">Tính tiền</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </teleport>
                    </div>
                </div>
                <div v-else>
                    <p >Trống</p>
                    <RouterLink
                        :to='{ name: "addUser", params: { name: "admin", areaId: this.area._id, parkId: this.park._id } }'
                        class="btn btn-secondary">thêm</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import loginVue from '../views/login.vue';
export default {
    props: {
        park: { type: Object },
        area: { type: Object },
        selected:{type:Object}
    },
    methods: {
        async unRent() {
            if (this.area._id) {
                if (park.user.phone) {
                    await new contactService("/api/user").delete(this.park.user.id);
                }
                park.rented = false;
                park.user = {};
                await new contactService("/api").update(this.area.id,park);
                router.push({ path: "/admin" });
            }
        }
    },
    setup() {
        const store = useStore();
        store.commit("login", { user_id: 0 });
        store.commit("isAdmin", { id: 0 });
    },
    components: { RouterLink }
}
</script>

<style>

</style>
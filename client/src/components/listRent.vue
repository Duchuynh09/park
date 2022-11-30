<template>
    <div class="container">
        <div class="row">
            <h2 class="p-3 col-sm-6">Khu xe {{ area.name }}
            </h2>
            <button class="navbar-toggler p-3 col-sm-6 mb-2 " type="button" data-bs-toggle="collapse"
                :data-bs-target="'#listRented' + area._id">
                danh mục hiển thị<span class="navbar-toggler-icon"><i class="fa-solid fa-arrow-down"></i></span>
            </button>
            
            <div class="mb-2 collapse navbar-collapse" :id="'listRented' + area._id">
            <div class="form-check">
                <input type="checkbox" id="onlyRent" v-model="select.Rent">
                <label for="onlyRent">Đã thuê</label>
            </div>
            <div class="form-check">
            <input class="form-checkBox-input" type="checkbox" id="notRent" v-model="select.notRent">
            <label for="notRent">Chưa thuê</label>
            </div>
            </div>
        </div>
        <div class="row">
            <RentedPark v-for="park in area.park" :key="park._id" :park="park" :area="area" :selected="select" />
        </div>

    </div>
</template>

<script>
import RentedPark from './rentedPark.vue';

export default {
    components: { RentedPark },
    props: {
        area: { type: Object, required: true },
    },
    data() {
        return { select:{Rent:false,notRent:false}}
    }
}
</script>

<style>

</style>
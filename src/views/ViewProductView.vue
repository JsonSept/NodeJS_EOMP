<template>
    <div class="View">
        <br><br><br>
        <h1>View Product</h1>
        <br><br><br>
        <router-link to="/products"><button>Return To Products</button></router-link>
        <div class="row"  v-for="item in $store.state.products" :key='item.prodID'>
          <div class="col-lg-6">
            <br>
            <p>Name: {{ item.prodName }}</p>
            <p>Category: {{ item.Category }}</p>
            <p>Ammount: R{{ item.amount }}</p>
          </div>

          <div class="col-lg-6">
            <img v-bind:src= item.prodUrl alt="">
            <br><br><br>
          </div>
          <hr>
        </div>

        <!-- <div v-if="myProducts">
          <div class="row">
          <div class="col-lg-6">
            <br>
            <p>Name: {{ myProducts.prodName }}</p>
            <p>Category: {{ myProducts.Category }}</p>
            <p>Ammount: R{{ myProducts.amount }}</p>
          </div>

          <div class="col-lg-6">
            <img :src= myProducts.prodUrl alt="productImage">
            <br><br><br>
          </div>
          <hr>
        </div>

        </div>
        <div v-else>
          <Spinner></Spinner>
        </div> -->

    </div>
</template>
<script>
import SlotComp from '@/components/CardSlots.vue'
import Spinner from '@/components/Spinner.vue'

export default{
  data(){
    return{
      // products:null,
      prodName: null,
      amount: null,
      Category: null,
      prodUrl: null
    }
  },
  computed:{
    getProduct(){
      return this.$store.dispatch('getProduct')
    },
    myProducts(){
      return this.$store.state.products
    }
  },
  methods:{
    async getData(prodID){
      try{
        const item = await this.$store.dispatch('getItem', prodID)
        console.log(item);
      }catch (error){
        console.error(error);
      }
    }
  },
  // created(){
  //   this.getData(prodID)
  // },
  mounted(){
    this.getProduct;
  },

  components:{
    'slot-comp': SlotComp,
    Spinner
  }
}

</script>
<style scoped>
*{
  color: black;
  padding-left: 5%;
  padding-right: 5%;
}
.View{
  background-color: rgba(136, 136, 136, 0.181);
  margin-top: 5%;
  margin-bottom: 0%;
  margin-right: 1.5%;
  margin-left: 1.5%;
  padding-bottom: 10%;
}
img{
  width: 512px;
  height: 300px;
}
h1{
  font-weight: bold;
}

.vr{
  width: 1px;
  color: rgba(0, 0, 0, 0);
  border-right: 2px solid #000000;
}

@media screen and (max-width: 1080px) {
  .card{
    margin-left: 20%;
  }
}
@media screen and (max-width: 768px) {
  .card{
    margin-left: 20%;
  }
}
</style>

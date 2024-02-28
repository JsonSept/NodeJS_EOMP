<template>
    <div class="View">
        <br><br><br>
        <h1>View Product</h1>

        <!-- <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
                
                
              <div class="row">
                  
                  <div class="col-lg-4">
                      <div class="card" style="width: 18rem;">
                        <img src="https://i.postimg.cc/Qd9ZHLjd/ed621dee-7aba-44ae-b748-ad8701172440vhghj.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                          <h5 class="card-title">Prod1</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">View</a>
                        </div>
                      </div>
                  </div>
                   
              </div>

            </div>
          </div>
        </div>
        <br><br><br> -->

        <div class="row"  v-for="item in $store.state.products" :key='item'>
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

    </div>
</template>
<script>
import SlotComp from '@/components/CardSlots.vue'
import Spinner from '@/components/Spinner.vue'

export default{
  data(){
    return{
      prodName: null,
      amount: null,
      Category: null,
      prodUrl: null
    }
  },
  computed:{
    getProduct(){
      this.$store.dispatch('getProduct')
    }
  },
  mounted(){
    this.getProduct
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

<template>
    <div class="View">
        <br><br><br>
        <h1>Administration</h1>




        <!-- Add Products Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Products</h5>
                <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
              </div>
              <div class="modal-body">
                <input type="text" name="prodName" id="prodName" placeholder="Name" v-model="prodName">
                <br><br>
                <input type="text" name="amount" id="amount" placeholder="Amount" v-model="amount">
                <br><br>
                <input type="text" name="Category" id="Category" placeholder="Category" v-model="Category">
                <br><br>
                <input type="text" name="prodUrl" id="prodUrl" placeholder="Image Url" v-model="prodUrl">
                <br><br>
              </div>
              <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
                <button type="button" @click="addProduct">Add</button>
              </div>
            </div>
          </div>
        </div>


        <!-- Edit Products Modal -->
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="item in $store.state.products" :key="item.prodID">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
              </div>
              <div class="modal-body">
                <input type="text" name="prodName" id="prodName" placeholder="Name" v-model="editedItem.prodName">
                <br><br>
                <input type="text" name="amount" id="amount" placeholder="Amount" v-model="editedItem.amount">
                <br><br>
                <input type="text" name="Category" id="Category" placeholder="Category" v-model="editedItem.Category">
                <br><br>
                <input type="text" name="prodUrl" id="prodUrl" placeholder="Image Url" v-model="editedItem.prodUrl">
                <br><br>
              </div>
              <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal">Close</button>
                  <button @click="saveEdit">Save</button>
              </div>
            </div>
          </div>
        </div>

        
        
        <!-- Add Users Modal -->
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Users</h5>
                <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
              </div>
              <div class="modal-body">
                <input type="text" name="firstName" id="firstName" placeholder="First Name" v-model="firstName">
                <br><br>
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" v-model="lastName">
                <br><br>
                <input type="text" name="userAge" id="userAge" placeholder="Age" v-model="userAge">
                <br><br>
                <input type="text" name="Gender" id="Gender" placeholder="Gender" v-model="Gender">
                <br><br>
                <input type="text" name="userRole" id="userRole" placeholder="Role" v-model="userRole">
                <br><br>
                <input type="email" name="emailAdd" id="emailAdd" placeholder="Email" v-model="emailAdd">
                <br><br>
                <input type="password" name="userPass" id="userPass" placeholder="Password" v-model="userPass">
                <br><br>
                <input type="text" name="userProfile" id="userProfile" placeholder="Profile" v-model="userProfile">
                <br><br>
              </div>
              <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal">Close</button>
                <button type="button" @click="addUser">Add</button>
              </div>
            </div>
          </div>
        </div>


        <!-- Edit Users Modal -->
        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="user in $store.state.users" :key="user.userID">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                <a class="btn-close" data-bs-dismiss="modal" aria-label="Close"></a>
              </div>
              <div class="modal-body">
                <input type="text" name="firstName" id="firstName" placeholder="First Name" v-model="editedUsers.firstName">
                <br><br>
                <input type="text" name="lastName" id="lastName" placeholder="Last Name" v-model="editedUsers.lastName">
                <br><br>
                <input type="text" name="userAge" id="userAge" placeholder="Age" v-model="editedUsers.userAge">
                <br><br>
                <input type="text" name="Gender" id="Gender" placeholder="Gender" v-model="editedUsers.Gender">
                <br><br>
                <input type="text" name="userRole" id="userRole" placeholder="Role" v-model="editedUsers.userRole">
                <br><br>
                <input type="email" name="emailAdd" id="emailAdd" placeholder="Email" v-model="editedUsers.emailAdd">
                <br><br>
                <input type="password" name="userPass" id="userPass" placeholder="Password" v-model="editedUsers.userPass">
                <br><br>
                <input type="text" name="userProfile" id="userProfile" placeholder="Profile" v-model="editedUsers.userProfile">
                <br><br>
              </div>
              <div class="modal-footer">
                  <button type="button" data-bs-dismiss="modal">Close</button>
                  <button @click="saveUserEdit">Save</button>
              </div>
            </div>
          </div>
        </div>

        <br><br>
        <h2>Products</h2>
        <br><br>


        <button @click="sortByPrice" class="outsideButtons" title="Sort By Price"><span class="bi bi-filter-circle"></span>Sort Price</button> 
        <br><br>
        <button @click="sortByName" class="outsideButtons" title="Sort By Name"><span class="bi bi-filter-circle"></span>Sort Name</button> 
        <br><br>


        <Spinner v-if="loadingProducts" />
          <button class="outsideButtons" data-bs-toggle="modal" data-bs-target="#exampleModal" title="Add Product"><span class="bi bi-cart-plus"></span>Add Product</button>
          <br><br>
  
          <table class="table">
  
            <thead>
              <tr class="table-dark">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col">Image Url</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="item in sortedProducts" :key="item.prodID">
                <td>{{ item.prodID }}</td>
                <td>{{ item.prodName }}</td>
                <td></td>
                <td>R{{ item.amount }}</td>
                <td>{{ item.Category }}</td>
                <td><img v-bind:src= "item.prodUrl" alt="productImage"></td>
                <td>
                  <button @click="populateFields(item)" data-bs-toggle="modal" data-bs-target="#exampleModal2"><span class="bi bi-pencil" name="Edit">Edit</span></button>
                  <br><br>
                  <button @click="deleteItem(item.prodID)"><span class="bi bi-trash" name="Delete">Delete</span></button>
                </td>
              </tr>
            </tbody>
            
          </table>

       <!-- Search And Sort -->
      <br><br><br><br><br>
        <input type="text" v-model="searchQuery" placeholder="Seach by Name" >
        <!-- <button class=" bi bi-search" @click="searchProduct"></button> -->
        <br><br>

          <table class="table">
            <thead>
              <tr class="table-dark">
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col">Image Url</th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="filteredProducts && filteredProducts.length > 0">
              <tr v-for="item in filteredProducts" :key="item.prodID">
                <td>{{ item.prodID }}</td>
                <td>{{ item.prodName }}</td>
                <td></td>
                <td>R{{ item.amount }}</td>
                <td>{{ item.Category }}</td>
                <td><img v-bind:src= "item.prodUrl" alt="productImage"></td>
                <td>
                  <button @click="populateFields(item)" data-bs-toggle="modal" data-bs-target="#exampleModal2"><span class="bi bi-pencil" name="Edit">Edit</span></button>
                  <br><br>
                  <button @click="deleteItem(item.prodID)"><span class="bi bi-trash" name="Delete">Delete</span></button>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr v-for="item in $store.state.products" :key="item.prodID">
                <td>{{ item.prodID }}</td>
                <td>{{ item.prodName }}</td>
                <td></td>
                <td>R{{ item.amount }}</td>
                <td>{{ item.Category }}</td>
                <td><img v-bind:src= "item.prodUrl" alt="productImage"></td>
                <td>
                  <button @click="populateFields(item)" data-bs-toggle="modal" data-bs-target="#exampleModal2"><span class="bi bi-pencil" name="Edit">Edit</span></button>
                  <br><br>
                  <button @click="deleteItem(item.prodID)"><span class="bi bi-trash" name="Delete">Delete</span></button>
                </td>
              </tr>
            </tbody>
          </table>
  
          <br><br><br>

 


        <h2>Users</h2>

        <Spinner v-if="loadingUsers" />
        <button class="outsideButtons" data-bs-toggle="modal" data-bs-target="#exampleModal3"><span class="bi bi-person-plus">Add User</span></button>
        <br><br>
        
        <table class="table">

          <thead>
            <tr class="table-dark">
              <th scope="col">ID</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Role</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Profile</th>
              <th></th>
            </tr>
          </thead>
          <tbody  v-for="user in $store.state.users" :key="user">
            <tr>
              <th>{{ user.userID }}</th>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userPass }}</td>
              <td>{{ user.userProfile }}</td>
              <td>
                <button @click="populateUsers(user)" data-bs-toggle="modal" data-bs-target="#exampleModal4"><span class="bi bi-pencil" name="Edit">Edit</span></button>
                <br><br>
                <button @click="deleteUser(user.userID)"><span class="bi bi-trash" name="Delete">Delete</span></button>
              </td>
            </tr>
          </tbody>

        </table>

    </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue'



export default{
  components:{
    Spinner
  },

  data(){
    return{
      loadingProducts: false,
      loadingUsers: false,

      searchQuery: '',
      sortBy: '',
      sortOrder: '',

      prodID: null,
      prodName: null,
      amount: null,
      Category: null,
      prodUrl: null,

      editedItem: {
        prodID: null,
        prodName: null,
        amount: null,
        Category: null,
        prodUrl: null,
      },

      userID: null,
      firstName: null,
      lastName: null,
      userAge: null,
      Gender: null,
      userRole: null,
      emailAdd: null,
      userPass: null,
      userProfile: null,

      editedUsers: {
      userID: null,
      firstName: null,
      lastName: null,
      userAge: null,
      Gender: null,
      userRole: null,
      emailAdd: null,
      userPass: null,
      userProfile: null,
      },

      showModal: false,
    }
  },

  computed:{

    async getProduct(){
      try{
        this.loadingProducts = true
        await this.$store.dispatch('getProduct')
      }catch (error){
        console.error(error);
      }finally{
        this.loadingProducts =false
      }
    },


    async getUsers(){
      try{
        this.loadingUsers = true
        await this.$store.dispatch('getUsers')
      }catch(error){
        console.error(error);
      }finally{
        this.loadingUsers = false
      }
    },

    filteredProducts() {
      return this.$store.state.products.filter(product =>
        product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    sortedProducts(){
      let sorted = [...this.$store.state.products]
      if(this.sortBy === 'name'){
        sorted.sort((a,b) =>{
          if(this.sortOrder === 'ascending'){
            return a.prodName.localeCompare(b.prodName)
          }else{
            return b.prodName.localeCompare(a.prodName)
          }
        })
      }else if(this.sortBy === 'price'){
        sorted.sort((a,b) => {
          if(this.sortOrder === 'ascending'){
            return a.amount - b.amount
          }else{
            return b.amount - a.amount
          }
        })
      }
      return sorted
    }

  },

  methods:{
    
    populateFields(item) {
      // this.prodID = item.prodID;
      // this.prodName = item.prodName;
      // this.amount = item.amount;
      // this.Category = item.Category;
      // this.prodUrl = item.prodUrl;

      this.editedItem = { ...item };
    },

    populateUsers(user) {
      this.editedUsers = { ...user };
    },

    searchProduct(){
    },

    sortByPrice(){
      this.sortBy = 'price'
      this.sortOrder = this.sortOrder === 'ascending' ? 'descending' : 'ascending'
    },
    sortByName(){
      this.sortBy = 'name'
      this.sortOrder = this.sortOrder === 'ascending' ? 'descending' : 'ascending'
    },

    addProduct(){
      this.$store.dispatch('getPost', this.$data)
    },

    deleteItem(prodName){
      this.$store.dispatch('deleteItem', prodName)
    },

    saveEdit() {
      this.$store.dispatch('getPatch', this.editedItem);
      this.editedItem = { // Reset editedItem after saving
        prodID: null,
        prodName: null,
        amount: null,
        Category: null,
        prodUrl: null,
      }
    },
    // editProduct(prodID){
    //   let edit = {
    //     prodID: prodID,
    //     prodName: this.prodName,
    //     amount: this.amount,
    //     Category: this.Category,
    //     prodUrl: this.prodUrl
    //   }
    //   console.log(edit);
    //   this.$store.dispatch('getPatch', edit);
    // },



    addUser(){
      this.$store.dispatch('addUsers', this.$data)
    },

    deleteUser(userName){
      this.$store.dispatch('deleteUsers', userName)
    },

    saveUserEdit() {
      this.$store.dispatch('editUsers', this.editedUsers);
      this.editedUsers = {
        userID: null,
        firstName: null,
        lastName: null,
        userAge: null,
        Gender: null,
        userRole: null,
        emailAdd: null,
        userPass: null,
        userProfile: null,
      }
    },


    closeModal(){
      this.showModal = false;
    }
  },

  mounted(){
    this.getProduct,
    this.getUsers
  },

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
h1, h5{
  font-weight: bold;
}
img{
  width: 200px;
  height: 150px;
}
.outsideButtons{
  height: 55px;
  width: auto;
  margin-left: 80%;
}
button{
      background-color: #ffffff;
      color: rgb(0, 0, 0);
      height: 55px;
      border-radius: 10px;
      text-align: center;
    }
  button:hover{
      transform: scale(1.05);
      box-shadow: inset 0 -3em 3em #ffffff,
      0 0 0 2px rgb(0, 0, 0),
      0em 0em 1em #000000;
    }
</style>

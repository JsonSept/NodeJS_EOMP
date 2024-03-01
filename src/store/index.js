import { createStore } from 'vuex'
import axios from 'axios'

// axios.defaults.withCredentials = true;

const baseUrl = 'https://nodejs-eomp-vi7f.onrender.com'
// const baseUrl = 'http://localhost:8090'


function ProductDetails(props) {
  const { prodID } = props.match.params; // Get the product ID from route parameters
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`https://nodejs-eomp-vi7f.onrender.com`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error('Error fetching product details:', err);
      });
  }, [prodID]);
  return (
    <div>
      <h1>{products.prodName}</h1>
      <p>{product.amount}</p>
    </div>
  );
}


export default createStore({
  state: {
    products: [],
    users: null,
  },

  getters: {
  },
  
  mutations: {
    setProduct(state,payload){
      state.products = payload
    },
    setUsers(state,payload){
      state.users = payload
    }
  },
  actions: {
    async getProduct({commit}){
      let {data} = await axios.get(baseUrl + '/products')
      // console.log(data);
      commit('setProduct', data)
    },

    async getItem({commit}, prodID){
      let {data} = await axios.get(baseUrl + '/products/' + prodID)
      console.log(data);
      commit('setProduct', data)
      return data
    },

    async getPost({commit}, productDetails){
      await axios.post(baseUrl + '/products', productDetails)
      window.location.reload()
    },

    async deleteItem({commit}, prodName){
      console.log(prodName);
      await axios.delete(baseUrl + '/products/' + prodName)
      window.location.reload()
    },

    async getPatch({commit}, update){
      console.log(update);
      await axios.patch(baseUrl + '/products/' + update.prodID, update)
      window.location.reload()
    },


    async getUsers({commit}){
      let {data} = await axios.get(baseUrl + '/users')
      // console.log(data);
      commit('setUsers', data)
    },

    async addUsers({commit}, userDetails){
      await axios.post(baseUrl + '/users', userDetails)
      window.location.reload()
    },

    async deleteUsers({commit}, userName){
      console.log(userName);
      await axios.delete(baseUrl + '/users/' + userName)
      window.location.reload()
    },

    async editUsers({commit}, update){
      console.log(update);
      await axios.patch(baseUrl + '/users/' + update.userID, update)
      window.location.reload()
    }
  },
  modules: {
  }
})

<template>
  <div id="single-blog">
      <h3>{{blog.title}}</h3>
      <p>{{blog.body}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        (async () =>{
            try {
               const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
               if (response.data) {
                   this.blog = response.data
               }
            }catch(err) {
                console.log(err)
            }
        })()
    }
}
</script>
    
<style scoped>
    #single-blog {
        max-width: 800px;
        margin: auto;
    }
</style>
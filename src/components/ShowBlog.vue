<template>
  <div id="show-blogs">
      <h2>All Blog Articles</h2>
      <input type="search" placeholder="search for blog" v-model="search" />
      <div v-theme:container="container">
        <div class='single-blog' v-for="(blog, key) in filteredBlogs" v-bind:key="key">
                <router-link v-bind:to="'/blog/' + blog.id"><h3 v-rainbow>{{blog.title}}</h3></router-link>
                <p>{{blog.body | snipet}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import searchBlogMixin from '../mixins/searchBlogMixins'
export default {
    data() {
        return {
            blogs: [],
            container: "grid",
            search: '',
        }
    },

    created() {
        (async (url) => {
            try {
                const response = await axios.get(url)
                if(response) {
                    this.blogs = response.data.slice(0, 10)
                }
            } catch (err) {
                console.log(err)
            }
        })('https://jsonplaceholder.typicode.com/posts')
    },
    mixins: [searchBlogMixin]
}
</script>
<style  scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}

.single-blog h3 {
    text-transform: capitalize;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
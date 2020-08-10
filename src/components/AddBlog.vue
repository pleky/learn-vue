<template>
    <div id="add-blog">
        <h1>Add a new Blog Post</h1>
        <form v-if="!isSuccess">
            <label for='title'>Blog Title</label>
            <input id='title' v-model.lazy='blog.title' type='text' name='title' />
            <label for='content'>Blog Content</label>
            <textarea name='content' v-model.lazy='blog.content' id='content' />
            <div id="checkboxes">
                <label for='luffy'>Luffy</label>
                <input type='checkbox' value='luffy' v-model="blog.categories" />
                <label for='Zoro'>Zoro</label>
                <input type='checkbox' value='zoro' v-model="blog.categories" />
                <label for='Nami'>Nami</label>
                <input type='checkbox' value='nami' v-model="blog.categories" />
                <label for='Usopp'>Usopp</label>
                <input type='checkbox' value='usopp' v-model="blog.categories" />
                <label for='Franky'>Franky</label>
                <input type='checkbox' value='franky' v-model="blog.categories" />
            </div>
            <label for='author'>Author</label>
            <select id='author' v-model="blog.author">
                <option v-for="(author, key) in authors" :key="key">{{ author }}</option>
            </select>
            <button v-on:click.prevent="postData" v-if="!isSubmiting">Post Blog</button>
            <span v-else-if="isSubmiting">Loading.....</span>
        </form>
        <h3 v-show='isSuccess'>Thank you! for submiting</h3>
        <div id='preview'>
            <p>Blog title: {{ blog.title }} </p>
            <p>Blog Content:</p>
            <p>{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="(category, key) in blog.categories" :key="key">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }} </p> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ["Big Mom", "Kaido", "Shanks", "Marshal D Teach"],
            isError: false,
            isSuccess: false,
            isSubmiting: false,
        }
    },
    methods: {
        async postData(){
            try {
                this.isSubmiting = true
                const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                    userId: 1,
                    title: this.blog.title,
                    body: this.blog.content
                })
                if (response.data) {
                    this.isSuccess = true
                    this.isSubmiting = false
                }
            } catch (err) {
                this.isError = true
            }
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes input {
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display: inline-block;
}
</style>
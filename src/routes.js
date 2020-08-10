import showBlogs from './components/ShowBlog.vue'
import hellowVue from './components/HelloWorld.vue'
import addBlog from './components/AddBlog.vue'
import singleBlog from './components/singleBlog.vue'
export default [
    {path: '/', component: hellowVue},
    {path: '/blogs', component: showBlogs},
    {path: '/add-blog', component: addBlog},
    {path: '/blog/:id', component: singleBlog}
]
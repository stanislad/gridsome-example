<template>
 <Layout>
   <h1>Post: {{$page.redditPost.title}}</h1>
   <p>
    <i>Author: {{$page.redditPost.author}}</i>
   </p>
   <img :src="$page.redditPost.fields.thumbnail" :alt="$page.redditPost.title">
   <p>
     <a :href="$page.redditPost.url">Link</a>
   </p>

 </Layout>
</template>

<page-query>
query RedditPost($path : String!){
redditPost : redditPost(path : $path){
id
title
url
author
fields{thumbnail}
}
}
</page-query>

<script>
export default {
  name: "RedditPost",
  metaInfo() {
    return {
      title: this.$page.redditPost.title
    }
  }

}
</script>

<style scoped>

</style>
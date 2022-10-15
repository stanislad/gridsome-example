<template>
  <BlogLayout>
    <h1>Blog</h1>
    <p>Everything blog.</p>
    <ul>
      <li v-for="(post, i) in $page.allRedditPost.edges">
        <a :href="post.node.path">
          {{post.node.title}}
        </a>
      </li>
    </ul>
  </BlogLayout>
</template>

<page-query>
{
allRedditPost{edges{node{
id
title
path
fields{thumbnail}
}}
}
}
</page-query>

<script>
import BlogLayout from "../layouts/BlogLayout";
export default {
  components: {BlogLayout},
  metaInfo: {
    title: 'Blog'
  }
}
</script>

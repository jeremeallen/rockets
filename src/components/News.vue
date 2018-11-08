<template>
  <div class="row">
    <div class="col-sm-8 offset-sm-2">
      <h2 class='text-center'>News</h2>
      <ul class="list-group">
        <li 
          class="list-group-item"
          v-for='(article, index) in articles'
          :key="`article-${ index }`"
        >
          <a :href="article.href" target="blank">
            {{ article.title}}
          </a>
          <br />
          <span class="text-muted"><small>{{ article.date }}</small></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'News',
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getNews() {
      axios.get('https://rockets-api.allensservices.com/api/news')
        .then(response => {
          this.articles = response.data;
        })
    },
  },
  created() {
    this.getNews();
  },
}
</script>


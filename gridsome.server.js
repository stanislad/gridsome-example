// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");

module.exports = function (api) {
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const {data} = await axios.get('https://www.reddit.com/r/UkraineWarVideoReport.json?raw_json=1')

    const collection = actions.addCollection('RedditPost')

    for (const item of data.data.children) {
      collection.addNode({
        id: item.data.id,
        title: item.data.title,
        url: item.data.url,
        author: item.data.author,
        path: '/reddit/' + item.data.id,
        fields: {
          thumbnail : item.data.thumbnail
        }
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}

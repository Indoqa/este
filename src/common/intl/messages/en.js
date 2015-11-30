export default {
  app: {
    footer: {
      madeByHtml: 'made by <a href="https://twitter.com/steida">steida</a>'
    },
    links: {
      home: 'Home'
    }
  },
  home: {
    // // TODO: Android text.
    // androidInfoText: ``,
    infoHtml: '<a href="https://github.com/este/este">Este.js</a> dev stack.',
    iosInfoText: `Este.js dev stack.\n\nOpen left menu and check todos!\n\nPress CMD+R to reload.\nPress CMD+D for debug menu.`,
    title: 'Este.js',
    toCheck: {
      andMuchMore: 'And much more :-)',
      h2: 'Things to Check',
      isomorphicPage: 'Isomorphic page',
      // This is example of localized ordered list.
      list: [
        {
          key: 'source',
          text: 'Server rendering'
        },
        {
          key: 'development',
          text: 'Hot reload for styles, components, etc.'
        },
        {
          key: 'production',
          text: 'Performance and size of production build (<code>gulp -p</code>)'
        }
      ]
    }
  },
  notFound: {
    continueMessage: 'Continue here please.',
    header: 'This page isn\'t available',
    message: 'The link may be broken, or the page may have been removed.',
    title: 'Page Not Found'
  }
};

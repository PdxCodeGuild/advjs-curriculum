const dom = {
  component: 'body',
  children: [
    { component: 'p', children: null },
    {
      component: 'div',
      children: [
        {
          component: 'span',
          children: [
            { component: 'p', children: null }
          ]
        }
      ]
    }
  ]
}

function logTags (domNode) {

}

logTags(dom) // -> 'body', 'p', 'div', 'span', 'p'

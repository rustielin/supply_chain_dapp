export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'SIGN IN'
      }
    },
    {
      title: true,
      name: 'Quick Links',
      wrapper: {            // optional wrapper object
        element: "span",      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ""             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Placeholder',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Home',
          url: '/register',
          icon: 'icon-puzzle'
        },
        {
          name: 'About',
          url: '/components/',
          icon: 'icon-puzzle'
        },
        {
          name: 'Support',
          url: '/components/',
          icon: 'icon-puzzle'
        }
      ]
    }
  ]
};

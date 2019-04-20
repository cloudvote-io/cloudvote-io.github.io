const ls = require('local-storage');
import ftu from './ftu-page.js'

import './styles/root.css'

(function() {
  if (ls.get('userId') !== null) {
    // sign in page
    console.log(ls.get('userId'))
    return;
  }

  document.getElementById('root').innerHTML = ftu.markup;
  document.getElementById('test').innerHTML = screen.width;
})();

<nav>
  <ul>
    <li><strong>CRUD App</strong></li>
  </ul>
  <ul class="navigation">
    <li><a href="#">Home</a></li>
    <li><a href="#">Articles</a></li>
    <li><a href="#" role="button" class="secondary outline login">Login</a></li>
  </ul>
</nav>

<!-- This is where the rest of the app will be rendered -->
<slot></slot>

<style>
  .navigation {
    --primary: #d81b60;
  }

  .login {
    --secondary: #d81b60;
  }
</style>
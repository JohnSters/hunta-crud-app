<!--Navigation menu will be displayed on all pages-->
<nav>
  <ul>
    <li><strong>CRUD App</strong></li>
  </ul>
  <ul class="navigation">
    <li><a href="/">Home</a></li>
    <li><a href="/articles">Articles</a></li>
    <li><a href="#" role="button" class="secondary outline login">Login</a></li>
  </ul>
</nav>

<!--The slot tag opens up the other pages to be rendered-->
<slot></slot>

<style>
  .navigation {
    --primary: #00897b;
  }

  .login {
    --secondary: #00897b;
  }
</style>
<template>
  <nav>
    <div class="nav-wrapper blue">
      <div class="container">
        <router-link class="brand-logo" to="/">Vue App</router-link>
        
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<template>
  <ul class="menu-nav">
    <li v-for="item in menuItems" :key="item.url" aria-haspopup="true" data-menu-toggle="hover" class="menu-item">
      <router-link
        exact
        exact-active-class="router-link-exact-active router-link-active"
        class="menu-link align-items-center"
        :to="item.url"
      >
        <i class="menu-icon" :class="item.className"></i>
        <span class="menu-text">{{ $t(`navigation.${item.name}`) }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: "KTMenu",

  data: () => ({
    menuItems: [
      {
        children: [],
        className: "fa fa-home",
        name: "home",
        url: "/home"
      }
    ]
  }),
};
</script>

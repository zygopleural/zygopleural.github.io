<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      expand-on-hover
      permanent
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <fa-icon :icon="item.icon" style="font-size: 20px" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left app elevate-on-scroll>
      <v-app-bar-nav-icon>
        <v-avatar size="36px">
          <img alt="Avatar" src="/lee.jpeg" />
        </v-avatar>
      </v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon href="https://github.com/zygopleural" target="_blank">
        <fa-icon :icon="['fab', 'github']" style="font-size: 36px" />
      </v-btn>
      <v-btn icon @click.stop="">
        <fa-icon :icon="['fab', 'github']" style="font-size: 36px" />
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: ['fas', 'home'],
          title: 'Home',
          to: '/',
        },
        {
          icon: ['fas', 'laptop-code'],
          title: 'Experience',
          to: '/experience',
        },
        {
          icon: ['fas', 'graduation-cap'],
          title: 'Education',
          to: '/education',
        },
      ],
      title: 'Hey, I’m Lee 👋🏼',
    }
  },
}
</script>

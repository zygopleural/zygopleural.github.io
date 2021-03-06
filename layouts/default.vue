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
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
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
      <v-btn icon @click.stop="">
        <v-icon>mdi-application</v-icon>
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
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-laptop',
          title: 'Experience',
          to: '/experience',
        },
        {
          icon: 'mdi-school',
          title: 'Education',
          to: '/education',
        },
      ],
      title: 'Hey, I’m Lee 👋🏼',
    }
  },
}
</script>

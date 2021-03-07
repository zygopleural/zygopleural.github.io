<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" clipped expand-on-hover permanent app>
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
        <v-avatar size="40px">
          <img alt="Avatar" src="/lee.jpeg" />
        </v-avatar>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        {{ title }}
        <wave-hand delay />
      </v-toolbar-title>
      <v-spacer />
      <v-switch v-model="$vuetify.theme.dark" hide-details />
      <v-app-bar-nav-icon v-if="$vuetify.theme.dark">
        <fa-icon :icon="['fas', 'moon']" style="font-size: 30px" />
      </v-app-bar-nav-icon>
      <v-app-bar-nav-icon v-else>
        <fa-icon :icon="['fas', 'sun']" style="font-size: 30px" />
      </v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-sheet class="overflow-y-auto" min-height="100%">
        <v-container>
          <nuxt />
        </v-container>
      </v-sheet>
    </v-main>
    <v-footer fixed app class="d-flex justify-space-between">
      <div>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </div>
      <div>
        <v-btn icon href="https://github.com/zygopleural" target="_blank">
          <fa-icon :icon="['fab', 'github']" style="font-size: 30px" />
        </v-btn>
        <v-btn icon href="https://linkedin.com/in/lmstaples" target="_blank">
          <fa-icon :icon="['fab', 'linkedin']" style="font-size: 30px" />
        </v-btn>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import WaveHand from '@/components/WaveHand'

export default {
  components: {
    WaveHand,
  },
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
      title: 'Hey, I’m Lee',
    }
  },
}
</script>

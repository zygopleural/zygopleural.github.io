<template>
  <v-timeline-item :color="color" fill-dot large>
    <template #opposite>
      <span
        :class="`headline font-weight-bold ${color}--text`"
        v-text="`${from} - ${to}`"
      ></span>
    </template>
    <template #icon>
      <fa-icon :icon="['fas', 'laptop-code']" style="font-size: 20px" />
    </template>
    <v-card :color="color" :dark="$vuetify.theme.dark" elevation="24">
      <v-card-title> {{ title }} - {{ position }} </v-card-title>
      <v-card-subtitle>
        {{ type }}
      </v-card-subtitle>
      <v-list disabled>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-icon>
            <fa-icon :icon="['fas', 'code']" style="font-size: 15px" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-wrap">
              {{ item }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

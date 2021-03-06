<template>
  <v-timeline-item
    :color="color"
    fill-dot
  >
    <template v-slot:opposite>
      <span
        :class="`headline font-weight-bold ${color}--text`"
        v-text="`${from} - ${to}`"
      ></span>
    </template>
    <template v-slot:icon>
      <fa-icon :icon="icon" />
    </template>
    <v-card
      :dark="$vuetify.theme.dark"
    >
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle />
      <v-card-text>
        {{ text }}
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    icon: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
  },
}
</script>

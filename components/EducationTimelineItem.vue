<template>
  <v-timeline-item :color="color" fill-dot large>
    <template #opposite>
      <span
        :class="`headline font-weight-bold ${color}--text`"
        v-text="`${from} - ${to}`"
      ></span>
    </template>
    <template #icon>
      <fa-icon :icon="icon" style="font-size: 20px" />
    </template>
    <v-card :color="color" :dark="$vuetify.theme.dark" elevation="24">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle />
      <div>
        <v-card-text class="white" style="color: black">
          {{ text }}
        </v-card-text>
      </div>
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
    icon: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
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

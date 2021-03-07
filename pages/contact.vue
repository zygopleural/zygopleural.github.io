<template>
  <v-row class="text-center">
    <v-col sm="12">
      <h1>
        Contact me!
      </h1>
    </v-col>
    <v-col
      sm="6"
      class="offset-sm-3"
      v-for="(value, key) in details"
    >
      <v-card>
        <v-card-title class="headline">
          <strong>{{ capitalize(key) }}:</strong>&nbsp;{{ value }}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import capitalize from 'lodash/capitalize'

export default {
  data: () => ({
    details: {
      email: 'lmstaples94@gmail.com',
      phone: '+44 (0) 7825 507 518'
    },
  }),
  methods: {
    capitalize(s) {
      return capitalize(s)
    }
  }
}
</script>

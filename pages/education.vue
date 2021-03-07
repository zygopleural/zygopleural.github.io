<template>
  <v-row>
    <v-col>
      <v-timeline
        align-top
        :dense="$vuetify.breakpoint.smAndDown"
      >
        <education-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :title="item.title"
          :color="item.color"
          :icon="item.icon"
          :text="item.text"
          :from="item.from"
          :to="item.to"
        />
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: 'blue',
        icon: ['fas', 'graduation-cap'],
        title: 'University of Warwick',
        text: '1st Class Master’s Degree: Mathematics & Physics (MMathPhys)',
        from: '2012',
        to: '2016',
      },
      {
        color: 'red',
        icon: ['fas', 'university'],
        title: 'Palmers College',
        text: '3 A-Levels (A*AB): Maths, Further Maths, Physics; 1 AS-Level (A): Computing',
        from: '2010',
        to: '2012',
      },
      {
        color: 'green',
        icon: ['fas', 'school'],
        title: 'Gable Hall School',
        text: '12 GCSEs (A*A*A*AAAABBBBC), OCR National 1st Award in IT (Distinction), Business German',
        from: '2005',
        to: '2010',
      },
    ],
  }),
}
</script>

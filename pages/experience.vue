<template>
  <v-row>
    <v-col>
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <experience-timeline-item
          v-for="(item, index) in items"
          :key="index"
          :title="item.title"
          :position="item.position"
          :type="item.type"
          :color="item.color"
          :items="item.items"
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
        title: 'flatfair',
        position: 'Senior Software Engineer',
        type: 'Full-stack',
        items: [
          'Promoted after a year of taking on increasing responsibility',
          'Technical lead of various projects, including many e2e customer on-boarding flows',
          'Squad leader, responsible for prioritising projects, reviewing plans, critiquing designs, and scoping technical details',
        ],
        from: 'January 2021',
        to: 'Present',
      },
      {
        color: 'blue',
        title: 'flatfair',
        position: 'Software Engineer',
        type: 'Full-stack',
        items: [
          'Implemented asynchronous payment system to handle SCA & 3DS2',
          'Expanded asynchronous serverless event based system for emails, sms, internal notifications, claims processing, + more',
          'Introduced serverless APIs for routing 3rd party webhooks to correct environment',
          'Expanded frontend skills, Vue.js + in-house design system using React Styled Components',
        ],
        from: 'June 2019',
        to: 'December 2020',
      },
      {
        color: 'red',
        title: 'JPMorgan Chase & Co.',
        position: 'Associate Software Engineer',
        type: 'Full-stack',
        items: [
          'Seeing first-hand the difficulties with developing software within the HPC team, I moved into a more developer experience role, aimed at making the developers’ lives easier',
          'I own the whole SDLC for all core & middleware services running on the HPC grid',
          'I ensure all code has gone through vigorous build, test, and scan phases and that all vulnerabilities are remediated before deployment to over 10’000 servers across multiple environments worldwide',
          'I own and moderate the tools that allows the team to continuously integrate and deploy software as-well-as infrastructure, such as: BitBucket, Jenkins / Blue Ocean, Spinnaker, Terraform, etc.',
          'I still consider myself a software engineer and I am one of the lead developers of a new internally open sourced Data Science as a Service project',
        ],
        from: 'October 2018',
        to: 'May 2019',
      },
      {
        color: 'red',
        title: 'JPMorgan Chase & Co.',
        position: 'Analyst Software Engineer',
        type: 'Full-stack',
        items: [
          'Member of the HPC team, managing over 100’000 distributed compute cores for Global Technology Infrastructure - Platform Services',
          'Developer of the Java based Hybrid Burst Brokerage Service, allowing our seasonal customers to burst high performance workload into the AWS public cloud',
          'Expanded my skills & knowledge in cloud design, cyber security, agile development, API standards, micro-services, and general software engineering',
          'Acted as point-of-contact for new customer on-boarding and operational expert for the Hybrid Burst Brokerage Service, leaning more towards the DevOps mindset',
        ],
        from: 'August 2016',
        to: 'September 2018',
      },
      {
        color: 'red',
        title: 'JPMorgan Chase & Co.',
        position: 'Intern Software Engineer',
        type: 'Full-stack',
        items: [
          'Worked within the Corporate & Investment Bank, developing an application to discover cost saving opportunities throughout the firm',
          'Gained valuable knowledge in data visualisation software and scripting in Python.',
        ],
        from: 'June 2015',
        to: 'September 2015',
      },
    ],
  }),
}
</script>

<template>
  <div class="app-wrap app-ref app-main div main-div">
    <div class="app-outer">
      <div class="app-container">
        <div class="app-left">
          <AboutComponent></AboutComponent>
        </div>
        <div class="app-right">
          <IntroComponent></IntroComponent>
          <ExpEduComponent :data="expriences"
            title="2+ YEARS OF&lt;br class=&quot;app-text&quot;&gt;&lt;span class=&quot;app-text&quot;&gt;EXCELLENCE&lt;/span&gt;">
          </ExpEduComponent>
          <ExpEduComponent :data="education"
            title="EDUCATION &&lt;br class=&quot;app-text&quot;&gt;&lt;span class=&quot;app-text&quot;&gt;CERTIFICATE&lt;/span&gt;">
          </ExpEduComponent>
          <InsightCompoenent></InsightCompoenent>
          <ToolsComponent></ToolsComponent>
          <ContactComponent></ContactComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import AboutComponent from './components/AboutComponent.vue';
  import IntroComponent from './components/IntroComponent.vue';
  import ContactComponent from './components/ContactComponent.vue';
  import ToolsComponent from './components/ToolsComponent.vue';
  import ExpEduComponent from './components/ExpEduComponent.vue';
  import InsightCompoenent from './components/InsightCompoenent.vue';
  var expriences = [
    {
        "title":"Software Developer @IPS Pakistan",
        "duration":"June 2024 - Present",
        "detail":[
            "Developed an in-house SMS marketing portal with bulk messaging, scheduling, and contact management, later adapted for external sale by adding payment-based SMS and agent limits.",
            "Designed and implemented a Socket Server using Laravel Reverb, replacing Pusher for real-time updates, which reduced operational costs by cutting out third-party subscription dependencies.",
            "Updated older Laravel projects to the latest configurations to enhance maintainability, security, and performance while optimizing operations for improved efficiency.",
            "Effectively handled and worked on multiple projects concurrently, demonstrating excellent time management and multitasking skills."
        ]

    },
    {
        "title":"Laravel Developer @TriSage Solutions",
        "duration":"Oct 2022 - May 2024",
        "detail":[
            "Developed and scheduled a Cron job to automate the process of retrieving data from third-party APIs, streamlining data management and enhancing app functionality.",
            "Review team members code for quality assurance and providing constructive feedback for improvement, Contributed to the deployment process, ensuring smooth and efficient releases to Production and Beta environments.",
            "Designed and implemented an architecture for the app's payment service, ensuring secure and reliable transactions for users.",
            "Designed and developed a professional, responsive website using Tailwind css, ensuring seamless compatibility across various devices and screen sizes.",
            "Effectively mentored and managed interns and juniors, contributing to their professional growth, resulting in improved overall team efficiency."
        ]

    },
    {
        "title":"Internship @Remote",
        "duration":"May 2022 - Oct 2022",
        "detail":[
            "Worked as an assistant of Senior Software Engineer where learn about Page layout, Blade directives, Form handling, Request validation, CRUD operations, Dependency Injection and Eloquent Relationships.",
            "Learn to design database structure and write clean, efficient, and scalable code, ensuring applications performance",
        ]

    },
  ];
  var education = [
    {
        "title":"University of the Punjab",
        "duration":"2019 - 2023",
        "detail":[
            "Bachelor of Science in Information Technology"
        ]

    },
    {
        "title":"Lahore Board",
        "duration":"2017 - 2019",
        "detail":[
            "Intermediate (Pre-Engineering)"
        ]

    },
    {
        "title":"Coursera",
        "duration":"April 2023",
        "detail":[
            "Foundations of Project Management",
        ]

    },
  ]
</script>
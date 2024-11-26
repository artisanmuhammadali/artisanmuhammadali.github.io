<template>
  <div class="app-tools-sec" name="Tools" id="tools">
    <h2 class="app-text app-styles-preset">Frameworks<br class="app-text"><span class="app-text">&
        TOOLS</span></h2>
    <div class="app-tools-container">
      <div v-for="tool in tools" class="tools app-tool">
        <img decoding="async" loading="lazy" :src="`/tools/${tool}.svg`" :alt="`${tool} icon`" :title="`${ tool}`">
      </div>
    </div>
  </div>
</template>
<script setup>
  var tools = [
    'laravel',
    'php',
    'javascript',
    'vue',
    'jquery',
    'tailwind',
    'bootstrap',
    'html5',
    'css3',
    'mysql',
    'mongodb',
    'postman',
    'github',
    'slack',
    'jira',
    'vscode',
    'laragon',
    'linux',
  ]
</script>
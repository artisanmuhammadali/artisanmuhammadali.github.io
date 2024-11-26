<template>
    <div class=" app-exp-section" name="Experience" id="experience">
        <h2 class="app-text app-styles-preset" v-html="title"></h2>
        <div class="app-exp-detail-sec">
            <div class="d-contents">
                <div v-for="experience in data" class="app-exp-container app-exp-item mb-5">
                    <div class="app-exp-inner">
                        <div class="app-comp-div  exp-head">
                            <div class="app-comp-text">
                                <h3 class="app-text app-styles-preset-block">{{ experience.title }}</h3>
                            </div>
                            <div class="app-exp-time">
                                <div class="app-timeline-text">
                                    <p class="app-text">{{ experience.duration }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="app-exp-detail app-text">
                            <ul>
                                <li v-for="detail in experience.detail">
                                    {{ detail }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
  title : String,
  data : Array
})
</script>
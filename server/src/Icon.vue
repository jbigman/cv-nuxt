<script setup lang="ts">
import TypeScriptIcon from './icons/TypeScriptIcon.vue'
import NodeJsIcon  from './icons/NodeJsIcon.vue'
import ReactIcon  from './icons/ReactIcon.vue'
import AutonomieIcon  from './icons/AutonomieIcon.vue'
import BrainIcon  from './icons/BrainIcon.vue'
import FireFighterIcon  from './icons/FireFighterIcon.vue'
import YoutubeIcon  from './icons/YoutubeIcon.vue'
import LinkedInIcon  from './icons/LinkedInIcon.vue'
import CodinGameIcon  from './icons/CodinGameIcon.vue'
import GithubIcon  from './icons/GithubIcon.vue'
import DiscordIcon  from './icons/DiscordIcon.vue'

defineProps<{
  name: string
}>()
</script>

<template>
  <DiscordIcon v-if="name === 'discord'" class="icon" :size="30"/>
  <TypeScriptIcon v-else-if="name === 'ts'" class="icon" :size="42"/>
  <NodeJsIcon v-else-if="name === 'node'" class="icon" :size="30"/>
  <ReactIcon v-else-if="name === 'react'" class="icon" :size="42"/>
  <AutonomieIcon v-else-if="name === 'autonomie'" class="icon legend" :size="30"/>
  <FireFighterIcon v-else-if="name === 'fire'" class="icon legend"  :size="30"/>
  <BrainIcon v-else-if="name === 'brain'" class="icon legend" :size="30"/>
  <YoutubeIcon v-else-if="name === 'youtube'" class="icon" :size="30"/>

  <LinkedInIcon v-else-if="name === 'linkedin'" class="icon" :size="30"/>
  <GithubIcon v-else-if="name === 'github'" class="icon" :size="30"/>
  <CodinGameIcon v-else-if="name === 'cg'" class="icon" :size="30"/>
</template>

<style lang="scss" scoped>

.legend {
  background-color: #f38229;
  padding: calc($main-padding / 2);
}

</style>

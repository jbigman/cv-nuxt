<script setup lang="ts">
defineProps<{
    size?: number
}>()
</script>

<template>
        <svg fill="none" viewBox="-11.5 -10.23174 23 20.46348" :width="size" :height="size" xmlns="http://www.w3.org/2000/svg"
        
        >
            <title>React Logo</title>
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
        </svg>
</template>
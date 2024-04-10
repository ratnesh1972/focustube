<!-- eslint-disable vue/no-parsing-error -->
<script setup>
import {ref} from 'vue';

const isDisplay = ref(11);

// ============== Conditional Rendering ===============
// Always use v-else-if and v-else immidiatedly after v-if for them
// to be considered.
// v-if can be used on temapltes.
// v-if is lazy loaded and v-show renders the element regardless of the initial condition.
// v-show only changes the display css property of elements.
// Use v-if, when condition is unlikely to change at runtime.
// Use v-show when element is needs to be toggled frequently.
</script>

<template>
    <!-- Conditional Rendering -->
    <div v-if="isDisplay > 10">
        <h1>isDisplay > 10</h1>
        <p>This block will be visible only if isDisplay is > 10.</p>
    </div>
    <div v-else-if="isDisplay >= 0 && isDisplay <= 10">
        <h1>isDisplay in Range 0 - 10</h1>
        <p>This block will be visible only if isDisplay is in range of 0 to 10.</p>
    </div>
    <div v-else>
        <h1>isDisplay < 0</h1>
        <p>This block will be visible only if isDisplay value is -ve.</p>
    </div>
    <div v-show="isDisplay > 10">
        <h1>v-show</h1>
        <p>This block will be visible only if isDisplay is > 10.</p>
    </div>
</template>
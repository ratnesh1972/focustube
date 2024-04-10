<script setup>
import {ref} from 'vue';

import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import Button from 'primevue/button';

const searchInput = ref('');
</script>

<template>
    <h1>{{ searchInput }}</h1>
    <InputGroup>
        <InputText v-model="searchInput" placeholder="Search" />
        <Button icon="pi pi-search" />
    </InputGroup>
</template>
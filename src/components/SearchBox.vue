<script setup>
import {ref} from 'vue';

import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

// v-model is used on a component to implement two way bindings.
const value = ref('This is msg');

</script>

<template>
    <div>
        <h1>{{ value }}</h1>
        <IconField iconPosition="left">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText v-model="value" placeholder="Search"/>
        </IconField>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
const logo = ref('/public/logo.png');
const spinning = ref(false);
const delayTime = 500;
// while loading the page, show the loading spinner
window.addEventListener('beforeunload', () => {
    spinning.value = true;
});
</script>

<template>
     <a-spin :spinning="spinning" :delay="delayTime">
        <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div>
                <Link href="/">
                    <img :src="logo" class="block h-20 w-auto" alt="Konkurs Logo" />
                </Link>
            </div>

            <div
                class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg"
            >
                <slot />
            </div>
        </div>
    </a-spin>
</template>

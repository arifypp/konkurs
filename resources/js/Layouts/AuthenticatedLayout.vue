<script setup>
import { ref } from 'vue';
import Header from '@/Layouts/Partials/User/Header.vue';
import Sidebar from '@/Layouts/Partials/User/Sidebar.vue';
import Footer from '@/Layouts/Partials/User/Footer.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
const skelloading = ref(false);

// skelloading.value = true when loading the page content
window.addEventListener('beforeunload', () => {
    skelloading.value = true;
});
// when changing the page, show the loading spinner
window.addEventListener('page-loading', () => {
    skelloading.value = true;
});
const showingNavigationDropdown = ref(false);
</script>

<template>
    <a-layout style="min-height: 100vh">
        <!-- Sidebar -->
        <Sidebar />
        <a-layout>
            <!-- Header -->
            <Header />
            <a-layout-content style="margin: 0 16px">
                <!-- Breadcrumbs -->
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
                    <slot name="header" />
                </a-breadcrumb>
                <!-- Body Section -->
                <div :style="{ padding: 0 }">
                    <a-skeleton :loading="skelloading">
                    <slot />
                    </a-skeleton>
                </div>
            </a-layout-content>
            <!-- Footer -->
            <Footer />
        </a-layout>
    </a-layout>
</template>

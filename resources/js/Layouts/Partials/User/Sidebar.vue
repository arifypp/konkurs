<script setup>
import {
    DashboardOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    DownOutlined,
    ApartmentOutlined,
    DatabaseOutlined,
    CalendarOutlined,
    PieChartOutlined,
    BarChartOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
const logo = ref('/public/logo.png');
const collapsed = ref(false);
const selectedKeys = ref(['1']);
const openKeys = ref(['sub1']) ?? [];

const onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    this.openKeys = openKeys
    } else {
    this.openKeys = latestOpenKey ? [latestOpenKey] : []
    }
}

const toggleCollapsed  = () => {
  collapsed.value = !collapsed.value;
};

const handleClick = (e) => {
  console.log('click ', e);
  selectedKeys.value = e.key;
  openKeys.value = e.keyPath;
};
</script>
<template>
    <a-layout-sider v-model:collapsed="collapsed" collapsible width="280">
        <div class="logo px-3 py-1 text-center m-auto">
            <Link :href="route('user.dashboard')">
            <img :src="logo" alt="logo" width="200" />
            </Link>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" :inline-collapsed="collapsed" :openKeys="openKeys" @openChange="onOpenChange">
            <a-menu-item-group title="App Features" />
            <a-menu-item key="dashboard" :class="{ 'ant-menu-item-selected': route().current('user.dashboard') }">
                <Link :href="route('user.dashboard')">
                    <dashboard-outlined /><span>Dashboard</span>
                </Link>
            </a-menu-item>
            <!-- Konkurs Category -->
            <a-menu-item key="category" :class="{ 'ant-menu-item-selected': route().current('user.konkurs-category.index') }">
                <Link :href="route('user.konkurs-category.index')">
                    <apartment-outlined /><span>Konkurs Category</span>
                </Link>
            </a-menu-item>
            <!-- Konkurs Total -->
            <a-menu-item key="konkurs-index" :class="{ 'ant-menu-item-selected': route().current('user.konkurs.index') }">
                <Link :href="route('user.konkurs.index')">
                    <database-outlined /><span>Konkurs Total</span>
                </Link>
            </a-menu-item>
            <!-- Today Konkurs Data -->
            <a-menu-item key="konkurs-today" :class="{ 'ant-menu-item-selected': route().current('user.konkurs.today') }">
                <template #icon>
                    <CalendarOutlined />
                </template>
                <Link :href="route('user.konkurs.today')">
                    Today Konkurs
                </Link>
            </a-menu-item>
            <a-menu-item key="konkurs-yesterday" :class="{ 'ant-menu-item-selected': route().current('user.konkurs.yesterday') }">
                <template #icon>
                    <CalendarOutlined />
                </template>
                <Link :href="route('user.konkurs.yesterday')">
                    Yesterday Konkurs
                </Link>
            </a-menu-item>
            <a-menu-item key="konkurs-monthly" :class="{ 'ant-menu-item-selected': route().current('user.konkurs.monthly') }">
                <template #icon>
                    <CalendarOutlined />
                </template>
                <Link :href="route('user.konkurs.monthly')">
                    Monthly Konkurs
                </Link>
            </a-menu-item>
            <a-menu-item key="konkurs-yearly" :class="{ 'ant-menu-item-selected': route().current('user.konkurs.yearly') }">
                <template #icon>
                    <CalendarOutlined />
                </template>
                <Link :href="route('user.konkurs.yearly')">
                    Yearly Konkurs
                </Link>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>
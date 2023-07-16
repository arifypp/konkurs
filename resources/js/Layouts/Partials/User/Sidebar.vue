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
            <a-menu-item-group title="Application Dashboard" />
            <a-menu-item key="dashboard" :class="{ 'ant-menu-item-selected': route().current('user.dashboard') }">
                <Link :href="route('user.dashboard')">
                    <dashboard-outlined /><span>Dashboard</span>
                </Link>
            </a-menu-item>
            <a-menu-item-group title="App Features" />
            <a-sub-menu key="konkurs_cat" :class="{ 'ant-menu-item-selected': route().current('user.konkurs-category.index') }">
                <template #title>
                    <span><apartment-outlined />
                    <span>Konkurs Category</span>
                    </span>
                </template>
                <a-menu-item key="sub1-2">
                    <Link :href="route('user.konkurs-category.index')">Manage Category</Link>
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2-2" :class="{ 'ant-menu-item-selected': route().current('user.konkurs.index') }">
                <template #title>
                    <span><database-outlined />
                    <span>All Konkurs</span>
                    </span>
                </template>
                <a-menu-item key="konkurs-manage">
                    <Link :href="route('user.konkurs.index')">Manage Konkurs</Link>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>
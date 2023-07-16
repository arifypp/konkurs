<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { DownOutlined } from '@ant-design/icons-vue';
</script>

<template>
    <a-layout-header style="background: #fff; padding: 0">
        <a-row>
            <a-col :span="4" :offset="20">
                <a-dropdown style="display: flex;">
                    <a class="ant-dropdown-link d-flex float-right mr-5" @click.prevent>
                        <div style="display: flex; align-items: center;">
                        <img
                            :src="'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'"
                            class="ant-avatar-sm ant-avatar-circle"
                            alt="Avatar"
                            width="25"
                        />
                        <span style="margin-left: 8px;margin-right: 5px;">{{ $page.props.auth.user.name }}</span>
                        <DownOutlined />
                        </div>
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item>
                                <Link :href="route('profile.edit')">Edit Profile </Link>
                            </a-menu-item>
                            <a-menu-item>
                                <Link :href="route('logout')" method="post" as="button">Log Out</Link>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-col>
        </a-row>
    </a-layout-header>
</template>
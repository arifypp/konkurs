
<script setup>
import { ref, watch } from 'vue';
import { message } from 'ant-design-vue';

// Props
const props = defineProps({
    visible: { type: Boolean, required: true }, // Controls drawer visibility
    mode: { type: String, default: 'add' }, // "add" or "edit"
    initialData: { type: Object, default: () => ({ email: '' }) }, // Data for edit mode
});

// Emits
const emit = defineEmits(['update:visible', 'submit']);

// State
const rules = { required: true, type: 'email' };
const email = ref('');

// Watch initial data changes
watch(
    () => props.initialData,
    (newData) => {
        email.value = newData.email || '';
    },
    { immediate: true }
);

// Close Drawer
const onClose = () => {
    emit('update:visible', false); // Notify parent to hide the drawer
};

// Handle Form Submission
const onSubmit = () => {
    emit('submit', { email: email.value, mode: props.mode }); // Notify parent with the form data
    onClose();
};
</script>
<template>
    <a-drawer
        :title="mode === 'add' ? 'Add Email' : 'Edit Email'"
        :visible="visible"
        :closable="true"
        width="50%"
        :footer-style="{ textAlign: 'right' }"
        :rules="rules"
        @close="onClose"
    >
        <template #default>
            <a-form 
                layout="vertical" 
                @submit.prevent="onSubmit"
            >
                <a-form-item label="Email" :rules="[{ required: true }]">
                    <a-input v-model:value="email" placeholder="Enter email address" allowClear/>
                </a-form-item>

                <a-space>
                    <a-button type="primary" @click="onSubmit">
                        {{ mode === 'add' ? 'Add Email' : 'Update Email' }}
                    </a-button>
                    <a-button @click="onClose">Cancel</a-button>
                </a-space>
            </a-form>
        </template>
    </a-drawer>
</template>
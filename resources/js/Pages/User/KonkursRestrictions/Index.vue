<script setup>
import { ref, onMounted, watch, computed, reactive } from 'vue';
import { usePage, router, Head, useForm } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import { message, Modal } from 'ant-design-vue';
import EmailDrawer from './EmailDrawer.vue';

const drawerVisible = ref(false);
const drawerMode = ref('add'); // "add" or "edit"
const drawerInitialData = ref({}); // Data for edit mode

const loading = ref(true);
const Maildata = ref([]);

// Table Columns
const columns = [
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Action',
        key: 'action',
        slots: { customRender: 'action' }, // Custom render for actions
    },
];


// Open Drawer for Add
const openAddDrawer = () => {
    drawerMode.value = 'add';
    drawerInitialData.value = {}; // Reset data for adding
    drawerVisible.value = true;
};

// Open Drawer for Edit
const openEditDrawer = (record) => {
    // Use Inertia router to visit the edit page
    drawerMode.value = 'edit';
    drawerVisible.value = true;
    const editData = Maildata.value.find((item) => item.id === record);
    drawerInitialData.value = {
        id: record,
        email: editData.email
    };
    
};

// Handle Submit
const handleDrawerSubmit = (formData) => {
    // Create a new form instance for each submission
    const form = useForm({
        email: formData.email
    });
    loading.value = true;
    if (drawerMode.value === 'add') {
        // Add Konkurs Category
        form.post(route('user.email-restrictions.store'), {
            preserveScroll: true,
            onSuccess: (data) => {
                loading.value = false;
                drawerVisible.value = false;
                message.success("Email Restriction Added Successfully");
                Maildata.value = data.props.konkursEmailRestrictions || [];
            },
            onError: () => {
                loading.value = false;
                const errors = form.errors;
                Object.keys(errors).forEach((key) => {
                    message.error(errors[key]);
                });
                // add ant design error class to input field
                const errorClass = document.querySelectorAll('.ant-form-item-explain-error');
            },
        });
    } else if (drawerMode.value === 'edit') {
        loading.value = true;
        // Update Konkurs Category
        form.put(route('user.email-restrictions.update', drawerInitialData.value.id), {
            _method: 'PUT',
            preserveScroll: true,
            onSuccess: (data) => {
                drawerVisible.value = false;
                message.success("Email Restriction Updated Successfully");
                Maildata.value = data.props.konkursEmailRestrictions || [];
                loading.value = false;
            },
            onError: () => {
                loading.value = false;
                const errors = form.errors;
                Object.keys(errors).forEach((key) => {
                    message.error(errors[key]);
                });
                // add ant design error class to input field
                const errorClass = document.querySelectorAll('.ant-form-item-explain-error');
            }
        });
    }
};

const deleteRole = (id) => {
    const deleteUrl = route('user.email-restrictions.destroy', id);
    loading.value = true;
    Modal
        .confirm({
        title: 'Are you sure delete this Email?',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk: () => {
            router.delete(deleteUrl, {
            preserveScroll: true,
            onSuccess: (data) => {
                loading.value = false;
                Maildata.value = data.props.konkursEmailRestrictions;
                message.success("Email Restriction Deleted Successfully");
            },
            onError: () => {
                loading.value = false;
                message.error("Something Went Wrong");
            },
            });
        },
        onCancel: () => {
            loading.value = false;
            message.error("Deletion Cancelled");
        }
    });
};

// Pagination configuration
const pagination = reactive({
    current: usePage().props.konkursEmailRestrictions.current_page || 1,
    pageSize: usePage().props.konkursEmailRestrictions.per_page || 10,
    total: usePage().props.konkursEmailRestrictions.total || 0,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ['10', '20', '50', '100']
});

 // Handle table changes (pagination, filters, sorter)
 const handleTableChange = (newPagination, filters, sorter) => {
    loading.value = true;

    // Use Inertia router to handle pagination
    router.get(route('user.email-restrictions.index'), {
    page: newPagination.current,
    per_page: newPagination.pageSize,
    // Include any existing filters or sorting
    ...filters,
    ...sorter
    }, {
    preserveState: true,
    preserveScroll: true,
    onFinish: () => {
        loading.value = false;
        pagination.current = newPagination.current;
        pagination.pageSize = newPagination.pageSize;
        pagination.total = usePage().props.konkursEmailRestrictions.total;

        // Handle sorting
        if (sorter.field && sorter.order) {
            const sortBy = sorter.field;
            const sortDirection = sorter.order === 'ascend' ? 'asc' : 'desc';
            Maildata.value = usePage().props.konkursEmailRestrictions.data || [];
            Maildata.value.sort((a, b) => {
                if (a[sortBy] < b[sortBy]) {
                    return sortDirection === 'asc' ? -1 : 1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return sortDirection === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }

        // Handle filters
        if (filters) {
            Maildata.value = usePage().props.konkursEmailRestrictions.data || [];
            Object.keys(filters).forEach((key) => {
                if (filters[key]) {
                    Maildata.value = Maildata.value.filter((item) => item[key] === filters[key]);
                }
            });
        }
    }
    });
};

// Fetch data when component mounts
onMounted(() => {
    setTimeout(() => {
        Maildata.value = usePage().props.konkursEmailRestrictions.data || []; // Fallback to empty array if undefined
        loading.value = false;
    }, 1000); // Simulated delay
});

</script>

<template>
    <Head title="Manage Email Restrictions" />

    <AuthenticatedLayout>
        <template #header>
            <a-breadcrumb-item>Manage Email Restrictions</a-breadcrumb-item>
            <a-button type="primary" style="float: right;" @click="openAddDrawer">
                <PlusOutlined /> Add Konkurs Category
            </a-button>
        </template>

        <!-- Table -->
        <a-table
            :columns="columns"
            :data-source="Maildata"
            :loading="loading"
            :pagination="pagination"
            row-key="email"
            @change="handleTableChange"
        >
            <!-- Action Slot -->
            <template #action="{ record }">
                <span>
                    <a-space size="middle">
                        <a-tooltip title="Edit">
                            <a-button type="primary" size="medium" shape="square" @click="openEditDrawer(record.id)">
                            <template #icon>
                                <edit-outlined />
                            </template>
                            </a-button>
                        </a-tooltip>
                        <a-tooltip title="Delete">
                            <a-button type="danger" size="medium" shape="square" @click="deleteRole(record.id)">
                            <template #icon>
                                <delete-outlined />
                            </template>
                            </a-button>
                        </a-tooltip>
                        <!-- Email Drawer -->
                        <EmailDrawer
                            :visible="drawerVisible"
                            :mode="drawerMode"
                            :initial-data="drawerInitialData"
                            @update:visible="(val) => (drawerVisible = val)"
                            @submit="handleDrawerSubmit"
                        />
                    </a-space>
                </span>
            </template>
        </a-table>
    </AuthenticatedLayout>
</template>
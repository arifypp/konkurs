<template>
    <Head title="Monthly Konkkurs" />

    <AuthenticatedLayout>
        <Add :visible="AddKonkursVisible" @close="AddKonkursVisible = false" />
        <template #header>
        <a-breadcrumb-item>Manage Konkurs</a-breadcrumb-item>
        <a-button type="primary" style="float: right;" @click="AddKonkursDrawer">
            <template #icon>
                <PlusOutlined />
            </template>
            Add Konkurs
        </a-button>
        </template>
        <a-row type="flex" gutter="16">
            <a-col :span="24" :order="2">
                <a-card style="width: 100%; height: 100%; padding: 0px;">
                    <a-card-meta title="Today Konkurs List" description="https://w2.brreg.no/kunngjoring/index.jsp" /> 
                    <a-divider />
                    <!-- Export to excel -->
                    <a-space style="margin-bottom: 16px;">
                        <a-button type="primary" @click="ExportToExcel">
                            <template #icon>
                                <file-excel-outlined />
                            </template>
                            Export to Excel
                        </a-button>
                        <a-button type="primary" @click="ExportToCSV">
                            <template #icon>
                                <export-outlined />
                            </template>
                            Export to CSV
                        </a-button>
                    </a-space>
                    <a-table
                        :columns="columns"
                        :data-source="TodayKonkurs"
                        :pagination="pagination"
                        :loading="loading"
                        :row-selection="rowSelection" 
                        :rowKey="record => record.id"
                        @change="handleTableChange"
                    >
                        <template #konkurs_name="{ text }">
                            <Link :href="route('user.konkurs.show', text)">
                                {{ text }}
                                {{ text.length > 10 ? '...' : '' }}
                            </Link>
                        </template>
                        <template #created_at="{ text }">
                            {{ moment(text).format('DD MMMM, YYYY') }}
                        </template>
                        <template #konkurs_category_id="{ text }">
                            {{ getCategoryName(text) }}
                        </template>
                        <template #email_send="{ text }">
                            <a-tag color="green" v-if="text == 1">Yes</a-tag>
                            <a-tag color="red" v-else>No</a-tag>
                        </template>
                        <template #action="{ record }">
                            <span>
                                <a-space size="middle">
                                    <a-tooltip title="Send Mail">
                                        <a-button type="primary" size="medium" shape="square" @click="SendKonkursMail(record.id)">
                                            <template #icon>
                                                <send-outlined />
                                            </template>
                                        </a-button>
                                    </a-tooltip>
                                    <a-tooltip title="Delete">
                                        <a-button type="danger" size="medium" shape="square" @click="deleteKonkurs(record.id)">
                                            <template #icon>
                                                <delete-outlined />
                                            </template>
                                        </a-button>
                                    </a-tooltip>
                                </a-space>
                            </span>
                        </template>
                    </a-table>
                </a-card>
            </a-col>
        </a-row>
    </AuthenticatedLayout>
</template>

<script>
import { ref, computed } from 'vue';
import { MailOutlined, CalendarOutlined, SendOutlined, DeleteOutlined, FileExcelOutlined, ExportOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { Link, useForm, usePage, Head, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Add from '@/Pages/User/KonkursData/Add.vue';
import { Modal, message } from 'ant-design-vue';
import moment from 'moment';

export default {
    components: {
        AuthenticatedLayout,
        MailOutlined,
        PlusOutlined,
        CalendarOutlined,
        SendOutlined,
        FileExcelOutlined,
        ExportOutlined,
        DeleteOutlined,
        Head,
        Link,
        Add,
    },
    setup() {
        // const { data: { konkurs } } = usePage().props;
        const TodayKonkurs = usePage().props.konkursData;
        const loading = ref(false);
        const AddKonkursVisible = ref(false);
        const categories = ref(usePage().props.konkursCategories);
        const getCategoryName = (id) => {
            const category = categories.value.find((category) => category.id == id);
            return category ? category.name : '';
        };
        const columns = ref([
            {
                title: 'Company Name',
                dataIndex: 'konkurs_name',
                key: 'konkurs_name',
                slots: { customRender: 'konkurs_name' },
            },
            {
                title: 'Ad. Name',
                dataIndex: 'konkurs_advocate',
                key: 'konkurs_advocate',
                slots: { customRender: 'konkurs_advocate' },
            },
            {
                title: 'Ad. Email',
                dataIndex: 'konkurs_advocate_email',
                key: 'konkurs_advocate_email',
                slots: { customRender: 'konkurs_advocate_email' },
            },
            {
                title: 'Org Number',
                dataIndex: 'konkurs_phone',
                key: 'konkurs_phone',
                slots: { customRender: 'konkurs_phone' },
            },
            {
                title: 'Location',
                dataIndex: 'konkurs_category_id',
                key: 'konkurs_category_id',
                slots: { customRender: 'konkurs_category_id' },

            },
            {
                title: 'Email Status',
                dataIndex: 'email_send',
                key: 'email_send',
                slots: { customRender: 'email_send' }
            },         
            {
                title: 'Date',
                dataIndex: 'created_at',
                key: 'created_at',
                slots: { customRender: 'created_at' },
            },
            {
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
                slots: { customRender: 'action' },
            },
        ]);

        const pagination = ref({
            current: 1,
            pageSize: 10,
            total: 0,
            showSizeChanger: true,
            showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total} items`,
        });

        const AddKonkursDrawer = () => {
            AddKonkursVisible.value = true;
        };
        const handleClick = (e) => {
            console.log('click ', e);
            selectedKeys.value = e.key;
            openKeys.value = e.keyPath;
        };
        const selectedKeys = ref([]);
        const openKeys = ref(['sub1']) ?? [];
        const onOpenChange = (openKeys) => {
            const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
            if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.openKeys = openKeys
            } else {
            this.openKeys = latestOpenKey ? [latestOpenKey] : []
            }
        }

        const rowSelection = ref({
            onChange: (selectedRowKeys, selectedRows) => {
                rowSelection.value.selectedRowKeys = selectedRowKeys; // Update selectedRowKeys when rows are selected
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },

            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
        });

        // ExportToExcel check if onSelectedRowKeys is not empty
        const ExportToExcel = () => {
            if (rowSelection.value.selectedRowKeys && rowSelection.value.selectedRowKeys.length > 0) {
                const selectedIds = rowSelection.value.selectedRowKeys; // Get the selected row IDs

                const exportUrl = route('user.konkurs.export', { id: selectedIds }); // Pass the selectedIds as an array

                // Create an anchor tag
                const link = document.createElement('a');
                link.href = exportUrl;
                link.download = 'konkursdata.xlsx';

                // Programmatically click the anchor tag to trigger the file download
                link.click();
                link.remove();

                message.success('Exported Successfully');
            } else {
                message.error('Please Select At Least One Row');
            }
        };

        // Sennd Mail
        const SendKonkursMail = (id) => {
            const sendEmail = route('user.konkurs.sendmail', { id: id });
            Modal.confirm({
                title: 'Are you sure you want to send mail?',
                content: 'When clicked the OK button, this dialog will be closed after 1 second',
                okText: 'OK',
                cancelText: 'Cancel',
                onOk: () => {
                    loading.value = true;
                    router.get(sendEmail, {
                        onSuccess: () => {
                            loading.value = false;
                            message.success('Mail Sent Successfully');
                        },
                        onError: () => {
                            loading.value = false;
                            message.error('Something Went Wrong');
                        },
                    });
                    
                },
            });
        };
        
        // Delete Konkurs
        const deleteKonkurs = (id) => {
            const deleteUrl = route('user.konkurs.destroy', { id: id });
            Modal
                .confirm({
                title: 'Are you sure delete this Konkurs Category?',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk: () => {
                    router.delete(deleteUrl, {
                    preserveScroll: true,
                    onSuccess: (data) => {
                        data.value = usePage().props.konkursData;
                        message.success("Konkurs Deleted Successfully");
                    },
                    onError: () => {
                        message.error("Something Went Wrong");
                    },
                    });
                },
                })
                // .then(() => {})
                // .catch(() => {});
            
        };
        
        return {
            // konkurs,
            AddKonkursVisible,
            AddKonkursDrawer,
            handleClick,
            selectedKeys,
            openKeys,
            onOpenChange,
            TodayKonkurs,
            columns,
            loading,
            pagination,
            moment,
            categories,
            getCategoryName,
            rowSelection,
            SendKonkursMail,
            ExportToExcel,
            deleteKonkurs
        };
    },
};
</script>
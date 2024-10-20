<template>
    <Head title="Manage Category" />
  
  <AuthenticatedLayout>
    <Add :visible="AddKonkursVisible" @close="AddKonkursVisible = false" />
    <template #header>
      <a-breadcrumb-item>Manage Konkurs</a-breadcrumb-item>
        <a-button type="primary" style="float: right;" @click="AddKonkursVisible = true">
        <template #icon>
          <PlusOutlined />
        </template>
        Add Konkurs
      </a-button>
    </template>
    <a-row type="flex" gutter="16">
        <a-col :span="24" :order="2">
            <a-card style="width: 100%; height: 100%; padding: 0px;" :loading="loading">
                <a-card-meta title="Advanced search in announcements" description="https://w2.brreg.no/kunngjoring/index.jsp" />
                <a-divider />
                <!-- Form from date, to date and category for filter -->
                <a-form :model="form" :layout="formLayout" @finish="onFinish" :span="24">
                    <a-row :gutter="12">
                        <a-col :span="6">
                            <a-form-item label="From Date" :rules="[{ required: true, message: 'Please input from date!' }]">
                                <a-date-picker v-model:value="form.from_date" :format="dateFormat" :span="24" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="6">
                            <a-form-item label="To Date" name="to_date" :rules="[{ required: true, message: 'Please input to date!' }]">
                                <a-date-picker v-model:value="form.to_date" :format="dateFormat" :span="24" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="6">
                            <a-form-item label="Category" name="category" :rules="[{ required: true, message: 'Please input category!' }]" span="24">
                                <a-select v-model:value="form.category" placeholder="Select a category" :span="24">
                                    <a-select-option v-for="item in categories" :key="item.id" :value="item.id">
                                        {{ item.name }}
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="6">
                            <a-form-item label=" " name="submit">
                                <a-button type="primary" html-type="submit" :span="24">Filter Konkurs</a-button>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-form>
                <a-divider />
                <!-- Table data with pagination -->
                <a-table :columns="columns" :data-source="data" :pagination="pagination" :loading="loading" showSizeChanger="true" :rowKey="record => record.id">
                    <template #konkurs_name="{ text, record }">
                        <a :href="'#' + record.id" @click.prevent="ShowKonkur(record.id)">
                            {{ text }}
                            {{ text.length > 10 ? '...' : '' }}
                        </a>
                    </template>
                    <template #created_at="{ text }">
                        {{ moment(text).format('DD MMMM, YYYY') }}
                    </template>
                    <template #konkurs_category_id="{ text }">
                        {{ getCategoryName(text) }}
                    </template>
                    <template #action="{ record }">
                        <span>
                            <a-space size="middle">
                                <a-tooltip title="Edit">
                                    <a-button type="primary" size="medium" shape="square" @click="EditKonkurs(record.id)">
                                        <template #icon>
                                            <form-outlined />
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
                <Show :visible="ShowKonkursVisible" @close="ShowKonkursVisible = false" :id="ShowKonkursId" :konkurs="konkurs" />
                <Edit :visible="EditKonkursVisible" :id="EditKonkursId" @close="EditKonkursVisible = false" />
            </a-card>
        </a-col>
    </a-row>
  </AuthenticatedLayout>
</template>

<script>
import { ref, computed } from 'vue';
import { MailOutlined, CalendarOutlined, FormOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { Link, useForm, usePage, Head, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Modal, message } from 'ant-design-vue';
import moment from 'moment';
import Add from '@/Pages/User/KonkursData/Add.vue';
import Show from '@/Pages/User/KonkursData/Show.vue';
import Edit from '@/Pages/User/KonkursData/Edit.vue';
import axios from 'axios';
    export default {
        components: {
            AuthenticatedLayout,
            MailOutlined,
            CalendarOutlined,
            FormOutlined,
            DeleteOutlined,
            PlusOutlined,
            Head,
            Link,
            Add,
            Show,
            Edit,
            Modal,
        },
        setup() {
            const AddKonkursVisible = ref(false);
            const ShowKonkursVisible = ref(false);
            const konkurs = ref(null);
            const EditKonkursVisible = ref(false);
            const EditKonkursId = ref(null);
            const ShowKonkursId = ref(null);
            const form = useForm({
                from_date: null,
                to_date: null,
                category: null,
            });
            const formLayout = ref('inline');
            const dateFormat = ref('YYYY-MM-DD');
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

            const data = ref(usePage().props.konkursData);
            const categories = ref(usePage().props.konkursCategories);
            const getCategoryName = (id) => {
                const category = categories.value.find((category) => category.id == id);
                return category ? category.name : '';
            };
            const loading = ref(false);

            // const pagination = ref({
            //     current: 1,
            //     pageSize: 10,
            //     total: 0,
            //     showSizeChanger: true,
            //     showQuickJumper: true,
            // });

            const handleTableChange = (pagination, filters, sorter) => {
                // console.log(pagination);
                // console.log(filters);
                // console.log(sorter);
            };

            const onFinish = (values) => {
                
                // console.log('Success:', values);
            };

            // Show konkurs
            const ShowKonkur = (id) => {
                ShowKonkursVisible.value = true;
                ShowKonkursId.value = id;
                // get data from backend in axios
                axios.get(route('user.konkurs.show', { id: id }))
                    .then((response) => {
                        console.log(response.data);
                        konkurs.value = response.data;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            };

            // Edit Konkurs component
            // get form data from EditKonkurs component
            const Editform = ref(null);
            
            const EditKonkurs = (id) => {
                EditKonkursVisible.value = true;
                EditKonkursId.value = id;
                Editform.name = "test";
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
                AddKonkursVisible,
                ShowKonkursVisible,
                form,
                formLayout,
                dateFormat,
                columns,
                data,
                loading,
                // pagination,
                handleTableChange,
                onFinish,
                moment,
                getCategoryName,
                categories,
                ShowKonkur,
                konkurs,
                ShowKonkursId,
                EditKonkurs,
                EditKonkursVisible,
                EditKonkursId,
                deleteKonkurs
            }
        }
    }
</script>
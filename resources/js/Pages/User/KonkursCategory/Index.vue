<template>
    <Head title="Manage Category" />
  
    <AuthenticatedLayout>
      <template #header>
        <a-breadcrumb-item>Manage Konkurs</a-breadcrumb-item>
        <a-button type="primary" style="float: right;" @click="visible = true">
          <template #icon>
            <plus-outlined />
          </template>
          Add Konkurs Category
        </a-button>
      </template>
  
      <a-table 
        :columns="columns" 
        :data-source="AllKonkursCategory" 
        :loading="loading" 
        >
        
        <template #action="{ record }">
            <span>
                <a-space size="middle">
                    <a-tooltip title="Edit">
                        <a-button type="primary" size="medium" shape="square" @click="editRole(record.id)">
                          <template #icon>
                            <edit-outlined />
                          </template>
                        </a-button>
                    </a-tooltip>
                    <a-tooltip title="Delete">
                        <a-button type="danger" size="medium" shape="square" @click="deleteKonkursCategory(record.id)">
                          <template #icon>
                            <delete-outlined />
                          </template>
                        </a-button>
                    </a-tooltip>
                </a-space>
            </span>
        </template>
      </a-table>
  
      <!-- Create Konkurs Category -->
      <a-drawer
        title="Add Konkurs Category"
        :size="size"
        :visible="visible"
        @close="onClose"
        width="50%"
        :footer-style="{ textAlign: 'right' }"
        :maskClosable="false"
        :loading="form.processing"
      >
        <a-form 
            layout="vertical" 
            @submit.prevent="form.post(route('user.konkurs-category.store'))"
            :validate-messages="validateMessages"
            :model="form"
            :rules="rules"
            :loading="loading"
        >
          <a-form-item 
            label="Name"
            :rules="[{ required: true }]"
          >
            <a-input v-model:value="form.name" placeholder="Enter Name" allowClear />
          </a-form-item>
          <a-form-item label="Status" :rules="[{ required: true }]">
            <a-select placeholder="Select Status" v-model:value="form.status" allowClear>
              <a-select-option value="active">Active</a-select-option>
              <a-select-option value="inactive">Inactive</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="Description">
            <a-textarea v-model:value="form.desc" placeholder="Enter Description" allowClear />
          </a-form-item>
        </a-form>
        <template #footer>
          <a-space>
              <a-button style="margin-right: 8px" @click="onClose">
                <template #icon>
                 <close-outlined />
                </template>
                Cancel
              </a-button>
              <a-button type="primary" html-type="submit" :loading="loading" :disabled="disabled" @click="CreateKonkursCategory">
                <template #icon>
                  <save-outlined />
                </template>
              Create Konkurs Category
              </a-button>
          </a-space>
        </template>
      </a-drawer>
      <!-- Edit Konkurs Category Drawer -->
      <a-drawer
        title="Edit Konkurs Category"
        :size="size"
        :visible="Editvisible"
        @close="onEditClose"
        width="50%"
        :footer-style="{ textAlign: 'right' }"
        :maskClosable="false"
      >
        <a-form 
            layout="vertical" 
            :validate-messages="validateMessages"
            :model="Editform"
            :rules="rules"
        >
          <a-form-item 
            label="Name"
            :rules="[{ required: true }]"
          >
            <a-input v-model:value="Editform.name" placeholder="Enter Name" allowClear />
          </a-form-item>
          <a-form-item label="Status" :rules="[{ required: true }]">
            <a-select placeholder="Select Status" v-model:value="Editform.status" allowClear>
              <a-select-option value="active">Active</a-select-option>
              <a-select-option value="inactive">Inactive</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="Description">
            <a-textarea v-model:value="Editform.desc" placeholder="Enter Description" allowClear />
          </a-form-item>
        </a-form>
        <template #footer>
          <a-space>
              <a-button style="margin-right: 8px" @click="onClose">
                <template #icon>
                 <close-outlined />
                </template>
                Cancel
              </a-button>
              <a-button type="primary" html-type="submit" :loading="loading" :disabled="disabled" @click="UpdateKonkursCategory">
                <template #icon>
                  <save-outlined />
                </template>
                Update Konkurs Category
              </a-button>
          </a-space>
        </template>
      </a-drawer>
    </AuthenticatedLayout>
  </template>


<script>
import { ref, computed } from 'vue';
import { Link, useForm, usePage, Head, router } from '@inertiajs/vue3';
import { message } from 'ant-design-vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Modal } from 'ant-design-vue';
import { PlusOutlined, EditOutlined, DeleteOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    AuthenticatedLayout,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    SaveOutlined,
    CloseOutlined,
    Head,
    Link,
    Modal,
  },
  setup() {
    const { app } = usePage();
    const loading = ref(false); // Set initial loading state to true
    const Editvisible = ref(false);
    const AllKonkursCategory = ref(usePage().props.konkursCategories);
    const visible = ref(false);
    const size = ref('large');
    const onClose = () => {
      visible.value = false;
    };
    const onEditClose = () => {
      Editvisible.value = false;
    };

    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        slots: { customRender: 'id' },
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        slots: { customRender: 'name' },
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        slots: { customRender: 'desc' },
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        slots: { customRender: 'status' },
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        slots: { customRender: 'action' },
      },
    ];
    
    
    const form = useForm({
      name: '',
      desc: '',
      status: '',
    });


    const Editform = useForm({
      name: '',
      desc: '',
      status: '',
    });

    // Create Konkurs Category
    const CreateKonkursCategory = () => {
      loading.value = true;
      form.post(route('user.konkurs-category.store'), {
        preserveScroll: true,
        onSuccess: (data) => {
          form.reset();
          loading.value = false;
          visible.value = false;
          AllKonkursCategory.value = usePage().props.konkursCategories;
          message.success("Konkurs Category Added Successfully");
        },
        onError: () => {
          const errors = form.errors;
          Object.keys(errors).forEach((key) => {
            message.error(errors[key]);
          });
          // add ant design error class to input field
          const errorClass = document.querySelectorAll('.ant-form-item-explain-error');
        },
      });
    };

    // Edit Konkurs Category
    const editRole = (record) => {
      Editvisible.value = true;
      const id = record;
      const konkursCategory = AllKonkursCategory.value.find((konkursCategory) => konkursCategory.id === id);
      Editform.id = konkursCategory.id;
      Editform.name = konkursCategory.name;
      Editform.desc = konkursCategory.description;
      Editform.status = konkursCategory.status;
    };

    // Update Konkurs Category
    const UpdateKonkursCategory = () => {
      loading.value = true;
      Editform.put(route('user.konkurs-category.update', Editform.id), {
        preserveScroll: true,
        onSuccess: (data) => {
          Editform.reset();
          loading.value = false;
          Editvisible.value = false;
          AllKonkursCategory.value = usePage().props.konkursCategories;
          message.success("Konkurs Category Updated Successfully");
        },
        onError: () => {
          const errors = Editform.errors;
          Object.keys(errors).forEach((key) => {
            message.error(errors[key]);
          });
          // add ant design error class to input field
          const errorClass = document.querySelectorAll('.ant-form-item-explain-error');
        },
      });
    };

    // Delete Konkurs Category
    const deleteKonkursCategory = (record) => {
      const id = record;
      const konkursCategory = AllKonkursCategory.value.find((konkursCategory) => konkursCategory.id === id);
      const deleteUrl = route('user.konkurs-category.destroy', id);
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
                AllKonkursCategory.value = usePage().props.konkursCategories;
                message.success("Konkurs Category Deleted Successfully");
              },
              onError: () => {
                message.error("Something Went Wrong");
              },
            });
          },
        })
        .then(() => {})
        .catch(() => {});
    };

    return {
      loading,
      columns,
      AllKonkursCategory,
      visible,
      Editvisible,
      size,
      onClose,
      onEditClose,
      form,
      Editform,
      CreateKonkursCategory,
      editRole,
      UpdateKonkursCategory,
      deleteKonkursCategory,
    };
  },
};
</script>
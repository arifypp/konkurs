<template>
    <!-- Add Konkurs form inside drawer -->
    <a-drawer
        title="Add Konkurs"
        :size="size"
        :visible="AddKonkursVisible"
        @close="onClose"
        width="50%"
        :footer-style="{ textAlign: 'right' }"
        :maskClosable="false"
    >
        <a-form 
            layout="vertical" 
            :validate-messages="validateMessages"
            :model="form"
            :rules="rules"
        >
            <!-- Form left and right -->
            <a-row :gutter="15">
                <!-- Form left -->
                <a-col :span="12">
                    <a-form-item label="Konkurs Name" name="name">
                        <a-input v-model:value="form.name" />
                    </a-form-item>
                </a-col>
                <!-- Form right -->
                <a-col :span="12">
                    <a-form-item label="Konkurs type" name="category">
                        <a-select v-model:value="form.category" allowClear placeholder="Select Category" ShowSearch>
                            <a-select-option v-for="category in categories" :key="category.id" :value="category.id">
                                {{ category.name }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <!-- Form left -->
                <a-col :span="12">
                    <a-form-item label="Konkurs Status" name="status">
                        <a-select v-model:value="form.status" allowClear placeholder="Select Status">
                            <a-select-option value="active">Active</a-select-option>
                            <a-select-option value="inactive">Inactive</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <!-- Form right -->
                <a-col :span="12">
                    <a-form-item label="Konkurs website" name="website">
                        <a-input v-model:value="form.website" autocomplete="off"/>
                    </a-form-item>
                </a-col>
                <!-- Form left -->
                <a-col :span="12">
                    <a-form-item label="Konkurs phone" name="phone" autocomplete="off">
                        <a-input-group compact>
                            <a-input style="width: 70%" v-model:value="form.phone" @input="form.phone = form.phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')" allowClear autocomplete="off"/>
                            <a-button type="primary" style="width: 30%" @click="onSearch" :loading="SearchLoading">
                                <template #icon>
                                    <search-outlined />
                                </template>
                            </a-button>
                        </a-input-group>
                    </a-form-item>
                </a-col>
                <!-- Form right -->
                <a-col :span="12">
                    <a-form-item label="Industry / Position" name="industry_position">
                        <a-input v-model:value="form.industry_position" />
                    </a-form-item>
                </a-col>
                <!-- Form left -->
                <a-col :span="12">
                    <a-form-item label="State" name="state">
                        <a-input v-model:value="form.state" />
                    </a-form-item>
                </a-col>
                <!-- Form right -->
                <a-col :span="12">
                    <a-form-item label="Post code" name="post_code">
                        <a-input v-model:value="form.post_code" />
                    </a-form-item>
                </a-col>
                <!-- Form Full -->
                <a-col :span="24">
                    <a-form-item label="Konkurs Address" name="address">
                        <a-textarea v-model:value="form.address" />
                    </a-form-item>
                </a-col>
                <a-divider />
                <!-- Advocate email and phone -->
                <a-col :span="12">
                    <a-form-item label="Konkurs Advocate Name" name="advocaname" autocomplete="off">
                        <a-input v-model:value="form.advocaname" autocomplete="off"/>
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="Konkurs Advocate Email" name="advocateemail" autocomplete="off">
                        <a-input v-model:value="form.advocateemail" autocomplete="off"/>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
        <template #footer>
            <a-space>
                <a-button style="margin-right: 8px" @click="onClose">
                    <template #icon>
                        <close-outlined />
                    </template>
                    Cancel
                </a-button>
                <a-button type="primary" html-type="submit" :loading="loading" :disabled="disabled" @click="CreateKonkurs">
                    <template #icon>
                        <save-outlined />
                    </template>
                    Create Konkurs
                </a-button>
            </a-space>
        </template>
    </a-drawer>
</template>

<script>
import { ref } from 'vue';
import { SearchOutlined, CloseOutlined, SaveOutlined } from '@ant-design/icons-vue';
import { Link, useForm, usePage, Head, router } from '@inertiajs/vue3';
import { message } from 'ant-design-vue';
import axios from 'axios';
export default {
    components: {
        CloseOutlined,
        SearchOutlined,
        SaveOutlined,
    },
    setup() {
        const form = useForm({
            name: '',
            category: '',
            website: '',
            phone: '',
            industry_position: '',
            state: '',
            post_code: '',
            address: '',
            advocateemail: '',
            advocaname: '',
        });
        
        // form post
        const rules = ref({
            name: [
                {
                    required: true,
                    message: 'Please input Konkurs Category Name',
                },
            ],
            category: [
                {
                    required: true,
                    message: 'Please select Konkurs Category',
                },
            ],
            phone: [
                {
                    required: true,
                    pattern: /^[0-9]*$/,
                    onInput: (e) => {
                        // Remove spaces from the input value
                        e.target.value = e.target.value.replace(/\s/g, '');
                    },
                    message: 'Please input Konkurs Phone',
                },
            ],
            industry_position: [
                {
                    required: true,
                    message: 'Please input Konkurs Industry / Position',
                },
            ],
            state: [
                {
                    required: true,
                    message: 'Please input Konkurs State',
                },
            ],
            post_code: [
                {
                    required: true,
                    message: 'Please input Konkurs Post Code',
                },
            ],
            address: [
                {
                    required: true,
                    message: 'Please input Konkurs Address',
                },
            ],
            advocateemail: [
                {
                    required: true,
                    message: 'Please input Konkurs Advocate Email',
                },
            ],
            advocaname: [
                {
                    required: true,
                    message: 'Please input Konkurs Advocate Phone',
                },
            ],
        });
        const validateMessages = ref({
            required: 'This field is required',
        });
        const loading = ref(false);
        const SearchLoading = ref(false);
        const disabled = ref(false);
        const size = ref('md');
        const AddKonkursVisible = ref(false);
        const onClose = () => {
            AddKonkursVisible.value = false;
        };
        const filterOption = (input, option) => {
            return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };
        // Category data
        const categories = ref(usePage().props.konkursCategories);
        // onSearch function send to backend with phone number and get data with route name
        const onSearch = () => {
            SearchLoading.value = true;
            // get phone number from form
            const phone = form.phone;
            axios
                .get('https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer=' + phone)
                .then((response) => {
                    // set data to form
                    const underenheterData = response.data._embedded.enheter[0];
                    form.name = underenheterData.navn;
                    form.status = 'active';
                    form.website = underenheterData.hjemmeside ?? '';
                    form.phone = underenheterData.organisasjonsnummer;
                    form.industry_position = underenheterData.naeringskode1.beskrivelse;
                    form.state = underenheterData.forretningsadresse.kommune;
                    form.post_code = underenheterData.forretningsadresse.postnummer;
                    form.address = underenheterData.forretningsadresse.adresse[0];
                    form.advocateemail = underenheterData.konkursboetAdvokat[0].epostadresse;
                    form.advocaname = underenheterData.konkursboetAdvokat[0].telefonnummer;
                    // set form disabled
                    SearchLoading.value = false;
                })
                .catch((error) => {
                    console.log(error);
                    SearchLoading.value = false;
                });
        };
        // Create Konkurs
        const CreateKonkurs = () => {
            loading.value = true;
            disabled.value = true;
            form.post(route('user.konkurs.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    loading.value = false;
                    disabled.value = false;
                    AddKonkursVisible.value = false;
                    message.success("Konkurs Created Successfully");
                    form.reset();
                    // router.push({ name: 'user.konkurs.index' });
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                },
                onError: () => {
                disabled.value = false;
                loading.value = false;
                const errors = form.errors;
                    Object.keys(errors).forEach((key) => {
                        message.error(errors[key]);
                    });
                    // add ant design error class to input field
                    const errorClass = document.querySelectorAll('.ant-form-item-explain-error');
                },
            });
        };

        return {
            form,
            rules,
            validateMessages,
            loading,
            disabled,
            size,
            AddKonkursVisible,
            onClose,
            onSearch,
            SearchLoading,
            categories,
            CreateKonkurs,
            filterOption,
        };
    },
}
</script>
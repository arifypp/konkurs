<template>
    <!-- Add Konkurs form inside drawer -->
    <a-drawer
        title="Edit Konkurs"
        :size="size"
        :visible="EditKonkursVisible && EditKonkursId !== null"
        :id="EditKonkursId"
        @close="onClose"
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
            <!-- Form left and right -->
            <a-row :gutter="15">
                <!-- Form left -->
                <a-col :span="12">
                    <a-form-item label="Konkurs Name" name="name">
                        <a-input v-model:value="Editform.name" />
                    </a-form-item>
                </a-col>
                <!-- Form right -->
                <a-col :span="12">
                    <a-form-item label="Konkurs type" name="category">
                        <a-select v-model:value="Editform.category" allowClear placeholder="Select Category" ShowSearch>
                            <a-select-option v-for="category in categories" :key="category.id" :value="category.id">
                                {{ category.name }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <!-- Form left -->
                <a-col :span="12">
                    <a-form-item label="Konkurs Status" name="status">
                        <a-select v-model:value="Editform.status" allowClear placeholder="Select Status">
                            <a-select-option value="active">Active</a-select-option>
                            <a-select-option value="inactive">Inactive</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <!-- Form right -->
                <a-col :span="12">
                    <a-form-item label="Konkurs website" name="website">
                        <a-input v-model:value="Editform.website" />
                    </a-form-item>
                </a-col>
                <!-- Form left -->
                <a-col :span="12">
                    <a-form-item label="Konkurs phone" name="phone">
                        <!-- Phone with search button -->
                        <a-input-group compact>
                            <a-input style="width: 70%" v-model:value="Editform.phone" />
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
                        <a-input v-model:value="Editform.industry_position" />
                    </a-form-item>
                </a-col>
                <!-- Form left -->
                <a-col :span="12">
                    <a-form-item label="State" name="state">
                        <a-input v-model:value="Editform.state" />
                    </a-form-item>
                </a-col>
                <!-- Form right -->
                <a-col :span="12">
                    <a-form-item label="Post code" name="post_code">
                        <a-input v-model:value="Editform.post_code" />
                    </a-form-item>
                </a-col>
                <!-- Form Full -->
                <a-col :span="24">
                    <a-form-item label="Konkurs Address" name="address">
                        <a-textarea v-model:value="Editform.address" />
                    </a-form-item>
                </a-col>
                <a-divider />
                <!-- Advocate email and phone -->
                <a-col :span="12">
                    <a-form-item label="Konkurs Advocate Name" name="advocaname">
                        <a-input v-model:value="Editform.advocaname" />
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="Konkurs Advocate Email" name="advocateemail">
                        <a-input v-model:value="Editform.advocateemail" />
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
                    Cancel</a-button>
                <a-button type="primary" html-type="submit" :loading="loading" :disabled="disabled" @click="UpdateKonkurs">
                    <template #icon>
                        <save-outlined />
                    </template>
                    Update Konkurs
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
        SearchOutlined,
        CloseOutlined,
        SaveOutlined,
    },
    setup() {
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
                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
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
        const EditKonkursVisible = ref(false);
        const onClose = () => {
            EditKonkursVisible.value = false;
        };

        // Edit Konkurs
        const EditKonkursId = usePage().props.EditKonkursId;
        const Editform = useForm({
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
        
        // get value of EditKonkursId from index page
        const EditKonkurs = (id) => {
            alert(id);
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
            const phone = Editform.phone;
            axios
                .get('https://data.brreg.no/enhetsregisteret/api/enheter?organisasjonsnummer=' + phone)
                .then((response) => {
                    // set data to form
                    const underenheterData = response.data._embedded.enheter[0];
                    Editform.name = underenheterData.navn;
                    Editform.status = 'active';
                    Editform.website = underenheterData.hjemmeside ?? '';
                    Editform.phone = underenheterData.organisasjonsnummer;
                    Editform.industry_position = underenheterData.naeringskode1.beskrivelse;
                    Editform.state = underenheterData.forretningsadresse.kommune;
                    Editform.post_code = underenheterData.forretningsadresse.postnummer;
                    Editform.address = underenheterData.forretningsadresse.adresse[0];
                    Editform.advocateemail = underenheterData.konkursboetAdvokat[0].epostadresse;
                    Editform.advocaname = underenheterData.konkursboetAdvokat[0].telefonnummer;
                    // set form disabled
                    SearchLoading.value = false;
                })
                .catch((error) => {
                    console.log(error);
                    SearchLoading.value = false;
                });
        };
        // Update Konkurs
        const UpdateKonkurs = () => {
            loading.value = true;
            disabled.value = true;
            Editform.post(route('user.konkurs.store'), {
                preserveScroll: true,
                onSuccess: () => {
                    loading.value = false;
                    disabled.value = false;
                    EditKonkursVisible.value = false;
                    message.success("Konkurs Created Successfully");
                },
                onError: () => {
                disabled.value = false;
                loading.value = false;
                const errors = Editform.errors;
                    Object.keys(errors).forEach((key) => {
                        message.error(errors[key]);
                    });
                    // add ant design error class to input field
                    const errorClass = document.querySelectorAll('.ant-form-item-explain-error');
                },
            });
        };

        return {
            Editform,
            rules,
            validateMessages,
            loading,
            disabled,
            size,
            EditKonkursVisible,
            onClose,
            onSearch,
            SearchLoading,
            categories,
            UpdateKonkurs,
            filterOption,
            EditKonkurs,
            EditKonkursId
        };
    },
}
</script>
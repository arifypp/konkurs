<template>
    <!-- Show Konkurs form inside drawer -->
    <a-drawer
        :title=konkurs.konkurs_name
        :size="size"
        :visible="ShowKonkursVisible"
        @close="onClose"
        width="50%"
        :footer-style="{ textAlign: 'right' }"
        :maskClosable="true"
        :id="ShowKonkursId"
        :konkurs="konkurs"
    >
            <!-- Form left and right -->
            <a-row :gutter="15">
                <!-- Form left -->
                <a-col :span="12">
                    Konkurs Name: <strong @click.prevent="NameCopied">{{ konkurs.konkurs_name }}</strong>
                </a-col>
                <!-- Form right -->
                <a-col :span="12">
                    Konkurs Website: <a href="{{ konkurs.konkurs_website }}" target="_blank">{{ konkurs.konkurs_website }}</a>
                </a-col>
                <!-- Form left -->
                <a-col :span="12">
                    Konkurs Phone: {{ konkurs.konkurs_phone }}
                </a-col>
                <!-- Form right -->
                <a-col :span="12">
                    Industry or position: {{ konkurs.konkurs_industry_position }}
                </a-col>
                <!-- Form left -->
                <a-col :span="12">
                    State: {{ konkurs.konkurs_state }}
                </a-col>
                <!-- Form right -->
                <a-col :span="12">
                    Post Code: {{ konkurs.konkurs_zip }}
                </a-col>
                <!-- Form Full -->
                <a-col :span="24">
                    Address: {{ konkurs.konkurs_address }}
                </a-col>
                <a-divider />
                <!-- Advocate email and phone -->
                <a-col :span="12">
                    Advocate Name: {{ konkurs.konkurs_advocate }}
                </a-col>
                <a-col :span="12">
                    Advocate Email: <a href="mailto:{{ konkurs.konkurs_advocate_email }}" @click.prevent="MailCopied">{{ konkurs.konkurs_advocate_email }}</a>
                </a-col>
                <a-divider title="Konkurs Description" />
                <a-col :span="24">
                    <a-input type="text" class="mb-3" :value="'Konkursboet til ' + konkurs.konkurs_name" readonly style="width: 100%; margin-bottom:10px;" @click.prevent="subjectCopy"/>
                    <textarea rows="15" style="width: 100%" readonly @click.prevent="CopyMailBody">Hei {{ konkurs.konkurs_advocate }},

Jeg ser at du er oppnevnt som bobestyrer i boet til {{ konkurs.konkurs_name }}. I den forbindelse lurer jeg på om det er eiendeler/fordringer eller varelager som skal selges? Om det er tilfelle så er vi interessert i å komme med et bud. Vi sørger for at penger overføres samme dag som avtalen skrives. Sabba Invest AS kjøper konkursbo fra kr 1 000 til kr 5 000 000

Mvh
Espen Holmstrand
Sales Manager
Sabba Invest AS
www.ksalg.no
Phone: +47 955 55 531
Ksalg.no eies og driftes av selskapet Sabba Invest AS org: 929 2554 6135
                    </textarea>
                </a-col>
            </a-row>
        <template #footer>
            <a-space>
                <a-button style="margin-right: 8px" @click="onClose">
                    <template #icon>
                        <close-outlined />
                    </template>
                    Cancel
                </a-button>
                <a-button type="primary" :loading="loading" :disabled="disabled" @click="KonkursMailSend">
                    <template #icon>
                        <save-outlined />
                    </template>
                    Konkurs Mail Send
                </a-button>
            </a-space>
        </template>
    </a-drawer>
</template>

<script>
import { ref, watch  } from 'vue';
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
    props: {
        konkurs: Object, // Define the konkurs prop
    },
    setup(props) {
        const konkurs = ref({});
        const ShowKonkursId = ref(null);
        const loading = ref(false);
        const disabled = ref(false);
        const size = ref('md');
        const ShowKonkursVisible = ref(false);
        const onClose = () => {
            ShowKonkursVisible.value = false;
        };

        // KonkursMailSend function to send the mail to konkurs advocate
        const KonkursMailSend = () => {
            // Set the loading and disabled to true
            loading.value = true;
            disabled.value = true;
            // Set the konkurs mail send url
            const url = route('user.konkurs.customSending', { id: konkurs.value.id });
            // Send the konkurs mail send request
            axios.get(url)
                .then((response) => {
                    // Set the loading and disabled to false
                    loading.value = false;
                    disabled.value = false;
                    // Show the success message
                    message.success(response.data.message);
                    // Close the drawer
                    onClose();
                    // reload the page after 2 seconds
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                })
                .catch((error) => {
                    // Set the loading and disabled to false
                    loading.value = false;
                    disabled.value = false;
                    // Show the error message
                    message.error(error.response.data.message);
                    ShowKonkursVisible.value = false;
                });
        };

        

        // Watch for changes in the konkurs data
        watch(() => props.konkurs, (newKonkurs) => {
            // Update the konkurs ref
            konkurs.value = newKonkurs;
        });

        // NameCopied
        const NameCopied = (e) => {
            // Prevent the default action
            e.preventDefault();
            // Copy the name to clipboard
            navigator.clipboard.writeText(konkurs.value.konkurs_name);
            // Show the success message
            message.success('Name copied to clipboard');
        };

        // MailCopied function to copy the email to clipboard
        const MailCopied = (e) => {
            // Prevent the default action
            e.preventDefault();
            // Copy the email to clipboard
            navigator.clipboard.writeText(konkurs.value.konkurs_advocate_email);
            // Show the success message
            message.success('Email copied to clipboard');
        };

        // CopyMailBody function to copy the mail body to clipboard
        const CopyMailBody = (e) => {
            // Prevent the default action
            e.preventDefault();
            // Get textarea element and copy the mail body to clipboard
            const mailBody = document.querySelector('textarea');
            mailBody.select();
            document.execCommand('copy');
            // Show the success message
            message.success('Mail body copied to clipboard');
        };
        
        // subjectCopy
        const subjectCopy = (e) => {
            // Prevent the default action
            e.preventDefault();
            // Copy the subject to clipboard
            navigator.clipboard.writeText('Konkursboet til ' + konkurs.value.konkurs_name);
            // Show the success message
            message.success('Subject copied to clipboard');
        };

        return {
            loading,
            disabled,
            size,
            ShowKonkursVisible,
            onClose,
            ShowKonkursId,
            konkurs,
            MailCopied,
            KonkursMailSend,
            CopyMailBody,
            NameCopied,
            subjectCopy
        };
    },
    
    mounted() {
        // Access konkurs data
        console.log('Konkurs data:', this.konkurs);
    }
}

</script>
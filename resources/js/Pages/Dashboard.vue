<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <a col :span="24">
          <div class="mb-5">
            <a-range-picker value-format="YYYY-MM-DD" class="mb-3" />
            <!-- Add digital clock right side -->
            <a-space size="small" class="float-right">
              <a-typography-title :level="3">{{ currentTime.toLocaleTimeString() }}</a-typography-title>
              <a-typography-title :level="5">{{ currentDate }}</a-typography-title>
            </a-space>
          </div>
        </a>
        <a-row :gutter="16">
          <a-col :span="6">
              <a-card :bordered="false">
                <a-space gap="md">
                  <a-button type="primary" shape="circle" size="large">
                    K
                  </a-button>
                  <a-statistic
                  title="Totday Konkurs"
                  :value="today"
                  :precision="0"
                  :value-style="{ color: '#3f8600' }"
                  style="margin-right: 50px"
                  >
                </a-statistic>
                </a-space>
              </a-card>
          </a-col>
          <a-col :span="6">
              <a-card :bordered="false">
                <a-space gap="md">
                  <a-button type="primary" shape="circle" size="large">W</a-button>
                  <a-statistic
                  title="Yesterday Konkurs"
                  :value="yesterday"
                  :precision="0"
                  :value-style="{ color: '#3f8600' }"
                  style="margin-right: 50px"
                  >
                </a-statistic>
                </a-space>
              </a-card>
          </a-col>
          <a-col :span="6">
              <a-card :bordered="false">
                <a-space gap="md">
                  <a-button type="primary" shape="circle" size="large">M</a-button>
                  <a-statistic
                  title="This Month Konkurs"
                  :value="month"
                  :precision="0"
                  :value-style="{ color: '#3f8600' }"
                  style="margin-right: 50px"
                  >
                </a-statistic>
                </a-space>
              </a-card>
          </a-col>
          <a-col :span="6">
              <a-card :bordered="false">
                <a-space gap="md">
                  <a-button type="primary" shape="circle" size="large">Y</a-button>
                  <a-statistic
                  title="This Year Konkurs"
                  :value="year"
                  :precision="0"
                  :value-style="{ color: '#3f8600' }"
                  style="margin-right: 50px"
                  >
                </a-statistic>
                </a-space>
              </a-card>
          </a-col>
      </a-row>
      <div class="mt-5">
        <a-row :gutter="16">
          <a-col :span="6">
              <a-card title="Konkurs Pie Chart" :bordered="false">
                <div id="chartbarsmall"></div>
              </a-card>
          </a-col>
          <a-col :span="18">
              <a-card title="Konkurs Statistics" :bordered="false">
                <div class="chart-container" style="position: relative; width:100%; overflow: hidden;">
                  <div id="chartbar"></div>
                </div>
              </a-card>
          </a-col>
        </a-row>
      </div>

    </AuthenticatedLayout>
</template>

<script>
import { ref, onMounted  } from 'vue';
import {
    DashboardOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    DownOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
} from '@ant-design/icons-vue';
import { Link, useForm, usePage, Head, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ApexCharts from 'apexcharts';
import { useCurrentTime } from "@/timer";

export default {
    components: {
        AuthenticatedLayout,
        DashboardOutlined,
        DesktopOutlined,
        UserOutlined,
        TeamOutlined,
        FileOutlined,
        DownOutlined,
        ArrowUpOutlined,
        ArrowDownOutlined,
        Head,
    },
    setup() {
      // Current time
      const { currentTime } = useCurrentTime();
      // Get today date from vue
      const currentDate = new Date().toLocaleDateString();
      // Chart Bar data
      const today = ref(usePage().props.today);
      const yesterday = ref(usePage().props.yesterday);
      const month = ref(usePage().props.month);
      const year = ref(usePage().props.year);
        // Chart Bar
        onMounted(() => {
          var options = {
            series: [{
              name: 'Konkurs',
              data: [44, 55, 41, 67, 22, 43, 21, 49, 45, 50, 60, 70]
            }],
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: false,
              },
              zoom: {
                enabled: true
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            xaxis: {
              type: 'category',
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            }
          };
          var chart = new ApexCharts(document.querySelector("#chartbar"), options);
          chart.render();
        });
        
        // Chart Bar Small
        onMounted(() => {
          var options = {
            series: [today.value, yesterday.value, month.value, year.value],
      chart: {
      width: 380,
      type: 'pie',
      height: 350
    },
    labels: ['Today', 'Yesterday', 'Month', 'Year'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]  
          };
          var chart = new ApexCharts(document.querySelector("#chartbarsmall"), options);
          chart.render();
        });

        return {
          today,
          yesterday,
          month,
          year,
          currentTime,
          currentDate,
        }

    },
    methods: {
      logout() {
        this.$inertia.post('/logout');
      },
    }
}
</script>

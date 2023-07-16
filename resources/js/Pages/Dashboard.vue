<script setup>
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
import { ref, onMounted  } from 'vue';
import { Link, useForm, usePage, Head, router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ApexCharts from 'apexcharts';

const collapsed = ref(false);
const selectedKeys = ref(['1']);
// Count today, yesterday, month, year
const today = ref(usePage().props.today);
const yesterday = ref(usePage().props.yesterday);
const month = ref(usePage().props.month);
const year = ref(usePage().props.year);

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value;
};
const handleClick = (e) => {
  console.log('click ', e);
  selectedKeys.value = e.key;
};
const logo = ref('/public/logo.png');

const BigChart = ref(null);
const SmallChart = ref(null);
onMounted(() => {
  const ChartOne = {
          series: [{
            name: 'Konkurs',
            data: [44, 55, 57, 56, 61, 58, 63]
          }],
            chart: {
            width: '100%',
            type: 'bar',
            gap: 10,
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '30%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          },
          yaxis: {
            title: {
              text: 'Konkurs Chart'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " data"
              }
            }
          }
      
  };
  BigChart.value = new ApexCharts(document.querySelector('#chartbar'), ChartOne);
  BigChart.value.render();

  
  const ChartTwoOption =   {
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
  SmallChart.value = new ApexCharts(document.querySelector('#chartbarsmall'), ChartTwoOption);
  SmallChart.value.render();
});

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <a col :span="24">
          <div class="mb-5">
            <a-range-picker value-format="YYYY-MM-DD" class="mb-3" />
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

<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'

onMounted(() => {
  drawChart()
})
const drawChart = () => {
  var myChart = echarts.init(document.getElementById('box'))
  var option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  myChart.setOption(option)
}
</script>

<template>
  <page-container title="仓库详情">
    <div id="box" style="width: 600px; height: 400px"></div>
  </page-container>
</template>

<style></style>

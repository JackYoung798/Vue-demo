<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'

onMounted(() => {
  drawChart()
})
const drawChart = () => {
  var overviewChart = echarts.init(document.getElementById('overview'))
  var changeChart = echarts.init(document.getElementById('change'))
  var overviewOption = {
    title: {
      text: '仓库概览',
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
        name: '商品',
        type: 'pie',
        radius: '80%',
        data: [
          { value: 1048, name: '家电类' },
          { value: 735, name: '数码类' },
          { value: 580, name: '服饰类' },
          { value: 484, name: '医药类' },
          { value: 300, name: '食品类' },
          { value: 300, name: '图书类' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 20, //弹起高度
            shadowOffsetX: 0, //阴影面积
            shadowColor: 'rgba(0, 0, 0, 0.5)' //阴影颜色
          }
        }
      }
    ]
  }
  var changeOption = {
    title: {
      text: '出入口情况'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['出库数量', '入库数量']
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '2%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '出库数量',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '入库数量',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  }
  overviewChart.setOption(overviewOption)
  changeChart.setOption(changeOption)
}
</script>

<template>
  <page-container title="仓库详情">
    <div class="box">
      <div id="overview" style="width: 600px; height: 400px"></div>
      <div id="change" style="width: 800px; height: 400px"></div>
    </div>
  </page-container>
</template>

<style>
.box {
  display: flex;
}
</style>

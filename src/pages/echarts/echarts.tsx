import React, { useEffect } from "react";
import * as echarts from 'echarts';

function randomData() {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/') ,  Math.round(value)]
  }
}

const data : object[] = [];
let now : any = +new Date(1997, 9, 3);
const oneDay = 24 * 3600 * 1000;
let value  = Math.random() * 1000;
for (let i = 0; i < 1000; i++) {
  data.push(randomData());
}

const option = {
  title: {
    text: '测试用的主标题',
  },
  tooltip: {
    trigger: 'axis',
    formatter: (params : object[], ticket : string, callback : object) => {
      // console.log(params);
      const p : any = params[0];
      const date = new Date(p.name);
      return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' : ' + p.value[1];
    },
    // axisPointer: ''
  },
  toolbox: {
    show: true,
    orient: 'horizontal',
    feature: {
      saveAsImage: {
        type: 'jpg',
      },
      restore: {},
      dataZoom: {},
      magicType: {
        type: ['line', 'bar', 'stack'],
      },
    },
    right: 40,
  },
  xAxis: {
    type: 'time',
    // splitLine: { shoe: false },
  },
  yAxis: {
    type: 'value',
    boundaryGap: [ 0, 1 ],
    // splitLine: { shoe: false },
  },
  series: [{
    type: 'line',
    name: '模拟数据',
    showSymbol: false,
    hoverAnimation: false,
    data: data,
  }],
};

export default function echartsPage() {

  useEffect(() => {
    const chartDOM : any = document.getElementById('main');
    const myChart = echarts.init(chartDOM);

    if (!chartDOM) {
      console.log('error');
      return ;
    }

    option && myChart.setOption(option);

    const inter = setInterval(function () {
      for (let i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }
      myChart.setOption({
        series: [{
          data: data
        }]
      });
    }, 1000);

    return () => {
      clearInterval(inter);
    }
  }, []);

  return (
    <div id={'main'} style={{ marginTop: 20, height: 'calc(100vh - 50px)'}}>
      ...
    </div>
  )
}

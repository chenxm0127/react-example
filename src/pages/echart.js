import React from 'react';
import ECharts from 'echarts';

class EchartPic extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let picDom = this.refs.pic;
    // 基于准备好的dom，初始化echarts实例
    var myChart = ECharts.init(picDom);
    // 绘制图表
    myChart.setOption({
        title: { text: 'ECharts示例' },
        tooltip: {},
        xAxis: {
            data: ["01","02","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            areaStyle: {normal: {}},
            animation: false,
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  }

  render() {
    return (
      <div ref="pic" style={{width:'400px', height:'400px'}}>
      </div>
    )
  }
 }

 export default EchartPic;
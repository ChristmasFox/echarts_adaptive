<template>
  <div class="content">
    <div class="top">
      <div class="sys_title">
        <div class="logo">
          <img src="../assets/liantong_white.png" alt=""></div>
          <p class="p_text">中国联通防欺诈实时监控系统</p>
      </div>
    </div>
    <div class="middle">
      <!-- 左侧栏totalItem  -->
      <div class="ll">
        <div class="sectionA">
          <div class="section_title">
            <div class="empty"></div>
            <div class="type"><span class="text">诈骗类型分析</span></div>
          </div>
          <!-- 诈骗分析扇形图表 -->
          <div class="ech_scam"></div>
        </div>
        <div class="sectionB">
          <div class="section_title">
            <div class="empty"></div>
            <div class="type"><span class="text">受骗省份Top10</span></div>
          </div>
          <!-- 柱状图排序受骗城市 -->
          <div class="ech_city"></div>
        </div>
      </div>
      <!-- 中部 -->
      <div class="mm mid-wrapper">
        <!-- 数字总数框 -->
        <div class="totalNum">
          <div class="totalItem messageTotal">
            <div class="numDisplay">
              <div class="figure">2</div>
              <div class="split">,</div>
              <div class="figure">0</div>
              <div class="figure">0</div>
              <div class="figure">0</div>
              <div class="split">,</div>
              <div class="figure">8</div>
              <div class="figure">6</div>
              <div class="figure">7</div>
            </div>
            <div class="totalTitle">短信提醒总数</div>
          </div>
          <div class="totalItem phoneTotal">
            <div class="numDisplay">
              <div class="figure">1</div>
              <div class="figure">0</div>
              <div class="split">,</div>
              <div class="figure">9</div>
              <div class="figure">3</div>
              <div class="figure">6</div>
            </div>
            <div class="totalTitle">电话提醒总数</div>
          </div>
          <div class="totalItem policeTotal">
            <div class="numDisplay">
              <div class="figure">4</div>
              <div class="split">,</div>
              <div class="figure">5</div>
              <div class="figure">4</div>
              <div class="figure">4</div>
            </div>
            <div class="totalTitle">转交公安总数</div>
          </div>
        </div>
        <!-- 地图echarts -->
        <div class="ech_map"></div>
      </div>
      <div class="rr">
        <!-- 截止 -->
        <div class="dateTime">
          <span class="timeLaber">截止</span>
          <span class="date">2016/9/15</span>
          <span class="daylong">下午</span>
          <span class="time">15:00:33</span>
        </div>
        <!-- A -->
        <div class="megRemind">
          <div class="section_title">
            <div class="empty"></div>
            <div class="type"><span class="text">10010短信提醒</span></div>
          </div>
          <div class="remindContent active">
            <span>南宁</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
          <div class="remindContent">
            <span>哈尔滨</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
          <div class="remindContent">
            <span>长沙</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
          <div class="remindContent">
            <span>昌明</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
          <div class="remindContent">
            <span>保定</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
        </div>
        <!-- B -->
        <div class="phoneRemind">
          <div class="section_title">
            <div class="empty"></div>
            <div class="type"><span class="text">10010电话提醒</span></div>
          </div>
          <div class="remindContent active">
            <span>南宁</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
          <div class="remindContent">
            <span>哈尔滨</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
          <div class="remindContent">
            <span>长沙</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
          <div class="remindContent">
            <span>昌明</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
        </div>
        <!-- C -->
        <div class="policeRemind">
          <div class="section_title">
            <div class="empty"></div>
            <div class="type"><span class="text">转交公安机关</span></div>
          </div>
          <div class="remindContent active">
            <span>南宁</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
          <div class="remindContent">
            <span>哈尔滨</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
          <div class="remindContent">
            <span>长沙</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
          <div class="remindContent">
            <span>昌明</span><span>130****5454</span><span>仿冒公检法</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom ">
      <div class="trend">
        <div class="ech_msgTrend"></div>
        <div class="ech_phoneTrend"></div>
        <div class="ech_policeTrend"></div>
        <div class="ech_scamTotalNum"></div>
      </div>
    </div>
    <div class="bottomLogo">
      <i>M</i>
      <div class="found">
        <p>Spec with MarkMan 2</p>
        <p>getmarkman.com</p>
      </div>
    </div>
  </div>
</template>
<script>
const mydata = [
  {name: '天津',value: 500 },{name: '澳门',value: 500 },
  {name: '上海',value: 500 },{name: '重庆',value: 500 },
  {name: '河北',value: 500 },{name: '河南',value: 500 },
  {name: '云南',value: 500 },{name: '辽宁',value: 500 },
  {name: '黑龙江',value: 500 },{name: '湖南',value: 500 },
  {name: '安徽',value: 500 },{name: '香港',value: 500 },
  {name: '新疆',value: 500 },{name: '江苏',value: 500 },
  {name: '浙江',value: 500 },{name: '江西',value: 500 },
  {name: '湖北',value: 500 },{name: '台湾',value: 500 },
  {name: '宁夏',value: 500 },{name: '山西',value: 500 },
  {name: '海南',value: 500 },{name: '甘肃',value: 500 },
  {name: '内蒙古',value: 500 },{name: '陕西',value: 500 },
  {name: '吉林',value: 500 },{name: '福建',value: 500 },
  {name: '贵州',value: 500 },{name: '广东',value: 500 },
  {name: '青海',value: 500 },{name: '西藏',value: 500 },
  {name: '山东',value: 5000 },{name: '南海诸岛',value: 500 },
  {name: '四川',value: 2500 },
  {name: '北京',value: 1500 },
  {name: '广西',value: 1100 },
];
const pass_rate = 87634, average = 27215, total = 100000;
import '@/unitls/china.js'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() { 
       this.$echarts.init(document.querySelector(".ech_scam")).setOption({
        title: {
          show: false
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 0,
          top: 180,
          formatter: '{name}',
          textStyle: {
            color: 'white',
            fontSize: 16
          },
          itemWidth: 5,
          itemHeight: 18
        },
        color: ['red','yellow', 'blue', 'orange'],
        series: [
          {
              name: '诈骗类型',
              type: 'pie',
              radius: '50%',
              top: -100,
              data: [
                {value: 806582, name: '7，10%', label: {
                  color: 'white',
                  fontSize: 10,
                }},
                {value: 266490, name: '23.54%', label: {
                  color: 'white',
                }},
                {value: 46649, name: '18.47%', label: {
                  color: 'white',
                }},
                {value: 16649, name: '49.63%', label: {
                  color: 'white',
                }},
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
       })
       this.$echarts.init(document.querySelector('.ech_city')).setOption({
         dataset: [{
            dimensions: ['cityname', 'num'],
            source: [
                ['0', '0'],
                ['河南', '10002'],
                ['广东', '8754'],
                ['湖南', '5875'],
                ['湖北', '4071'],
                ['山东', '3588'],
                ['江苏', '2963'],
                ['陕西', '2012'],
                ['辽宁', '1765'],
                ['武汉', '1280'],
                ['江西', '965'],
            ]
        }, {
            transform: {
                type: 'sort',
                config: { dimension: 'num', order: 'asc' }
            }
        }],
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          axisLabel: { 
            interval: 0, 
            rotate: 0,
            color: '#02cbfe',
            fontSize: 14
          },
          axisLine: {
            show: false
          }
        },
        grid: {
          left: 40,
          top: 20,
          width: 200,
          height: 250
        },
        series: {
          type: 'bar',
          encode: { y: 'cityname', x: 'num' },
          datasetIndex: 1,
          itemStyle: {
            normal: {
              // 定制显示（按顺序）
              color: function(params) { 
                var colorList = [
                  '#00cafd',
                  '#00cafd',
                  '#00cafd',
                  '#00cafd',
                  '#00cafd', 
                  '#00cafd',
                  '#00cafd',
                  '#ffff79',
                  '#ffac27',
                  '#ff4333',
                ]; 
                return colorList[params.dataIndex] 
              }
            },
          },
          label: {
            show: true,
            fontSize: 12,
            position: 'insideRight',
          }
        },
       })
       this.$echarts.init(document.querySelector(".ech_map")).setOption({
         title: {
            show: false
          },
          tooltip : {
            trigger: 'item'
          },
          visualMap: {
            show : false,
            x: 'left',
            y: 'bottom',
            splitList: [ 
              {start: 4501, end:5500},{start: 2000, end: 4500},
              {start: 1000, end: 2000},{start: 100, end: 999},
            ],
            color: ['#e60610',  '#e5a330',  '#e6d810', '#009dff']
          },
          series: [{
            name: '测试数据',
            type: 'map',
            mapType: 'china', 
            // 是否可缩放
            // roam: true,
            top: 30,
            height: 500,
            label: {
              normal: {
                show: true,
                color: '#fff'
              },
              emphasis: {
                show: false
              }
            },
            data:mydata
          }]
       })
       this.$echarts.init(document.querySelector(".ech_msgTrend")).setOption({
         tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        title: {
          text: '短信诈骗趋势',
          top: 15,
          left: 5,
          textStyle: {
            fontSize: 16,
            color: '#02cbfe',
          },
        },
        xAxis: {
          type: 'category',
          data: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
          axisPointer: {
              type: 'shadow'
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [
            {
                type: 'value',
                // name: '水量',
                min: 0,
                max: 5000,
                interval: 1000,
                axisLabel: {
                    formatter: '{value}'
                },
                splitLine: {
                  show: false
                }
            },
            {
                type: 'value',
                // name: '温度',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value}'
                },
                splitLine: {
                  show: false
                }
            }
        ],
        grid: {
          left: 50
        },
        series: [
            {
                // name: '蒸发量',
                type: 'bar',
                data: [2800, 2500, 2200, 2700, 3100, 2000, 1687, 2857, 3540, 2540, 2710, 1500, 3424, 2146, 1567 ,4847 ,3456, 1547]
            },
            {
                // name: '平均温度',
                type: 'line',
                yAxisIndex: 1,
                data: [22.0, 21.2, 13.3, 14.5, 16.3, 10.2, 20.3, 23.4, 23.0, 16.5, 22.0, 16.2, 15.5 ,14.3 ,5.4 ,17.5]
            }
        ]
       })
       this.$echarts.init(document.querySelector(".ech_phoneTrend")).setOption({
         tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        title: {
          text: '电话提醒趋势',
          top: 15,
          left: 5,
          textStyle: {
            fontSize: 16,
            color: '#02cbfe',
          },
        },
        xAxis: [
            {
                type: 'category',
                data: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
                axisPointer: {
                    type: 'shadow'
                },
                splitLine: {
                  show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // name: '水量',
                min: 0,
                max: 5000,
                interval: 1000,
                axisLabel: {
                    formatter: '{value}'
                },
                splitLine: {
            show: false
          }
            },
            {
                type: 'value',
                // name: '温度',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value}'
                },
                splitLine: {
            show: false
          }
            }
        ],
        grid: {
          left: 50
        },
        series: [
            {
                // name: '蒸发量',
                type: 'bar',
                data: [2800, 2500, 2200, 2700, 3100, 2000, 1687, 2857, 3540, 2540, 2710, 1500, 3424, 2146, 1567 ,4847 ,3456, 1547]
            },
            {
                // name: '平均温度',
                type: 'line',
                yAxisIndex: 1,
                data: [2.0, 12.2, 23.3, 14.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 16.2, 15.5 ,14.3 ,25.4 ,17.5]
            }
        ]
       })
       this.$echarts.init(document.querySelector(".ech_policeTrend")).setOption({
         tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        title: {
          text: '转交公安趋势',
          top: 15,
          left: 5,
          textStyle: {
            fontSize: 16,
            color: '#02cbfe',
          },
        },
        xAxis: [
            {
                type: 'category',
                data: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
                axisPointer: {
                    type: 'shadow'
                },
                splitLine: {
            show: false
          }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // name: '水量',
                min: 0,
                max: 5000,
                interval: 1000,
                axisLabel: {
                    formatter: '{value}'
                },
                splitLine: {
            show: false
          }
            },
            {
                type: 'value',
                // name: '温度',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value}'
                },
                splitLine: {
            show: false
          }
            }
        ],
        grid: {
          left: 50
        },
        series: [
            {
                // name: '蒸发量',
                type: 'bar',
                data: [2800, 2500, 2200, 2700, 3100, 2000, 1687, 2857, 3540, 2540, 2710, 1500, 3424, 2146, 1567 ,4847 ,3456, 1547]
            },
            {
                // name: '平均温度',
                type: 'line',
                yAxisIndex: 1,
                data: [22.0, 22.2, 23.3, 24.5, 24.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 26.2, 15.5 ,14.3 ,15.4 ,17.5]
            }
        ]
       })
       this.$echarts.init(document.querySelector(".ech_scamTotalNum")).setOption({
         tooltip: {
            show:false,
            trigger: 'item',
            formatter: "{a} : {c} ({d}%)"
          },
          color: ['#ff4333', 'yellow'],
          legend: {
            orient: 'vertical',
            top: '25%',
            right: -30,
            itemHeight: 15,//图例的高度
            itemWidth: 15,
            itemGap:40,//图例之间的间距
            data:[pass_rate + ' ' + '43%' + '\n' + '境内诈骗号码数量', 
            average + ' ' + '57%' + '\n' + '境外诈骗号码数量'],
            textStyle: {
              color: 'white',
              fontSize: 16,
              width: 160,
              overflow: 'break',
            },
            //图例的名字需要和饼图的name一致，才会显示图例
          },
          series: [
            {
              name: pass_rate + ' ' + '43%' + '\n' + '境内诈骗号码数量',
              type:'pie',
              radius: ['40%', '50%'],
              top: -20,
              left: -150,
              clockwise: false,
              //环的位置
              label: {
                show: false,
                position: 'center',
                  // normal: { // 显示的位置
                  //     position: 'inner'
                  // }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '20',
                      fontWeight: 'bold'
                  }
              },
              data:[
                  {
                    value: pass_rate, //需要显示的数据
                    name: pass_rate,
                    itemStyle: {
                      normal: {
                      color: '#ff4333'
                      }
                    }
                  },
                  {
                    value:total-pass_rate,
                    //不需要显示的数据，颜色设置成和背景一样
                    itemStyle: {
                      normal: {
                      color: 'gray'
                      }
                    }
                }
              ]
            },
            {
              name: average + ' ' + '57%' + '\n' + '境外诈骗号码数量',
              type:'pie',
              radius: ['40%', '30%'],
              top: -20,
              left: -150,
              clockwise: false,
              label: {
                show: false,
                position: 'center',
                  // normal: {
                  //     position: 'inner'
                  // }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '20',
                      fontWeight: 'bold'
                  }
              },
              data:[
                  {   name:average,
                      value:average,
                      itemStyle: {
                          normal: {
                          color: 'yellow'
                          }
                      }
                  },
                {
                      value:total-average,
                      itemStyle: {
                          normal: {
                              color: 'transparent'
                          }
                      }
                }
              ]
            }
          ]
       })
    },
    
  },
}
</script>
<style lang="scss" scoped>
.content {
  width: 1380px;
  height: auto;
  margin: 0 auto;
}
.top {
  width: 1380px;
  margin: 20px;
}
.bottom {
  width: 1380px;
  background-image: url(../assets/darkblue.jpg);
  background-repeat: no-repeat;
  background-size: 900% 500%;
}
.middle {
  width: 1380px;
  display: flex;
  height: 700px;
}
.ll {
  margin-right: 20px;
  min-width: 300px;
  padding: 0 20px;
  box-sizing: border-box;
  /* background-color: red; */
}
.mm {
  width: 1200px;
  min-width: 600px;
  /* background-color: rosybrown; */
}
.rr {
  width: 400px;
  margin: 0 auto;
  margin-left: 40px;
  /* background-color: seagreen; */
}

.sys_title {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.logo {
  width: 100px;
  margin: 0 10px;
}
.sys_title p {
  padding-bottom: 2px;
}
.logo img {
  width: 100%;
}
.sys_title p {
  font-size: 22px;
  letter-spacing: 5px;
  font-weight: bolder;
}

.sectionA, .section_title {
  width: 100%;
}
.section_title {
  height: 40px;
  display: flex;
  box-sizing: border-box;
}
.empty, .type {
  height: 100%;
  box-sizing: border-box;
}
.empty {
  border-bottom: 3px solid rgba(16,189,218,0.2);
  transform: skewX(-30deg);
  width: 50%;
}
.type {
  width: 50%;
  text-align: center;
  line-height: 34px;
  border: 3px solid rgba(16,189,218,0.2);
  transform: skewX(-30deg);
}
.text {
  display: inline-block;
  transform: skewX(20deg);
  color: #4694cb;
  font-weight: bolder;
}

/* 中部 */
.totalNum {
  display: flex;
  justify-content: center;
  height: 110px;
}
.totalItem {
  margin: 0 10px;
  box-sizing: border-box;
  border: 3px solid rgba(16,189,218,0.2);
  border-radius: 7px;
  padding: 0 5px;
  display: flex;
  /* 纵向排列 */
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.numDisplay {
  display: flex;
}

.figure {
  width: 35px;
  height: 50px;
  border-radius: 3px;
  /* border: 3px solid rgba(16,189,218,0.2); */
  background-image: url(../assets/figure.jpg);
  background-size: 35px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  margin: 0 2px;
  color: #ffffff;
}
.split {
  width: 15px;
  height: 50px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #53abe6;
}
.totalTitle {
   font-size: 16px;
   color: #53abe6;
}

/* 右侧边栏 */
/* .deadLine .text {
  color: #ffff78;
} */
.dateTime {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  border-top: 3px solid rgba(16,189,218,0.2);
}
.dateTime span {
  display: inline-block;
}
.timeLaber {
  color: #3a91ff;
}

/* echerts部分 */
.ech_scam {
  width: 100%;
  height: 300px;
  margin: auto;
  display: flex;
  justify-content: center;

}
.ech_city {
  width: 100%;
  height: 300px;
  margin: auto;
  display: flex;
  justify-content: center;
}
.ech_map {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.megRemind .section_title, .phoneRemind .section_title, .policeRemind .section_title {
  margin-top: 35px;
  margin-bottom: 20px;
}
.megRemind .section_title {
  margin-top: 0;
}
.megRemind .text, .megRemind .active span{
  color: #ffff78;
}
.phoneRemind .text, .phoneRemind .active span{
  color: #ffad26
}
.policeRemind .text, .policeRemind .active span{
  color: #b63243;
}
.active {
  color: #ffff78;
}
.remindContent {
  display: flex;
  justify-content: space-between;
  margin: 5px 5px;
}
.remindContent span {
  display: inline-block;
}
.remindContent span:first-child {
  width: 50px;
}

/* bottom */
.trend {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.ech_msgTrend, .ech_phoneTrend, .ech_policeTrend, .ech_scamTotalNum {
  width: 345px;
  height: 240px; 
}

.bottomLogo {
  width: 100%;
  background-color: rgb(37, 37, 37);
  display: flex;
  padding: 0 5px;
  box-sizing: border-box;
}
.bottomLogo i {
  display: inline-block;
  width: 30px;
  height: 30px;
}
</style>
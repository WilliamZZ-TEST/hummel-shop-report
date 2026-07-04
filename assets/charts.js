// assets/charts.js
// Hummel 天猫旗舰店分析报告 - 10 个图表配置
// 数据来源: 6 个 Excel 月报 / 日报
(function() {
  if (typeof echarts === 'undefined') {
    console.error('echarts not loaded');
    return;
  }

  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim() || '#e2001a';
  var ink = style.getPropertyValue('--ink').trim() || '#141413';
  var stone = style.getPropertyValue('--stone').trim() || '#5e5d59';
  var ink15 = style.getPropertyValue('--ink-15').trim() || 'rgba(20,20,19,0.15)';
  var mist = style.getPropertyValue('--mist').trim() || '#f0eee6';
  var canvas = style.getPropertyValue('--canvas').trim() || '#faf9f5';
  var cloud = '#ffffff';
  var secondary = '#2c3e50';
  var ok = '#2ecc71';

  var common = { animation: false, tooltip: { trigger: 'axis' } };
  var commonPie = { animation: false, tooltip: { trigger: 'item' } };

  // ============= Chart 1: 访客数 + 支付金额趋势 =============
  (function() {
    var el = document.getElementById('chart-visitors-revenue');
    if (!el) return;
    var chart = echarts.init(el);
    chart.setOption({
      backgroundColor: canvas,
      grid: { left: '8%', right: '8%', top: 70, bottom: 50 },
      legend: { data: ['访客数', '支付金额'], top: 10, textStyle: { color: ink } },
      xAxis: { type: 'category', data: ['2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'], axisLabel: { color: stone }, axisLine: { lineStyle: { color: ink15 } } },
      yAxis: [
        { type: 'value', name: '访客数', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: function(v){ return (v/1000).toFixed(0) + 'k'; } }, splitLine: { lineStyle: { color: ink15 } } },
        { type: 'value', name: '支付金额（元）', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: function(v){ return (v/10000).toFixed(0) + '万'; } }, splitLine: { show: false } }
      ],
      series: [
        { name: '访客数', type: 'bar', yAxisIndex: 0, data: [81516, 30528, 61000, 70580, 18858, 26386], itemStyle: { color: ink + '44' }, barWidth: '50%' },
        { name: '支付金额', type: 'line', yAxisIndex: 1, smooth: true, data: [351517.78, 129612.45, 108450.32, 110688.94, 79705.63, 66038.89], lineStyle: { color: accent, width: 3 }, itemStyle: { color: accent }, symbol: 'circle', symbolSize: 8, areaStyle: { color: accent + '20' } }
      ]
    });
    window.addEventListener('resize', function(){ chart.resize(); });
  })();

  // ============= Chart 2: 支付转化率 + UV价值 =============
  (function() {
    var el = document.getElementById('chart-conv-uv');
    if (!el) return;
    var chart = echarts.init(el);
    chart.setOption({
      backgroundColor: canvas,
      grid: { left: '8%', right: '8%', top: 70, bottom: 50 },
      legend: { data: ['支付转化率', 'UV价值'], top: 10, textStyle: { color: ink } },
      xAxis: { type: 'category', data: ['2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'], axisLabel: { color: stone }, axisLine: { lineStyle: { color: ink15 } } },
      yAxis: [
        { type: 'value', name: '支付转化率 (%)', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: '{value}%' }, splitLine: { lineStyle: { color: ink15 } } },
        { type: 'value', name: 'UV价值（元）', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: '¥{value}' }, splitLine: { show: false } }
      ],
      series: [
        { name: '支付转化率', type: 'line', yAxisIndex: 0, smooth: true, data: [1.72, 1.37, 0.38, 0.34, 1.01, 0.60], lineStyle: { color: accent, width: 3 }, itemStyle: { color: accent }, symbol: 'circle', symbolSize: 8 },
        { name: 'UV价值', type: 'line', yAxisIndex: 1, smooth: true, data: [4.31, 4.25, 1.78, 1.57, 4.23, 2.50], lineStyle: { color: secondary, width: 3, type: 'dashed' }, itemStyle: { color: secondary }, symbol: 'diamond', symbolSize: 8 }
      ]
    });
    window.addEventListener('resize', function(){ chart.resize(); });
  })();

  // ============= Chart 3: 客单价 + 加购人数 =============
  (function() {
    var el = document.getElementById('chart-aov');
    if (!el) return;
    var chart = echarts.init(el);
    chart.setOption({
      backgroundColor: canvas,
      grid: { left: '8%', right: '8%', top: 70, bottom: 50 },
      legend: { data: ['客单价', '加购人数'], top: 10, textStyle: { color: ink } },
      xAxis: { type: 'category', data: ['2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'], axisLabel: { color: stone }, axisLine: { lineStyle: { color: ink15 } } },
      yAxis: [
        { type: 'value', name: '客单价（元）', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: '¥{value}' }, splitLine: { lineStyle: { color: ink15 } } },
        { type: 'value', name: '加购人数', nameTextStyle: { color: stone }, axisLabel: { color: stone }, splitLine: { show: false } }
      ],
      series: [
        { name: '客单价', type: 'line', yAxisIndex: 0, smooth: true, data: [250.01, 310.82, 463.46, 461.20, 417.31, 420.63], lineStyle: { color: accent, width: 3 }, itemStyle: { color: accent }, symbol: 'circle', symbolSize: 8, areaStyle: { color: accent + '20' } },
        { name: '加购人数', type: 'bar', yAxisIndex: 1, data: [2566, 1330, 1252, 1154, 854, 731], itemStyle: { color: ink + '44' }, barWidth: '50%' }
      ]
    });
    window.addEventListener('resize', function(){ chart.resize(); });
  })();

  // ============= Chart 4: 跳失率 + 平均停留时长 =============
  (function() {
    var el = document.getElementById('chart-bounce-stay');
    if (!el) return;
    var chart = echarts.init(el);
    chart.setOption({
      backgroundColor: canvas,
      grid: { left: '8%', right: '8%', top: 70, bottom: 50 },
      legend: { data: ['跳失率', '平均停留时长(秒)'], top: 10, textStyle: { color: ink } },
      xAxis: { type: 'category', data: ['2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'], axisLabel: { color: stone }, axisLine: { lineStyle: { color: ink15 } } },
      yAxis: [
        { type: 'value', name: '跳失率 (%)', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: '{value}%' }, max: 100, splitLine: { lineStyle: { color: ink15 } } },
        { type: 'value', name: '停留时长(秒)', nameTextStyle: { color: stone }, axisLabel: { color: stone }, splitLine: { show: false } }
      ],
      series: [
        { name: '跳失率', type: 'line', yAxisIndex: 0, smooth: true, data: [59.21, 48.33, 42.38, 45.91, 43.81, 44.99], lineStyle: { color: accent, width: 3 }, itemStyle: { color: accent }, symbol: 'circle', symbolSize: 8, areaStyle: { color: accent + '20' } },
        { name: '平均停留时长(秒)', type: 'line', yAxisIndex: 1, smooth: true, data: [9.52, 9.51, 8.87, 7.08, 8.68, 8.01], lineStyle: { color: ok, width: 3 }, itemStyle: { color: ok }, symbol: 'diamond', symbolSize: 8 }
      ]
    });
    window.addEventListener('resize', function(){ chart.resize(); });
  })();

  // ============= Chart 5: 6月各流量来源 =============
  (function() {
    var el = document.getElementById('chart-traffic-source');
    if (!el) return;
    var chart = echarts.init(el);
    var cats = ['经营优势', '店内流转', '付费推广', '无界', '主动回访', '站内沟通', '站外沟通', '内容营销'];
    var vis = [35858, 13005, 9376, 9238, 7075, 4386, 3079, 102];
    var pay = [76947.36, 69275.05, 11081.42, 7946.70, 83766.19, 86798.25, 7375.26, 0];
    chart.setOption({
      backgroundColor: canvas,
      grid: { left: '5%', right: '5%', top: 70, bottom: 80 },
      legend: { data: ['访客数', '支付金额'], top: 10, textStyle: { color: ink } },
      xAxis: { type: 'category', data: cats, axisLabel: { color: stone, rotate: 30, fontSize: 11 }, axisLine: { lineStyle: { color: ink15 } } },
      yAxis: [
        { type: 'value', name: '访客数', nameTextStyle: { color: stone }, axisLabel: { color: stone }, splitLine: { lineStyle: { color: ink15 } } },
        { type: 'value', name: '支付金额（元）', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: function(v){ return (v/10000).toFixed(1) + '万'; } }, splitLine: { show: false } }
      ],
      series: [
        { name: '访客数', type: 'bar', yAxisIndex: 0, data: vis, itemStyle: { color: ink + '55' }, barWidth: '50%' },
        { name: '支付金额', type: 'line', yAxisIndex: 1, smooth: true, data: pay, lineStyle: { color: accent, width: 3 }, itemStyle: { color: accent }, symbol: 'circle', symbolSize: 8 }
      ]
    });
    window.addEventListener('resize', function(){ chart.resize(); });
  })();

  // ============= Chart 6: 推广花费与产出对比 =============
  (function() {
    var el = document.getElementById('chart-promo-roi');
    if (!el) return;
    var chart = echarts.init(el);
    var cats = ['全站推广', '智能场景', '淘宝客', '关键词推广', '精准人群'];
    var costs = [8765.76, 4825.27, 308.31, 0, 0];
    // 整体推广对应产出 (按花费占比粗略归因, 实际无法精确)
    var total_pay = 66038.89;
    var total_cost = costs.reduce(function(a,b){return a+b;}, 0);
    // 整体 ROI
    var overallRoi = (total_pay / total_cost).toFixed(2);
    chart.setOption({
      backgroundColor: canvas,
      grid: { left: '5%', right: '5%', top: 100, bottom: 60 },
      legend: { data: ['6月花费（元）', '整体ROI'], top: 30, textStyle: { color: ink } },
      title: { text: '6月推广总成本 ¥' + total_cost.toLocaleString() + ' | 整体 ROI = ' + overallRoi, left: 'center', top: 5, textStyle: { fontSize: 13, color: stone, fontWeight: 'normal' } },
      xAxis: { type: 'category', data: cats, axisLabel: { color: stone }, axisLine: { lineStyle: { color: ink15 } } },
      yAxis: [
        { type: 'value', name: '花费（元）', nameTextStyle: { color: stone }, axisLabel: { color: stone }, splitLine: { lineStyle: { color: ink15 } } },
        { type: 'value', name: 'ROI 指数', nameTextStyle: { color: stone }, axisLabel: { color: stone }, splitLine: { show: false } }
      ],
      series: [
        { name: '6月花费（元）', type: 'bar', yAxisIndex: 0, data: costs, itemStyle: { color: accent, color: function(p){ return p.value > 5000 ? accent : (p.value > 1000 ? '#f39c12' : '#95a5a6'); } }, barWidth: '50%', label: { show: true, position: 'top', formatter: function(p){ return p.value > 0 ? '¥' + p.value.toFixed(0) : '¥0'; }, color: ink, fontSize: 11 } },
        { name: '整体ROI', type: 'line', yAxisIndex: 1, data: [overallRoi, overallRoi, overallRoi, overallRoi, overallRoi], lineStyle: { color: ok, width: 2, type: 'dashed' }, itemStyle: { color: ok }, symbol: 'none', markLine: { silent: true, data: [], symbol: 'none' } }
      ]
    });
    window.addEventListener('resize', function(){ chart.resize(); });
  })();

  // ============= Chart 7: 商品四维对比 (TOP10) =============
  (function() {
    var el = document.getElementById('chart-product-perf');
    if (!el) return;
    var chart = echarts.init(el);
    var cats = [
      'hummel足球风盖盖鞋',
      'hummel经典薄底德训鞋',
      'HUMMEL三合一外套',
      'HUMMEL休闲裤',
      'HUMMEL运动裤',
      'HUMMEL工装裤',
      'HUMMEL纯色冰丝T恤',
      'HUMMEL松紧腰休闲裤',
      'HUMMEL短袖POLO',
      'HUMMEL速干长裤'
    ];
    var vis = [1418, 704, 566, 508, 417, 253, 246, 126, 110, 51];
    var pay = [3015.11, 2668.05, 1036.31, 4683.66, 0, 266.40, 507.00, 373.00, 0, 899.43];
    var bounce = [41.51, 31.26, 38.33, 38.54, 51.91, 24.51, 21.59, 39.86, 34.12, 19.49];
    var rate = [1.11, 1.16, 0.59, 2.01, 0.00, 0.36, 0.59, 0.58, 0.00, 3.12];
    chart.setOption({
      backgroundColor: canvas,
      grid: { left: '5%', right: '5%', top: 70, bottom: 90 },
      legend: { data: ['访客数', '支付金额', '跳失率%', '转化率%'], top: 10, textStyle: { color: ink } },
      xAxis: { type: 'category', data: cats, axisLabel: { color: stone, rotate: 35, fontSize: 10 }, axisLine: { lineStyle: { color: ink15 } } },
      yAxis: [
        { type: 'value', name: '访客数', nameTextStyle: { color: stone }, axisLabel: { color: stone }, splitLine: { lineStyle: { color: ink15 } } },
        { type: 'value', name: '百分比 / 金额', nameTextStyle: { color: stone }, axisLabel: { color: stone }, splitLine: { show: false } }
      ],
      series: [
        { name: '访客数', type: 'bar', yAxisIndex: 0, data: vis, itemStyle: { color: ink + '44' }, barWidth: '40%' },
        { name: '支付金额', type: 'line', yAxisIndex: 1, smooth: true, data: pay, lineStyle: { color: accent, width: 3 }, itemStyle: { color: accent }, symbol: 'circle', symbolSize: 6 },
        { name: '跳失率%', type: 'line', yAxisIndex: 1, smooth: true, data: bounce, lineStyle: { color: '#e67e22', width: 2, type: 'dashed' }, itemStyle: { color: '#e67e22' }, symbol: 'triangle', symbolSize: 6 },
        { name: '转化率%', type: 'line', yAxisIndex: 1, smooth: true, data: rate, lineStyle: { color: ok, width: 2, type: 'dotted' }, itemStyle: { color: ok }, symbol: 'diamond', symbolSize: 6 }
      ]
    });
    window.addEventListener('resize', function(){ chart.resize(); });
  })();

  // ============= Chart 8: TOP5 商品雷达 =============
  (function() {
    var el = document.getElementById('chart-radar');
    if (!el) return;
    var chart = echarts.init(el);
    var cats = ['hummel足球鞋', 'hummel德训鞋', 'HUMMEL三合一', 'HUMMEL休闲裤', 'HUMMEL运动裤'];
    var visArr = [100.0, 49.65, 39.92, 35.83, 29.41];
    var payArr = [64.38, 56.97, 22.13, 100.0, 0.0];
    var rateArr = [55.13, 57.37, 29.22, 100.0, 0.0];
    var stayArr = [100.0, 88.76, 53.93, 57.30, 38.20];

    function make(name, arr) {
      return { name: name, value: arr, areaStyle: { color: accent + '20' }, lineStyle: { color: accent, width: 2 } };
    }
    chart.setOption({
      backgroundColor: canvas,
      legend: { data: cats, top: 10, textStyle: { color: ink, fontSize: 11 } },
      tooltip: { trigger: 'item' },
      radar: {
        indicator: [
          { name: '访客数', max: 100 },
          { name: '支付金额', max: 100 },
          { name: '转化率', max: 100 },
          { name: '停留时长', max: 100 }
        ],
        radius: '65%',
        center: ['50%', '58%'],
        axisName: { color: stone, fontSize: 12 },
        splitArea: { areaStyle: { color: [canvas, mist] } },
        splitLine: { lineStyle: { color: ink15 } }
      },
      series: [{
        type: 'radar',
        data: [
          make(cats[0], visArr),
          make(cats[1], [visArr[1], payArr[1], rateArr[1], stayArr[1]])
        ]
      }]
    });
    // Add the other 3 separately with different colors
    var palette = ['#2ecc71', '#3498db', '#f39c12'];
    var s2 = chart.getOption().series;
    s2[0].data.push({ name: cats[2], value: [visArr[2], payArr[2], rateArr[2], stayArr[2]], areaStyle: { color: palette[0] + '30' }, lineStyle: { color: palette[0], width: 2 }, itemStyle: { color: palette[0] } });
    s2[0].data.push({ name: cats[3], value: [visArr[3], payArr[3], rateArr[3], stayArr[3]], areaStyle: { color: palette[1] + '30' }, lineStyle: { color: palette[1], width: 2 }, itemStyle: { color: palette[1] } });
    s2[0].data.push({ name: cats[4], value: [visArr[4], payArr[4], rateArr[4], stayArr[4]], areaStyle: { color: palette[2] + '30' }, lineStyle: { color: palette[2], width: 2 }, itemStyle: { color: palette[2] } });
    chart.setOption({ series: s2 });
    window.addEventListener('resize', function(){ chart.resize(); });
  })();

  // ============= Chart 9: 新老访客占比 =============
  (function() {
    var el = document.getElementById('chart-new-old');
    if (!el) return;
    var chart = echarts.init(el);
    var x = ['2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'];
    var newV = [80366, 28992, 60710, 67981, 18454, 26129];
    var oldV = [8579, 4554, 6095, 11556, 2784, 3831];
    var pct = [90.35, 86.42, 90.88, 85.47, 86.89, 87.21];
    chart.setOption({
      backgroundColor: canvas,
      grid: { left: '5%', right: '5%', top: 100, bottom: 50 },
      legend: { data: ['新访客数', '老访客数', '新访客占比%'], top: 10, textStyle: { color: ink } },
      title: { text: '6月新客占比 99.0%（支付侧） / 访客侧 ≈87%', left: 'center', top: 35, textStyle: { fontSize: 12, color: stone, fontWeight: 'normal' } },
      xAxis: { type: 'category', data: x, axisLabel: { color: stone }, axisLine: { lineStyle: { color: ink15 } } },
      yAxis: [
        { type: 'value', name: '访客数', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: function(v){ return (v/1000).toFixed(0) + 'k'; } }, splitLine: { lineStyle: { color: ink15 } } },
        { type: 'value', name: '占比 %', nameTextStyle: { color: stone }, max: 100, axisLabel: { color: stone, formatter: '{value}%' }, splitLine: { show: false } }
      ],
      series: [
        { name: '新访客数', type: 'bar', stack: 't', yAxisIndex: 0, data: newV, itemStyle: { color: accent }, barWidth: '50%' },
        { name: '老访客数', type: 'bar', stack: 't', yAxisIndex: 0, data: oldV, itemStyle: { color: ink + '55' } },
        { name: '新访客占比%', type: 'line', yAxisIndex: 1, smooth: true, data: pct, lineStyle: { color: ok, width: 3 }, itemStyle: { color: ok }, symbol: 'circle', symbolSize: 8 }
      ]
    });
    window.addEventListener('resize', function(){ chart.resize(); });
  })();

  // ============= Chart 10: 人群类型分布 =============
  (function() {
    var el = document.getElementById('chart-customer-type');
    if (!el) return;
    var chart = echarts.init(el);
    var cats = ['会员', '新客', '粉丝', '老客'];
    var vis = [20, 1292, 303, 217];
    var pay = [0, 11144.45, 1014, 3190];
    var buyers = [0, 28, 3, 5];
    chart.setOption({
      backgroundColor: canvas,
      grid: { left: '5%', right: '5%', top: 70, bottom: 60 },
      legend: { data: ['访客数', '支付金额', '支付买家数'], top: 10, textStyle: { color: ink } },
      xAxis: { type: 'category', data: cats, axisLabel: { color: stone }, axisLine: { lineStyle: { color: ink15 } } },
      yAxis: [
        { type: 'value', name: '访客 / 买家数', nameTextStyle: { color: stone }, axisLabel: { color: stone }, splitLine: { lineStyle: { color: ink15 } } },
        { type: 'value', name: '支付金额（元）', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: function(v){ return (v/1000).toFixed(0) + 'k'; } }, splitLine: { show: false } }
      ],
      series: [
        { name: '访客数', type: 'bar', yAxisIndex: 0, data: vis, itemStyle: { color: ink + '44' }, barWidth: '40%' },
        { name: '支付买家数', type: 'bar', yAxisIndex: 0, data: buyers, itemStyle: { color: accent + '88' }, barWidth: '40%' },
        { name: '支付金额', type: 'line', yAxisIndex: 1, smooth: true, data: pay, lineStyle: { color: accent, width: 3 }, itemStyle: { color: accent }, symbol: 'circle', symbolSize: 8 }
      ]
    });
    window.addEventListener('resize', function(){ chart.resize(); });
  })();

  console.log('All 10 hummel charts initialized.');
})();

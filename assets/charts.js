// assets/charts.js
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var stone = style.getPropertyValue('--stone').trim();
  var ink15 = style.getPropertyValue('--ink-15').trim();
  var mist = style.getPropertyValue('--mist').trim();
  var canvas = style.getPropertyValue('--canvas').trim();
  var accentGlow = style.getPropertyValue('--accent-glow').trim();

  var commonOpts = { animation: false, tooltip: { appendToBody: true } };

  // --- Chart 1: Monthly Revenue Trend ---
  var chart1 = echarts.init(document.getElementById('chart-revenue'), null, { renderer: 'svg' });
  chart1.setOption({
    ...commonOpts,
    backgroundColor: canvas,
    grid: { left: '10%', right: '5%', top: 60, bottom: 50 },
    xAxis: { type: 'category', data: ['2025-05','2025-06','2025-07','2025-08','2025-09','2025-10','2025-11','2025-12','2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'], axisLabel: { color: stone, rotate: 45 }, axisLine: { lineStyle: { color: ink15 } }, axisTick: { lineStyle: { color: ink15 } } },
    yAxis: { type: 'value', name: '支付金额（元）', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: function(v) { return (v/10000).toFixed(0) + '万'; } }, splitLine: { lineStyle: { color: ink15 } } },
    series: [{
      type: 'line', smooth: true, data: [163315, 163377, 120708, 100455, 95723, 2621620, 389014, 229449, 351518, 129612, 108450, 110689, 79706, 66039],
      lineStyle: { color: accent, width: 3 },
      itemStyle: { color: accent },
      areaStyle: { color: accent + '20' }
    }]
  });
  window.addEventListener('resize', function() { chart1.resize(); });

  // --- Chart 2: Category Pie ---
  var chart2 = echarts.init(document.getElementById('chart-category'), null, { renderer: 'svg' });
  chart2.setOption({
    ...commonOpts,
    legend: { orient: 'vertical', right: 10, top: 'center', textStyle: { color: ink } },
    series: [{
      type: 'pie', radius: ['40%', '70%'], center: ['40%', '50%'],
      data: [
        { value: 1087877, name: '三合一/冲锋衣' }, { value: 1008862, name: '羽绒服' },
        { value: 686285, name: '鞋类' }, { value: 545849, name: '棉服/夹克/外套' },
        { value: 379439, name: 'POLO衫' }, { value: 205746, name: '裤装' },
        { value: 195559, name: 'T恤' }, { value: 194889, name: '配饰' },
        { value: 179442, name: '卫衣' }
      ],
      label: { formatter: '{b}\n{d}%', color: ink },
      itemStyle: { borderColor: canvas, borderWidth: 2 }
    }],
    color: [accent, '#2ecc71', '#3498db', '#f39c12', '#9b59b6', '#e67e22', '#1abc9c', '#2c3e50', '#8e44ad']
  });
  window.addEventListener('resize', function() { chart2.resize(); });

  // --- Chart 3: Traffic & Conversion ---
  var chart3 = echarts.init(document.getElementById('chart-traffic'), null, { renderer: 'svg' });
  chart3.setOption({
    ...commonOpts,
    backgroundColor: canvas,
    grid: { left: '10%', right: '5%', top: 60, bottom: 50 },
    legend: { data: ['访客数', '转化率'], textStyle: { color: ink } },
    xAxis: { type: 'category', data: ['2025-05','2025-06','2025-07','2025-08','2025-09','2025-10','2025-11','2025-12','2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'], axisLabel: { color: stone, rotate: 45 }, axisLine: { lineStyle: { color: ink15 } }, axisTick: { lineStyle: { color: ink15 } } },
    yAxis: [
      { type: 'value', name: '访客数', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: function(v) { return (v/1000).toFixed(0) + 'k'; } }, splitLine: { lineStyle: { color: ink15 } } },
      { type: 'value', name: '转化率 (%)', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: '{value}%' } }
    ],
    series: [
      { name: '访客数', type: 'bar', data: [41721,55571,75615,42950,44096,218840,193747,90070,81627,43517,76614,74861,32891,32606], itemStyle: { color: ink + '44' }, barWidth: '60%' },
      { name: '转化率', type: 'line', yAxisIndex: 1, data: [1.75,1.15,0.58,0.75,0.63,2.89,0.75,0.80,2.00,1.11,0.35,0.41,0.71,0.59], lineStyle: { color: accent, width: 3 }, itemStyle: { color: accent }, symbol: 'circle', symbolSize: 8 }
    ]
  });
  window.addEventListener('resize', function() { chart3.resize(); });

  // --- Chart 4: New vs Returning ---
  var chart4 = echarts.init(document.getElementById('chart-buyers'), null, { renderer: 'svg' });
  chart4.setOption({
    ...commonOpts,
    backgroundColor: canvas,
    grid: { left: '10%', right: '5%', top: 60, bottom: 50 },
    legend: { data: ['新买家', '老买家'], textStyle: { color: ink } },
    xAxis: { type: 'category', data: ['2025-05','2025-06','2025-07','2025-08','2025-09','2025-10','2025-11','2025-12','2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'], axisLabel: { color: stone, rotate: 45 }, axisLine: { lineStyle: { color: ink15 } }, axisTick: { lineStyle: { color: ink15 } } },
    yAxis: { type: 'value', name: '买家数', nameTextStyle: { color: stone }, axisLabel: { color: stone }, splitLine: { lineStyle: { color: ink15 } } },
    series: [
      { name: '新买家', type: 'bar', stack: 'total', data: [545,514,338,262,220,4670,1059,508,1466,378,191,219,160,143], itemStyle: { color: accent }, barWidth: '60%' },
      { name: '老买家', type: 'bar', stack: 'total', data: [186,125,99,62,57,1648,395,215,165,103,77,88,74,51], itemStyle: { color: ink + '66' } }
    ]
  });
  window.addEventListener('resize', function() { chart4.resize(); });

  // --- Chart 5: Refund Rate ---
  var chart5 = echarts.init(document.getElementById('chart-refund'), null, { renderer: 'svg' });
  chart5.setOption({
    ...commonOpts,
    backgroundColor: canvas,
    grid: { left: '10%', right: '5%', top: 60, bottom: 50 },
    xAxis: { type: 'category', data: ['2025-05','2025-06','2025-07','2025-08','2025-09','2025-10','2025-11','2025-12','2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'], axisLabel: { color: stone, rotate: 45 }, axisLine: { lineStyle: { color: ink15 } }, axisTick: { lineStyle: { color: ink15 } } },
    yAxis: { type: 'value', name: '退款率 (%)', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: '{value}%' }, max: 120, splitLine: { lineStyle: { color: ink15 } } },
    series: [{
      type: 'line', smooth: true,
      data: [50.5,61.4,47.5,66.6,73.7,36.5,112.4,48.3,52.6,84.5,62.3,64.3,72.2,72.7],
      lineStyle: { color: accent, width: 3 },
      itemStyle: { color: accent },
      areaStyle: { color: accent + '20' },
      markLine: { data: [{ yAxis: 50, label: { formatter: '50%警戒线', color: accent }, lineStyle: { color: accent, type: 'dashed' } }], silent: true }
    }]
  });
  window.addEventListener('resize', function() { chart5.resize(); });

  // --- Chart 6: Price Band ---
  var chart6 = echarts.init(document.getElementById('chart-price'), null, { renderer: 'svg' });
  chart6.setOption({
    ...commonOpts,
    backgroundColor: canvas,
    grid: { left: '15%', right: '10%', top: 40, bottom: 30 },
    xAxis: { type: 'value', name: '支付金额（元）', nameTextStyle: { color: stone }, axisLabel: { color: stone, formatter: function(v) { return (v/10000).toFixed(0) + '万'; } }, splitLine: { lineStyle: { color: ink15 } }, axisLine: { lineStyle: { color: ink15 } } },
    yAxis: { type: 'category', data: ['1000元以上','800-1000元','500-800元','400-500元','300-400元','200-300元','100-200元','0-100元'], axisLabel: { color: ink } },
    series: [{
      type: 'bar', data: [92928,21242,550742,1487571,1198905,571441,425029,381819],
      label: { show: true, position: 'right', formatter: function(p) { return (p.value/10000).toFixed(1) + '万'; }, color: ink },
      itemStyle: { color: accent }
    }]
  });
  window.addEventListener('resize', function() { chart6.resize(); });

  // --- Chart 7: Visitor Value ---
  var chart7 = echarts.init(document.getElementById('chart-visitor-value'), null, { renderer: 'svg' });
  chart7.setOption({
    ...commonOpts,
    backgroundColor: canvas,
    grid: { left: '10%', right: '5%', top: 60, bottom: 50 },
    xAxis: { type: 'category', data: ['2025-05','2025-06','2025-07','2025-08','2025-09','2025-10','2025-11','2025-12','2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'], axisLabel: { color: stone, rotate: 45 }, axisLine: { lineStyle: { color: ink15 } }, axisTick: { lineStyle: { color: ink15 } } },
    yAxis: { type: 'value', name: '访客价值（元）', nameTextStyle: { color: stone }, axisLabel: { color: stone }, splitLine: { lineStyle: { color: ink15 } } },
    series: [{
      type: 'line', smooth: true,
      data: [3.91,2.94,1.60,2.34,2.17,11.98,2.01,2.55,4.31,2.98,1.42,1.48,2.42,2.03],
      lineStyle: { color: accent, width: 3 },
      itemStyle: { color: accent },
      areaStyle: { color: accent + '20' }
    }]
  });
  window.addEventListener('resize', function() { chart7.resize(); });
})();
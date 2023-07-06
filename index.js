const express = require('express')
const { json } = require('express/lib/response')
const app = express()
const ckb = [
  {
    "id": "area_chart",
    "zh-cn": '面积图',
    "name": "Area Chart",
    "alias": [],
    "family": [
      "AreaCharts"
    ],
    "def": "An area chart uses series of line segments with overlapped areas to show the change in data in a ordinal dimension.",
    "def-zh-cn": '使用带填充区域的线段显示数据在一个具有顺序性的维度上的变化。',
    "purpose": [
      "Comparison",
      "Trend",
      "Anomaly"
    ],
    "coord": [
      "Cartesian2D"
    ],
    "category": [
      "Statistic"
    ],
    "shape": [
      "Area"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": 1,
        "fieldConditions": [
          "Time",
          "Ordinal"
        ]
      },
      {
        "minQty": 1,
        "maxQty": 1,
        "fieldConditions": [
          "Interval"
        ]
      },
      {
        "minQty": 0,
        "maxQty": 1,
        "fieldConditions": [
          "Nominal"
        ]
      }
    ],
    "channel": [
      "Color",
      "Position"
    ],
    "recRate": "Recommended"
  },
  {
    "id": "line_chart",
    'zh-cn': '折线图',
    "name": "Line Chart",
    "alias": [
      "Lines"
    ],
    "family": [
      "LineCharts"
    ],
    "def": "A line chart uses lines with segments to show changes in data in a ordinal dimension.",
    "def-zh-cn": "使用折线的线段显示数据在一个具有顺序性的维度上的变化",
    "purpose": [
      "Comparison",
      "Trend",
      "Anomaly"
    ],
    "coord": [
      "Cartesian2D"
    ],
    "category": [
      "Statistic"
    ],
    "shape": [
      "Lines"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": 1,
        "fieldConditions": [
          "Time",
          "Ordinal"
        ]
      },
      {
        "minQty": 0,
        "maxQty": 1,
        "fieldConditions": [
          "Nominal"
        ]
      },
      {
        "minQty": 1,
        "maxQty": 1,
        "fieldConditions": [
          "Interval"
        ]
      }
    ],
    "channel": [
      "Position",
      "Direction"
    ],
    "recRate": "Recommended"
  },
  {
    "id": "column_chart",
    "zh-cn": "柱状图",
    "name": "Column Chart",
    "alias": [
      "Columns"
    ],
    "family": [
      "ColumnCharts"
    ],
    "def": "A column chart uses series of columns to display the value of the dimension. The horizontal axis shows the classification dimension and the vertical axis shows the corresponding value.",
    "def-zh-cn": "使用柱形显示维度的数值。横轴显示分类维度，纵轴显示相应的值。",
    "purpose": [
      "Comparison",
      "Distribution",
      "Rank"
    ],
    "coord": [
      "Cartesian2D"
    ],
    "category": [
      "Statistic"
    ],
    "shape": [
      "Bars"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": 2,
        "fieldConditions": [
          "Nominal",
          "Ordinal"
        ]
      },
      {
        "minQty": 1,
        "maxQty": 1,
        "fieldConditions": [
          "Interval"
        ]
      }
    ],
    "channel": [
      "Position",
      "Color"
    ],
    "recRate": "Recommended"
  },
  {
    "id": "pie_chart",
    "zh-cn": "饼图",
    "name": "Pie Chart",
    "alias": [
      "Circle Chart",
      "Pie"
    ],
    "family": [
      "PieCharts"
    ],
    "def": "A pie chart is a chart that the classification and proportion of data are represented by the color and arc length (angle, area) of the sector.",
    "def-zh-cn": "通过扇形区块的颜色和弧长（角度、面积）来展现数据的分类和占比情况。",
    "purpose": [
      "Comparison",
      "Composition",
      "Proportion"
    ],
    "coord": [
      "Polar"
    ],
    "category": [
      "Statistic"
    ],
    "shape": [
      "Round"
    ],
    "dataPres": [
      {
        "minQty": 1,
        "maxQty": 1,
        "fieldConditions": [
          "Nominal",
          "Ordinal"
        ]
      },
      {
        "minQty": 1,
        "maxQty": 1,
        "fieldConditions": [
          "Interval"
        ]
      }
    ],
    "channel": [
      "Angle",
      "Area",
      "Color"
    ],
    "recRate": "Use with Caution"
  },
  {
    "id": "scatter_plot",
    "zh-cn": "散点图",
    "name": "Scatter Plot",
    "alias": [
      "Scatter Chart",
      "Scatterplot"
    ],
    "family": [
      "ScatterCharts"
    ],
    "def": "A scatter plot is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for series of data.",
    "def-zh-cn": "散点图是将所有的数据以不同颜色的点的形式展现在平面直角坐标系上的统计图表。",
    "purpose": [
      "Comparison",
      "Distribution",
      "Anomaly"
    ],
    "coord": [
      "Cartesian2D"
    ],
    "category": [
      "Statistic"
    ],
    "shape": [
      "Scatter"
    ],
    "dataPres": [
      {
        "minQty": 2,
        "maxQty": 2,
        "fieldConditions": [
          "Interval"
        ]
      },
      {
        "minQty": 0,
        "maxQty": 1,
        "fieldConditions": [
          "Nominal"
        ]
      }
    ],
    "channel": [
      "Color",
      "Position"
    ],
    "recRate": "Recommended"
  }
]


const concepts = {
  "family": {
    "LineCharts": "折线图类",
    "ColumnCharts": "柱状图类",
    "BarCharts": "条形图类",
    "PieCharts": "饼图类",
    "AreaCharts": "面积图类",
    "ScatterCharts": "散点图类",
    "FunnelCharts": "漏斗图类",
    "HeatmapCharts": "热力图类",
    "RadarCharts": "雷达图类",
    "TreeGraph": "树形关系类",
    "GeneralGraph": "关系图类",
    "PointLayer": "点图层类",
    "LineLayer": "线图层类",
    "PolygonLayer": "面图层类",
    "HeatmapLayer": "地图热力图类",
    "Others": "其他类",
    "Table": "表格类"
  },
  "category": {
    "Statistic": "统计图表",
    "Diagram": "示意图",
    "Graph": "关系图",
    "Map": "地图",
    "Other": "其他"
  },
  "purpose": {
    "Comparison": "比较",
    "Trend": "趋势",
    "Distribution": "分布",
    "Rank": "排名",
    "Proportion": "占比",
    "Composition": "组成",
    "Relation": "关系",
    "Hierarchy": "层级",
    "Flow": "流向",
    "Spatial": "空间",
    "Anomaly": "异常",
    "Value": "数值"
  },
  "coord": {
    "NumberLine": "数轴",
    "Cartesian2D": "二维直角坐标系",
    "SymmetricCartesian": "对称直角坐标系",
    "Cartesian3D": "三维直角坐标系",
    "Polar": "极坐标系",
    "NodeLink": "点线关系网络",
    "Radar": "雷达型坐标系",
    "Geo": "地理坐标系",
    "Other": "其他"
  },
  "shape": {
    "Lines": "线形",
    "Bars": "条形",
    "Round": "圆形",
    "Square": "方形",
    "Area": "面形",
    "Scatter": "散点形",
    "Symmetric": "对称形",
    "Network": "网络形",
    "Map": "地图",
    "Other": "其他"
  },
  "channel": {
    "Position": "位置",
    "Length": "长度",
    "Color": "颜色",
    "Area": "面积",
    "Angle": "角度",
    "ArcLength": "弧长",
    "Direction": "方向",
    "Size": "大小",
    "Opacity": "透明度",
    "Stroke": "线色",
    "LineWidth": "线粗",
    "Lightness": "亮度"
  },
  "lom": {
    "Continuous": "连续",
    "Discrete": "离散",
    "Interval": "数值",
    "Nominal": "无序名词",
    "Ordinal": "有序名词",
    "Time": "时间"
  },
  "recRate": {
    "Recommended": "推荐",
    "Use with Caution": "慎用",
    "Not Recommended": "不推荐"
  }
}

// respond with "hello world" when a GET request is made to the homepage
app.get('/funbot/ckb', (req, res) => {
  const result = {
    ckb,
    concepts
  }
  res.send(result)
})

const port = 8000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
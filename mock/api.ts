export default {
  'GET /api/users': {user: [1, 2]},
  '/api/users/1': {id: 1},
  'POST /api/users/create': (req: any, res: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
  'POST /api/table/data': (req: any, res: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify([
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ]));
  },
  'POST /api/table/delete': (req: any, res: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('can not find req.body');
  },
  'POST /api/echartsMap/cityData': (req: any, res: any) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify([
      {name: '北京市', value: '56'},
      {name: '天津市', value: '67'},
      {name: '河北省', value: '70'},
      {name: '山西省', value: '69'},
      {name: '上海市', value: '51'},
      {name: '江苏省', value: '22'},
      {name: '浙江省', value: '12'},
      {name: '安徽省', value: '79'},
      {name: '福建省', value: '61'},
      {name: '江西省', value: '39'},
      {name: '山东省', value: '49'},
      {name: '河南省', value: '77'},
      {name: '湖北省', value: '41'},
      {name: '黑龙江省', value: '23'},
      {name: '吉林省', value: '95'},
      {name: '辽宁省', value: '35'},
      {name: '内蒙古自治区', value: '69'},
      {name: '湖南省', value: '02'},
      {name: '广东省', value: '62'},
      {name: '广西壮族自治区', value: '86'},
      {name: '海南省', value: '21'},
      {name: '重庆市', value: '34'},
      {name: '四川省', value: '67'},
      {name: '贵州省', value: '34'},
      {name: '云南省', value: '85'},
      {name: '西藏自治区', value: '03'},
      {name: '陕西省', value: '39'},
      {name: '甘肃省', value: '12'},
      {name: '青海省', value: '50'},
      {name: '宁夏回族自治区', value: '07'},
      {name: '新疆维吾尔自治区', value: '15'},
      {name: '台湾省', value: '98'},
      {name: '香港特别行政区', value: '73'},
      {name: '澳门特别行政区', value: '85'},
    ]))
  },
  'POST /api/echartsMap/areaData': (req: any, res: any) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify([
      {name: '北京市', value: [116.405285, 39.904989, 56]},
      {name: '天津市', value: [117.190182, 39.125596, 67]},
      {name: '河北省', value: [114.502461, 38.045474, 70]},
      {name: '山西省', value: [112.549248, 37.857014, 69]},
      {name: '上海市', value: [121.472644, 31.231706, 51]},
      {name: '江苏省', value: [118.767413, 32.041544, 22]},
      {name: '浙江省', value: [120.153576, 30.287459, 12]},
      {name: '安徽省', value: [117.283042, 31.86119, 79]},
      {name: '福建省', value: [119.306239, 26.075302, 61]},
      {name: '江西省', value: [115.892151, 28.676493, 39]},
      {name: '山东省', value: [117.000923, 36.675807, 49]},
      {name: '河南省', value: [113.665412, 34.757975, 77]},
      {name: '湖北省', value: [114.298572, 30.584355, 41]},
      {name: '黑龙江省', value: [126.642464, 45.756967, 23]},
      {name: '吉林省', value: [125.3245, 43.886841, 95]},
      {name: '辽宁省', value: [123.429096, 41.796767, 35]},
      {name: '内蒙古自治区', value: [111.670801, 40.818311, 69]},
      {name: '湖南省', value: [112.982279, 28.19409, 2]},
      {name: '广东省', value: [113.280637, 23.125178, 62]},
      {name: '广西壮族自治区', value: [108.320004, 22.82402, 86]},
      {name: '海南省', value: [110.33119, 20.031971, 21]},
      {name: '重庆市', value: [106.504962, 29.533155, 34]},
      {name: '四川省', value: [104.065735, 30.659462, 67]},
      {name: '贵州省', value: [106.713478, 26.578343, 34]},
      {name: '云南省', value: [102.712251, 25.040609, 85]},
      {name: '西藏自治区', value: [91.132212, 29.660361, 3]},
      {name: '陕西省', value: [108.948024, 34.263161, 39]},
      {name: '甘肃省', value: [103.823557, 36.058039, 12]},
      {name: '青海省', value: [101.778916, 36.623178, 50]},
      {name: '宁夏回族自治区', value: [106.278179, 38.46637, 7]},
      {name: '新疆维吾尔自治区', value: [87.617733, 43.792818, 15]},
      {name: '台湾省', value: [121.509062, 25.044332, 98]},
      {name: '香港特别行政区', value: [114.173355, 22.320048, 73]},
      {name: '澳门特别行政区', value: [113.54909, 22.198951, 85]},
    ]))
  },
  'POST /api/echartsMap/mapLineData': (req: any, res: any) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify([
      {"fromName":"北京市","toName":"新疆维吾尔自治区","coords":[[116.405285, 39.904989, 56],[114.173355, 22.320048, 73]]}
    ]));
  },

}

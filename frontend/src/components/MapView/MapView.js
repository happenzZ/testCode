/* global  AMap */

export default {
    name: 'MapView',
    components: {
    },
    props: {
        videoId: String,
        videoData: Object
    },
    data() {
        return {
            containerId: 'mapContainer',
            center: {lng: 113.331084, lat: 23.112223},
            zoom: 13
        }
    },
    watch: {
    },
    mounted: function () {
        // 高德
        var map = new AMap.Map('mapContainer', {
            zoom:11,//级别
            center: [this.center.lng, this.center.lat],//中心点坐标
            viewMode:'3D'//使用3D视图
        });

        //实时路况图层
        var trafficLayer = new AMap.TileLayer.Traffic({
            zIndex: 10
        });
        map.add(trafficLayer);//添加图层到地图
            console.log('map: ', map)
    },
    methods: {
    }
}

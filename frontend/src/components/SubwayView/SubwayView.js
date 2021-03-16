// /* global subway */

export default {
    name: 'SubwayView',
    components: {
    },
    props: {
        videoId: String,
        videoData: Object
    },
    data() {
        return {
            containerId: 'subwayContainer'
        }
    },
    watch: {
    },
    mounted: function () {
        // console.log('subway: ', subway)
        // window.cbk = function(){
        //     console.log('subway: ', subway)
        //     var mysubway = subway("mysubway", {
        //         easy: 1
        //     });
        //     console.log('mysubway: ', mysubway)
        // };
    },
    methods: {
    }
}

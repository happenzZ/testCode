<template>
    <div id="app" style="width: 1400px;">
        <nav class="navbar sticky-top navbar-dark bg-dark"
             style="padding-top: 1px; padding-bottom: 1px; margin-bottom: 5px;">
            <div style="margin-top:5px; margin-left: 5px;">
                <span style="color:white; font-size:1.25rem; font-weight:500; user-select: none"></span>
            </div>
        </nav>
        <div class="container-fluid" style="padding-left: 5px; padding-right: 5px">
            <div class="row" style="margin-left: 10px; margin-right: 10px">
                <div class="col-6 content" style="padding-left: 3px; padding-right: 3px">
                    <MapView :videoList=videoList></MapView>
                </div>
                <div class="col-6 content" style="padding-left: 3px; padding-right: 3px">
                    <SubwayView :videoList=videoList></SubwayView>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import dataService from './service/dataService.js'
    // eslint-disable-next-line no-unused-vars
    /* global d3 $ _ */

    import MapView from './components/MapView/MapView.vue'
    import SubwayView from './components/SubwayView/SubwayView.vue'

    export default {
        name: 'app',
        components: {
            MapView,
            SubwayView
        },
        data() {
            return {
                videoList: [],
            }
        },
        mounted: function () {
            // dataService.videoList((data) => {
            //     this.videoList = data['data']
            //     console.log('this.videoList: ', this.videoList)
            // })

        },
        methods: {
        },
        computed: {
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        margin: 0 auto;
    }

    .container {
        width: 100%;
        padding: 5px 5px 5px 5px;
    }

    .content {
        padding: 2px 2px 2px 2px;
    }

    footer {
        margin-left: 5px;
    }
</style>

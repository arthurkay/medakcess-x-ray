<template>
    <v-container>
        <video
        width="100%"
        muted
        id="facialscan">
        </video>
        <v-row>
            <v-btn
            text
            color="info"
            @click="startVideo()">
            Start Video Analysis
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
            text
            color="red"
            @click="diagnose()">
            Stop Video
            </v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'FacialScan',
    mounted() {
        //
    },
    methods: {
        initmodels () {
            //
        },
        startVideo () {
            const video = document.querySelector("#facialscan")
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            })
            .then(
                (cameraStream) => {
                    video.srcObject = cameraStream
                    video.play()
                }
            )
        },
        diagnose () {
            const video = document.querySelector("#facialscan")
            video.pause()
        }
    }
}
</script>
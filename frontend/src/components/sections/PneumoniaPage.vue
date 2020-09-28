<template>
    <v-container>
        <v-dialog
        v-model="dialog"
        max-width="400">
        <v-card>
            <v-card-title>
                Diagnostic results
            </v-card-title>
            <v-card-text>
                {{ result }}
            </v-card-text>
        </v-card>
        </v-dialog>
        <v-row>
            <v-col
            cols="6">
                <video
                    id="webcam">
                </video>
            </v-col>
            <v-col
            cols="6">
                <canvas
                    ref="webcam_copy">
                </canvas>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="4">
            <v-btn
            text
            color="info"
            @click="startVideo()">
            {{ videoState }}
            </v-btn>
            </v-col>
            <v-col
            cols="4">
            <v-btn
            text
            color="green"
            @click="diagnose()"
            v-if="canDiagnose">
            Diagnose
            </v-btn>
            </v-col>
            <v-col
            cols="4">
            <input type="file"
            accept="image/*" ref="img_inf"
            @:change="imgChange"
            style="display: none" />
            <v-btn
            text
            color="warn"
            @click="select_img()">
            Image
            </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import * as tf from '@tensorflow/tfjs'

export default {
    name: 'PneumoniaPage',
    props: {
        img: {
            type: String,
            required: false
        }
    },
    mounted() {
        // window.addEventListener('pause', this.diagnose())
        //this.initmodels()
        console.debug('ENV: ' + process.env.VUE_APP_MY_NAME)
    },
    data() {
        return {
            canDiagnose: false,
            videoState: 'Start WebCam',
            model: {},
            result: '',
            dialog: false,
            img_url: '',
            app_name: process.env.VUE_APP_MY_NAME,
        }
    },
    methods: {
        async initModel (snapshot) {
            const url = location.href + 'model/model.json'
            console.log('Loading model for inference')
            const model = await tf.loadLayersModel(url)
            console.log("Model loaded")
            const tensorImg = tf.browser.fromPixels(snapshot)
            .resizeNearestNeighbor([250, 250])
            .toFloat()
            .expandDims()

            try {
                const results = await model.predict(tensorImg).data()
                console.log(results)
                if (results == 0) {
                    this.result = 'No pnuemonia detected in the image'
                }
                else if (results == 1) {
                    this.result = 'Pneumonia detected in the snapshot'
                }
                else {
                    this.result = 'The diagnosis is inconclusive'
                }
                this.dialog = true
            }
            catch (e) {
                this.result = 'An error ocurred in: ' + e
                this.dialog = true
            }
        },
        startVideo () {
            const video = document.querySelector("#webcam")
            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            })
            .then(
                (cameraStream) => {
                    video.srcObject = cameraStream
                    if (this.videoState == 'Start WebCam') {
                        video.play()
                        this.canDiagnose = true
                        this.videoState = 'Stop WebCam'
                    }
                    else {
                        // video.pause()
                        cameraStream.getTracks()
                        .forEach((track) => {
                            if (track.readyState == 'live') {
                                track.stop()
                            }
                        })
                        this.canDiagnose = false
                        this.videoState = 'Start WebCam'
                    }
                }
            )
        },
        diagnose () {
            const video = document.querySelector("#webcam")
            this.videoState = 'Stop WebCam'
            this.process_image(video)
            this.canDiagnose = true
        },
        select_img () {
            this.$refs.img_inf.click()
        },
        imgChange (e) {
            const files = e.target.files[0] || e.dataTransfer.files[0]
            if (!files.length) {
                this.dialog = true
                this.result = 'No files selected'
            }
            else {
                this.dialog = true
                this.result = 'Hello World'
            }
        },
        process_image (img) {
            const canvas = this.$refs.webcam_copy
            const ctx = canvas.getContext("2d")
            canvas.height = 250
            canvas.width = 250

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            const image_data = ctx.getImageData(0, 0, canvas.width, canvas.height)
            let data = image_data.data

            // Convert to grayscale
            for (let i = 0; i < data.length; i += 4) {
                const brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2]
                // Red
                data[i] = brightness
                // Green
                data[i + 1] = brightness
                // Blue
                data[i + 2] = brightness
            }

            // Overwrite original image
            ctx.putImageData(image_data, 0, 0)

            let img_data = canvas.toDataURL()

            // Create DOM img
            let img_el = document.createElement('img')
            img_el.setAttribute('src', img_data)
            canvas.appendChild(img_el)

            this.initModel(img_el)
        }
    }
}
</script>
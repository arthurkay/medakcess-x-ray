<template>
    <v-container>
        <v-row
        cols="12">
        <v-carousel
        cycle
        height="400"
        show-arrows
        hide-delimiters>
            <v-carousel-item
            v-for="(slide, i) in slider"
            :key="i"
            :src="slide.image">
            </v-carousel-item>
        </v-carousel>
        </v-row>
        <v-row
        cols="12">
        </v-row>
        <v-row>
        <Services />
        </v-row>
    </v-container>
</template>

<script>
import Services from './sections/Services'

export default {
    name: 'HomePage',
    components: {
        Services
    },
    data: () => ({
        slider: [
            {
                name: "AI in Medicine",
                image: require('../assets/artificial-intelligence-in-medicine-ai-in-medicine.jpg')
            },
            {
                name: "Can AI change Medicine",
                image: require('../assets/AI-hype.jpg')
            },
            {
                name: "Tech powered diagnostics",
                image: require('../assets/shutterstock_390198256.jpg')
            }
        ]
    })
}
</script>
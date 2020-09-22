<template>
    <v-container fluid>
        <v-row>
        <v-col
        cols="12"
        md="8">
        <v-card>
            <v-card-title>
                AI Assisted Diagnostics
            </v-card-title>
            <PneumoniaPage
            img="../../assets/IM-0359-0001.jpeg" />
        </v-card>
        </v-col>
        <v-col
        cols="6"
        md="4">
        <v-card>
            <v-card-title>
                Radiography Diagnostics with AI
            </v-card-title>
            <v-img
            src="../../assets/IM-0359-0001.jpeg">
            </v-img>
            <v-card-text>
                Diagnosing diseases in real time with high levels of accuracy in.
            </v-card-text>
        </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PneumoniaPage from './PneumoniaPage'

export default {
    name: 'Services',
    components: {
        PneumoniaPage
    }
}
</script>
<template>
    <div class="yc-auth-bar">
        <div class="yc-auth-bar-top">
            <v-container>
                <h1>YCONF</h1>
            </v-container>
        </div>

        <div class="yc-auth-bar-content">
            <v-container>
                <h2>What do we offer</h2>

                <ul class="yc-list">
                    <li class="yc-list-el">
                        <v-layout row>
                            <div class="yc-paragraph"></div> 
                            <div class="yc-paragraph-info">Without broadcasts</div>
                        </v-layout>
                    </li>
                    <li class="yc-list-el">
                        <v-layout row>
                            <div class="yc-paragraph"></div> 
                            <div class="yc-paragraph-info">Joint control system</div>
                        </v-layout>
                    </li>
                    <li class="yc-list-el">
                        <v-layout row>
                            <div class="yc-paragraph"></div> 
                            <div class="yc-paragraph-info">Minimalistic interface</div>
                        </v-layout>
                    </li>
                    <li class="yc-list-el">
                        <v-layout row>
                            <div class="yc-paragraph"></div> 
                            <div class="yc-paragraph-info">Based on Google API</div>
                        </v-layout>
                    </li>
                </ul>
            </v-container>
        </div>

        <div class="yc-auth-bar-form">
            <v-container>
                <v-btn class="yc-google-button">Google Login</v-btn>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/main.scss";

.yc-auth-bar {
    height: 100%;
    background-color: white;
    width: 500px;
    opacity: 0.8;
    .yc-auth-bar-top {
        height: 10%;
        background-color: red;
    }

    .yc-auth-bar-conent {

    }

    .yc-auth-bar-form {
        position: absolute;
        bottom: 0;
        margin-bottom: 3%;

        .yc-google-button {
            background-color: red !important;
            color: white !important; 
            width: 100%;
            height: 50px;

            position: relative;
        }
    }
}

</style>


<template>
    <div class="yc-auth-bar">
        <div class="yc-auth-bar-top">
            <v-container>
                <div class="yc-h2">YCONF</div>
            </v-container>
        </div>

        <div class="yc-auth-bar-content">
            <v-container>
                <div class="yc-h3">What do we offer</div>

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
    width: 100%;
    background-color: white;
    width: 500px;
    opacity: 0.8;
    box-shadow: -10px 0px 25px black;
    .yc-auth-bar-top {
        background-color: red;
        font-family: 'RobotoBold', sans-serif;
        font-size: 20px;
        letter-spacing: .5px;
        text-shadow: 1px 1px 2px black;
        box-shadow: -10px 0px 25px red;
        margin-bottom: 5%;
    }

    .yc-auth-bar-content {
        .yc-list {
            .yc-list-el {
                position: relative;
                
                &:after {
                    content: '';
                    transition: width .5s ease;
                    -webkit-transition: width .5s ease; 
                    width: 0; height: 3px;
                    display: block;
                    background: rgba($color: red, $alpha: .8);
                    position: absolute;
                }
                
                &:hover {
                    color: red;
                }

                &:hover:after {
                    width: 100%;
                    box-sizing: border-box;
                    background: rgba($color: red, $alpha: .8);
                }
            }
        }
    }

    .yc-auth-bar-form {
        font-family: 'RobotoRegular', sans-serif;
        position: absolute;
        bottom: 0;

        .yc-google-button {
            position: relative;
            background-color: red !important;
            color: white !important; 
            width: 100%;
            height: 50px;
        }
    }
}

</style>


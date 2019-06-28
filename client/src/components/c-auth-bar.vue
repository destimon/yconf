<template>
    <div class="yc-auth-bar">
        <div class="yc-auth-bar-top">
            <v-container>
                <h1>YCONF</h1>
            </v-container>
        </div>

        <div class="yc-auth-bar-content">
            <v-container>
                <h2>Content</h2>
            </v-container>
        </div>

        <div class="yc-auth-bar-form">
            <v-container>
                <h2>Button</h2>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

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
    }
}

</style>


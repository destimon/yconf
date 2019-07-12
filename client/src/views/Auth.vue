<template>
    <div class="yc-auth-background">
        <v-layout row class="yc-auth-container">
            <c-auth-bar/>
            <v-container>
                
            </v-container>
        </v-layout>
    </div>
</template>

<script>
import AuthBar from '@/components/c-auth-bar';

export default {
    components: {
        'c-auth-bar': AuthBar,
    }
}
</script>

<style lang="scss">

.yc-auth-background {
    background-image: url('https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    height: 100%;

    position: static;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .yc-auth-container {
        height: 100%;
        .yc-left-bar {

        }

        .yc-content {

        }
    }

}

</style>

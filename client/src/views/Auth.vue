<template>
    <div class="yc-background-auth">
        <c-auth-bar/>
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

.yc-background-auth {
    background-image: url('https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    height: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>

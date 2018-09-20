<template>
    <div>
        <h1 :class="$style.pink">App</h1>
        <pre>$style: {{$style}}</pre>
        <pre>style: {{style}}</pre>
    </div>
</template>

<script>
export default {
    computed: {
        style () {
            return this.$style;
        }
    },
    created () {
        console.log(this.$style);
    }
}
</script>

<style module>
.pink {
    color: #F78AE0 !important;
}
</style>

<template>
    <div>
        <h1 :class="$style.pink">CSS Modules</h1>
        <pre>$style: {{$style}}</pre>
    </div>
</template>

<script>
export default {
    created () {
        console.log(this.$style);
    }
}
</script>

<style module>
.pink {
    color: #F78AE0;
}
</style>

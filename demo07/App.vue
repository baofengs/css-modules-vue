<template>
    <div>
        <h1 :class="$style.pink">CSS Module</h1>
        <pre>$style: {{$style}}</pre>
        <h1 class="blue">CSS</h1>
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

<style>
.blue {
    color: #5CC9F5;
}
</style>

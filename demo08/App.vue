<template>
    <div>
        <h1 :class="$style.pink">CSS Modules</h1>
        <pre>$style: {{$style}}</pre>
        <div class="container">
            <h1 class="item">SCSS</h1>
        </div>
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

<style lang="scss">
.container {
    .item {
        background-color: #5CC9F5;
    }
}
</style>

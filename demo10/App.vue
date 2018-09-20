<template>
    <div>
        <div :class="$style.container">
            <h1 :class="$style.item">SCSS with CSS Modules</h1>
        </div>
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

<style lang="scss">
.container {
    .item {
        background-color: #B0F566;
    }
}
</style>

<style lang="scss" module>
.container {
    .item {
        background-color: #5CC9F5;
    }
}
</style>

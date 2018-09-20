<template>
    <div>
        <div :class="a.container">
            <h1 :class="a.item">SCSS with CSS Modules</h1>
        </div>
        <pre>module a: {{a}}</pre>
        <div :class="b.container">
            <h1 :class="b.item">SCSS with CSS Modules</h1>
        </div>
        <pre>module b: {{b}}</pre>
        <div class="container">
            <h1 class="item">SCSS</h1>
        </div>
    </div>
</template>

<script>
export default {
    created () {
        console.log(this.a, this.b);
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

<style lang="scss" module="a">
.container {
    .item {
        background-color: #5CC9F5;
    }
}
</style>

<style lang="scss" module="b">
.container {
    .item {
        background-color: #F78AE0;
    }
}
</style>

<template>
    <div>
        <div :class="$style.container">
            <h1 :class="$style.item">SCSS with CSS Modules</h1>
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

<style lang="scss" module>
.container {
    .item {
        background-color: #5CC9F5;
    }
}
</style>

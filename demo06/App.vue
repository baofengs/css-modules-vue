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
@value colors: "./variables.css";
@value blue, red, green from colors;

.className {
    background-color: red;
}

.pink {
    composes: className;
    color: blue;
}
</style>

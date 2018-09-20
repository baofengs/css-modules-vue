<template>
    <div>
        <h1 :class="[$style.pink, $style.bold, 'title']">CSS Module</h1>
        <h1 :class="[$style.foo, $style.bar, 'baz']">CSS Module</h1>
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
:local(.pink ){
    color: #F78AE0;
}

.bold {
    font-weight: bold;
}

:global(.title) {
    color: green;
}

.foo.bar:global(.baz) {
    color: red;
}
</style>

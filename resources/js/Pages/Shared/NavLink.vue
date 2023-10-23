<template>
    <Link class="link--gradient" :class="{ 'link--gradient--active': active }">
        <slot />
    </Link>
</template>

<script>
export default {
    props: {
        active: Boolean,
    },
};
</script>

<style lang="scss">
@import "/resources/scss/app.scss";

.link--gradient {
    position: relative;
    text-decoration: none;
    padding-bottom: 8px;
    color: $color-light-grey;
    transition: $transition-standard;

    @media screen and (max-width: $screen-sm) {
        color: $color-white;
    }
}

.link--gradient:hover {
    color: $color-white;
}

.link--gradient::after {
    content: " ";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 0;
    height: 2px;
    background: $color-gradient-tealpurple--rot90;
    transition: $transition-standard;

    @media screen and (max-width: $screen-sm) {
        width: 100%;
        background: $color-teal;
    }
}

.link--gradient:hover::after {
    width: 100%;
}

.link--gradient--active {
    position: relative;
    text-decoration: none;
    padding-bottom: 8px;
    color: $color-white;
    transition: $transition-standard;
}

.link--gradient--active::after {
    content: " ";
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: $color-gradient-tealpurple--rot90;
    transition: $transition-standard;

    @media screen and (max-width: $screen-sm) {
        background: $color-purple;
    }
}
</style>

<template>
    <!-- Copyright and author -->
    <div class="footer">
        <p class="pt-sm">© Aaron Hay 2023</p>
    </div>
</template>

<script>
export default {
    name: "AppFooter",
};
</script>

<style lang="scss">
@import "/resources/scss/app.scss";

.footer {
    grid-area: footer;
    display: flex;
    justify-content: end;
    align-items: end;

    p {
        margin-bottom: 0;
    }

    @media screen and (max-width: $screen-sm) {
        justify-content: start;
    }
}
</style>

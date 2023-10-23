<template>
    <Head title="Welcome">
        <!-- default title -->
        <meta
            type="description"
            content="Information about my app"
            head-key="description"
        />
    </Head>
    <transition name="page" mode="out-in" appear>
        <!-- Background for site -->
        <div class="main" :key="$page.url">
            <!-- Default container for positioning main components -->
            <div class="main_container">
                <!-- Container for positioning hero content -->
                <div class="hero">
                    <AppHeader />
                    <!-- Content that changes based on selected internal link -->
                    <div class="hero_content">
                        <slot />
                    </div>
                    <Nav />
                    <AppFooter />
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import Nav from "./Nav.vue";
</script>

<script>
export default {
    name: "Layout",
};
</script>

<style lang="scss">
@import "/resources/scss/app.scss";

body {
    background-color: $color-charcoal-dark;
}

.main {
    display: flex;
    justify-content: center;

    @media screen and (max-width: $screen-sm) {
        flex-direction: column;
    }

    &_container {
        display: grid;
        grid-template-rows: auto;
        grid-template-areas:
            ".......  .......  ......."
            ".......  hero     ......."
            ".......  .......  .......";
        align-items: center;
        justify-content: center;

        overflow: hidden;
        height: 100%;
        min-height: 100vh;

        @media screen and (max-width: $screen-sm) {
            grid-template-areas: "....... hero .......";
        }
    }

    .hero {
        --gutter-space: 4rem;
        --content-width: 54.4rem;
        --border-thickness: 1.6rem;

        grid-area: hero;
        display: grid;
        grid-template-columns: var(--gutter-space) var(--content-width) auto var(
                --gutter-space
            );
        grid-template-areas:
            "header  header  header  header"
            ".       content sidebar ."
            "footer  footer  footer  footer";

        width: 100%;
        padding: 4rem;
        min-height: 100%;
        border: var(--border-thickness) solid white;
        border-image: url("/public/custom-border-color.svg") 1% stretch;

        @media screen and (max-width: $screen-sm) {
            --content-width: 100%;
            --border-thickness: 0.8rem;

            grid-template-columns: var(--content-width);
            grid-template-areas:
                "header"
                "content"
                "sidebar"
                "footer";

            width: 100%;
            padding: 2rem;
            border: var(--border-thickness) solid white;
            border-image: url("/public/custom-border-color.svg") 1% stretch;
        }

        &_content {
            grid-area: content;
            padding-block: clamp(1rem, 2vh, 4rem);

            @media screen and (max-width: $screen-sm) {
                padding-bottom: 0;
            }
        }

        &_sidebar {
            grid-area: sidebar;
            padding-block: clamp(1rem, 2vh, 4rem);

            ul {
                list-style-type: none;

                li:not(:last-child) {
                    margin-bottom: 1.1rem;
                }
            }

            @media screen and (max-width: $screen-sm) {
                padding-top: 0;
            }
        }

        span {
            display: block;
            position: relative;
        }

        span::before {
            content: " ";
            width: 2px;
            background: $color-gradient-tealpurple;
            position: absolute;
            top: 0;
            bottom: 0;
            margin-left: -20px;

            @media screen and (max-width: $screen-sm) {
                display: none;
            }
        }
    }
}

.page-enter-active,
.page-leave-active {
    transition: $transition-long;
}

.page-enter,
.page-leave-active {
    opacity: 0;
}
</style>

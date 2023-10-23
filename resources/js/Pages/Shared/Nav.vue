<template>
    <!-- Links for changing the content inside of the hero -->
    <nav class="hero_sidebar">
        <h2 class="mb-xs">Projects</h2>
        <ul>
            <li>
                <NavLink
                    href="/projects/stream"
                    :active="$page.component == 'Projects/Stream'"
                >
                    Stream
                </NavLink>
            </li>
            <li>
                <NavLink
                    href="/projects/powiswood-kennels"
                    :active="$page.component == 'Projects/Powiswood'"
                >
                    Powiswood Kennels
                </NavLink>
            </li>
            <li>
                <NavLink
                    href="/projects/glycation-database"
                    :active="$page.component == 'Projects/GlycationDb'"
                >
                    Glycation Database
                </NavLink>
            </li>
        </ul>
    </nav>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
    name: "Nav",
    components: { NavLink },
};
</script>

<style lang="scss">
@import "/resources/scss/app.scss";
</style>

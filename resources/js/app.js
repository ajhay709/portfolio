import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/vue3";
import Layout from "./Pages/Shared/Layout.vue";
import "/resources/scss/app.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
    faGithub,
    faLaravel,
    faCss3Alt,
    faJs,
    faPhp,
    faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faFile,
    faChevronLeft,
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

/* register fonts */
library.add(
    faGithub,
    faEnvelope,
    faFile,
    faChevronLeft,
    faArrowLeft,
    faLaravel,
    faCss3Alt,
    faJs,
    faPhp,
    faHtml5
);

// initialise app with settings
createInertiaApp({
    title: (title) => `Portfolio - ${title}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];

        if (page.default.layout === undefined) {
            page.default.layout = Layout;
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("font-awesome-icon", FontAwesomeIcon)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },
});

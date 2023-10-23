<template>
    <Head title="Powiswood Kennels">
        <meta
            type="description"
            content="Home information"
            head-key="description"
        />
    </Head>

    <h2>Powiswood Kennels</h2>

    <span>
        <h3>Setting the scene</h3>
        <p>
            Louise and Iain are a recently married couple and the new owners of
            an established dog kennel business outside Falkirk. They provide
            boarding services for dogs and own four of their own German
            Shepherds.
        </p>

        <h3>The problem</h3>
        <p>
            Along with acquiring the kennels and the attached house and land,
            Louise and Iain owned an aging website passed on from the previous
            business owners created years ago. The website was dated and lacked
            modern design features and functionality like mobile responsiveness,
            call-to-actions, and a clear flow of content.
        </p>

        <h3>The solution</h3>
        <p>
            I designed and implemented a fresh look for the website that
            incorporated elements of professionalism and the client's love for
            their pets. I created the site with Laravel for handling the contact
            form and the mail server components of the site. I could organise my
            code structure using the MVC pattern and leverage Laravel's built in
            data routing and middleware. I chose to write my own custom CSS
            rather than rely on Bootstrap or Tailwind libraries to challenge my
            knowledge of CSS and avoid bogging the website down with too many
            frameworks and libraries.
        </p>
    </span>

    <ul class="pt-md pl-0">
        <Link href="/" class="link--gradient mr-md">Home</Link>

        <a
            href="https://www.powiswoodkennels.co.uk/"
            target="_blank"
            class="link--gradient"
            >View site</a
        >
    </ul>
</template>

<script>
export default {
    name: "Powiswood",
};
</script>

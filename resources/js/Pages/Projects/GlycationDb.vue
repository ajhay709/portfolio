<template>
    <Head title="Glycation Database">
        <meta
            type="description"
            content="Home information"
            head-key="description"
        />
    </Head>

    <h2>Glycation Database</h2>

    <span>
        <h3>Setting the scene</h3>
        <p>
            One of my university lecturers at Abertay had contracted me to
            assist in an ongoing research project that the university was
            undertaking. They were investigating the long-term effects of
            Advanced glycation end products (AGEs) in various foods and cooking
            methods. These compounds are associated with increased aging,
            development, or worsening of degenerative diseases such as diabetes,
            chronic kidney disease, and Alzheimer's disease.
        </p>

        <h3>The problem</h3>
        <p>
            The research team had collated an extensive library of chemical
            compounds, foods, and research data associated with AGEs. However,
            filtering this data into meaningful reference material was proving
            difficult. The university asked me to design and implement a system
            that translated the raw data they collected into an organised and
            structured digital format.
        </p>

        <h3>The solution</h3>
        <p>
            I designed and implemented a prototype relational database system
            that converted all the raw data into logical relationships. The
            database served data to a web application front-end that project
            members could search and filter through. When building the project,
            I had begun learning to use Laravel and aimed to test my new
            knowledge, knowing Laravel's eloquent object-relational mapper (ORM)
            would be beneficial for writing database queries and handling
            relationships. I chose to use Bootstrap to aid my front-end design
            due to the time limitations of the project, and I was familiar with
            the class names and structures of the library.
        </p>
    </span>

    <ul class="pt-md pl-0">
        <Link href="/" class="link--gradient mr-md">Home</Link>

        <a
            href="https://glycation.abertay.ac.uk/"
            target="_blank"
            class="link--gradient"
            >View site</a
        >
    </ul>
</template>

<script></script>

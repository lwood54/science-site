module.exports = {
    siteMetadata: {
        title: `Mr. Wood's Science Site`,
        description: `A website built for 7th grade Texas science students.`,
        author: `Logan Wood`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
};

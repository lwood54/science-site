const path = require(`path`);

module.exports = {
    siteMetadata: {
        title: `Mr. Wood's Science Site`,
        description: `A website built for 7th grade Texas science students.`,
        author: `Logan Wood`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        `gatsby-plugin-playground`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `teksJSONContent`,
                path: `${__dirname}/src/components/TEKS`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
    ],
};

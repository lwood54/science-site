import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import sev8B from "../../components/TEKS/sev8B.json";
import NoteCard from "../../templates/NoteCard";

import cls from "../unitPages.module.scss";
// Instead of passing the content to the NotesTemplate, use the NotesTemplate to wrap the content to add
// any needed headers and navs, but wrap the content.
// Then inside the NotesTemplate, use a NoteCard hoc like in the other website, then I can customize
// whether the images are left/right, whatever.

const unit1_1 = props => {
    const { sev8BJson } = useStaticQuery(
        graphql`
            query {
                sev8BJson {
                    topics {
                        image {
                            name
                            imgSide
                            imgSrc {
                                childImageSharp {
                                    fluid(maxWidth: 275) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    let wedImage = null;
    sev8BJson.topics.forEach(topic => {
        if (topic.image) {
            if (topic.image.name === "w-e-d") {
                wedImage = topic.image;
            }
        }
    });
    console.log(sev8B[0].topics[0].heading);
    return (
        <Layout>
            <h1 className={cls.unitPageTitle}>
                Levels of Organization - Unit 1.1
            </h1>
            <NoteCard image={wedImage}>
                <h3>{sev8B[0].topics[0].heading}</h3>
                <p>{sev8B[0].topics[0].content}</p>
            </NoteCard>
        </Layout>
    );
};

export default unit1_1;

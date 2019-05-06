import React from "react";

import Img from "gatsby-image";
import cls from "./NoteCard.module.scss";

const NoteCard = props => {
    if (props.image) {
        if (props.image.imgSide === "left") {
            return (
                <div className={cls.NotesContainer}>
                    <div className={cls.ImageContainer}>
                        <Img
                            className={cls.Image}
                            fluid={props.image.imgSrc.childImageSharp.fluid}
                            alt={props.image.name}
                        />
                    </div>
                    <div className={cls.Notes}>{props.children}</div>
                </div>
            );
        } else if (props.image.imgSide === "right") {
            return (
                <div className={cls.NotesContainer}>
                    <div className={cls.Notes}>{props.children}</div>
                    <div className={cls.ImageContainer}>
                        <Img
                            className={cls.Image}
                            fluid={props.image.imgSrc.childImageSharp.fluid}
                            alt={props.image.name}
                        />
                    </div>
                </div>
            );
        }
    } else {
        return (
            <div className={cls.NotesContainer}>
                <div className={cls.NotesOnly}>{props.children}</div>
            </div>
        );
    }
};

export default NoteCard;

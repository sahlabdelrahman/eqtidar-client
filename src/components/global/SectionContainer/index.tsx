import { JSX, ClassAttributes, HTMLAttributes } from "react";
import "./style.scss";

const SectionContainer = (
    props: JSX.IntrinsicAttributes &
        ClassAttributes<HTMLElement> &
        HTMLAttributes<HTMLElement>
) => {
    return (
        <section id="sectionContainer" {...props}>
            {props?.children}
        </section>
    );
};

export default SectionContainer;

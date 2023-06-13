import React from 'react';
import { useState, Fragment } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const Blog = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <div className='container mx-auto my-16'>
            <Fragment>
                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </AccordionHeader>
                    <AccordionBody>
                        An access token is a credential that is used by a client to access a protected resource. It is typically a string of characters that represents the authorization granted to the client. A refresh token is a credential used to obtain a new access token after the previous one has expired. When a client sends a request to a server, it includes the access token in the request header. The server then verifies the token and grants or denies access to the requested resource. Refresh tokens are typically stored securely on the server-side and are used to obtain a new access token when the previous one has expired.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        Compare SQL and NoSQL databases?
                    </AccordionHeader>
                    <AccordionBody>
                        SQL: SQL databases follow a relational data model. They organize data into tables with predefined schemas, and relationships between tables are established using foreign keys. <br />
                        NoSQL: NoSQL databases use various data models such as key-value, document, columnar, and graph. They provide flexible schemas, allowing for dynamic and unstructured data.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        What is express js? What is Nest JS?
                    </AccordionHeader>
                    <AccordionBody>
                        Express.js is a minimalist web application framework for Node.js, designed to build web applications and APIs. It provides a simple and flexible set of features for creating server-side applications using JavaScript. Express.js is known for its lightweight nature and its ability to handle routing, middleware, and request/response handling. <br />
                        NestJS, on the other hand, is a framework for building scalable and efficient server-side applications in Node.js. It is built on top of Express.js and incorporates concepts from Angular, a popular front-end framework. NestJS follows the architectural style of "modularity-driven development," promoting a structured and organized approach to building applications.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                        What is MongoDB aggregate and how does it work?
                    </AccordionHeader>
                    <AccordionBody>
                        MongoDB's aggregate function is a powerful tool for performing data analysis and processing operations on collections of documents within a MongoDB database. It allows you to perform complex data transformations and aggregations using a flexible and expressive framework. <br />
                        The aggregate function takes an array of stages as its input, with each stage representing a specific operation or transformation to apply to the documents in the collection. Each stage in the pipeline processes the documents and passes the results to the next stage.
                    </AccordionBody>
                </Accordion>
            </Fragment>
        </div>
    );
};

export default Blog;
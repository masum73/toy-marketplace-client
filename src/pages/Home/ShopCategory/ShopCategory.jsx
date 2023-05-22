import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";


const ShopCategory = () => {

    return (

        <div>
            <h1 className='text-center text-4xl my-16'>Shop by Category</h1>
            <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList>
                <Tab>The Simpsons</Tab>
                <Tab>Futurama</Tab>
            </TabList>
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList>
                        <Tab>Homer Simpson</Tab>
                        <Tab>Marge Simpson</Tab>
                        <Tab>Bart Simpson</Tab>
                        <Tab>Lisa Simpson</Tab>
                        <Tab>Maggie Simpson</Tab>
                    </TabList>
                    <TabPanel>
                        <Card className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                                    className="w-full h-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="flex items-center justify-between mb-2">
                                    <Typography color="blue-gray" className="font-medium">
                                        Apple AirPods
                                    </Typography>
                                    <Typography color="blue-gray" className="font-medium">
                                        $95.00
                                    </Typography>
                                </div>
                                <Typography variant="small" color="gray" className="font-normal opacity-75">
                                    With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                                >
                                    Add to Cart
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
                    </TabPanel>
                    <TabPanel>
                        <p>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="Bart Simpson" />
                    </TabPanel>
                    <TabPanel>
                        <p>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png" alt="Lisa Simpson" />
                    </TabPanel>
                    <TabPanel>
                        <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                    </TabPanel>
                </Tabs>
            </TabPanel>
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList>
                        <Tab>Philip J. Fry</Tab>
                        <Tab>Turanga Leela</Tab>
                        <Tab>Bender Bending Rodriguez</Tab>
                        <Tab>Amy Wong</Tab>
                        <Tab>Professor Hubert J. Farnsworth</Tab>
                        <Tab>Doctor John Zoidberg</Tab>
                    </TabList>
                    <TabPanel>
                        <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
                    </TabPanel>
                    <TabPanel>
                        <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
                    </TabPanel>
                    <TabPanel>
                        <p>A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who is Fry's best friend. Built in Tijuana, Mexico, he is the Planet Express Ship's cook.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png" alt="Bender Bending Rodriguez" />
                    </TabPanel>
                    <TabPanel>
                        <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Many times great-nephew of Fry. CEO and owner of Planet Express delivery company. Tenured professor of Mars University.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png" alt="Professor Hubert J. Farnsworth" />
                    </TabPanel>
                    <TabPanel>
                        <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
                    </TabPanel>
                </Tabs>
            </TabPanel>
        </Tabs>
        </div>

    );
};

export default ShopCategory;
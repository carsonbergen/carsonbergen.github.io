import Card from "@/components/Card";
import Link from "next/link";

function GameDevCorner() {
    return (
        <>
            <div className='page-body'>
                <div>
                    <h1 id="gdc-header" className="page-header border-0 text-green">
                        Game Development Corner
                    </h1>
                    <Card title="Whimsical Wizardry">
                        <p className="page-paragraph">
                            This is a game I started working on, involving wizards, and loads of whimsical endeavours. 
                        </p>
                        <div className="image-container">
                            <img 
                                className="image"
                                src="/assets/whimsical_wizardry/idle_animation_test_2.gif"
                                alt="Wizard idle animation test 2 gif"
                                width="400"
                            />
                            <img 
                                className="image"
                                src="/assets/whimsical_wizardry/idle_animation_test.gif"
                                alt="Wizard idle animation test 2 gif"
                                width="400"
                            />
                        </div>
                    </Card>
                    <Card title="Bottled Up">
                        <p className="page-paragraph">
                            I made this game for Hardcore Punk Jam #3, within the defined time limit of 48 hours.
                        </p>
                        <div className="image-container">
                            <img 
                                className="image"
                                src="/assets/bottled_up/image1.png"
                                alt="Bottled Up image of the main menu"
                                width="400"
                            />
                            <img 
                                className="image"
                                src="/assets/bottled_up/image2.png"
                                alt="Bottled Up image of the player surrounded by bottles"
                                width="400"
                            />
                            <img 
                                className="image"
                                src="/assets/bottled_up/image3.png"
                                alt="Bottled Up image of the player in an empty level"
                                width="400"
                            />
                        </div>
                        <Link className="page-link-button" href="https://carsonbergen.itch.io/bottled-up" target='_blank' rel='noopener noreferrer'>
                            Check it out!
                        </Link>
                    </Card>
                    <Card title="Bottled Up">
                        <p className="page-paragraph">
                            I made this game for Mini Jam 111: Colors² within 48 hours.
                        </p>
                        <div className="image-container">
                            <img 
                                className="image"
                                src="/assets/inked_out/image1.png"
                                alt="Inked Out! banner"
                                height="400"
                            />
                            <img 
                                className="image"
                                src="/assets/inked_out/image2.png"
                                alt="Inked Out! gameplay"
                                height="400"
                            />
                        </div>
                        <Link className="page-link-button" href="https://carsonbergen.itch.io/inked-out" target='_blank' rel='noopener noreferrer'>
                            Check it out!
                        </Link>
                    </Card>
                    <Card title="Excursion" className="border-b-[2px]">
                        <p className="page-paragraph">
                            I made this game for fun quite awhile ago, when I was first learning game development.
                        </p>
                        <div className="image-container">
                            <img 
                                className="image"
                                src="/assets/excursion/image1.png"
                                alt="Excursion gameplay"
                                height="400"
                            />
                            <img 
                                className="image"
                                src="/assets/excursion/image2.png"
                                alt="Excursion gameplay"
                                height="400"
                            />
                        </div>
                        <Link className="page-link-button" href="https://carsonbergen.itch.io/inked-out" target='_blank' rel='noopener noreferrer'>
                            Check it out!
                        </Link>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default GameDevCorner;
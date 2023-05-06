import { Link } from "react-router-dom";

import ImageCarousel from "../components/ImageCarousel";
import CarouselImage from "../components/CarouselImage";
import ThreeDModelViewer from "../components/ThreeDModelViewer";
import Model from "../components/Model";

function GameDevCorner() {
    return (
        <>
            <div className='page-body'>
                <h1 className="page-header">Game development corner</h1>
                <div className="page-paragraph">
                    <div className="card-body">
                        <h1 className="card-title">
                            Project Whimsical Wizardry
                        </h1>
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameDevCorner;
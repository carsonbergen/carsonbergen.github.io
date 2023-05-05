import CarouselImage from "../components/CarouselImage";
import ImageCarousel from "../components/ImageCarousel";
import Warning from "../components/Warning";

function Projects() {
    return (
        <>
            <div className='page-body'>
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">
                            Project Whimsical Wizardry
                        </h1>
                        <p className="page-paragraph">
                            This is a game I started working on, involving wizards, and loads of whimsical endeavours. 
                        </p>
                        <ImageCarousel>
                            <CarouselImage 
                                id="slide1" 
                                nextId="#slide2"
                                prevId="#slide3" 
                                src="src/assets/whimsical_wizardry/idle_animation_test.gif" 
                            />
                            <CarouselImage 
                                id="slide2" 
                                nextId="#slide3"
                                prevId="#slide1" 
                                src="src/assets/whimsical_wizardry/walk_animation_test.gif" 
                            />
                            <CarouselImage 
                                id="slide3" 
                                nextId="#slide1"
                                prevId="#slide2" 
                                src="src/assets/whimsical_wizardry/idle_animation_test_2.gif" 
                            />
                        </ImageCarousel>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
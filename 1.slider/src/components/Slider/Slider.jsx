import { useEffect, useState } from "react"
import leftChevron from "../../assets/left-arrow.svg"
import rightChevron from "../../assets/right-arrow.svg"
import "./Slider.css"
import sliderData from "../../data/sliderData"

function Slider() {
    const [sliderIndex,setSliderIndex] = useState(1);

    function toggleImage(indexPayload) {        
        setSliderIndex(sliderIndex => {
            if (indexPayload + sliderIndex > sliderData.length){
                return  1
            }else if (indexPayload + sliderData < 1){
                return sliderData.length
            }else{
                return  sliderIndex + indexPayload
            }
        })
    }

    useEffect(() => {
        const intervalID = setInterval(() => { toggleImage(1)}, 1000);
        return ()  => clearInterval(intervalID)
    },[])

    return(
        <>
            <p className="index-info">{sliderIndex} / {sliderData.length}</p>
            <div className="slider">
                <p className="image-info">{sliderData.find(obj => obj.id == sliderIndex).description}</p>
                <img src={`/images/img-${sliderIndex}.jpg`} 
                    alt="slider-img" className="slider-img"/>
                <button 
                    onClick={() => toggleImage(-1)}
                    className="navigation-button prev-button">
                    <img src={leftChevron} alt="previous image" />
                </button>
                <button
                    onClick={() => toggleImage(1)} 
                    className="navigation-button next-button">
                    <img src={rightChevron} alt="next image" />
                </button>
            </div>
        </>

    )    
}

export default Slider;
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styled from 'styled-components';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 4000){
	    setVisible(true)
	}
	else if (scrolled <= 4000){
	    setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

const Button = styled.div`
    position: fixed;
    width: 100%;
    left: 93%;
    bottom: 100px;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: gray;
    `

return (
	<Button>
	<FaArrowCircleUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} />
	</Button>
);
}

export default ScrollButton;

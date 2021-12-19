<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
<title>给璇璇的圣诞树</title>
 
<style>
 
body {
    background: -webkit-linear-gradient(top, #235, #222 40%, #fff 50%, #fff);
    background: linear-gradient(to bottom, #235, #222 40%, #fff 50%, #fff);
    overflow: hidden;
    height: 100vh;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0;
    margin: 0;
}
tspan {
    font-size: 48px;
    font-family: sans-serif;
    fill: #fc2d2a;
}
tspan:nth-of-type(5n + 5) {
    fill: #fc2df2;
}
tspan:nth-of-type(5n + 4) {
    fill: #342df2;
}
tspan:nth-of-type(5n + 3) {
    fill: #fcf52a;
}
tspan:nth-of-type(5n + 2) {
    fill: #34f52a;
}
.tree {
    -webkit-filter: brightness(90%);
    filter: brightness(90%);
    -webkit-transition: -webkit-filter 0.145s ease-in-out, filter 0.145s ease-in-out;
    transition: -webkit-filter 0.145s ease-in-out, filter 0.145s ease-in-out;
}
.tree path {
    stroke: #336833;
}
.huzzah .tree {
    -webkit-filter: brightness(105%);
    filter: brightness(105%);
}
.tree,
.lights,
.lights-blur,
.star,
.star-blur {
    position: absolute;
    bottom: 5%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 60vmin;
    z-index: 100;
}
.tree svg,
.lights svg,
.lights-blur svg,
.star svg,
.star-blur svg {
    max-width: 100%;
}
.star {
    -webkit-filter: brightness(0.5);
    filter: brightness(0.5);
    -webkit-transition: -webkit-filter 0.145s ease-in-out, filter 0.145s ease-in-out;
    transition: -webkit-filter 0.145s ease-in-out, filter 0.145s ease-in-out;
}
.huzzah .star {
    -webkit-filter: brightness(1.3);
    filter: brightness(1.3);
}
.lights {
    -webkit-filter: brightness(0.4) opacity(0.85);
    filter: brightness(0.4) opacity(0.85);
    -webkit-transition: -webkit-filter 0.145s ease-in-out, filter 0.145s ease-in-out;
    transition: -webkit-filter 0.145s ease-in-out, filter 0.145s ease-in-out;
}
.huzzah .lights {
    -webkit-filter: brightness(1.3);
    filter: brightness(1.3);
}
.lights-blur {
    opacity: 0;
    -webkit-transition: -webkit-filter 0.145s ease-in-out, opacity 0.145s ease-in-out, filter 0.145s ease-in-out, opacity 0.145s ease-in-out;
    transition: -webkit-filter 0.145s ease-in-out, opacity 0.145s ease-in-out, filter 0.145s ease-in-out, opacity 0.145s ease-in-out;
}
.huzzah .lights-blur {
    opacity: 1;
    -webkit-filter: brightness(1.3) blur(3px);
    filter: brightness(1.3) blur(3px);
}
.forest {
    -webkit-filter: grayscale(0.33);
    filter: grayscale(0.33);
    position: absolute;
    width: 100%;
    top: 50%;
}
.forest .back-tree {
    position: absolute;
    top: 50%;
    left: 0;
    width: 60vmin;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
}
.forest .back-tree:nth-of-type(1) {
    -webkit-transform: translate3d(-10vw, -50%, 0) scale(0.5);
    transform: translate3d(-10vw, -50%, 0) scale(0.5);
    z-index: 50;
    -webkit-filter: grayscale(0.33) brightness(0.9) opacity(0.6);
    filter: grayscale(0.33) brightness(0.9) opacity(0.6);
}
.forest .back-tree:nth-of-type(2) {
    -webkit-transform: translate3d(0, -50%, 0) scale(0.67);
    transform: translate3d(0, -50%, 0) scale(0.67);
    z-index: 67;
}
.forest .back-tree:nth-of-type(3) {
    -webkit-transform: translate3d(10vw, -50%, 0) scale(0.45);
    transform: translate3d(10vw, -50%, 0) scale(0.45);
    z-index: 45;
    -webkit-filter: grayscale(0.33) brightness(0.9) opacity(0.6);
    filter: grayscale(0.33) brightness(0.9) opacity(0.6);
}
.forest .back-tree:nth-of-type(4) {
    -webkit-transform: translate3d(18vw, -48%, 0) scale(0.56);
    transform: translate3d(18vw, -48%, 0) scale(0.56);
    z-index: 56;
    -webkit-filter: grayscale(0.33) brightness(0.9);
    filter: grayscale(0.33) brightness(0.9);
}
.forest .back-tree:nth-of-type(5) {
    -webkit-transform: translate3d(28vw, -50%, 0) scale(0.5);
    transform: translate3d(28vw, -50%, 0) scale(0.5);
    z-index: 50;
    -webkit-filter: grayscale(0.33) brightness(0.9) opacity(0.6);
    filter: grayscale(0.33) brightness(0.9) opacity(0.6);
}
.forest .back-tree:nth-of-type(6) {
    -webkit-transform: translate3d(37vw, -50%, 0) scale(0.66);
    transform: translate3d(37vw, -50%, 0) scale(0.66);
    z-index: 66;
}
.forest .back-tree:nth-of-type(7) {
    -webkit-transform: translate3d(36vw, -50%, 0) scale(0.54);
    transform: translate3d(36vw, -50%, 0) scale(0.54);
    z-index: 54;
    -webkit-filter: grayscale(0.33) brightness(0.9);
    filter: grayscale(0.33) brightness(0.9);
}
.forest .back-tree:nth-of-type(8) {
    -webkit-transform: translate3d(49vw, -50%, 0) scale(0.46);
    transform: translate3d(49vw, -50%, 0) scale(0.46);
    z-index: 46;
    -webkit-filter: grayscale(0.33) brightness(0.9) opacity(0.6);
    filter: grayscale(0.33) brightness(0.9) opacity(0.6);
}
.forest .back-tree:nth-of-type(9) {
    -webkit-transform: translate3d(57vw, -50%, 0) scale(0.69);
    transform: translate3d(57vw, -50%, 0) scale(0.69);
    z-index: 69;
}
.forest .back-tree:nth-of-type(10) {
    -webkit-transform: translate3d(66vw, -50%, 0) scale(0.55);
    transform: translate3d(66vw, -50%, 0) scale(0.55);
    z-index: 55;
    -webkit-filter: grayscale(0.33) brightness(0.9);
    filter: grayscale(0.33) brightness(0.9);
}
.forest .back-tree:nth-of-type(11) {
    -webkit-transform: translate3d(72vw, -50%, 0) scale(0.49);
    transform: translate3d(72vw, -50%, 0) scale(0.49);
    z-index: 49;
    -webkit-filter: grayscale(0.33) brightness(0.9) opacity(0.6);
    filter: grayscale(0.33) brightness(0.9) opacity(0.6);
}
.forest .back-tree:nth-of-type(12) {
    -webkit-transform: translate3d(80vw, -50%, 0) scale(0.6);
    transform: translate3d(80vw, -50%, 0) scale(0.6);
    z-index: 60;
    -webkit-filter: grayscale(0.33) brightness(0.9);
    filter: grayscale(0.33) brightness(0.9);
}
.forest .back-tree:nth-of-type(13) {
    -webkit-transform: translate3d(88vw, -50%, 0) scale(0.56);
    transform: translate3d(88vw, -50%, 0) scale(0.56);
    z-index: 56;
    -webkit-filter: grayscale(0.33) brightness(0.9);
    filter: grayscale(0.33) brightness(0.9);
}
.forest .back-tree:nth-of-type(14) {
    -webkit-transform: translate3d(96vw, -50%, 0) scale(0.48);
    transform: translate3d(96vw, -50%, 0) scale(0.48);
    z-index: 48;
    -webkit-filter: grayscale(0.33) brightness(0.9) opacity(0.6);
    filter: grayscale(0.33) brightness(0.9) opacity(0.6);
}
.forest .back-tree:nth-of-type(15) {
    -webkit-transform: translate3d(100vw, -50%, 0) scale(0.56);
    transform: translate3d(100vw, -50%, 0) scale(0.56);
    z-index: 56;
}
.forest .back-tree:nth-of-type(16) {
    -webkit-transform: translate3d(109vw, -50%, 0) scale(0.6);
    transform: translate3d(109vw, -50%, 0) scale(0.6);
    z-index: 60;
}
.snow {
    width: 1rem;
    height: 1rem;
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: -1rem;
    left: 0;
    z-index: 150;
}
.yeti {
    position: absolute;
    bottom: -270px;
    left: 40px;
    width: 300px;
    z-index: 200;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    will-change: transform;
    -webkit-transition: -webkit-transform 0.6s 0s ease-in;
    transition: transform 0.6s 0s ease-in;
    display: none;
}
.huzzah .yeti {
    -webkit-transform: translate3d(0, 0%, 0);
    transform: translate3d(0, 0%, 0);
    -webkit-transition: -webkit-transform 6s 1s ease-out;
    transition: transform 6s 1s ease-out;
}
.huzzah .yeti circle {
    -webkit-animation: shifty 9s alternate infinite ease-in-out both;
    animation: shifty 9s alternate infinite ease-in-out both;
}
.yeti-claws {
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 280px;
    will-change: transform;
}
.yeti-claws .claw {
    display: inline-block;
    float: left;
    width: 1rem;
    height: 1rem;
    background: #a4bbdc;
    border-radius: 50%;
}
.yeti-claws .claw:nth-of-type(odd) {
    float: right;
}
.huzzah .yeti-claws {
    -webkit-animation: clawy 3s 1s normal ease-in-out both, clawy2 3s 3s normal linear both;
    animation: clawy 3s 1s normal ease-in-out both, clawy2 3s 3s normal linear both;
}
@-webkit-keyframes shifty {
    54% {
        -webkit-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0);
    }
    80% {
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
    }
}
@keyframes shifty {
    54% {
        -webkit-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0);
    }
    80% {
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
    }
}
@-webkit-keyframes clawy {
    0% {
        -webkit-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0);
    }
    50% {
        -webkit-transform: translate3d(0px, -16px, 0);
        transform: translate3d(0px, -16px, 0);
    }
    80%,
    100% {
        -webkit-transform: translate3d(0px, -8px, 0);
        transform: translate3d(0px, -8px, 0);
    }
}
@keyframes clawy {
    0% {
        -webkit-transform: translate3d(0px, 0, 0);
        transform: translate3d(0px, 0, 0);
    }
    50% {
        -webkit-transform: translate3d(0px, -16px, 0);
        transform: translate3d(0px, -16px, 0);
    }
    80%,
    100% {
        -webkit-transform: translate3d(0px, -8px, 0);
        transform: translate3d(0px, -8px, 0);
    }
}
@-webkit-keyframes clawy2 {
    69%, 70%, 100% {
        z-index: 240;
    }
}
@keyframes clawy2 {
    69%, 70%, 100% {
        z-index: 240;
    }
}
.codepen {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background: #343436;
    z-index: 210;
}
.glow-screen {
    position: absolute;
    z-index: 90;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-radial-gradient(50% 50%, circle, rgba(0, 0, 0, 0), #444);
    background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0), #444);
    opacity: 0;
    -webkit-transition: opacity 0.145s ease-in-out;
    transition: opacity 0.145s ease-in-out;
}
.huzzah .glow-screen {
    opacity: 0.2;
}
</style>
 
</head>
 
<body>
 
<section class="music">
 
<embed src="123.mp3" autostart="true" loop="true" hidden="true">
  
       </embed>
 
</section>
     
     
     
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol viewBox="-10 -10 450 510" id="yeti">
        <path fill="#FFFFFF" stroke="#CCCCD1" stroke-width="6" d="M71.762,225.812c-16.97-9.15,4.478-141.045,4.478-141.045
    c20.896-43.284,55.782-57.057,63.433-62.687c39.553-29.104-23.928,53.011,12.687,23.134c26.124-21.316,30.224-35.893,41.418-44.403
    c5.941-4.516-2.612,41.417-2.612,41.417s19.03-20.522,35.821-37.313c6.332-6.332-17.536,42.164-17.536,42.164
    s64.477-47.313,57.089-39.925c-10.447,10.448-13.433,38.059-13.433,41.044s21.218,3.074,32.089,5.224
    c67.911,13.433,22.716,159.985,42.537,168.657c47.762,20.896,152.986,239.553,76.12,271.642s-268.657,41.791-355.224,13.433
    C-4.523,489.744-34.208,282.529,71.762,225.812" />
        <path fill="#A4BBDC" d="M130.048,165.985c-20.535-13.645-45.842-57.117-8.595-71.078c37.247-13.96,150.902-13.327,157.585,0
    c6.686,13.327,32.472,58.385,6.686,66.635C259.939,169.792,130.048,165.985,130.048,165.985z" />
        <path fill="#A4BBDC" d="M131.463,536.259c0,0-52.984-211.194-17.91-229.104s154.851-36.193,180.597-10.447
    S326.267,450.828,324,480.29C312.806,625.811,131.463,536.259,131.463,536.259z" />
        <ellipse fill="#FFFFFF" cx="176.986" cy="127.304" rx="28.359" ry="31.716" />
        <ellipse fill="#FFFFFF" cx="222.986" cy="127.304" rx="28.358" ry="31.716" />
        <circle cx="238.47" cy="142.789" r="10.261" />
        <circle cx="192.47" cy="142.789" r="10.261" />
        <path fill="none" stroke="#ACACB1" stroke-width="3" d="M200.816,81.398c17.534-13.058,44.282-6.76,59.806,14.082" />
        <path fill="none" stroke="#ACACB1" stroke-width="3" d="M133.259,79.191c7.845-20.406,33.821-29.373,58.078-20.047" />
    </symbol>
 
    <symbol id="plain-tree" viewBox="0 0 500 630">
        <polygon fill="#BF0082" stroke="#54B948" stroke-width="3" points="281.493,628.864 203.881,628.864 213.646,583.342 
        271.728,583.342 " />
        <polygon fill="#2BBD88" stroke="#54B948" stroke-width="3" points="482.61,579.117 3.6,579.117 63.866,518.35 422.345,518.35 " transform="translate(0,9)" />
        <polygon fill="#2BBD65" stroke="#54B948" stroke-width="3" points="416.375,513.499 69.835,513.499 113.435,415.177 
        372.777,415.177 " transform="translate(0,12)" />
        <polygon fill="#2BB621" stroke="#54B948" stroke-width="3" points="393.136,410.177 93.073,410.177 130.825,359.431 
        355.385,359.431 " transform="translate(0,15)" />
        <polygon fill="#65B621" stroke="#54B948" stroke-width="3" points="399.927,354.82 86.283,354.82 125.744,309.298 360.466,309.298 
        " transform="translate(0,17)" />
        <polygon fill="#2B9774" stroke="#54B948" stroke-width="3" points="341.218,305.191 144.993,305.191 169.68,252.664 316.53,252.664 
        " transform="translate(0,19)" />
        <polygon fill="#7EB948" stroke="#54B948" stroke-width="3" points="334.092,248.512 152.119,248.512 175.013,179.855 
        311.196,179.855 " transform="translate(0,21)" />
        <polygon fill="#54B948" stroke="#54B948" stroke-width="3" points="326.63,174.855 159.581,174.855 180.597,138.672 
        305.614,138.672 " transform="translate(0,24)" />
        <polygon fill="#006837" stroke="#54B948" stroke-width="3" points="293.438,134.729 192.772,134.729 205.438,89.207 280.772,89.207 
        " transform="translate(0,25)" />
    </symbol>
</svg>
 
<div class="yeti">
    <svg viewBox="0 0 500 630">
        <path fill="#FFFFFF" stroke="#CCCCD1" stroke-width="4" class="body" d="M71.762,225.812c-16.97-9.15,4.478-141.045,4.478-141.045
    c20.896-43.284,55.782-57.057,63.433-62.687c39.553-29.104-23.928,53.011,12.687,23.134c26.124-21.316,30.224-35.893,41.418-44.403
    c5.941-4.516-2.612,41.417-2.612,41.417s19.03-20.522,35.821-37.313c6.332-6.332-17.536,42.164-17.536,42.164
    s64.477-47.313,57.089-39.925c-10.447,10.448-13.433,38.059-13.433,41.044s21.218,3.074,32.089,5.224
    c67.911,13.433,22.716,159.985,42.537,168.657c47.762,20.896,152.986,239.553,76.12,271.642s-268.657,41.791-355.224,13.433
    C-4.523,489.744-34.208,282.529,71.762,225.812" />
        <path fill="#A4BBDC" d="M130.048,165.985c-20.535-13.645-45.842-57.117-8.595-71.078c37.247-13.96,150.902-13.327,157.585,0
    c6.686,13.327,32.472,58.385,6.686,66.635C259.939,169.792,130.048,165.985,130.048,165.985z" />
        <path fill="#A4BBDC" d="M131.463,536.259c0,0-52.984-211.194-17.91-229.104s154.851-36.193,180.597-10.447
    S326.267,450.828,324,480.29C312.806,625.811,131.463,536.259,131.463,536.259z" />
        <ellipse fill="#FFFFFF" cx="176.986" cy="127.304" rx="28.359" ry="31.716" />
        <ellipse fill="#FFFFFF" cx="222.986" cy="127.304" rx="28.358" ry="31.716" />
        <circle cx="238.47" cy="142.789" r="10.261" />
        <circle cx="192.47" cy="142.789" r="10.261" />
        <path fill="none" stroke="#ACACB1" stroke-width="3" d="M200.816,81.398c17.534-13.058,44.282-6.76,59.806,14.082" />
        <path fill="none" stroke="#ACACB1" stroke-width="3" d="M133.259,79.191c7.845-20.406,33.821-29.373,58.078-20.047" />
    </svg>
</div>
 
 
<div class="forest">
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
    <div class="back-tree">
        <svg viewBox="0 0 500 630">
            <use xlink:href="#plain-tree" />
        </svg>
    </div>
</div>
 
<div class="tree">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 630">
        <polygon fill="#BF0082" stroke="#54B948" stroke-width="3" points="281.493,628.864 203.881,628.864 213.646,583.342 
  271.728,583.342 " />
        <polygon fill="#2BBD88" stroke="#54B948" stroke-width="3" points="482.61,579.117 3.6,579.117 63.866,518.35 422.345,518.35 " />
        <polygon fill="#2BBD65" stroke="#54B948" stroke-width="3" points="416.375,513.499 69.835,513.499 113.435,415.177 
  372.777,415.177 " />
        <polygon fill="#2BB621" stroke="#54B948" stroke-width="3" points="393.136,410.177 93.073,410.177 130.825,359.431 
  355.385,359.431 " />
        <polygon fill="#65B621" stroke="#54B948" stroke-width="3" points="399.927,354.82 86.283,354.82 125.744,309.298 360.466,309.298 
  " />
        <polygon fill="#2B9774" stroke="#54B948" stroke-width="3" points="341.218,305.191 144.993,305.191 169.68,252.664 316.53,252.664 
  " />
        <polygon fill="#54B948" stroke="#54B948" stroke-width="3" points="326.63,174.855 159.581,174.855 180.597,138.672 
  305.614,138.672 " />
        <polygon fill="#006837" stroke="#54B948" stroke-width="3" points="293.438,134.729 192.772,134.729 205.438,89.207 280.772,89.207 
  " />
        <polygon fill="#7EB948" stroke="#54B948" stroke-width="3" points="334.092,248.512 152.119,248.512 175.013,179.855 
  311.196,179.855 " />
        <path fill="none" stroke-width="1" stroke="#555555" d="M192.721,101.148c0,0,132.909,4.862,107.463,14.179c-52.985,19.401-172.271,23.914-139.553,39.552
  c41.791,19.975,207.767,37.642,167.164,54.478c-30.597,12.687-217.571,5.611-176.865,23.88
  c43.284,19.426,229.041,14.938,185.074,31.343c-50,18.657-287.066,31.463-232.089,54.478c32.09,13.434,368.389-5.906,296.269,11.194
  c-72.389,17.164-363.166,21.901-293.284,47.015c47.761,17.164,288.806-22.447,282.089,7.463
  c-3.732,16.62-332.836,13.433-301.493,35.074c18.169,12.545,400.622,11.227,322.388,31.344
  c-52.238,13.433-360.82,19.776-346.269,34.328c13.806,13.806,394.681,5.599,368.189,32.09
  C404.455,544.918,22.572,554.88,22.572,554.88" />
    </svg>
</div>
<div class="star">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 630">
        <polygon fill="#FFD200" stroke="#FFB81F" stroke-width="3" points="277.102,87.356 244.793,77.88 218.67,99.123 217.698,65.467 
  189.422,47.187 221.131,35.863 229.779,3.323 250.348,29.979 283.967,28.148 264.971,55.947 " />
    </svg>
</div>
<div class="lights-blur">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 630">
        <polygon fill="#FFD200" stroke="#FFB81F" stroke-width="3" points="277.102,87.356 244.793,77.88 218.67,99.123 217.698,65.467 
  189.422,47.187 221.131,35.863 229.779,3.323 250.348,29.979 283.967,28.148 264.971,55.947 " />
        <text transform="matrix(1 0 0 1 197.2217 117.7964)">
            <tspan x="0" y="0">&#8226;</tspan>
            <tspan x="23.682" y="1.215">&#8226;</tspan>
            <tspan x="47.319" y="2.763">&#8226;</tspan>
            <tspan x="70.965" y="4.86">&#8226;</tspan>
            <tspan x="94.342" y="8.529">&#8226;</tspan>
            <tspan x="83.368" y="17.798">&#8226;</tspan>
            <tspan x="60.322" y="23.329">&#8226;</tspan>
            <tspan x="37.026" y="27.758">&#8226;</tspan>
            <tspan x="13.636" y="31.691">&#8226;</tspan>
            <tspan x="-9.738" y="35.586">&#8226;</tspan>
            <tspan x="-32.998" y="40.243">&#8226;</tspan>
            <tspan x="-45.742" y="51.979">&#8226;</tspan>
            <tspan x="-23.595" y="60.332">&#8226;</tspan>
            <tspan x="-0.654" y="66.269">&#8226;</tspan>
            <tspan x="22.492" y="71.437">&#8226;</tspan>
            <tspan x="45.689" y="76.312">&#8226;</tspan>
            <tspan x="68.885" y="81.193">&#8226;</tspan>
            <tspan x="92.01" y="86.422">&#8226;</tspan>
            <tspan x="114.845" y="92.766">&#8226;</tspan>
            <tspan x="127.179" y="106.057">&#8226;</tspan>
            <tspan x="104.359" y="111.836">&#8226;</tspan>
            <tspan x="80.738" y="114.033">&#8226;</tspan>
            <tspan x="57.082" y="115.419">&#8226;</tspan>
            <tspan x="33.391" y="116.5">&#8226;</tspan>
            <tspan x="9.702" y="117.535">&#8226;</tspan>
            <tspan x="-13.992" y="118.77">&#8226;</tspan>
            <tspan x="-37.606" y="120.688">&#8226;</tspan>
            <tspan x="-58.625" y="127.756">&#8226;</tspan>
            <tspan x="-36.995" y="136.588">&#8226;</tspan>
            <tspan x="-13.654" y="140.668">&#8226;</tspan>
            <tspan x="9.886" y="143.42">&#8226;</tspan>
            <tspan x="33.5" y="145.536">&#8226;</tspan>
            <tspan x="57.15" y="147.335">&#8226;</tspan>
            <tspan x="80.815" y="149.053">&#8226;</tspan>
            <tspan x="104.441" y="150.979">&#8226;</tspan>
            <tspan x="127.942" y="153.912">&#8226;</tspan>
            <tspan x="129" y="164.006">&#8226;</tspan>
            <tspan x="105.954" y="169.612">&#8226;</tspan>
            <tspan x="82.601" y="173.709">&#8226;</tspan>
            <tspan x="59.175" y="177.233">&#8226;</tspan>
            <tspan x="35.675" y="180.497">&#8226;</tspan>
            <tspan x="12.179" y="183.663">&#8226;</tspan>
            <tspan x="-11.315" y="186.864">&#8226;</tspan>
            <tspan x="-34.784" y="190.233">&#8226;</tspan>
            <tspan x="-58.194" y="193.981">&#8226;</tspan>
            <tspan x="-81.471" y="198.543">&#8226;</tspan>
            <tspan x="-103.972" y="205.797">&#8226;</tspan>
            <tspan x="-94.517" y="218.954">&#8226;</tspan>
            <tspan x="-70.924" y="221.329">&#8226;</tspan>
            <tspan x="-47.257" y="222.184">&#8226;</tspan>
            <tspan x="-23.52" y="222.502">&#8226;</tspan>
            <tspan x="0.189" y="222.536">&#8226;</tspan>
            <tspan x="23.888" y="222.399">&#8226;</tspan>
            <tspan x="47.592" y="222.161">&#8226;</tspan>
            <tspan x="71.299" y="221.866">&#8226;</tspan>
            <tspan x="95.026" y="221.561">&#8226;</tspan>
            <tspan x="118.721" y="221.29">&#8226;</tspan>
            <tspan x="142.436" y="221.118">&#8226;</tspan>
            <tspan x="166.15" y="221.167">&#8226;</tspan>
            <tspan x="189.845" y="221.776">&#8226;</tspan>
            <tspan x="200.524" y="227.512">&#8226;</tspan>
            <tspan x="177.297" y="232.172">&#8226;</tspan>
            <tspan x="153.772" y="235.29">&#8226;</tspan>
            <tspan x="130.205" y="237.799">&#8226;</tspan>
            <tspan x="106.582" y="239.993">&#8226;</tspan>
            <tspan x="82.968" y="242.006">&#8226;</tspan>
            <tspan x="59.335" y="243.932">&#8226;</tspan>
            <tspan x="35.703" y="245.838">&#8226;</tspan>
            <tspan x="12.06" y="247.79">&#8226;</tspan>
            <tspan x="-11.561" y="249.856">&#8226;</tspan>
            <tspan x="-35.14" y="252.143">&#8226;</tspan>
            <tspan x="-58.706" y="254.834">&#8226;</tspan>
            <tspan x="-82.155" y="258.344">&#8226;</tspan>
            <tspan x="-104.895" y="264.774">&#8226;</tspan>
            <tspan x="-91.972" y="277.114">&#8226;</tspan>
            <tspan x="-68.429" y="279.797">&#8226;</tspan>
            <tspan x="-44.722" y="280.11">&#8226;</tspan>
            <tspan x="-21.025" y="279.477">&#8226;</tspan>
            <tspan x="2.649" y="278.358">&#8226;</tspan>
            <tspan x="26.329" y="276.979">&#8226;</tspan>
            <tspan x="49.977" y="275.499">&#8226;</tspan>
            <tspan x="73.647" y="274.04">&#8226;</tspan>
            <tspan x="97.332" y="272.743">&#8226;</tspan>
            <tspan x="121.03" y="271.807">&#8226;</tspan>
            <tspan x="144.722" y="271.598">&#8226;</tspan>
            <tspan x="168.384" y="273.155">&#8226;</tspan>
            <tspan x="183.542" y="284.723">&#8226;</tspan>
            <tspan x="160.489" y="289.819">&#8226;</tspan>
            <tspan x="136.889" y="292.165">&#8226;</tspan>
            <tspan x="113.241" y="293.866">&#8226;</tspan>
            <tspan x="89.571" y="295.27">&#8226;</tspan>
            <tspan x="65.875" y="296.524">&#8226;</tspan>
            <tspan x="42.216" y="297.709">&#8226;</tspan>
            <tspan x="18.533" y="298.895">&#8226;</tspan>
            <tspan x="-5.141" y="300.137">&#8226;</tspan>
            <tspan x="-28.835" y="301.512">&#8226;</tspan>
            <tspan x="-52.487" y="303.122">&#8226;</tspan>
            <tspan x="-76.107" y="305.163">&#8226;</tspan>
            <tspan x="-99.624" y="308.165">&#8226;</tspan>
            <tspan x="-117.273" y="317.588">&#8226;</tspan>
            <tspan x="-94.25" y="322.305">&#8226;</tspan>
            <tspan x="-70.611" y="324.192">&#8226;</tspan>
            <tspan x="-46.935" y="325.573">&#8226;</tspan>
            <tspan x="-23.26" y="326.721">&#8226;</tspan>
            <tspan x="0.446" y="327.749">&#8226;</tspan>
            <tspan x="24.133" y="328.713">&#8226;</tspan>
            <tspan x="47.81" y="329.659">&#8226;</tspan>
            <tspan x="71.52" y="330.625">&#8226;</tspan>
            <tspan x="95.183" y="331.641">&#8226;</tspan>
            <tspan x="118.893" y="332.762">&#8226;</tspan>
            <tspan x="142.562" y="334.049">&#8226;</tspan>
            <tspan x="166.216" y="335.622">&#8226;</tspan>
            <tspan x="189.817" y="337.764">&#8226;</tspan>
            <tspan x="213.127" y="341.924">&#8226;</tspan>
            <tspan x="198.818" y="351.038">&#8226;</tspan>
            <tspan x="175.324" y="354.274">&#8226;</tspan>
            <tspan x="151.718" y="356.577">&#8226;</tspan>
            <tspan x="128.077" y="358.485">&#8226;</tspan>
            <tspan x="104.446" y="360.176">&#8226;</tspan>
            <tspan x="80.784" y="361.741">&#8226;</tspan>
            <tspan x="57.119" y="363.233">&#8226;</tspan>
            <tspan x="33.444" y="364.688">&#8226;</tspan>
            <tspan x="9.785" y="366.145">&#8226;</tspan>
            <tspan x="-13.889" y="367.635">&#8226;</tspan>
            <tspan x="-37.529" y="369.198">&#8226;</tspan>
            <tspan x="-61.189" y="370.895">&#8226;</tspan>
            <tspan x="-84.827" y="372.823">&#8226;</tspan>
            <tspan x="-108.431" y="375.188">&#8226;</tspan>
            <tspan x="-131.856" y="378.764">&#8226;</tspan>
            <tspan x="-128.62" y="387.043">&#8226;</tspan>
            <tspan x="-105.02" y="389.288">&#8226;</tspan>
            <tspan x="-81.348" y="390.61">&#8226;</tspan>
            <tspan x="-57.649" y="391.586">&#8226;</tspan>
            <tspan x="-33.945" y="392.391">&#8226;</tspan>
            <tspan x="-10.263" y="393.108">&#8226;</tspan>
            <tspan x="13.448" y="393.792">&#8226;</tspan>
            <tspan x="37.151" y="394.479">&#8226;</tspan>
            <tspan x="60.855" y="395.209">&#8226;</tspan>
            <tspan x="84.551" y="396.016">&#8226;</tspan>
            <tspan x="108.226" y="396.948">&#8226;</tspan>
            <tspan x="131.919" y="398.061">&#8226;</tspan>
            <tspan x="155.596" y="399.456">&#8226;</tspan>
            <tspan x="179.23" y="401.301">&#8226;</tspan>
            <tspan x="202.792" y="404.016">&#8226;</tspan>
            <tspan x="225.743" y="409.651">&#8226;</tspan>
            <tspan x="213.95" y="422.446">&#8226;</tspan>
            <tspan x="190.82" y="427.708">&#8226;</tspan>
            <tspan x="167.407" y="431.377">&#8226;</tspan>
            <tspan x="143.878" y="434.303">&#8226;</tspan>
            <tspan x="120.295" y="436.768">&#8226;</tspan>
            <tspan x="96.684" y="438.911">&#8226;</tspan>
            <tspan x="73.031" y="440.815">&#8226;</tspan>
            <tspan x="49.395" y="442.524">&#8226;</tspan>
            <tspan x="25.738" y="444.077">&#8226;</tspan>
            <tspan x="2.061" y="445.497">&#8226;</tspan>
            <tspan x="-21.605" y="446.801">&#8226;</tspan>
            <tspan x="-45.3" y="448.006">&#8226;</tspan>
            <tspan x="-68.981" y="449.116">&#8226;</tspan>
            <tspan x="-92.652" y="450.141">&#8226;</tspan>
            <tspan x="-116.365" y="451.088">&#8226;</tspan>
            <tspan x="-140.046" y="451.956">&#8226;</tspan>
            <tspan x="-163.737" y="452.741">&#8226;</tspan>
        </text>
    </svg>
</div>
<div class="lights">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 630">
        <text transform="matrix(1 0 0 1 197.2217 117.7964)">
            <tspan x="0" y="0">&#8226;</tspan>
            <tspan x="23.682" y="1.215">&#8226;</tspan>
            <tspan x="47.319" y="2.763">&#8226;</tspan>
            <tspan x="70.965" y="4.86">&#8226;</tspan>
            <tspan x="94.342" y="8.529">&#8226;</tspan>
            <tspan x="83.368" y="17.798">&#8226;</tspan>
            <tspan x="60.322" y="23.329">&#8226;</tspan>
            <tspan x="37.026" y="27.758">&#8226;</tspan>
            <tspan x="13.636" y="31.691">&#8226;</tspan>
            <tspan x="-9.738" y="35.586">&#8226;</tspan>
            <tspan x="-32.998" y="40.243">&#8226;</tspan>
            <tspan x="-45.742" y="51.979">&#8226;</tspan>
            <tspan x="-23.595" y="60.332">&#8226;</tspan>
            <tspan x="-0.654" y="66.269">&#8226;</tspan>
            <tspan x="22.492" y="71.437">&#8226;</tspan>
            <tspan x="45.689" y="76.312">&#8226;</tspan>
            <tspan x="68.885" y="81.193">&#8226;</tspan>
            <tspan x="92.01" y="86.422">&#8226;</tspan>
            <tspan x="114.845" y="92.766">&#8226;</tspan>
            <tspan x="127.179" y="106.057">&#8226;</tspan>
            <tspan x="104.359" y="111.836">&#8226;</tspan>
            <tspan x="80.738" y="114.033">&#8226;</tspan>
            <tspan x="57.082" y="115.419">&#8226;</tspan>
            <tspan x="33.391" y="116.5">&#8226;</tspan>
            <tspan x="9.702" y="117.535">&#8226;</tspan>
            <tspan x="-13.992" y="118.77">&#8226;</tspan>
            <tspan x="-37.606" y="120.688">&#8226;</tspan>
            <tspan x="-58.625" y="127.756">&#8226;</tspan>
            <tspan x="-36.995" y="136.588">&#8226;</tspan>
            <tspan x="-13.654" y="140.668">&#8226;</tspan>
            <tspan x="9.886" y="143.42">&#8226;</tspan>
            <tspan x="33.5" y="145.536">&#8226;</tspan>
            <tspan x="57.15" y="147.335">&#8226;</tspan>
            <tspan x="80.815" y="149.053">&#8226;</tspan>
            <tspan x="104.441" y="150.979">&#8226;</tspan>
            <tspan x="127.942" y="153.912">&#8226;</tspan>
            <tspan x="129" y="164.006">&#8226;</tspan>
            <tspan x="105.954" y="169.612">&#8226;</tspan>
            <tspan x="82.601" y="173.709">&#8226;</tspan>
            <tspan x="59.175" y="177.233">&#8226;</tspan>
            <tspan x="35.675" y="180.497">&#8226;</tspan>
            <tspan x="12.179" y="183.663">&#8226;</tspan>
            <tspan x="-11.315" y="186.864">&#8226;</tspan>
            <tspan x="-34.784" y="190.233">&#8226;</tspan>
            <tspan x="-58.194" y="193.981">&#8226;</tspan>
            <tspan x="-81.471" y="198.543">&#8226;</tspan>
            <tspan x="-103.972" y="205.797">&#8226;</tspan>
            <tspan x="-94.517" y="218.954">&#8226;</tspan>
            <tspan x="-70.924" y="221.329">&#8226;</tspan>
            <tspan x="-47.257" y="222.184">&#8226;</tspan>
            <tspan x="-23.52" y="222.502">&#8226;</tspan>
            <tspan x="0.189" y="222.536">&#8226;</tspan>
            <tspan x="23.888" y="222.399">&#8226;</tspan>
            <tspan x="47.592" y="222.161">&#8226;</tspan>
            <tspan x="71.299" y="221.866">&#8226;</tspan>
            <tspan x="95.026" y="221.561">&#8226;</tspan>
            <tspan x="118.721" y="221.29">&#8226;</tspan>
            <tspan x="142.436" y="221.118">&#8226;</tspan>
            <tspan x="166.15" y="221.167">&#8226;</tspan>
            <tspan x="189.845" y="221.776">&#8226;</tspan>
            <tspan x="200.524" y="227.512">&#8226;</tspan>
            <tspan x="177.297" y="232.172">&#8226;</tspan>
            <tspan x="153.772" y="235.29">&#8226;</tspan>
            <tspan x="130.205" y="237.799">&#8226;</tspan>
            <tspan x="106.582" y="239.993">&#8226;</tspan>
            <tspan x="82.968" y="242.006">&#8226;</tspan>
            <tspan x="59.335" y="243.932">&#8226;</tspan>
            <tspan x="35.703" y="245.838">&#8226;</tspan>
            <tspan x="12.06" y="247.79">&#8226;</tspan>
            <tspan x="-11.561" y="249.856">&#8226;</tspan>
            <tspan x="-35.14" y="252.143">&#8226;</tspan>
            <tspan x="-58.706" y="254.834">&#8226;</tspan>
            <tspan x="-82.155" y="258.344">&#8226;</tspan>
            <tspan x="-104.895" y="264.774">&#8226;</tspan>
            <tspan x="-91.972" y="277.114">&#8226;</tspan>
            <tspan x="-68.429" y="279.797">&#8226;</tspan>
            <tspan x="-44.722" y="280.11">&#8226;</tspan>
            <tspan x="-21.025" y="279.477">&#8226;</tspan>
            <tspan x="2.649" y="278.358">&#8226;</tspan>
            <tspan x="26.329" y="276.979">&#8226;</tspan>
            <tspan x="49.977" y="275.499">&#8226;</tspan>
            <tspan x="73.647" y="274.04">&#8226;</tspan>
            <tspan x="97.332" y="272.743">&#8226;</tspan>
            <tspan x="121.03" y="271.807">&#8226;</tspan>
            <tspan x="144.722" y="271.598">&#8226;</tspan>
            <tspan x="168.384" y="273.155">&#8226;</tspan>
            <tspan x="183.542" y="284.723">&#8226;</tspan>
            <tspan x="160.489" y="289.819">&#8226;</tspan>
            <tspan x="136.889" y="292.165">&#8226;</tspan>
            <tspan x="113.241" y="293.866">&#8226;</tspan>
            <tspan x="89.571" y="295.27">&#8226;</tspan>
            <tspan x="65.875" y="296.524">&#8226;</tspan>
            <tspan x="42.216" y="297.709">&#8226;</tspan>
            <tspan x="18.533" y="298.895">&#8226;</tspan>
            <tspan x="-5.141" y="300.137">&#8226;</tspan>
            <tspan x="-28.835" y="301.512">&#8226;</tspan>
            <tspan x="-52.487" y="303.122">&#8226;</tspan>
            <tspan x="-76.107" y="305.163">&#8226;</tspan>
            <tspan x="-99.624" y="308.165">&#8226;</tspan>
            <tspan x="-117.273" y="317.588">&#8226;</tspan>
            <tspan x="-94.25" y="322.305">&#8226;</tspan>
            <tspan x="-70.611" y="324.192">&#8226;</tspan>
            <tspan x="-46.935" y="325.573">&#8226;</tspan>
            <tspan x="-23.26" y="326.721">&#8226;</tspan>
            <tspan x="0.446" y="327.749">&#8226;</tspan>
            <tspan x="24.133" y="328.713">&#8226;</tspan>
            <tspan x="47.81" y="329.659">&#8226;</tspan>
            <tspan x="71.52" y="330.625">&#8226;</tspan>
            <tspan x="95.183" y="331.641">&#8226;</tspan>
            <tspan x="118.893" y="332.762">&#8226;</tspan>
            <tspan x="142.562" y="334.049">&#8226;</tspan>
            <tspan x="166.216" y="335.622">&#8226;</tspan>
            <tspan x="189.817" y="337.764">&#8226;</tspan>
            <tspan x="213.127" y="341.924">&#8226;</tspan>
            <tspan x="198.818" y="351.038">&#8226;</tspan>
            <tspan x="175.324" y="354.274">&#8226;</tspan>
            <tspan x="151.718" y="356.577">&#8226;</tspan>
            <tspan x="128.077" y="358.485">&#8226;</tspan>
            <tspan x="104.446" y="360.176">&#8226;</tspan>
            <tspan x="80.784" y="361.741">&#8226;</tspan>
            <tspan x="57.119" y="363.233">&#8226;</tspan>
            <tspan x="33.444" y="364.688">&#8226;</tspan>
            <tspan x="9.785" y="366.145">&#8226;</tspan>
            <tspan x="-13.889" y="367.635">&#8226;</tspan>
            <tspan x="-37.529" y="369.198">&#8226;</tspan>
            <tspan x="-61.189" y="370.895">&#8226;</tspan>
            <tspan x="-84.827" y="372.823">&#8226;</tspan>
            <tspan x="-108.431" y="375.188">&#8226;</tspan>
            <tspan x="-131.856" y="378.764">&#8226;</tspan>
            <tspan x="-128.62" y="387.043">&#8226;</tspan>
            <tspan x="-105.02" y="389.288">&#8226;</tspan>
            <tspan x="-81.348" y="390.61">&#8226;</tspan>
            <tspan x="-57.649" y="391.586">&#8226;</tspan>
            <tspan x="-33.945" y="392.391">&#8226;</tspan>
            <tspan x="-10.263" y="393.108">&#8226;</tspan>
            <tspan x="13.448" y="393.792">&#8226;</tspan>
            <tspan x="37.151" y="394.479">&#8226;</tspan>
            <tspan x="60.855" y="395.209">&#8226;</tspan>
            <tspan x="84.551" y="396.016">&#8226;</tspan>
            <tspan x="108.226" y="396.948">&#8226;</tspan>
            <tspan x="131.919" y="398.061">&#8226;</tspan>
            <tspan x="155.596" y="399.456">&#8226;</tspan>
            <tspan x="179.23" y="401.301">&#8226;</tspan>
            <tspan x="202.792" y="404.016">&#8226;</tspan>
            <tspan x="225.743" y="409.651">&#8226;</tspan>
            <tspan x="213.95" y="422.446">&#8226;</tspan>
            <tspan x="190.82" y="427.708">&#8226;</tspan>
            <tspan x="167.407" y="431.377">&#8226;</tspan>
            <tspan x="143.878" y="434.303">&#8226;</tspan>
            <tspan x="120.295" y="436.768">&#8226;</tspan>
            <tspan x="96.684" y="438.911">&#8226;</tspan>
            <tspan x="73.031" y="440.815">&#8226;</tspan>
            <tspan x="49.395" y="442.524">&#8226;</tspan>
            <tspan x="25.738" y="444.077">&#8226;</tspan>
            <tspan x="2.061" y="445.497">&#8226;</tspan>
            <tspan x="-21.605" y="446.801">&#8226;</tspan>
            <tspan x="-45.3" y="448.006">&#8226;</tspan>
            <tspan x="-68.981" y="449.116">&#8226;</tspan>
            <tspan x="-92.652" y="450.141">&#8226;</tspan>
            <tspan x="-116.365" y="451.088">&#8226;</tspan>
            <tspan x="-140.046" y="451.956">&#8226;</tspan>
            <tspan x="-163.737" y="452.741">&#8226;</tspan>
        </text>
    </svg>
</div>
<div class="snowfall">
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
    <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
  <div class="snow"></div>
 
 
<div class="codepen">
 
</div>
<div class="yeti-claws">
    <div class="claw"></div>
    <div class="claw"></div>
    <div class="claw"></div>
    <div class="claw"></div>
    <div class="claw"></div>
    <div class="claw"></div>
</div>
<script>
var snowPlayers = [];
makeItSnow();
 
if (window.PointerEvent) {
    document.body.addEventListener('pointerenter', lightUp, false);
    document.body.addEventListener('pointerleave', dim, false);
} else {
    document.body.addEventListener('mouseenter', lightUp, false);
    document.body.addEventListener('touchstart', lightUp, false);
    document.body.addEventListener('touchend', dim, false);
    document.body.addEventListener('mouseleave', dim, false);
}
document.body.addEventListener('keydown', lightUp, false);
document.body.addEventListener('keyup', dim, false);
 
function lightUp(e) {
    e.preventDefault();
    document.body.classList.add('huzzah');
    if (snowPlayers.length && snowPlayers[0].playbackRate < 2) {
        snowPlayers.forEach(function(item) {
            item.playbackRate = item.playbackRate * 1.05;
        })
    }
}
 
function dim(e) {
    e.preventDefault();
    document.body.classList.remove('huzzah');
}
 
function makeItSnow() {
    var snows = document.querySelectorAll('.snow');
 
    if (!snows[0].animate) {
        return false;
    }
 
    for (var i = 0, len = snows.length; i < len; ++i) {
        var snowball = snows[i];
        var scale = Math.random() * .8 + .2;
        var player = snowball.animate([{
            transform: 'translate3d(' + (i / len * 100) + 'vw,0,0) scale(' + scale + ')',
            opacity: scale
        }, {
            transform: 'translate3d(' + (i / len * 100 + 10) + 'vw,100vh,0) scale(' + scale + ')',
            opacity: scale
        }], {
            duration: Math.random() * 3000 + 2000,
            iterations: Infinity,
            delay: -(Math.random() * 5000)
        });
 
        snowPlayers.push(player);
    }
}
 
</script>
</body>
</html>


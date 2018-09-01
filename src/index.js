import { Power2, Power3, SlowMo, TimelineLite, TweenLite } from 'gsap';

(function () {
  const basicAnimationDuration = 0.3;
  const horizontalSliding = 100;
  const timeline = new TimelineLite();
  let numberOfUpdates = 0;

  // Animated elements
  const slideInFromLeft = document.querySelector('.slideInFromLeft');
  const slideInFromRight = document.querySelector('.slideInFromRight');
  const slideInFromLeftToRight = document.querySelector('.slideInFromLeftToRight');
  const slideOutToLeft = document.querySelector('.slideOutToLeft');
  const slideOutToRight = document.querySelector('.slideOutToRight');
  const countingUpdates = document.querySelector('.countingUpdates');
  const fadesIn = document.querySelector('.fadesIn');
  const fadesOut = document.querySelector('.fadesOut');
  const easeIn = document.querySelector('.easeIn');
  const easeOut = document.querySelector('.easeOut');
  const easeInOut = document.querySelector('.easeInOut');
  const buttons = document.querySelectorAll('button');

  timeline
    .from(
      slideInFromLeft,
      basicAnimationDuration,
      { x: -horizontalSliding },
      '-= 0.15'
    )
    .from(
      slideInFromRight,
      basicAnimationDuration,
      { x: horizontalSliding },
      '-= 0.15'
    )
    .fromTo(
      slideInFromLeftToRight,
      basicAnimationDuration * 2,
      { x: -horizontalSliding },
      { x: horizontalSliding },
      '-= 0.15'
    )
    .to(
      slideOutToLeft,
      basicAnimationDuration,
      { x: -horizontalSliding },
      '-= 0.15'
    )
    .to(
      slideOutToRight,
      basicAnimationDuration,
      { x: horizontalSliding },
      '-= 0.15'
    )
    .fromTo(
      countingUpdates,
      basicAnimationDuration * 2,
      { x: -horizontalSliding },
      { x: horizontalSliding, onUpdate },
      '-= 0.15'
    )
    .from(
      fadesIn,
      basicAnimationDuration,
      { autoAlpha: 0 },
      '-= 0.15'
    )
    .to(
      fadesOut,
      basicAnimationDuration,
      { autoAlpha: 0 },
      '-= 0.15'
    )
    .to(
      easeIn,
      basicAnimationDuration,
      { x: horizontalSliding, ease: Power2.easeIn },
      '-= 0.15'
    )
    .to(
      easeOut,
      basicAnimationDuration,
      { x: horizontalSliding, ease: Power3.easeOut },
      '-= 0.15'
    )
    .to(
      easeInOut,
      basicAnimationDuration,
      { x: horizontalSliding, ease: SlowMo.easeInOut },
      '-= 0.15'
    )
    .staggerFrom(
      buttons,
      1,
      {
        cycle: {
          x: [50, -50],
          scale: [2, 0.5]
        },
        autoAlpha: 0,
        ease: Power1.easeOut
      },
      0.5
    );

  // Control buttons
  const play = document.querySelector('.play');
  const pause = document.querySelector('.pause');
  const resume = document.querySelector('.resume');
  const reverse = document.querySelector('.reverse');
  const speedUp = document.querySelector('.speedUp');
  const slowDown = document.querySelector('.slowDown');
  const seek = document.querySelector('.seek');
  const progress = document.querySelector('.progress');
  const restart = document.querySelector('.restart');

  play.addEventListener('click', function (event) {
    timeline.play();
  });

  pause.addEventListener('click', function (event) {
    timeline.pause();
  });

  resume.addEventListener('click', function (event) {
    timeline.resume();
  });

  reverse.addEventListener('click', function (event) {
    timeline.reverse();
  });

  speedUp.addEventListener('click', function (event) {
    timeline.timeScale(8);
  });

  slowDown.addEventListener('click', function (event) {
    timeline.timeScale(0.5);
  });

  seek.addEventListener('click', function (event) {
    timeline.seek(1);
  });

  progress.addEventListener('click', function (event) {
    timeline.progress(0.5);
  });

  restart.addEventListener('click', function (event) {
    timeline.restart();
  });

  /** Updates the text of the paragraph displaying updates. */
  function onUpdate() {
    const paragraph = this.target.firstElementChild;
    paragraph.textContent = numberOfUpdates++;
  }
})();

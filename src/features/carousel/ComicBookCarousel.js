import { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import avengers from '../../app/assets/img/avengers.jpg';
import justiceLeague from '../../app/assets/img/justice-league.jpg';
import spawn from '../../app/assets/img/spawn.jpg'; 
import strayDogs from '../../app/assets/img/stray-dogs.jpg';

const comics = [
  {
    src: avengers,
    altText: 'Avengers #1 Cover',
    caption: 'Avengers #1',
    key: 1
  },
  {
    src: justiceLeague,
    altText: 'Justice League Infinity #1 Cover',
    caption: 'Justice League Infinity #1',
    key: 2
  },
  {
    src: spawn,
    altText: 'Spawn #1 Cover',
    caption: 'Spawn #1',
    key: 3
  },
  {
    src: strayDogs,
    altText: 'Stray Dogs #1 Cover',
    caption: 'Stray Dogs #1',
    key: 4
  }
];

const ComicBookCarousel = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === comics.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? comics.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = comics.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

   return (
     <Carousel
       activeIndex={activeIndex}
       next={next}
       previous={previous}
       {...args}
     >
       <CarouselIndicators items={comics} activeIndex={activeIndex} onClickHandler={goToIndex} />
       {slides}
       <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
       <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
     </Carousel>
   );
}

export default ComicBookCarousel;
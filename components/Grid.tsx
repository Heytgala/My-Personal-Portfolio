import React from 'react';
import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const Grid = () => {
    return (
        <section id="About">
            <BentoGrid>
                {
                    gridItems.map(({ id, title, description, className, img, spareImg, titleClassName, imgClassName }) => (
                        <BentoGridItem id={id} key={id} title={title} description={description} className={className} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg} />))
                }
            </BentoGrid>
        </section>        
    )
}

export default Grid
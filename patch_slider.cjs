const fs = require('fs');
const file = './jaheshkala-app/src/components/DigikalaSlider.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetImg = `<img
          key={active.id || currentSlide}
          src={active.image}
          alt={active.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80';
          }}
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-all duration-700 ease-out"
        />`;

const newImg = `<img
          key={active.id || currentSlide}
          src={active.image}
          alt={active.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80';
          }}
          className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-all duration-700 ease-out"
          style={{ objectPosition: active.imagePosition || 'center' }}
        />`;

content = content.replace(targetImg, newImg);
fs.writeFileSync(file, content, 'utf8');
console.log('Slider patch done');

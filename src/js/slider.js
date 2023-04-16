const Slider = () => {
  const slider = document.querySelector("#slider");
  const sliderItems = Array.from(slider.children);
  const btnNext = document.querySelector("#btnNext");
  const btnPrev = document.querySelector("#btnPrev");

  if (window.innerWidth <= 768) {
    sliderItems.forEach(function (slide, index) {
      // Скрываем все слайды кроме первого
      if (index !== 0) {
        slide.classList.add("hidden");
      }
      //Добавляем индексы
      slide.dataset.index = index;

      // Добавляем data атрибут active для первого / активного слайда
      sliderItems[0].setAttribute("data-active", "");

      // Клик по слайдам
      slide.addEventListener("click", function () {
        // Скрываем текущий слайд
        this.classList.add("hidden");
        this.removeAttribute("data-active");

        // Рассчитываем индекс след слайда
        let nextSlideIndex;
        if (index + 1 === sliderItems.length) {
          nextSlideIndex = 0;
        } else {
          nextSlideIndex = index + 1;
        }

        // Находим след слайд
        const nextSlide = slider.querySelector(
          `[data-index="${nextSlideIndex}"]`
        );

        // Отображаем след слайд
        nextSlide.classList.remove("hidden");
        nextSlide.setAttribute("data-active", "");
      });
    });

    btnNext.onclick = function () {
      console.log("Next Slide");
      showNextSlide("next");
    };

    btnPrev.onclick = function () {
      console.log("Prev Slide");
      showNextSlide("prev");
    };

    function showNextSlide(direction) {
      // Скрываем текущий слайд
      const currentSlide = slider.querySelector("[data-active]");
      const currentSlideIndex = +currentSlide.dataset.index;

      currentSlide.classList.add("hidden");
      currentSlide.removeAttribute("data-active");

      // Расчитываем след индекс в зависимости от направления движения
      let nextSlideIndex;
      if (direction === "next") {
        if (currentSlideIndex + 1 === sliderItems.length) {
          nextSlideIndex = 0;
        } else {
          nextSlideIndex = currentSlideIndex + 1;
        }
      } else if (direction === "prev") {
        if (currentSlideIndex === 0) {
          nextSlideIndex = sliderItems.length - 1;
        } else {
          nextSlideIndex = currentSlideIndex - 1;
        }
      }
      // Показываем следующий слайд
      const nextSlide = slider.querySelector(
        `[data-index="${nextSlideIndex}"]`
      );
      nextSlide.classList.remove("hidden");
      nextSlide.setAttribute("data-active", "");
    }
  }
  if (window.innerWidth <= 992) {
   /* конфигурация */ 
   let width = 300; // ширина картинки 
   let count = 3; // видимое количество изображений 

   let list = carousel.querySelector("ul"); 
   let listElems = carousel.querySelectorAll("li"); 

   let position = 0; // положение ленты прокрутки 

   btnNext.onclick = function () { 
     // сдвиг влево 
     position += width * count; 
     // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент 
     position = Math.min(position, 0); 
     list.style.marginLeft = position + "px"; 
   }; 

   btnPrev.onclick = function () { 
     // сдвиг вправо 
     position -= width * count; 
     // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент 
     position = Math.max(position, -width * (listElems.length - count)); 
     list.style.marginLeft = position + "px"; 
   };
  } else {
    /* конфигурация */ 
    let width = 338; // ширина картинки 
    let count = 4; // видимое количество изображений 
 
    let list = carousel.querySelector("ul"); 
    let listElems = carousel.querySelectorAll("li"); 
 
    let position = 0; // положение ленты прокрутки 
 
    btnNext.onclick = function () { 
      // сдвиг влево 
      position += width * count; 
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент 
      position = Math.min(position, 0); 
      list.style.marginLeft = position + "px"; 
    }; 
 
    btnPrev.onclick = function () { 
      // сдвиг вправо 
      position -= width * count; 
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент 
      position = Math.max(position, -width * (listElems.length - count)); 
      list.style.marginLeft = position + "px"; 
    };
  }
};
export default Slider;

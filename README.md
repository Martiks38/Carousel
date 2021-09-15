# Carousel
Controls to operate a carousel of images and texts manually. And with automatic scrolling.

## Installation
Copy the code from the carousel or carousel-min file and paste it into your project's JS file.
This file is executed upon loading of the DOM. So, you just have to call it in the script tag.

  <script src = "name_archive.js"> </script>

## App
Each slide must contain the "slider-slide" class and in the CSS code it must have the visibility: hidden property.
The first slide must also have the active class, in whose CSS code it contains the visibility: visible property.
~~~
  <div class="slider-slide active">
    <img src="url" alt="">
  </div>
  <div class="slider-slide">
    <img src="url" alt="">
  </div>
~~~
The manual panel must contain each of the elements that represent each slide with the class "selector" and the attribute data-id = "(number)", where number must start at 0.
The first selector must contain the "active" class that will indicate the visible slide.

~~~
<div class="slider-panel">
  <span class="selector active" data-id="0"></span>
  <span class="selector" data-id="1"></span>
</div>
~~~

The elements that make up the back and forward buttons must have the class "previous" and "next" respectively.

The duration that each slide remains visible is eight seconds. This value can be modified by entering (in milliseconds) the desired duration time in the call to the function.

### carousel.js
~~~
  document.addEventListener ('DOMContentLoaded', (e) => {
    carousel (10000);
  })
~~~
### carousel-min.js
~~~
  document.addEventListener ("DOMContentLoaded", e => {carousel (10000)});
~~~
## How to contribute
You can create a pull request to the project

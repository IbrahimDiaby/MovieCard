const init = () => {
  const wrapper = document.querySelector(".wrapper");
  const img = document.querySelectorAll(".wrapper .img-container");
  const images = document.querySelectorAll(".wrapper img");
  const btn = document.querySelectorAll(".settings button");

  img.forEach((item) => {
    item.addEventListener('click', () => {
      img.forEach((it) => { it.classList.remove("active"); });
      item.classList.toggle("active");
    });
  });

  btn.forEach((item, index) => {
    item.addEventListener('click', () => {
      btn.forEach((it) => { it.classList.remove("active"); });
      item.classList.toggle("active");
      (index == 0) ? images.forEach((image) => image.className = 'v1')
      : images.forEach((image) => image.className = 'v2');
    });
  });

};

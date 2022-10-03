const container = document.querySelectorAll(".container");

container.forEach((call) => {
  call.addEventListener("click", (change) => {
    call.classList.add("open");
    call.addEventListener("mouseleave", (change) => {
      call.classList.remove("open");
    });
  });
});

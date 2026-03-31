const yearTarget = document.querySelector("#year");
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

const modal = document.querySelector("#shot-modal");
const modalImage = document.querySelector("#shot-modal-image");
const modalTitle = document.querySelector("#shot-modal-title");
const shotCards = document.querySelectorAll("[data-shot]");

if (modal && modalImage && modalTitle && shotCards.length) {
  shotCards.forEach((card) => {
    card.addEventListener("click", () => {
      modalImage.src = card.dataset.shot;
      modalImage.alt = card.dataset.title || "Screenshot do Sushi Stack";
      modalTitle.textContent = card.dataset.title || "";
      modal.showModal();
    });
  });

  modal.addEventListener("click", (event) => {
    const bounds = modal.getBoundingClientRect();
    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (clickedOutside) {
      modal.close();
    }
  });
}

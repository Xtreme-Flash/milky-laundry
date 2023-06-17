var carouselItems = document.getElementsByClassName('carousel-item');
var modal = document.getElementById('modal');
var modalName = document.getElementById('modal-name');
var modalBio = document.getElementById('modal-bio');
var closeBtn = document.getElementById('close-btn');

Array.from(carouselItems).forEach(function(item) {
  item.addEventListener('click', function() {
    var activeItem = document.querySelector('.carousel-item');
    var name = activeItem.querySelector('em').innerText;
    var bio = activeItem.querySelector('.staff-text').innerText;
    showModal(name, bio);
  });
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

function showModal(name, bio) {
  modalName.innerText = name;
  modalBio.innerText = bio;
  modal.style.display = 'block';
}
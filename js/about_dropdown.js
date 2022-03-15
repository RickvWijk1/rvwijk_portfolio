//toggle visitor cards
let rotateChevronStudy = document.querySelectorAll('.chevron-study');
let studyContent = document.querySelector('.about-filter-semesters');
let rotateChevronSchool = document.querySelectorAll('.chevron-school');
let schoolContent = document.querySelector('.about-filter-school');


rotateChevronStudy.forEach(chevron => {
    chevron.addEventListener('click', () => {
        chevron.classList.toggle('study-toggle');
        visitorGrid.classList.toggle('semesters-toggle');
    });
});
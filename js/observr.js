//get all of the card elements from the DOM
const hiddenElements = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {

      //this will add show class to element if current element is on screen (by the threshold amount)
      entry.target.classList.toggle('show', entry.isIntersecting);

      //this causes already seen elements to not get re-hidden
      // if(entry.isIntersecting)
      // {
      //   observer.unobserve(entry.target);
      // }
    })

},
{
  //how much of the element needs to be on the screen for the function above to run
  threshold: .9
}
);

//add each card element to be observed
hiddenElements.forEach((el) => observer.observe(el));

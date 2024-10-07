const stateElements = document.querySelectorAll('a.states');

stateElements.forEach((element) => {
    const pathElement = element.querySelector('path');
  const stateName = pathElement.getAttribute('name');
    element.setAttribute('xlink:title', stateName);
//   console.log(stateName);
});


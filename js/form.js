document.querySelector('form[name="reviews-form"]').addEventListener('submit', event => {
  event.preventDefault(); // запобіжник стандартної роботи форми
  const userName = event.target.elements['user-name'].value;
  const userEmail = event.target.elements['user-email'].value;
  console.log('🚀 ~ userEmail:', userEmail);
  console.log('🚀 ~ userName:', userName);
});

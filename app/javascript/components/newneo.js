const newNeoJs = () => {
  const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
})
}

export { newNeoJs };

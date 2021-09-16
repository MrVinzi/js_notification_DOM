'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  element.classList.add('notification', `${type}`);
  h2.classList.add('title');
  h2.textContent = `${title}`;
  p.innerText = description;

  element.appendChild(h2);
  element.appendChild(p);
  document.body.appendChild(element);

  element.style.right
    = `${parseFloat(getComputedStyle(element).right) + posRight}px`;

  element.style.top
    = `${parseFloat(getComputedStyle(element).top) + posTop}px`;

  setTimeout(() => {
    element.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');

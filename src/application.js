export default function () {
  const form = document.createElement('form');
  form.id = 'registrationForm';

  const div1 = document.createElement('div');
  div1.classList.add('form-group');

  const label1 = document.createElement('label');
  label1.setAttribute('for', 'inputName');
  label1.textContent = 'Name';

  const input1 = document.createElement('input');
  input1.type = 'text';
  input1.classList.add('form-control');
  input1.id = 'inputName';
  input1.setAttribute('placeholder', 'Введите ваше имя');
  input1.name = 'name';
  input1.setAttribute('required', '');

  const div2 = document.createElement('div');
  div2.classList.add('form-group');

  const label2 = document.createElement('label');
  label2.setAttribute('for', 'inputEmail');
  label2.textContent = 'Email';

  const input2 = document.createElement('input');
  input2.type = 'text';
  input2.classList.add('form-control');
  input2.id = 'inputEmail';
  input2.setAttribute('placeholder', 'Введите email');
  input2.name = 'email';
  input2.setAttribute('required', '');

  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Submit';
  submit.classList.add('btn', 'btn-primary');

  div1.append(label1, input1);
  div2.append(label2, input2);
  form.append(div1, div2, submit);
  document.querySelector('.form-container').append(form);
}
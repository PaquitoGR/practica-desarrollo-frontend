export const loggedSession = () => {
  return `
    <ul class="header__nav__list">
      <li class="header__nav__list__item">
        <a class="btn" href="./create-ad.html">Create Ad</a>
      </li>
      <li class="header__nav__list__item">
        <a class="btn" id="close-session">Close session</a>
      </li>
    </ul>
  `;
}

export const defaultSession = () => {
  return `
    <ul class="header__nav__list">
      <li class="header__nav__list__item">
        <a class="btn" href="./signup.html">Singup</a>
      </li>
      <li class="header__nav__list__item">
        <a class="btn" href="./login.html">Login</a>
      </li>
    </ul>
  `;
}
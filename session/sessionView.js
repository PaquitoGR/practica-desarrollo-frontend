export const loggedSession = () => {
  return `
    <ul class="nav_list">
      <li class="btn" >
        <a href="./create-ad.html">Create Ad</a>
      </li>
      <li class="btn" >
        <a href="" id="close-session">Close session</a>
      </li>
    </ul>
  `;
}

export const defaultSession = () => {
  return `
    <ul class="nav_list">
      <li class="btn" >
        <a href="./signup.html">Singup</a>
      </li>
      <li class="btn" >
        <a href="./login.html">Login</a>
      </li>
    </ul>
  `;
}
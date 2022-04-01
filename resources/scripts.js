//html
let html = document.getElementById('html');
const htmlChange = () => {
    html.style.color = 'rgba(227, 79, 38, 1)';
};
html.onmouseover = htmlChange;

//css
let css = document.getElementById('css');
const cssChange = () => {
    css.style.color = 'rgba(38, 77, 228, 1)';
};
css.onmouseover = cssChange;

//Bootstrap
let boot = document.getElementById('boot');
const bootChange = () => {
    boot.style.color = 'rgba(77, 56, 109, 1)';
};
boot.onmouseover = bootChange;

//SASS
let sass = document.getElementById('sass');
const sassChange = () => {
    sass.style.color = 'rgba(204, 102, 153, 1)';
};
sass.onmouseover = sassChange;

//JavaScript
let js = document.getElementById('js');
const jsChange = () => {
    js.style.color = 'rgba(240, 220, 78, 1)';
};
js.onmouseover = jsChange;

//React
let react = document.getElementById('react');
const reactChange = () => {
    react.style.color = 'rgba(0, 216, 255, 1)';
};
react.onmouseover = reactChange;

//Git
let git = document.getElementById('git');
const gitChange = () => {
    git.style.color = 'rgba(241, 82, 51, 1)';
};
git.onmouseover = gitChange;

//Github
let github = document.getElementById('github');
const githubChange = () => {
    github.style.color = 'rgba(12, 37, 52, 1)';
};
github.onmouseover = githubChange;

//Linkedin
let link = document.getElementById('link') 
const linkChange = () => {
    link.style.color = 'rgba(1, 123, 182, 1)';
};
link.onmouseover = linkChange;


//Reset
const resetChange = () => {
    html.style.color = '';
    css.style.color = '';
    boot.style.color = '';
    sass.style.color = '';
    js.style.color = '';
    react.style.color = '';
    git.style.color = '';
    github.style.color = '';
    link.style.color = '';
};
html.onmouseout = resetChange;
css.onmouseout = resetChange;
boot.onmouseout = resetChange;
sass.onmouseout = resetChange;
js.onmouseout = resetChange;
react.onmouseout = resetChange;
git.onmouseout = resetChange;
github.onmouseout = resetChange;
link.onmouseout = resetChange;

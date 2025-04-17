const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "this is the glorious text-content";

container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red"
para.textContent = "Hey I'm red!";

container.appendChild(para);

const head3 = document.createElement("h3");
head3.style.color = "blue";
head3.textContent = "I'm a blue h3!";

container.appendChild(head3);

const bdiv = document.createElement("div");
bdiv.style.border = "3px solid black"
bdiv.style.backgroundColor = "pink";

const head1 = document.createElement("h1");
head1.textContent = "Im in a div";
const anotherPara = document.createElement("p");
anotherPara.textContent = "ME TOO! sus";

bdiv.appendChild(head1);
bdiv.appendChild(anotherPara);

container.appendChild(bdiv);
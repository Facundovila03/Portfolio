const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Foldit&family=Rubik&display=swap");

* {
  margin: 10px;
  padding: 0px;

  font-family: "Rubik", sans-serif;

  --background: #0f193c;
  --accent1: #95c6a8;
  --text: #e7edee;
  --accent2: #7cc3df;
  --backgroundAlt: rgba(10, 17, 41, 0.7);
  --backgroundGradient: linear-gradient(
    180deg,
    rgba(15, 25, 60, 1) 0%,
    rgba(10, 17, 41, 0.7) 100%
  );
  background: #0f193c;
  color: #e7edee;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  height: 90vh;
}

.title {
  font-size: 40px;
  font-weight: bold;
  color: #95c6a8;
  margin-bottom: 3rem;
}
.asap {
  margin-bottom: 0.5rem;
}
.autoReply {
  font-size: x-small;
  width: 60%;
  justify-content: end;
}
.github {
  height: 4rem;
  scale: 100%;
  transition: scale 300ms ease-in-out;
  border-radius: 50%;
  cursor: pointer;
}

.linkedin {
  height: 4rem;
  scale: 100%;
  transition: scale 300ms ease-in-out;
  cursor: pointer;
}

.linkedin:hover, .github:hover{
  scale:120%
}
.autoReply {
  position: absolute;
  bottom: 1rem;
}
.images {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
.linkedin,
.github {
  margin: 0px 1rem;
}

    </style>
  </head>
  <body>
    <p class="title">Thank you for contacting me!</p>
    <p class="asap">
      I have recieved your email and will read it as soon as possible. 
      <p class="asap">
        Meanwhile
        I invite you to take a look at my LinkedIn profile for my newest projects
        and updates as well as my Github profile for ongoing repos.
      </p>
    </p>
    <div class="images">
        <a href="https://github.com/Facundovila03" target="_blank">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-989bb.appspot.com/o/github.png?alt=media&token=a3a3bab9-764b-44a8-9128-64c7aa63b89e" alt="github" class="github" >
        </a>
        <a href="https://www.linkedin.com/in/facundo-vila-7397b5222/" target="_blank">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-989bb.appspot.com/o/Linkedin.png?alt=media&token=674eb532-8398-498d-bed4-0cda10a3f463" alt="linkedin" class="linkedin">
        </a>
    </div>
   
    <p class="autoReply">
        Please, do not reply or contact this email as it is an automatic reply,
        feel free to contact me at any of my socials listed above
    </p>
  </body>

</html>`;

export default html;

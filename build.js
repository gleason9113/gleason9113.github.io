//Arrays used in displayProjects() function
let links = [
    "https://github.com/gleason9113/xv6",
    "https://github.com/gleason9113/python-misc",
    "https://github.com/gleason9113/li_chat",
    "https://github.com/gleason9113/webdev--hw"
]

let pics = [
    "xv6_filler.jpg",
    "py_filler.jpg",
    "chat_filler.jpg",
    "frontend_filler.jpg",
]

let alts = [
    "Screenshot of xv6 operating system",
    "Screenshot of python code",
    "Screenshot of Javascript code",
    "Screenshot of Bootstrap form",
]

let text = [
    "xv6 updated with an MLFQ scheduler.",
    "Miscellaneous Python code snippets I've written.",
    "Minimal chat application written from tutorial.",
    "Introduction to Front-End Web Development- class assignment.",
]

//Function that creates the home element
function displayHome() {
    let clear = document.getElementById('top'); //Delete element if present
    if (clear){
        clear.remove();
    }
    
    let body = document.getElementById('bod');
    let parentDiv = document.createElement('div');
    let childDiv = document.createElement('div');
    let quote = document.createElement('h2');
    let attrib = document.createElement('h3');
    
    parentDiv.setAttribute('id', 'top');
    parentDiv.classList.add('row', 'vh100');
    
    childDiv.classList.add('align-self-center');
    
    quote.classList.add('text-end', 'px-2', 'mx-2');
    quote.innerText = "'We are stuck with technology when what we really want is just stuff that works.'";
    
    attrib.classList.add('text-end', 'mx-5', 'px-5');
    attrib.innerText = "-Douglas Adams, The Salmon of Doubt";
    
    childDiv.appendChild(quote);
    childDiv.appendChild(attrib);
    parentDiv.appendChild(childDiv);
    let winHeight = window.innerHeight;
    let parHeight = parentDiv.innerHeight;
    parentDiv.style.marginTop = "500px";
    body.appendChild(parentDiv);

}

//Construct and display the About element
function displayAbout() {
    let clear = document.getElementById('top');
    if (clear){
        clear.remove();
    }
    let body = document.getElementById('bod');
    let parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', 'top');
    parentDiv.style.marginTop = "300px";
    parentDiv.classList.add('row', 'vh100');
    let img = document.createElement('img');
    img.src = "filler_pic.jpg";
    img.classList.add('offset-md-4', 'col-2');
    img.setAttribute('alt', "Filler image of the website author");
    img.style.borderRadius = "20px";
    let par = document.createElement('p');
    par.classList.add('col-4', 'align-self-center');
    par.innerText = `I became interested in web development during college, but I've loved puzzles and technology for as long as I can remember.  
    Web technology is, to me, a giant puzzle that people all over the world interact with every day, and assembling the 
    pieces of that puzzle in ways that make it easy and fun for everyone to use is what I strive for.`;
    parentDiv.appendChild(img);
    parentDiv.appendChild(par);
    body.appendChild(parentDiv);
       
}

//Construct and display the Projects element
function displayProjects() {
    let clear = document.getElementById('top');
    if (clear){
        clear.remove();
    }
    let body = document.getElementById('bod');
    let parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', 'top');
    let head = document.createElement('h2');
    head.classList.add("text-center");
    
    for(let i = 0; i < links.length; i++){
        //Create row
        let row = document.createElement('div');
        row.setAttribute('id', `row${i}`);
        row.classList.add('row', 'my-5');
        //Create pic link
        let pic = document.createElement('a');

        pic.href =  `${pics[i]}` //`${pics[i]}`;

        pic.classList.add("col-1");
        
        //Create img
        let img = document.createElement('img');
        img.setAttribute('src', `${pics[i]}`);
        img.classList.add('img-fluid');
        pic.setAttribute('alt', `${alts[i]}`);

        //Create text
        let dsc = document.createElement('p');
        dsc.classList.add('col-md-2', 'align-self-center', 'text-white');
        dsc.innerText = `${text[i]}`;

        //Create link
        let link = document.createElement('a');
        link.href = `${links[i]}`;
        link.title = "Github";

        row.appendChild(pic);
        pic.appendChild(img);
        row.appendChild(dsc);
        row.appendChild(link);
        parentDiv.appendChild(row);
    }
    body.appendChild(parentDiv);
}

function displayExp() {
    let clear = document.getElementById('top');
    if (clear){
        clear.remove();
    }
    let body = document.getElementById('bod');
    let parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', 'top');
    let p = document.createElement('p');
    p.setAttribute('align', 'center');
    let resume = document.createElement('iframe');
    resume.setAttribute('src', "resume_current.pdf#toolbar=0");
    resume.style.height = "1500px";
    resume.style.width = "50%";
    p.appendChild(resume);
    parentDiv.appendChild(p);
    body.appendChild(parentDiv);

}

function displayContact() {
    let clear = document.getElementById('top');
    if (clear){
        clear.remove();
    }
    let body = document.getElementById('bod');
    let parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', 'top');
    body.appendChild(parentDiv);

    //Create container
    let container = document.createElement('container');
    container.classList.add('row', 'w-25', 'mt-4', 'mx-auto', 'rounded', 'justify-content-center');
    parentDiv.appendChild(container);

    //Create form div
    let form = document.createElement('form');
    form.classList.add('align-items-center',  'justify-content-center');
    container.appendChild(form);

    //Create form fields
    //Intro
    let introCon = document.createElement('div');
    introCon.classList.add('form-group', 'row', 'mb-3', 'w-75', 'offset-2');
    let intro = document.createElement('p');
    intro.classList.add('mt-3', 'mb-3', 'col-12');
    intro.innerText = `Whether you have a opportunity you would like to discuss, feedback on one of my projects, 
                        or you simply want to say hi, I'd love to hear from you!`;
    introCon.appendChild(intro);
    form.appendChild(introCon);

    //Name field
    let nameRow = document.createElement('div');
    nameRow.classList.add('form-group', 'row', 'mb-3', 'w-50', 'offset-2');
    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', "name");
    nameLabel.classList.add('form-label', 'col-sm-4', 'col-form-label-sm', 'line', 'offset-1',);
    nameLabel.innerText = "Your Name";
    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', "text");
    nameInput.classList.add('form-control', 'offset-1',);
    nameInput.setAttribute('id', "name");
    nameRow.appendChild(nameLabel);
    nameRow.appendChild(nameInput);
    form.appendChild(nameRow);

    //Email
    let emailRow = document.createElement('div');
    emailRow.classList.add('form-group', 'row', 'mb-3', 'w-50', 'offset-2');
    let emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', "email");
    emailLabel.classList.add('form-label', 'col-sm-4', 'col-form-label-sm', 'offset-1','line');
    emailLabel.innerText = "Your Email";
    let emailInput = document.createElement('input');
    emailInput.setAttribute('type', "email");
    emailInput.classList.add('form-control', 'offset-1',);
    emailInput.setAttribute('id', "email");
    emailRow.appendChild(emailLabel);
    emailRow.appendChild(emailInput);
    form.appendChild(emailRow);

    //Message
    let msgRow = document.createElement('div');
    msgRow.classList.add('form-group', 'row', 'mb-3', 'w-50', 'offset-2');
    let msgLabel = document.createElement('label');
    msgLabel.setAttribute('for', "message");
    msgLabel.classList.add('form-label', 'col-sm-4',  'col-form-label-sm', 'line', 'offset-1',);
    msgLabel.innerText = "Your Name";
    let msgInput = document.createElement('textarea');
    msgInput.setAttribute('id', "msgbody");
    msgInput.setAttribute('rows', "4");
    msgInput.classList.add('form-control', 'offset-1',);
    msgRow.appendChild(msgLabel);
    msgRow.appendChild(msgInput);
    form.appendChild(msgRow);

    //Submit and Reset buttons
    let btnRow = document.createElement('div');
    btnRow.classList.add('form-group', 'px-4', 'align-items-center', 'text-center');
    let submit = document.createElement('input');
    submit.classList.add('btn', 'btn-primary', 'btn-sm', 'px-4', 'col-sm-4', 'col-xs-4', 'col-md-4', 'ml-2', 'mr-2', 'mt-4', 'mb-3');
    submit.setAttribute('type', "submit");
    submit.innerText = "Submit";
    let reset = document.createElement('input');
    reset.classList.add('btn', 'btn-secondary', 'btn-sm', 'px-4', 'col-sm-4', 'col-xs-4', 'col-md-4', 'ml-2', 'mr-2', 'mt-4', 'mb-3');
    reset.setAttribute('type', "reset");
    reset.innerText = "Reset";
    btnRow.appendChild(submit);
    btnRow.appendChild(reset);
    form.appendChild(btnRow);

    
}

//Home called on page load
displayHome();


//Event listeners for pages
document.getElementById('home').addEventListener("click", function() {
    console.log('Calling Home');
    displayHome();
});

document.getElementById('about').addEventListener("click", function() {
    displayAbout();
 });

 document.getElementById('proj').addEventListener("click", function() {
    displayProjects();
 })

 document.getElementById('exp').addEventListener("click", function() {
     displayExp();
 })

 document.getElementById('con').addEventListener("click", function() {
     displayContact();
 })



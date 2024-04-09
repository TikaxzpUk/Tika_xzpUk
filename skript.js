



function hideElement2(buttonId, elementId) 
{
    let element = document.getElementById(elementId);
    let button = document.getElementById(buttonId);

    if (element.style.display == "none") {
       element.style.display = "block";
       button.style.transform="rotate(90deg)";
    } else {
        element.style.display = "none";
        button.style.transform="rotate(0deg)";
    }
}

function hideContents1() 
{
    let contentsList = document.getElementById("contents");
    let contentsButton = document.getElementById("hideContentsButton1");

    if (contentsButton.innerHTML == "hide") {
        contentsList.style.display = "none";
        contentsButton.innerHTML = "move to sidebar";
    } else {
        contentsList.style.display = "block";
        contentsButton.innerHTML = "hide";
    }
}

function hideShowDropDown()
{
 let contents = document.getElementById('contents_main');

 if (contents.className == ('hidden'))
 {
    contents.classList.remove('hidden');
    contents.classList.add('dropDown');
 }else {
    contents.classList.remove('dropDown');
    contents.classList.add('hidden');
 }

}

function changeContentPos()
{
 let parent; 
 let contents = document.getElementById('contents_main');
 let contentsButton = document.getElementById('hideContentsButton1');
 let contentsMenuButt = document.getElementById('buttonDropDown');
 if (contentsButton.innerHTML == 'hide') 
 {
    contentsMenuButt.style.display = 'inline-block';
    contents.classList.remove('contents');
    contents.classList.add('hidden');
    contentsButton.innerHTML = 'move to sidebar';
    parent = document.getElementById('dropWrapper');
    parent.append(contents);
 }
 
 else 
 {
    contentsMenuButt.style.display = 'none';
    contents.classList.remove('dropDown');
    contents.classList.add('contents');
    contentsButton.innerHTML = 'hide';
    parent = document.getElementById('contentsWrapper');
    parent.append(contents);
 }
 
}
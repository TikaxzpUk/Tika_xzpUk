/* function createContents()
{
    let allContents = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
    let topParent = document.getElementById('test-contents');
    AddList(topParent, allContents, 0);
}

function AddList(parent, allContents2, startPos)
{
    let list = document.createElement('ul');
    parent.append(list);

    for(let i = startPos; i < allContents2.length; i++)
    {
        if(i != startPos && allContents2[i].tagName > allContents2[startPos].tagName)
        {
            i = AddList(list, allContents2, i);
        }
        else if(i != startPos && allContents2[i].tagName < allContents2[startPos].tagName)
        {
            return (i - 1);
        }
        else if(allContents2[i].className != 'hide_from_contents')
        {
            AddListItem(allContents2[i], list);
        }
    }
}

function AddListItem(htmlElement, parent)
{
    let listItem = document.createElement('li');
    let link = document.createElement('a');

    link.href = '#' + htmlElement.id;
    link.innerHTML = htmlElement.innerHTML;

    listItem.append(link);
    parent.append(listItem);
} */



 /*  let data = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
    let allContents;
    let j = 0;
    for(let i = 0; i < data.length; i++) 
    {
        if(data[i].className != 'hide_from_contents')
        {
            allContents[j] = data[i];
            j++;
        }
    } */

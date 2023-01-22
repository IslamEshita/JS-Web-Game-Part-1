function newImage(imageSrc, left, bottom)
{
    let imageItem = document.createElement('img')
    imageItem.src = imageSrc
    imageItem.style.position = 'fixed'
    imageItem.style.left = left
    imageItem.style.bottom = bottom
    document.body.append(imageItem)

    return imageItem;
}

function newItem(imageSrc, left, bottom)
{
    let item = newImage(imageSrc, left, bottom)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

// Adding items
newItem('assets/sword.png', '500px', '405px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');




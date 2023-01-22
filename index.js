function newImage(imageSrc, left, bottom)
{
    let imageItem = document.createElement('img')
    imageItem.src = imageSrc
    imageItem.style.position = 'fixed'
    imageItem.style.left = left
    imageItem.style.bottom = bottom
    document.body.append(imageItem)
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');

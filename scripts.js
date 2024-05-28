console.log("Hello !");

const button = document.getElementById('buttonUpload');

button.addEventListener('click', uploadImage);

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".items");

function uploadImage() 
{
    const input = document.getElementById('uploadImage');
    const file = input.files[0];
  
    if (file) 
    {
      const reader = new FileReader();
  
      reader.onload = function(event) 
      {
        const imageUrl = event.target.result;
        const imageContainer = document.getElementById('All_items');
        const imgElement = document.createElement('img');
        imgElement.src = `${imageUrl}`;
        imgElement.alt = "Uploaded Image";
        imgElement.className = "draggable"

        imgElement.addEventListener('dragstart', () => {
            console.log("drag start")
            imgElement.classList.add('dragging')
        })

        imgElement.addEventListener("dragend", () => {
            imgElement.classList.remove('dragging')
        })

        containers.forEach(container => {
            container.addEventListener('dragover', e => {
                e.preventDefault()
                console.log('drag over')
                const draggable = document.querySelector('.dragging')
                container.appendChild(draggable)
            })
        })

        imageContainer.appendChild(imgElement);
      };
  
      reader.readAsDataURL(file);
    } 
    else 
    {
      alert('Please select an image to upload.');
    }
}
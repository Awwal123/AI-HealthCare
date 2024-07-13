document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const buttonContainer = document.getElementById('button-container');

    wrapper.addEventListener('click', function() {
        // Create the button if it doesn't already exist
        if (!document.getElementById('upload-button')) {
            const uploadButton = document.createElement('button');
            uploadButton.id = 'upload-button';
            uploadButton.innerText = 'Scan Your City';
            buttonContainer.appendChild(uploadButton);

            const uploadInput = document.createElement('input');
            uploadInput.type = 'file';
            uploadInput.id = 'upload-input';
            buttonContainer.appendChild(uploadInput);

            uploadButton.addEventListener('click', function() {
                uploadInput.click(); // Trigger the file input click event
            });

            uploadInput.addEventListener('change', function() {
                const file = uploadInput.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        let uploadedImage = document.querySelector('.uploaded-image');
                        if (!uploadedImage) {
                            uploadedImage = document.createElement('img');
                            uploadedImage.classList.add('uploaded-image');
                        }
                        uploadedImage.src = e.target.result;

                        // Append the image to the bottom of the wrapper div
                        wrapper.appendChild(uploadedImage);

                        // Hide the text when image is uploaded
                        const imageText = document.getElementById('imageText');
                        if (imageText) {
                            imageText.style.display = 'none';
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });

            uploadButton.style.display = 'block'; // Show the button
        }
    });
});

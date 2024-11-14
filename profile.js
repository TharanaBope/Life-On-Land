document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progress-bar');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const submitBtn = document.getElementById('submit-btn');
    const steps = document.querySelectorAll('fieldset');
    const outputText = document.getElementById('output-text');
    const generateOutputBtn = document.getElementById('generate-output-btn');
  
    let currentStep = 0;
    const totalSteps = steps.length;
  
    updateProgress();
  
    // Add click next buttons
    nextBtns.forEach(btn => {
      btn.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (currentStep < totalSteps - 1) {
          steps[currentStep].style.display = 'none';
          currentStep++;
          steps[currentStep].style.display = 'block';
          updateProgress();
        }
      });
    });
  
    // Add click previous buttons
    prevBtns.forEach(btn => {
      btn.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (currentStep > 0) {
          steps[currentStep].style.display = 'none';
          currentStep--;
          steps[currentStep].style.display = 'block';
          updateProgress();
        }
      });
    });
  

    // Function to update the progress bar
    function updateProgress() {
      const progressValue = ((currentStep + 1) / totalSteps) * 100;
      progressBar.style.width = progressValue + '%';
      progressBar.innerHTML = progressValue + '%';
    }
  
    // submission
    const form = document.getElementById('profile-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      generateOutput(); 
    });
  
    generateOutputBtn.addEventListener('click', function() {
        generateOutput();
      });
   
    // Function to generate output
  function generateOutput() {
    const outputContainer = document.getElementById('output-container');
    outputContainer.innerHTML = `<h3>Generating Output...</h3>`;
    outputContainer.style.display = 'block'; 
  
    setTimeout(() => {
      const fullName = document.getElementById('full_name').value;
      const dob = document.getElementById('dob').value;
      const gender = document.getElementById('gender').value;
      const email = document.getElementById('email').value;
      const profilePicture = document.getElementById('profile-picture').files[0]?.name || 'Not provided';
      const availability = document.getElementById('availability').value;
      const interest = document.getElementById('interest').value;
      const preference = Array.from(document.querySelectorAll('input[name="preference"]:checked')).map(input => input.value).join(', ') || 'Not provided';
      const incase = document.getElementById('incase').value;
      const docs = document.getElementById('docs').value;
      const comments = document.getElementById('comments').value;
      const language = document.getElementById('language').value;
  
        // Display the generated output
      outputContainer.innerHTML = `
        <h3>Generated Output:</h3>
        <ul>
          <li><b>Full Name:          </b> ${fullName}</li>
          <li><b>Date of Birth:      </b> ${dob}</li>
          <li><b>Gender:             </b> ${gender}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Profile Picture:</b> ${profilePicture}</li>
          <li><b>Current Education Level:</b> ${availability}</li>
          <li><b>School/College/University:</b> ${interest}</li>
          <li><b>Subjects of Interest:</b> ${preference}</li>
          <li><b>Preferred Learning Style:</b> ${incase}</li>
          <li><b>Study Time Availability:</b> ${docs}</li>
          <li><b>Preferred Learning Subjects:</b> ${comments}</li>
          <li><b>Preferred Learning Pace:</b> ${language}</li>
        </ul>
      `;
    }, 1000);
  }
  });
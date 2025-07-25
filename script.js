function searchHospital() {
  const value = document.querySelector('.search-input').value;
  alert("You searched for: " + value);
}

function openTab(tab) {
  // Hide all sections
  document.querySelectorAll('.tab-section').forEach(section => {
    section.style.display = 'none';
  });

  // Show selected
  document.getElementById(`${tab}-section`).style.display = 'block';
}

// ------------------------
// LABS
// ------------------------
function showTestSuggestions() {
  const suggestions = [
    "Blood Test", "Urine Test", "X-Ray", "Sugar Test", "COVID RT-PCR", "MRI Scan"
  ];
  const container = document.getElementById('test-suggestions');
  container.innerHTML = suggestions.map(test => `<div class="chip">${test}</div>`).join('');
}

// ------------------------
// MEDICINES
// ------------------------
function findMedicine() {
  const input = document.getElementById('medicine-type').value.toLowerCase();
  const output = document.getElementById('medicine-result');

  // Placeholder logic for now
  if (input.includes("fever")) {
    output.innerHTML = `
      <p><strong>Branded:</strong> Crocin 650</p>
      <p><strong>Generic:</strong> Paracetamol 650</p>
    `;
  } else if (input.includes("cold")) {
    output.innerHTML = `
      <p><strong>Branded:</strong> D-Cold Total</p>
      <p><strong>Generic:</strong> Cetirizine + Paracetamol</p>
    `;
  } else {
    output.innerHTML = `<p>We'll soon add AI assistant to help you better with this!</p>`;
  }
}

// ------------------------
// VACCINES
// ------------------------
function recommendVaccines() {
  const age = parseInt(document.getElementById('age').value);
  const result = document.getElementById('vaccine-result');

  if (!age || age <= 0) {
    result.innerHTML = "<p style='color:red;'>Please enter a valid age.</p>";
    return;
  }

  let suggestions = '';
  if (age <= 12) {
    suggestions = 'Polio, Hepatitis B, MMR';
  } else if (age <= 18) {
    suggestions = 'HPV, Tdap Booster, Influenza';
  } else if (age <= 60) {
    suggestions = 'COVID Booster, Hepatitis B, Typhoid';
  } else {
    suggestions = 'Shingles, Pneumococcal, COVID Booster';
  }

  result.innerHTML = `<p>Recommended vaccines for age ${age}:<br><strong>${suggestions}</strong></p>`;
}

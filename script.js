function showCongratulations() {
    // 1. Hide the flashcard game elements
    document.querySelector('.flashcard').style.display = 'none';
    document.querySelector('.options-grid').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    
    // 2. Calculate the percentage
    const totalCards = vocabularyPool.length;
    const percentage = Math.round((score / totalCards) * 100);
    
    // 3. Inject the basic score stats (Shows for everyone!)
    document.getElementById('final-score').textContent = score; 
    document.getElementById('total-cards').textContent = totalCards;
    document.getElementById('final-percentage').textContent = percentage;
    
    // 4. Check if they scored MORE than 75%
    const heading = document.getElementById('concap-heading');
    const subtitle = document.getElementById('concap-subtitle');
    const feedbackText = document.getElementById('concap-feedback-text');
    
    if (percentage > 75) {
        // High score celebration layout
        heading.textContent = "🎉 Congratulations!";
        heading.className = "correct"; // Green theme color
        subtitle.textContent = "You completely smashed it!";
        feedbackText.textContent = "Incredible work! You have officially mastered this deck.";
    } else {
        // Fallback display if they got 75% or less
        heading.textContent = "👍 Good Effort!";
        heading.className = "incorrect"; // Red/Orange theme color to indicate room to grow
        subtitle.textContent = "You finished the deck!";
        feedbackText.textContent = "Review your answers and try again to shoot for that 75% score benchmark!";
    }
    
    // 5. Reveal the screen
    document.getElementById('congratulations-screen').style.display = 'block';
}
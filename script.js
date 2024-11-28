const confessionText = document.getElementById('confession');
const revealButton = document.getElementById('reveal');

revealButton.addEventListener('click', () => {
  confessionText.style.display = 'block';
  revealButton.style.display = 'none'; // Hide the button after reveal.

  //You'll need to replace this with your actual confession.
  confessionText.textContent = "As an IT student ako ni gi gamit ako skills awh HAHAAHAHAHAHAHA btaw, I really like you from the beginning palang nagwapahan nako nmo but ako lng gi keep secret HAHAHAAHAHAHAH and yeah I know bff kayta but🥹 sorry sorry HAHAHAAHAHAHAHAH. Anyways don't pressure yourself sa acads ha and remember always take a break and enjoy pd ginagmay dli mag problema always:>.";
});

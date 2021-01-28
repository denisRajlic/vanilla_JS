function showProgress(e) {
  let startDate = new Date(document.querySelector('#inputDate').value);  
  if (startDate == null || startDate == NaN) startDate = new Date();
  let daysBetween = Math.floor(Math.abs(new Date() - startDate) / (1000*60*60*24));

  let workoutDays = document.querySelector('#workoutDays').value;
  if (workoutDays < 0 || workoutDays == "" || workoutDays == null) workoutDays = 0;
  else if (workoutDays >= daysBetween) workoutDays = daysBetween;

  let percentage = 0;
  try { 
    percentage = Math.floor(parseInt(workoutDays) / parseInt(daysBetween) * 100);
  } catch(e) {
    percentage = 0;
  }

  if (percentage >= 100) {
    percentage = 100;
  } else if (percentage < 0 || percentage == null || percentage == NaN) {
    percentage = 0;
  }

  if (percentage < 50) {
    document.querySelector('.circle').style.backgroundColor = 'red';    
  } else if (percentage >= 50 && percentage < 80) document.querySelector('.circle').style.backgroundColor = 'orange';
  else if (percentage >= 80 && percentage <= 100) document.querySelector('.circle').style.backgroundColor = '#228B22';

  document.querySelector('.circle').innerHTML = percentage.toString() + '%';
  // Get progress bar
  document.querySelector('.thinProgressBar').style.width = percentage.toString() + '%';

} 

document.querySelector('#workoutDays').addEventListener('input', showProgress);
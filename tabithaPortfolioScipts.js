const headers = ['home','projects'];
function atClick(id){
  let c_id = '';
  for (let i = headers.length - 1; i >= 0; i--) {
    c_id = document.getElementById(headers[i]);
    if (c_id === null) {
        continue;
    } else {
        if ((headers[i] !== id) && (id !== 'projects')){
            c_id.style.display = 'none'
            document.getElementsByName(headers[i])[0].classList.remove('active');
        } else if ((headers[i] !== id) && (id !== 'home')) {
            c_id.style.display = 'none';
            document.getElementsByName(headers[i])[0].classList.remove('active');
        } else if ((headers[i] === id) && (id === 'home')) {
            c_id.style.display = 'grid';
            document.getElementsByName(headers[i])[0].classList.add('active');
        } else {
            c_id.style.display = 'grid';
            document.getElementsByName(headers[i])[0].classList.add('active');
        }
    }
  }
}
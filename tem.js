const changeDeg = () =>{
    const fv = document.getElementById('fd').value;

   

    let newcv = (fv - 32) * 5/9;

    console.log(newcv);

    document.getElementById('cd').value = newcv+"* cel";
  }
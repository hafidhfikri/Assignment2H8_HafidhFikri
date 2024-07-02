function TampilkanData(event){
    event.preventDefault();

    const name = document.getElementById("nama").value;
    const role = document.getElementById("role").value;
    const avail = document.getElementById("availability").value;
    const age = document.getElementById("usia").value;
    const location = document.getElementById("lokasi").value;
    const experience = document.getElementById("years_exp").value;
    const email = document.getElementById("email").value;

    document.getElementById("display_name").textContent = name;
    document.getElementById("display_role").textContent = role;
    document.getElementById("display_avail").textContent = avail;
    document.getElementById("display_age").textContent = age + ' Tahun';
    document.getElementById("display_lokasi").textContent = location;
    document.getElementById("display_exp").textContent = experience + ' Tahun';
    document.getElementById("display_email").textContent = email;
}
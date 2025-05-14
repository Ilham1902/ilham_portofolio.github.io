function hitungUmur(tanggalLahir) {
    const today = new Date();
    const birthDate = new Date(tanggalLahir);

    let umur = today.getFullYear() - birthDate.getFullYear();
    const bulan = today.getMonth() - birthDate.getMonth();

    if (bulan < 0 || (bulan === 0 && today.getDate() < birthDate.getDate())) {
        umur--;
    }

    return umur;
}

$(document).ready(function () {
    const umur = hitungUmur("2000-10-10");
    $("#age").html(umur + " years old")
})

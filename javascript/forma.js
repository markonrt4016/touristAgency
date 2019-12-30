
// naziv funkcije koja se poziva iz HTML-a na liniji 68 onsubmit dogadjaj (korisnikova potvrda unetih podataka)
function provera() {


// uzimanje upisanih podataka od strane korisnika

	var uzorak_ime = document.forma.ime.value;
	var uzorak_prezime = document.forma.prezime.value;
	var uzorak_telefon = document.forma.telefon.value;
	var uzorak_mail = document.forma.mail.value;
	var uzorak_brosoba = document.forma.brosoba.value;
	var uzorak_datum = document.forma.datum.value;
	var uzorak_destinacija=document.forma.destinacija.value;
// provera da li su polja popunjena, ukoliko nisu korisnik dobija upozorenje, ukoliko jesu uspesno se submituje forma

	if (uzorak_ime === "" || uzorak_ime === null) {
		alert("Niste uneli ime!");
		return false;
	} else if(uzorak_prezime === "" || uzorak_prezime=== null) {
		alert("Niste uneli prezime!");
		return false;
	} else if (uzorak_telefon === "" || uzorak_telefon === null) {
		alert("Niste uneli telefon!");
		return false;
	} else if (uzorak_mail === "" || uzorak_mail === null) {
		alert("Niste uneli e-mail!")
		return false;
	} else if (uzorak_brosoba === "" || uzorak_brosoba === null) {
		alert("Niste uneli broj osoba!");
		return false;
	} else if (uzorak_datum === "" || uzorak_datum === null) {
		alert("Niste uneli datum!");
		return false;
	} else if (uzorak_destinacija === "" || uzorak_destinacija === null) {
		alert("Niste uneli destinaciju!");
		return false;
	} else {
		alert("Uspesno ste poslali formu!");
		return true;
	}
}

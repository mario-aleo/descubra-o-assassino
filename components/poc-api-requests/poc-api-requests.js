const webApi = "https://handson.eniwine.com.br/api/descubraoassassino";



const getKey = () => fetch(webApi, {
	method: "GET",
	headers: {
		"Accept": "application/json, application/xml, text/plain, text/html, *.*",
		"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
	}
}).then(response => {
	if (response.status != 200)
		throw new Error(`Server Status ${ response.status }`);
	return response.json();
}).then(reponseJson =>  JSON.parse(reponseJson))
.catch(e => console.error(e));



const getAssassinos = () => fetch(`${webApi}/criminosos`, {
    method: "GET",
    headers: {
        "Accept": "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
}).then(response => {
    if (response.status != 200)
        throw new Error(`Server Status ${ response.status }`);
    return response.json();
}).then(reponseJson =>  JSON.parse(reponseJson))
.catch(e => console.error(e));



const getLocais = () => fetch(`${webApi}/locais`, {
    method: "GET",
    headers: {
        "Accept": "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
}).then(response => {
    if (response.status != 200)
        throw new Error(`Server Status ${ response.status }`);
    return response.json();
}).then(reponseJson => JSON.parse(reponseJson))
.catch(e => console.error(e));



const getArmas = () => fetch(`${webApi}/armas`, {
    method: "GET",
    headers: {
        "Accept": "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
}).then(response => {
    if (response.status != 200)
        throw new Error(`Server Status ${ response.status }`);
    return response.json();
}).then(reponseJson => JSON.parse(reponseJson))
.catch(e => console.error(e));



const enviarTeoria = (idMisterio, assassino, local, arma) => fetch(`${webApi}`, {
    method: "POST",
    headers: {
        "Accept": "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/json;charset=UTF-8"
	},
	body: JSON.stringify({
		idMisterio: idMisterio,
		IdSuspeito: assassino,
		IdLocal: local,
		IdArma: arma
	})
}).then(response => {
    if (response.status != 200)
        throw new Error(`Server Status ${ response.status }`);
    return response.json();
}).then(reponseJson => JSON.parse(reponseJson))
.catch(e => console.error(e));



const enviar = () => enviarTeoria(
	window.key,
	window.assassinos[0].Id,
	window.locais[0].Id,
	window.armas[0].Id
).then(response => console.log(response));
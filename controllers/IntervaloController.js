//faz split no array para retornar numeros sequenciais
const getGrupos = (arrNumeros) => arrNumeros.reduce((arr, val, i, arrNumeros) => {
  let intVal = parseInt(val);
  if (!isNaN(intVal)) {
    if (!i || intVal !== parseInt(arrNumeros[i - 1]) + 1)
      arr.push([]);
    arr[arr.length - 1].push(intVal);
    return arr;
  }
}, []);

const getIntervalos = (numeros) => {
  let arrNumeros = numeros.split(',');
  let grupos = getGrupos(arrNumeros);

  if (grupos) {
    let resultado = grupos.map(grupo => {
      if (grupo.length === 1) {
        return `[${grupo[0]}]`;
      }
      return `[${grupo[0]}-${grupo[grupo.length - 1]}]`;
    }).join(",");
    return resultado;
  }
  return null;
}
module.exports = { getGrupos, getIntervalos };
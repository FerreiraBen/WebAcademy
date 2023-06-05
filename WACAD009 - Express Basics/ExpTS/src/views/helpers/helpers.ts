import { Prof, Tecnologia } from './helpersTypes';

export function listaProf(profs: Prof[]) {
  const lista = profs.map((p) => `<li>${p.nome} ${p.sala}</li>`).join('\n');

  return `<ul>${lista}<ul>`;
}

export function listaTecnologias(techs: Tecnologia[]) {
  const lista = techs
    // A MAGIA DO TERNÁRIO ? :
    .map((p) => (p.poweredByNodejs ? `<li>${p.name} - ${p.type}</li>` : ''))
    .join('\n');

  return `<ul>${lista}<ul>`;
}

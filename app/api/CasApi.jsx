let seedData = [
    { id: 1, nom: 'Kane', prenom: 'Fatou', type: 'Divorce', cas: 'Procédure de divorce', description: 'Mme est en instance de divorce et demande des informations sur le processus de divorce', createdBy: { nom: 'Dieng', prenom: 'Anta' }, etat: 'En cours' },
    { id: 2, nom: 'Niang', prenom: 'Astou', type: 'Divorce', cas: 'Procédure de divorce', description: 'Mme est en instance de divorce et demande des informations sur le processus de divorce', createdBy: { nom: 'Dieng', prenom: 'Anta' }, etat: 'En cours' },
    { id: 3, nom: 'Diallo', prenom: 'Aminata', type: 'Divorce', cas: 'Procédure de divorce', description: 'Mme est en instance de divorce et demande des informations sur le processus de divorce', createdBy: { nom: 'Dieng', prenom: 'Anta' }, etat: 'En cours' },
    { id: 4, nom: 'Ndiaye', prenom: 'Kiné', type: 'Divorce', cas: 'Procédure de divorce', description: 'Mme est en instance de divorce et demande des informations sur le processus de divorce', createdBy: { nom: 'Dieng', prenom: 'Anta' }, etat: 'En cours' }
];

var getAllCas = () => {
    return seedData;

};

var addNewCas = (cas) => {
    let newCas = { ...cas }
    console.log('API');
    console.log(newCas);
    seedData.push(newCas);
};

module.exports = {
    getAllCas,
    addNewCas
};
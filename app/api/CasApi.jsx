var getAllCas = () => {
    let results = [
        { id: 1, nom: 'Kane', prenom: 'Fatou', type: 'Divorce', createdBy: { nom: 'Dieng', prenom: 'Anta' }, etat: 'En cours' },
        { id: 2, nom: 'Niang', prenom: 'Astou', type: 'Divorce', createdBy: { nom: 'Dieng', prenom: 'Anta' }, etat: 'En cours' },
        { id: 3, nom: 'Diallo', prenom: 'Aminata', type: 'Divorce', createdBy: { nom: 'Dieng', prenom: 'Anta' }, etat: 'En cours' },
        { id: 4, nom: 'Ndiaye', prenom: 'Kiné', type: 'Divorce', createdBy: { nom: 'Dieng', prenom: 'Anta' }, etat: 'En cours' }
    ];
    return results;

};

module.exports = {
    getAllCas
};
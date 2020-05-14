import { getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementListFromApiToVM } from './movements.mappers'

getMovementsList().then(movementList => {
    console.log(movementList);
    const viewModelMovementList = mapMovementListFromApiToVM(movementList);
    addMovementRows(viewModelMovementList);



});
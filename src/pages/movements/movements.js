import { getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementListFromApiToVM } from './movements.mappers'
import { history } from '../../core/router';

const params = history.getParams();
console.log(params);

getMovementsList().then(movementList => {
    console.log(movementList);
    const viewModelMovementList = mapMovementListFromApiToVM(movementList, params.id);
    addMovementRows(viewModelMovementList);
});
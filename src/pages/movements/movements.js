import { getMovementsList } from './movements.api';
import { getAccount } from '../account/account.api'
import { addMovementRows } from './movements.helpers';
import { mapMovementListFromApiToVM } from './movements.mappers'
import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers';
import { mapAccountFromApiToVM, mapAccountFromVMToApi } from '../account/account.mappers';

const params = history.getParams();

getAccount(params.id).then(apiAccount => {
    const account = mapAccountFromApiToVM(apiAccount);
    onSetValues(account);
});




getMovementsList().then(movementList => {
    const viewModelMovementList = mapMovementListFromApiToVM(movementList, params.id);
    addMovementRows(viewModelMovementList);
});
import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToVM } from './account-list-mappers';


getAccountList().then(accountList => {
    addAccountRows(mapAccountListFromApiToVM(accountList));
});


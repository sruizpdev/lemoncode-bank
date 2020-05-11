import { onUpdateField, onSubmitForm } from '../../common/helpers'
let login = {
    user: '',
    password: ''
};

onUpdateField('user', (event) => {
    const value = event.target.value;
    login = {
        ...login,
        user: value
    };
});
onUpdateField('password', (event) => {
    const value = event.target.value;
    login = {
        ...login,
        password: value
    };
});
onSubmitForm('login-button', () => {
    console.log(login);

})



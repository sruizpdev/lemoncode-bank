import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationShema = {
    field: {
        iban: [Validators.required],
        name: [Validators.required],
        amount: [Validators.required],
        concept: [Validators.required],
        notes: [Validators.required],
        day: [Validators.required],
        month: [Validators.required],
        year: [Validators.required],
        email: [Validators.required, Validators.email],

    }
};

export const formValidation = createFormValidation(validationShema);
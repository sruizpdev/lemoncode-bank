export const mapMovementListFromApiToVM = movementList => movementList.map(movement => mapMovementFromApiToVM(movement));


const mapMovementFromApiToVM = movementList => {
    return {
        id: movementList.id,
        iban: movementList.iban,
        name: movementList.name,
        description: movementList.description,
        realTransaction: new Date(movementList.realTransaction).toLocaleDateString(),
        transaction: new Date(movementList.transaction).toLocaleDateString(),
        balance: `${movementList.balance} €`,
        amount: `${movementList.amount} €`

    }
}
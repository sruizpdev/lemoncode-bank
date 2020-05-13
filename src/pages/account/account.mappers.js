export const mapAccountFromApiToVM = account => {
    return {
        id: account.id,
        type: account.type,
        alias: account.name
    }
}

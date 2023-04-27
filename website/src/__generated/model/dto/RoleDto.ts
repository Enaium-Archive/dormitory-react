export type RoleDto = {
    'DEFAULT': {
        readonly id: number, 
        readonly name: string, 
        readonly menus: ReadonlyArray<{readonly id: number}>
    }
}
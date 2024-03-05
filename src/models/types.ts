export interface AxiosOptions {
    baseUrl?: string
    token?: string
}

export interface Usuario {
    idUsuario: number,
    idDistrito: number,
    nombre: string,
    tipoUsuario: number,
    estado: number | null,
    jwt: string
}

export interface SubMenu {
    subId: number,
    subnombre: string,
    subLink: string,
    icon: string
}

export interface Menu {
    id: number,
    nombre: string,
    icon: string,
    link: string,
    submenu:  object | null,
    subnombre: string | null
    
}

export interface Response {
    status: number,
    data: {
        ok: boolean,
        msg: string,
        datosSQLite?: string
    },
    response:{
        status: number,
        data: {
            ok: boolean,
            msg: string,
        },
    }
}

export interface tablasMSQL{
    id: number,
    nombreTabla: string,
    descipcion: string
}
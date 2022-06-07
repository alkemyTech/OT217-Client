
import { MembersActions, MembersActionTypes } from '../actions/membersActions';


export interface IMembers {
    name: string;
    id: number;
    description: string;
    urlFacebook: string;
    urlLinkedin: string;
    isLoading: boolean;
    data: any[];
    message: string;
}

const initialState: IMembers = {
    data: [],
    isLoading: false,
    name: '',
    id: 0,
    description: '',
    urlFacebook: '',
    urlLinkedin: '',
    message: ''

};

export function reducer(state = initialState, action: MembersActions): IMembers {

    switch (action.type) {
        case MembersActionTypes.GetMembersLoad: {
            return {
                ...state,
                isLoading: true
            }
        }

        case MembersActionTypes.GetMembersSuccess: {
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                message: 'Datos obtenidos satisfactoriamente!'
            }
        }
        case MembersActionTypes.GetMembersFail: {
            return {
                data: [],
                isLoading: false,
                message: 'Error al obtener los datos!',
                name: '',
                id: 0,
                description: '',
                urlFacebook: '',
                urlLinkedin: '',
            }
        }
        case MembersActionTypes.DeleteMembers: {
            return {
                ...state,
                isLoading: true
            }
        }
        case MembersActionTypes.DeleteMembersSuccess: {
            const updatedData = [...state['data']];
            updatedData.push(action.payload);
            return {
                ...state,
                data: updatedData,
                isLoading: false,
                message: 'Datos borrados satisfactoriamente!'
            }
        }
        case MembersActionTypes.DeleteMembersFail: {
            return {
                data: [],
                isLoading: false,
                message: 'Algo salió mal!',
                name: '',
                id: 0,
                description: '',
                urlFacebook: '',
                urlLinkedin: ''
            }
        }
        case MembersActionTypes.PostMembers: {
            return {
                ...state,
                isLoading: true
            }
        }

        case MembersActionTypes.PostMembersSuccess: {
            const updatedData = [...state['data']];
            updatedData.push(action.payload);
            return {
                ...state,
                data: updatedData,
                isLoading: false,
                message: 'Datos enviados satisfactoriamente!'
            }
        }
        case MembersActionTypes.PostMembersFail: {
            return {
                data: [],
                isLoading: false,
                message: 'Algo salió mal!',
                name: '',
                id: 0,
                description: '',
                urlFacebook: '',
                urlLinkedin: ''
            }
        }
        default:
            return state;
    }
}
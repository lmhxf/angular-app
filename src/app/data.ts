import { InMemoryDbService} from 'angular-in-memory-web-api';

export class Data {
    createDb() {
        const heroes = [
            {id: 0, name: "lmh"},
            {id: 1, name: "zf"},
            {id: 2, name: "lxh"},
            {id: 3, name: "gsm"},
            {id: 4, name: "zyc"},
            {id: 5, name: "wky"},
            {id: 6, name: "wkd"},
            {id: 7, name: "lmf"},
            {id: 8, name: "ljs"},
            {id: 9, name: "lmn"},
            {id: 10, name: "lcy"},
        ];
        return {heroes};
    }
}
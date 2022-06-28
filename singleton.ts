interface User {
    name: string;
    age: number;
}

export class Singleton {
    private static _instance: Singleton | null = null;
    private users: User[] = []

    private constructor() {

    }

    static get instance(): Singleton {
        if (Singleton._instance === null) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }

    add(user: User): void {
        this.users.push(user)
    }

    show(): void {
        for (const user of this.users) {
            console.log(user);
            
        }
    }


}

const test1 = Singleton.instance;
test1.add({name: 'Luiz', age: 30})
test1.add({name: 'Marcos', age: 35})
test1.add({name: 'Karla', age: 54})
test1.show()




const test2 = Singleton.instance;
test2.add({name: 'Alice', age: 20})
test2.add({name: 'Marcio', age: 45})
test2.add({name: 'JOse', age: 38})
test2.show()

console.log(test1 === test2)